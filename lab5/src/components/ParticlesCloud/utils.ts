import * as THREE from 'three'

//@ts-ignore
const fragmentShader = glsl`
  // #pragma glslify: pnoise = require('glsl-noise/classic/3d');
  varying vec2 vUv;
  varying float noise;
  varying vec3 pos;
  uniform float time;
  uniform sampler2D texture;

  void main() {

    // compose the colour using the UV coordinate
    // and modulate it with the noise like ambient occlusion
    // vec3 color = vec3( vUv * ( 1. - 1.5 * noise ), 1.0 );
    // gl_FragColor = vec4( color.rgb, 1.0 );

    vec3 foo = vec3(1. - 2.0 * noise);

    // gl_FragColor = vec4( foo, 1.0 );
    // gl_FragColor = vec4( foo, 1.0 ) * texture2D( texture, vec2(pos.x, pos.y) );
    // gl_FragColor = vec4( foo, 1.0 ) * texture2D( texture, vec2(vUv.x, vUv.y / 2.0) );
    gl_FragColor = vec4( foo, 1.0 ) * texture2D( texture, gl_PointCoord );

    if ( gl_FragColor.a < ALPHATEST ) discard;
  }
`

//@ts-ignore
const vertexShader = glsl`
  #pragma glslify: pnoise = require('glsl-noise/periodic/3d');

  uniform float time;

  varying vec2 vUv;
  varying vec3 pos;
  varying float noise;

  attribute float size;

  float fac = 10.0;

  float turbulence( vec3 p ) {

    // float w = 100.0;
    float t = -.5;

    for (float f = 1.0 ; f <= 1.0 ; f++ ) {
      float power = pow( 2.0, f );
      t += abs(
        pnoise(
          vec3( power * p ),
          vec3( fac, fac, fac )
        ) / power
      );
    }
    return t;
  }

  void main() {
    vUv = uv * 200.0;

    // get a turbulent 3d noise using the normal, normal to high freq
    noise = 10.0 *  -.10 * turbulence( .5 * normalize(position) + time );

    // get a 3d noise using the position, low frequency
    float b = 5.0 * pnoise( 0.05 * position, vec3( 100.0 ) );
    // compose both noises
    float displacement = (- 10. * noise) + b;

    // move the position along the normal and transform it
    vec3 newPosition = position + (normalize(position) * displacement);
    pos = newPosition;

    vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );
    gl_PointSize = size * (300. / -mvPosition.z);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`

const CircleTexture = ({
	resolution = 64,
	radius = 32,
	color = '#ffffff',
}): HTMLCanvasElement => {
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')
	canvas.height = resolution
	canvas.width = resolution

	const x = resolution / 2
	const y = resolution / 2
	const startAngle = 0
	const endAngle = Math.PI * 2

	ctx!.fillStyle = color

	ctx!.arc(x, y, radius, startAngle, endAngle)
	ctx!.fill()

	return canvas
}

const createRenderer = (container: HTMLDivElement): THREE.WebGLRenderer => {
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
	const w = container.offsetWidth
	const h = container.offsetHeight
	renderer.setSize(w, h)
	renderer.setPixelRatio(window.devicePixelRatio)
	container.appendChild(renderer.domElement)
	return renderer
}

const createScene = (): THREE.Scene => {
	return new THREE.Scene()
}

const createCamera = (
	scene: THREE.Scene,
	container: HTMLElement
): THREE.PerspectiveCamera => {
	const camera = new THREE.PerspectiveCamera(
		32,
		container.offsetWidth / container.offsetHeight,
		1,
		10000
	)
	camera.position.set(75, 0, 0)
	camera.lookAt(scene.position)
	return camera
}

const createSphere = (): THREE.Points => {
	const PARTICLE_SIZE = 1
	const textureAttr = {
		resolution: 64,
		radius: 32,
		color: '#ffffff',
	}

	const geo = new THREE.IcosahedronGeometry(20, 5)
	//@ts-ignore
	const vertices = geo.vertices
	const positions = new Float32Array(vertices.length * 3)
	const sizes = new Float32Array(vertices.length)

	//@ts-ignore
	vertices.forEach((vert, i) => {
		vert.toArray(positions as unknown as number[], i * 3)
		sizes[i] = PARTICLE_SIZE
	})

	const bufferGeo = new THREE.BufferGeometry()
	bufferGeo.addAttribute('position', new THREE.BufferAttribute(positions, 3))
	bufferGeo.addAttribute('size', new THREE.BufferAttribute(sizes, 1))

	const material = new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 0.0 },
			texture: { value: new THREE.CanvasTexture(CircleTexture(textureAttr)) },
			resolution: { value: new THREE.Vector2() },
		},
		fragmentShader,
		vertexShader,
		transparent: true,
		alphaTest: 0.9,
	})

	material.uniforms.texture.value.wrapS = THREE.RepeatWrapping
	material.uniforms.texture.value.wrapT = THREE.RepeatWrapping

	const testMaterial = {
		uniforms: {
			time: { value: 0.0 },
			texture: { value: new THREE.CanvasTexture(CircleTexture(textureAttr)) },
			resolution: { value: new THREE.Vector2() },
		},
		fragmentShader,
		vertexShader,
		transparent: true,
		alphaTest: 0.9,
	}
	testMaterial.uniforms.texture.value.wrapS = THREE.RepeatWrapping
	testMaterial.uniforms.texture.value.wrapT = THREE.RepeatWrapping

	const sphere = new THREE.Points(bufferGeo, material)
	sphere.rotation.set(0, Math.PI, 0)
	return sphere
}

export { createScene, createCamera, createRenderer, createSphere }

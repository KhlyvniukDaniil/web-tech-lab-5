import { useEffect, useRef }                                        from 'react'
import * as THREE                                                   from 'three'
import { StyledCanvasContainer }                                    from 'components/ParticlesCloud/styles'
import { createCamera, createRenderer, createScene, createSphere, } from 'components/ParticlesCloud/utils'


const ParticlesCloud = () => {
	const canvasContainer = useRef<HTMLDivElement>(null)
	const requestAnimationRef = useRef<number>()

	const newParam: ({
		renderer,
		scene,
		camera,
		time
	}: { renderer: THREE.WebGLRenderer; scene: THREE.Scene; camera: THREE.Camera; time: any }) => void = ({
		renderer,
		scene,
		camera,
		time,
	}: {
		renderer: THREE.WebGLRenderer;
		scene: THREE.Scene;
		camera: THREE.Camera;
		time: any;
	}): void => {
		time.value += 0.0025
		requestAnimationRef.current = requestAnimationFrame(() =>
			rendererLoop({ renderer, scene, camera, time })
		)
		renderer.render(scene, camera)
	}, rendererLoop = newParam

	useEffect(() => {
		const renderer = createRenderer(canvasContainer.current as HTMLDivElement)
		const scene = createScene()
		const camera = createCamera(scene, canvasContainer.current!)
		const sphere = createSphere()

		scene.add(camera)
		scene.add(sphere)

		renderer.render(scene, camera)

		const resizeListener = () => {
			renderer.setSize(
				canvasContainer.current!.offsetWidth,
				canvasContainer.current!.offsetHeight
			)
			camera.aspect =
				canvasContainer.current!.offsetWidth /
				canvasContainer.current!.offsetHeight
			camera.updateProjectionMatrix()
		}
		window.addEventListener('resize', resizeListener)

		rendererLoop({
			renderer,
			scene,
			camera,
			//@ts-ignore
			time: sphere.material.uniforms.time,
		})

		return () => {
			cancelAnimationFrame(requestAnimationRef.current as number)
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	return <StyledCanvasContainer ref={ canvasContainer }/>
}

export default ParticlesCloud

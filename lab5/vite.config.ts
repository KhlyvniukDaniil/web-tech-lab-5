import react            from '@vitejs/plugin-react'
import path             from 'path'
import { defineConfig } from 'vite'
import reactSvg         from 'vite-plugin-react-svg'
import svgr             from 'vite-plugin-svgr'
import tsconfigPaths    from 'vite-tsconfig-paths'


export default defineConfig({
	plugins: [ react(), svgr(), tsconfigPaths(), reactSvg() ],
	resolve: {
		alias: {
			process: 'process/browser',
			stream: 'stream-browserify',
			zlib: 'browserify-zlib',
			util: 'util'
		}
	},
	build: {
		outDir: './build',
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html')
			}
		}
	}
})

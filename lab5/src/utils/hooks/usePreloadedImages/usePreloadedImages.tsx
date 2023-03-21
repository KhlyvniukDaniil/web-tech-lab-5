import { useCallback, useEffect, useState } from 'react'
import Worker from 'utils/worker/image.worker'
import WorkerBuilder from 'utils/worker/worker-builder'


const usePreloadedImages = (framesCount: number, framesDirPath: string, extension: string = '.jpg') => {
	const [ images, setImages ] = useState<HTMLImageElement[]>([])

	const getUrls = useCallback(() => {
		return new Array(framesCount).fill('').map((el, index) => {
			index = Math.max(1, index)
			const indexCount = 4

			return `${ window.location.origin }/${ framesDirPath }/frame-${
				index.toString().padStart(indexCount, '0') }${ extension }`
		})
	}, [])

	const createImage = useCallback((url: string) => new Promise((resolve) => {
		const img = new Image()
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			resolve(null)
		}
		img.src = url
		img.alt = url
		img.height = 540
		img.width = 540
	}), [])

	const resolveImages = useCallback((): Promise<HTMLImageElement[]> => new Promise((resolve) => {
		const worker = new WorkerBuilder(Worker)

		worker.postMessage(getUrls())
		worker.addEventListener(
			'message',
			async (event) => {
				const imagePromises = event.data.map(async (url: string) => !!url && await createImage(url))
				const imageElements = await Promise.all(imagePromises)
				resolve(imageElements.filter(Boolean))
			},
			false
		)
	}), [])

	useEffect(() => {
		if (!images.length) {
			resolveImages().then((res: HTMLImageElement[]) => setImages(() => [ ...res ]))
		}
	}, [])

	return images
}

export default usePreloadedImages
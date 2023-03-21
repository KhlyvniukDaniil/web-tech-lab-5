import ImageWorker from 'utils/worker/image.worker'


export default (context?: any, inject?: any) => {
	inject('worker', {
		createWorker() {
			// @ts-ignore
			return new ImageWorker(context)
		}
	})
}

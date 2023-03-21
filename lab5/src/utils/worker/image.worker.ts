export default () => {
	self.addEventListener(
		'message',
		async function (e) {
			const urls = e.data
			const images = await Promise.all(
				urls.map(async (url: string) => {
					try {
						const response = await fetch(url)
						const fileBlob = await response.blob()
						return URL.createObjectURL(fileBlob)
					} catch (e) {
						console.log('ERROR', e)
						return null
					}
				})
			)
			self.postMessage(images)
		},
		false
	)
}




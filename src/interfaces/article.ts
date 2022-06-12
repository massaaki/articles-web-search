interface ArticleImage {
	url: string,
	height: number,
	width: number,
	thumbnail: string,
	thumbnailHeight: number,
	thumbnailWidth: number,
	base64Encoding: string,
	provider: {
		name: string,
		favIcon: string,
		favIconBase64Encoding: string
	},
	webpageUrl: string
}

interface ArticleProvider {
	name: string,
	favIcon: string,
	favIconBase64Encoding: string
}


interface Article {
	id: string,
	title: string,
	url: string,
	description: string,
	body: string,
	snippet: string,
	keywords: string,
	language: string,
	isSafe: boolean,
	datePublished: string,
	provider: ArticleProvider,
	image: ArticleImage
}

export type { Article }


const HOST = "http://localhost:1337"

const service = {
	// articles
	API_GET_LIST_ARTICLE: `${HOST}/articles`,
	API_GET_DETAIL_ARTICLE: id => `${HOST}/articles/${id}`,

	// ilustrations
	API_GET_LIST_ILUSTRATION: `${HOST}/ilustrations`,
	API_GET_DETAIL_ILUSTRATION: id => `${HOST}/ilustrations/${id}`,

	// Models
	API_GET_LIST_MODEL: `${HOST}/models`,
	API_GET_DETAIL_MODEL: id => `${HOST}/models/${id}`,
}

export default service

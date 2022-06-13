import axios from 'axios';


export const api = axios.create({
	baseURL: 'http://localhost:3000/api'
})

export const webSearchApi = axios.create({
	baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
	headers: {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
})


export const webSearchRecommendedApi = axios.create({
	baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete',
	headers: {
		'X-RapidAPI-Key': process.env.RAPID_API_KEY || '',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
})

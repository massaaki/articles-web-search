import axios from 'axios';


export const api = axios.create({
	baseURL: process.env.NODE_ENV === 'development'
		? 'https://articles-web-search-xs5ihcowz-eu-massaakicom.vercel.app/api' :
		'https://articles-web-search-xs5ihcowz-eu-massaakicom.vercel.app/api'
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

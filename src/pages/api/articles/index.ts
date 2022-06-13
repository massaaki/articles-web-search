import { NextApiRequest, NextApiResponse } from 'next'

import { webSearchApi } from 'api/v1';



const allowCors = (fn: { (req: NextApiRequest, res: NextApiResponse<any>): Promise<void>; (arg0: any, arg1: any): any; }) => async (req: any, res: any) => {
	res.setHeader('Access-Control-Allow-Credentials', true)
	res.setHeader('Access-Control-Allow-Origin', '*')
	// another common pattern
	// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
	)
	if (req.method === 'OPTIONS') {
		res.status(200).end()
		return
	}
	return await fn(req, res)
}



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { search } = req.query;
	if (req.method === 'GET' && search) {

		const options = {
			method: 'GET',
			params: { q: search, pageNumber: '1', pageSize: '10', autoCorrect: 'true' },
		};

		const response = await webSearchApi.request(options);
		res.status(200).json(response.data);
	}
}

module.exports = allowCors(handler)

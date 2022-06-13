import { NextApiRequest, NextApiResponse } from 'next'

import { webSearchApi } from 'api/v1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

import { NextApiRequest, NextApiResponse } from 'next'

import Cors from 'cors';

import { webSearchApi } from 'api/v1';
import initMiddleware from 'utils/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ['GET', 'POST', 'OPTIONS'],
	})
)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	await cors(req, res);

	const { search, pageNumber } = req.query;
	if (req.method === 'GET' && search && pageNumber) {

		const options = {
			method: 'GET',
			params: { q: search, pageNumber: `${pageNumber}`, pageSize: '30', autoCorrect: 'true' },
		};

		const response = await webSearchApi.request(options);
		res.status(200).json(response.data);
	}
}

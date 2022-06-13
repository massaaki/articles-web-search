import { NextApiRequest, NextApiResponse } from 'next'

import { webSearchRecommendedApi } from 'api/v1'

// import fakeResult from '../../../mocks/mock-fake-autocomplete-result.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { text } = req.query;
	if (req.method === 'GET' && text) {
		const options = {
			method: 'GET',
			params: { text: text},
		};

		const response = await webSearchRecommendedApi.request(options);
		res.status(200).json(response.data);
	}
}

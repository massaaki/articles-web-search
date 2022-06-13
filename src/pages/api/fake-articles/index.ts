import { NextApiRequest, NextApiResponse } from 'next'

import mockNews from 'mocks/mock-fake-news-result.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { search } = req.query;
	if (req.method === 'GET' && search) {
		res.status(200).json(mockNews);
	}
}

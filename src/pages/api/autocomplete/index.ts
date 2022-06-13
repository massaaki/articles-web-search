import { NextApiRequest, NextApiResponse } from 'next'

import fakeResult from '../../../mocks/mock-fake-autocomplete-result.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { text } = req.query;
	if (req.method === 'GET' && text) {
		res.status(200).json(fakeResult);
	}
}

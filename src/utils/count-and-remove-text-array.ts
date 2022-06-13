
type ResponseType = {
	value: string;
	count: number;
}[]

export const CountAndRemoveDuplicatedString = (text: string): ResponseType => {
	try {
	const array = text.split(' ');

	const results = array.reduce((r: { [key: string]: number }, s) => {
		const key = s.toLowerCase()

		r[key] = (r[key] || 0) + 1;

		return r;
	}, {});

	const keys = Object.keys(results);
	const counts = Object.values(results);

	const result = keys.map((key, index) => ({
		value: key,
		count: counts[index]
	}))
		return result;
	} catch (error) {
		return []
	}
}

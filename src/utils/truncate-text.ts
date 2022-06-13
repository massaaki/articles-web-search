export const truncateText = (str: string, length: number): string => {
	const points = str.length > length ? '...' : '';
	return str.substring(0, length) + points;
}

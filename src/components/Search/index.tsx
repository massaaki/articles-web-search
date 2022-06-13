import React, { useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const Search = () => {
	const [termToSearch, setTermToSearch] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('call api!');
		setTermToSearch(e.target.value);
	}

	const debounceSearchResults = useMemo(() => {
		return debounce(handleChange, 500);
	}, []);

	useEffect(() => {
		return () => {
			debounceSearchResults.cancel();
		}
	})

	return (
		<>
			<input type="text" onChange={debounceSearchResults} />
		</>
	)
}

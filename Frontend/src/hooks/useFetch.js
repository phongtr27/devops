import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				return Promise.reject(response);
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err);
			});
	}, [url]);

	return { data, setData, error, isLoading };
};

export default useFetch;

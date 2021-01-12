import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Github = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const users = axios
			.get('https://api.github.com/users')
			.then((res) => res.data)
			.then(setData);
	}, []);

	if (data) {
		return (
			<div>
				<ul>
					{data.map((item) => (
						<li key={item.id}>{item.login}</li>
					))}
				</ul>
				<button onClick={() => setData([])}>click</button>
			</div>
		);
	}
};

export default Github;

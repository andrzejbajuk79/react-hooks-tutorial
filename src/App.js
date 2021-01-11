import React, {useState} from 'react';
import './App.css';
import {FaStar} from 'react-icons/fa';

const createArray = (length) => [...Array(length)];
const Star = ({selected = false, onSelect}) => {
	console.log('selected', selected);
	return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};
const StarRates = ({totalStars}) => {
	const [selectedStars, setSelectedStars] = useState(0);
	return (
		<>
			{createArray(totalStars).map((n, i) => (
				<Star
					key={i}
					selected={selectedStars > i}
					onSelect={() => setSelectedStars(i + 1)}
				/>
			))}
			<p>
				{selectedStars} z {totalStars}
			</p>
		</>
	);
};
function App() {
	return (
		<div className='App'>
			<StarRates totalStars={4} />
		</div>
	);
}

export default App;

import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import Checked from './components/Checked';
import Github from './components/Github';

import StarRating from './components/StarRating';

function App() {
	//co chcemy zeby sie stalo kiedy setNumber bedzie wywolany
	//drugi argument to initial state = 0
	const [number, setNumber] = useReducer(
		(number, newNumber) => number + newNumber,
		0
	);
	return (
		<section>
			<Checked />
			<h1 onClick={() => setNumber(1)}>{number}</h1>
			<StarRating totalStars={4} />
			<Github />
		</section>
	);
}

export default App;

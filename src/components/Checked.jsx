import React, {useState, useReducer} from 'react';

const Checked = (props) => {
	const [checked, toggle] = useReducer(
		(checked) => !checked, //
		false
	);

	const initialState = {
		message: 'czesc',
	};

	function reducer(state, action) {
		switch (action.type) {
			case 'yell':
				return {message: `Hey i just said ${state.message}`};
			case 'whisper':
				return {message: 'SORYY!!!'};
			default:
				return {message: 'nic!!!'};
		}
	}

	const [state, dispatch] = useReducer(
		reducer, //
		initialState
	);
	return (
		<>
			<p> message: {state.message}</p>
			<button onClick={() => dispatch({type: 'yell'})}>zmien</button>
			<button onClick={() => dispatch({type: 'whisper'})}>zmien</button>
			<input //
				type='checkbox'
				value={checked}
				onChange={toggle}
			/>

			{checked ? 'checked' : 'not checked'}
		</>
	);
};

export default Checked;

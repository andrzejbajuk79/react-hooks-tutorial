import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa';
import {createArray} from '../helpers/createArray'


const Star = ({selected = false, onSelect}) => {
	console.log('selected', selected);
	return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />;
};

const StarRating = ({totalStars}) => {
 const [selectedStars,setSelectedStars] = useState(0);

	return ( 
 <>
 {
  createArray(totalStars).map((n,i)=>(
   <Star
   key={i}
   //true false, wybierzemy jedna gwiazdke 1>0 index true
   selected={selectedStars > i}
   onSelect={() => setSelectedStars(i + 1)}
   />
  ))
 }
 </>
	);
};



export default StarRating


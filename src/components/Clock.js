import React , { useState , useEffect }from "react";
import { padStartDigit } from "./PadStartDigit";
import '../clock.css';

export function Clock() {
	const [date, setDate] = useState(new Date());
	let timerId;

	useEffect(()=>{
		timerId = setInterval(()=>{
    		setDate(new Date());
		}, 1000);
    	return () => clearInterval(timerId);
	});

	return(
		<div>
			<span>{padStartDigit(date.getHours())}:</span>
			<span>{padStartDigit(date.getMinutes())}:</span>
			<span>{padStartDigit(date.getSeconds())}</span>
		</div>
	);

}

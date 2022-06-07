import React from 'react';
import { useState , useEffect} from 'react';
import { padStartDigit } from './PadStartDigit';

export function Timer() {

    
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    
	let interval;

	function startTimer() {
		const countDownDate = new Date("June 09,2022").getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;
			
			const hours = Math.floor(distance / (60 * 60 * 1000));
			const minutes = Math.floor((distance %(60 * 60 * 1000)) /(1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if(distance < 0){
				clearInterval(interval.current);
			} else {
				setTimerHours(padStartDigit(hours));
				setTimerMinutes(padStartDigit(minutes));
				setTimerSeconds(padStartDigit(seconds));
			}
		});
	};
    
	useEffect(() => {
		startTimer();
	});

    return(
        <div>
            <span>{timerHours}:</span>
            <span>{timerMinutes}:</span>
            <span>{timerSeconds}</span>
        </div>
    );
}
Timer.defaultProps = {
    timerSeconds : "00",
    timerMinutes : "00",
    timerHours : "00"
}

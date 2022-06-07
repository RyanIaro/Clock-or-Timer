import './App.css';
import { useState , useEffect } from 'react';
import { Clock } from './components/Clock';
import { Timer } from './components/Timer';

function App() {
	const [isClock, setIsClock] = useState(true);

    const [timerHours] = useState();
    const [timerMinutes] = useState();
    const [timerSeconds] = useState();
	
    useEffect(() => {
		if({timerHours} === 0 && {timerMinutes} === 0 && {timerSeconds} === 0){
			return window.alert("Time's up")
		}
	});

    return (
		<>
			<div className="clock">
				{isClock ? (
					<Clock/>
				) : (
					<Timer/>
				)}
			</div>
			<button onClick={()=>setIsClock(!isClock)}>Toggle</button>
		</>
    );
  
}

export default App;

import './App.css';
import Countdown from 'react-countdown';

// On Complete render this 
function Completionist() {
  return (
    <span>You are good to go!</span>
  );
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} days, {hours} hours, {minutes}, and {seconds} seconds</span>;
  }
};

function App() {
  return (
    <div className="App">
      <Countdown
        date={'2023-07-14T17:00:00'}
        renderer={renderer}/>
    </div>
  );
}

export default App;

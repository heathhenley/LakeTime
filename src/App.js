import './App.css';
import Countdown from 'react-countdown';

// On Complete render this 
function Completionist() {
  return (
    <div className="finished">
      <iframe src="https://giphy.com/embed/KHWAURFE2KcntpU5Et" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>It's Lake Time!</p>
    </div>
  );
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} days, {hours} hours, {minutes} minutes, and {seconds} seconds</span>;
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

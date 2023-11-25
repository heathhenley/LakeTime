import './App.css';
import Countdown from 'react-countdown';

function StyledCountdown(
  {title, days, hours, minutes, seconds}
) {
  return (
    <section className="w-full w-min:400px">
      <div className="container grid items-center justify-center gap-4 text-center lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold  sm:text-4xl md:text-5xl">{title}</h2>
        </div>
        <div className="grid grid-cols-4 divide-x divide-zinc-200">
          <div className="flex flex-col items-center px-6">
            <p className="md:text-6xl text-5xl font-bold">{days}</p>
            <p className="text-zinc-500 md:text-3xl text-2xl">Days</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-6xl text-5xl font-bold">{hours}</p>
            <p className="text-zinc-500 md:text-3xl text-2xl">Hours</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-6xl text-5xl font-bold">{minutes}</p>
            <p className="text-zinc-500 md:text-3xl text-2xl">Minutes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="md:text-6xl text-5xl font-bold">{seconds}</p>
            <p className="text-zinc-500 md:text-3xl text-2xl">Seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// On Complete render this 
function Completionist() {
  return (
    <div className="finished">
      <iframe src="https://giphy.com/embed/KHWAURFE2KcntpU5Et" width="270" height="480" frameBorder="0" title="lake time!" class="giphy-embed" allowFullScreen></iframe><p>It's Lake Time!</p>
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
    return <StyledCountdown
      title="Time until Lake Time"
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds} /> 
  }
};

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Countdown
        date={'2024-07-19T17:00:00'}
        renderer={renderer}/>
    </div>
  );
}

export default App;

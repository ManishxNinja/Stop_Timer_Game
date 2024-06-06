import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title = "EASY" targetTime={1 }></TimerChallenge>
        <TimerChallenge title = "NOT EASY" targetTime={5 }></TimerChallenge>
        <TimerChallenge title = "GETTING TOUGH" targetTime={10 }></TimerChallenge>
        <TimerChallenge title = "PROS ONLY" targetTime={15 }></TimerChallenge>
      </div>
    </>
  );
}

export default App;
 
import './App.css';
import HookComponent from './HookComponent';
import HookTogglingExample from './HookTogglingExample';
import UsingTogglerHook from './UsingTogglerHook'
import SimpleFormHook from './SimpleFormHook';
import ClickerComp from './ClickerComp';
import StarWarsMovies from './StarWarsMovies';

export default function App() {
  return (
    <div className="App">
      <HookComponent />
      <HookTogglingExample />
      <UsingTogglerHook />
      <SimpleFormHook />
      <ClickerComp/>
      <StarWarsMovies />
    </div>
  );
}


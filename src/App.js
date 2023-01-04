import Home  from "./components/Home";
import './App.css';
import Fetch from "./components/Fetch";
import Bootstrap from "./components/App";
function App() {
  return (
    <div className="App">
      <Home />
      <Fetch />
      <Bootstrap/>
    </div>
  );
}
export default App;

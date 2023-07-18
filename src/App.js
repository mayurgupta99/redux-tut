import logo from './logo.svg';
// import User from './User';
import './App.css';
import HomeContainers from "./containers/HomeContainers"

function App() {
  return (
    <div className="App">
      {/* <h1>App Components</h1> */}
      <HomeContainers />
      {/* <User data={{name:"mayur",age:"25"}} /> */}
    </div>
  );
}

export default App;

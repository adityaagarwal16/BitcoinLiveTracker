import "./App.css";
import {NavbarFunc} from "../Navbar";
import Dashboard from "../Dashboard";

function App() {

  return (
      <div data-testid={"App"} className="App">
          {/*Navbar for the website*/}
          <NavbarFunc/>
          {/*Main Content*/}
          <Dashboard />
      </div>
  );
}

export default App;


import "./App.css";
import { useState } from "react"; // useState is a Hook that lets you add React state to function components.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false); // we made use of react hooks. useState basically assigns false to variable sideToggle and the function which has sideToggle is setSideToggle

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} /> {/* whenever we click on hamburger icon, setSideTggle is set to true and SideDrawer shows up with backdrop */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} /> {/* returns to normal state by setting sideToggle to false */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Main/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

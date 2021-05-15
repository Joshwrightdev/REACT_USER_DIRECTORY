import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header"
import Body from "./components/Body"
import Search from "./components/Search/Search"

function App() {
  return <div>
    <Header/>
    <Search/>
    <Body/>
  </div>;
}

export default App;

import "./App.css";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <ProductList />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Filters from './components/Filters';
import Products from './components/Products';
import ShoppingCard from './components/ShoppingCard';

function App() {
return (
    <div className="App">
        <Filters />
        <Products />
        <ShoppingCard />
    </div>
);
}

export default App;

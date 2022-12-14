import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import CartContext from './CartContext';


function App() {

return (
  
    <CartContext>
            <Header />
            <div className="App">
            <Products />
            </div>
 
      </CartContext>  
   
);
}

export default App;

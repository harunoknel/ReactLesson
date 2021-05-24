import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
        <Navi></Navi>
        <CategoryList></CategoryList>
        <ProductList></ProductList>
    </div>
  );
}

export default App;

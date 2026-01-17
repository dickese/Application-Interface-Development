import './App.css';
import productImage from './assets/product.png';
import ProductList from './component/Bài1_ProductCard/ProductList/ProductList.jsx';
const data = [
  {
    image: productImage,
    name: 'New Product',
    price: '5.000.000 VND',
  },
  {
    image: productImage,
    name: 'New Product',
    price: '5.000.000 VND',
  },
  {
    image: productImage,
    name: 'New Product',
    price: '5.000.000 VND',
  },
  {
    image: productImage,
    name: 'New Product',
    price: '5.000.000 VND',
  },
];

function App() {
  return (
    <>
      <ProductList productList={data} />
    </>
  );
}

export default App;

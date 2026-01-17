import './App.css';
import productImage from './assets/product.png';
import ProductList from './component/Bài1_ProductCard/ProductList/ProductList.jsx';
import Button from './component/Bài2_ButtonComponent/Button.jsx';
import ButtonComponents from './component/Bài2_ButtonComponent/ButtonComponents.jsx';
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
    <div className="">
      {/* 1. Product card */}
        <ProductList productList={data} />


        {/* 2. Button component */}
        <ButtonComponents/>
        
    </div>
  );
}

export default App;

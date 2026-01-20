import { useState } from 'react';
import './App.css';
import productImage from './assets/product.png';
import ProductList from './component/Bài1_ProductCard/ProductList/ProductList.jsx';
import Button from './component/Bài2_ButtonComponent/Button.jsx';
import ButtonComponents from './component/Bài2_ButtonComponent/ButtonComponents.jsx';
import LoginForm from './component/LoginForm/LoginForm.jsx';
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
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(true);
  const [showThird, setShowThird] = useState(true);
  return (
    <div className=''>
      {/* 1. Product card */}
      <ProductList productList={data} />

      {/* 2. Button component */}
      <ButtonComponents />

      {/* 3. Component Alert theo type button */}

      {/* 4. Login form with useState */}

      <div className="bai-4">
        <h1>Bài 4: Login form with useState handle Open&Close</h1>
              <div className="login-forms">
                {showPrimary && (
                  <LoginForm type='primary' onClose={() => setShowPrimary(false)} />
                )}
                {showSecondary && (
                  <LoginForm type='secondary' onClose={() => setShowSecondary(false)} />
                )}
                {showThird && (
                  <LoginForm type='third' onClose={() => setShowThird(false)} />
                )}
              </div>

      </div>

    </div>
  );
}

export default App;

import React from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
const ProductList = (props) => {
  return (
    <div className='wrapper'>
      <h1 className='title'>Bài 1: Card sản phẩm (CSS cơ bản + hover)</h1>
      <div className='product-list'>
        {props.productList.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

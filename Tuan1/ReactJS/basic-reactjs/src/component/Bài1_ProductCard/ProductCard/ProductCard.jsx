import './ProductCard.css';
const ProductCard = (props) => {
  return (
    <div className='card'>
      <div className='wrapperImg'>
        <img src={props.product.image} alt='' className='img' />
      </div>
      <div className='wrapperInfo'>
        <h3 className='name'>{props.product.name}</h3>
        <p className='price'>{props.product.price}</p>
        <button className='btn'>Add to card</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import './ProductDetailModel.css';

function ProductDetailModel({ product, onClose }) {
    const productLink = ()=>{
        window.open(product.type,'_blank', 'noopener,noreferrer')
    }
    //navigate locally
//     import { useNavigate } from 'react-router-dom';

// function InternalRedirectButton() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Navigate to a path inside your app
//     navigate('/dashboard'); 
//   };

//   return (
//     <button onClick={handleClick}>
//       Go to Dashboard
//     </button>
//   );

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close detail">
          &times;
        </button>
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
          <span className="detail-category">{product.catogary}</span>
        </div>
        <div className="detail-body">
          <div className="detail-header">
            <h2>{product.name}</h2>
            <span className="detail-price">${product.price}</span>
          </div>
          <p className="detail-description">{product.description}</p>
          <p className="detail-details">{product.details}</p>
          <button className="btn" onClick={productLink} >See Full Types</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModel;

import React from "react";

const ShoeCard = ({shoeList}) => {
  const shoeId = null;
  return (
    
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      {shoeList?.map((item) =>{
        return (
          <div data-cy={`shoe-card-wrapper-${item.id}`} key={item.id}>
            <img data-cy="shoe-card-image" alt="shoe" src={item.image}/>
            <div>
            <div data-cy="shoe-name">{item.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">{item.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
          </div>
        )
      })}
      
      <div>
        <div data-cy="shoe-name">shoe-name</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;

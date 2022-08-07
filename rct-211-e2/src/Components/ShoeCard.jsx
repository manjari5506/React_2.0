import React from "react";
import styled from "styled-components";

const ShoeCard = ({shoes}) => {
  let shoeId = null;
  console.log(shoes)
  return (
    <>
      <div data-cy={`shoe-card-wrapper-${shoeId}`} >
      {shoes.map((item) =>{
      return(
        <div key={item.id}>
           <ShoeWrapper>
        <div>
         <img data-cy="shoe-card-image" src={item.image} alt="" />
        </div>
        </ShoeWrapper>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">category: {item.category} </div>
      </div>
      </div>
      )
      } )}
    </div>
     </>
  );
};

export default ShoeCard;


const ShoeWrapper = styled.div`
  width: 200px;
`;


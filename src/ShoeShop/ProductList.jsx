import React from "react";

const ProductList = ({ productData,onAddToCart,isOpenModalDetail}) => {

    const handleAddToCart = (item) =>{
        onAddToCart(item)
    }
    const handleShowDetail = (item) =>{
        isOpenModalDetail(item)
    }
  return (
    <div className="d-flex flex-wrap">
      {productData.map((item) => {
        return (
          <div key={item.id} className="col-4 p-3">
            <div className="border border-dark border-3 p-3">
              <img className="w-100" src={item.image} alt={item.name} />
              <div className="body-item">
                <h4>{item.name}</h4>
                <h4>{item.price} $</h4>
              </div>
              <button type="button" className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => handleAddToCart(item)}>
                Add to card
              </button>
              <button className="btn btn-dark ms-3" onClick={() => handleShowDetail(item)}>Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

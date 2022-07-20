import React from 'react'

const ProductDetail = ({productData,isOpenModalDetail, onCloseModalDetail}) => {
  return (
<div style={{ display: isOpenModalDetail ? "block" : "none" }} className="modal fade show" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title bg-radien" id="exampleModalLabel">Shoe Details</h5>
        <button type="button" onClick={onCloseModalDetail} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
      <div className="p-2 text-center">
              <img className="w-75" src={productData.image} alt={productData.name} />
              <div className="body-productData">
                <h4 className='text-danger bg-radien'>{productData.name}</h4>
                <h6 className='text-success'>{productData.description}</h6>
                <h6 className='text-success'>{productData.shortDescription}</h6>
            </div>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={onCloseModalDetail} className="btn btn-secondary bg-radien" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetail
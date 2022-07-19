import React, { Component } from 'react'
import data from './data.json'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
export default class ShoeShop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        selectItem : {},
        productData: [],
        isOpenModalDetail : false
      }
    }
    handleAddToCart = (item) =>{
        this.setState({selectItem : item})
    }
    handleShowDetail = (item) => {
        this.setState({selectItem : item})
        this.setState({isOpenModalDetail:true})
    }
    handleCloseModalDetail = () => {
        this.setState({isOpenModalDetail:false})
    }
  render() {
    return (
        <div className='container'>
        <h1 className='text-center bg-dark text-light'>Shoe Shop</h1>
        <div className='my-5'>
            <div className='text-end'>
                <button className='btn btn-success'>Cart</button>
            </div>
           <ProductList productData={data} 
                onAddToCart={this.handleAddToCart} 
                isOpenModalDetail={this.handleShowDetail}
                onCloseModalDetail={this.handleCloseModalDetail}/>
           <ProductDetail 
                productData={this.state.selectItem}
                isOpenModalDetail={this.state.isOpenModalDetail}
                onCloseModalDetail={this.handleCloseModalDetail}/>
           {/* {console.log(this.state.selectItem)} */}
        </div>
      </div>
    )
  }
}


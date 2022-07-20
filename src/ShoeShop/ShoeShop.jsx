import React, { Component } from 'react'
import Cart from './Cart'
import data from './data.json'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import './style.css'
export default class ShoeShop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectItem: {},
      carts: [],
      isOpenModalDetail: false,
      isOpenModalCart: false
    }
  }
  handleAddToCart = (item) => {
    // console.log(item);
    const index = this.state.carts.findIndex((carts) => item.id === carts.id)
    if (index === -1) {
      const carts = [...this.state.carts, { ...item, quantity: 1 }]
      this.setState({ carts })
    }
    else {
      const carts = [...this.state.carts]
      carts[index].quantity += 1
      this.setState({ carts })
    }
  }
  handleShowDetail = (item) => {
    this.setState({ selectItem: item })
    this.setState({ isOpenModalDetail: true })
  }
  handleCloseModalDetail = () => {
    this.setState({ isOpenModalDetail: false })
  }
  handleShowCart = () => {
    this.setState({ isOpenModalCart: true })
  }
  handleCloseModalCart = () => {
    this.setState({ isOpenModalCart: false })
  }
  handleChangeQuantity = (id, quantity) => {
    const carts = this.state.carts.map((item) => {
      if(item.id === id)
      {
        return {...item,quantity : item.quantity + quantity}
      }
      return item
    })
    this.setState({carts})

  }
  handleRemoveItem = (id) => {
    const carts = this.state.carts.filter((item) => item.id !== id)
    this.setState({carts})
  }
  render() {
    const { selectItem, carts, isOpenModalDetail, isOpenModalCart } = this.state
    return (
      <div className='container'>
        <h1 className='text-center bg-dark text-light'>Shoe Shop</h1>
        <div className='my-5'>
          <div className='text-end'>
            <button onClick={this.handleShowCart} className='btn btn-success'>Cart</button>
          </div>
          <ProductList productData={data}
            onAddToCart={this.handleAddToCart}
            isOpenModalDetail={this.handleShowDetail}
            onCloseModalDetail={this.handleCloseModalDetail} />
          <ProductDetail
            productData={selectItem}
            isOpenModalDetail={isOpenModalDetail}
            onCloseModalDetail={this.handleCloseModalDetail} />
          <Cart
            carts={carts}
            isOpenModalCart={isOpenModalCart}
            onCloseModalCart={this.handleCloseModalCart}
            onChangeQuantity={this.handleChangeQuantity}
            onRemoveItem={this.handleRemoveItem} />
          {/* {console.log(this.state.isOpenModalCart)} */}
        </div>
      </div>
    )
  }
}


import React, { Component } from 'react'
import ProductItem from './ProductItem';
import { connect } from 'react-redux';


class ProductList extends Component {
  render() {
    // hàm để trả về sản phẩm theo yêu cầu
    const productFilter = this.props.ProductList.filter(prod => prod.type === this.props.selecetedTab)
   console.log(productFilter , "producfilter");
    return (
      <div className='row mt-3'>
        {productFilter.map((item)=> {
          return (
            <div key={item.id}
            className="col-4">
              <ProductItem item={item}/>
              
            </div>
          )
        })}
       

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ProductList : state.product.product,
    selecetedTab : state.product.selecetedTab,
  }
}



export default connect(mapStateToProps)(ProductList)
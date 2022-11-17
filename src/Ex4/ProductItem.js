import React, { Component } from 'react'
import { connect } from 'react-redux';

class ProductItem extends Component {
  render() {
    const {imgSrc_jpg , name , type , imgSrc_png } = this.props.item ;
    const {handleModel} = this.props
    return (
      <div className='card p-2 mb-4'>
        <img src={imgSrc_jpg} alt=""/>
        <h3>{name}</h3>
        <button onClick={()=> {
          handleModel(type , imgSrc_png)
        }} type="" className='btn btn-info'>Mặc thử</button>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
handleModel : (type , value) => {
  dispatch({
    type : "CHANGE_MODEL",
    payload : {
      type : type,
      value,
        // ES6 value : value,
    }
  })
}
  }
}
export default connect(null,mapDispatchToProps)(ProductItem)
    
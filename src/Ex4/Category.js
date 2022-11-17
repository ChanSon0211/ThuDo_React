import clsx from 'clsx';
import { valueAbsolute } from 'fontawesome';
import React, { Component } from 'react';
import { connect } from "react-redux";

class Category extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.categoryList);
        const {categoryList , handleSelecetedTab , selecetedTab } = this.props
        return (
            <div className='btn-group d-flex justify-content-center'>
                {categoryList.map((item) => {
                    return (
                        <button 
                        onClick={() => {handleSelecetedTab(item.type)}}
                        className={clsx('btn-secondary btn', 
                        {'btn-danger' : selecetedTab===item.type})}
                            key={item.tabName}>
                            {item.showName}
                        </button>
                    );
                }
                )
                }


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // key : value
        // key : tên prop của component
        // value : dữ liệu lấy từ store

        categoryList: state.category.categories,
        selecetedTab: state.product.selecetedTab,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      handleSelecetedTab : (type) => {
        dispatch({
            type : 'CHANGE_TAB',
            payload: type,

        })
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Category);



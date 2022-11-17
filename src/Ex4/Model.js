import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./Model.css"

 class Model extends Component {
 
  render() {
    const {model} = this.props;
    return (
      <div>
       <div className="contain" style={{
        backgroundImage:`url(${model.background})`,
       }}>
<div className="body" style={{
    backgroundImage : "url(images/allbody/bodynew.png)",
}} />
  <div className="model" style={{
   backgroundImage:  "url(images/model/1000new.png)",
  }} />
  <div className="bikinitop" style={{
    backgroundImage:"url(images/allbody/bikini_branew.png)",
  }} />
  <div className="bikinitop top-cloth" style={{
  
    backgroundImage:`url(${model.topclothes})`,
  }} />
  <div className="bikinibottom" style={{
    backgroundImage:"url(images/allbody/bikini_pantsnew.png)",
  }} />
  <div className="bikinitop bot-cloth" style={{
    backgroundImage:`url(${model.botclothes})`,
  }} />
  <div className="feetleft" style={{
    backgroundImage:"url(images/allbody/feet_high_leftnew.png)",
  }} />
  <div className="feetright" style={{
    backgroundImage:"url(images/allbody/feet_high_rightnew.png)",
  }} />

    <div className="hairstyle" style={{
    backgroundImage:`url(${model.hairstyle})`
  }} />

    <div className="handbag" style={{
    backgroundImage:`url(${model.handbags})`
  }} />
      <div className="necklace" style={{
    backgroundImage:`url(${model.necklaces})`
  }} />

<div className="shoes" style={{
    backgroundImage:`url(${model.shoes})`
  }} />
   
</div>

          </div>
    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    model : state.model.model
  }
}

export default connect(mapStateToProps)(Model)

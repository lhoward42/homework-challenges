import React, { Component } from 'react';

 class CatList extends Component {

  render(){
    const { breeds } = this.props
    return (
   <div>
     {breeds.map((cat, index) => { return <li key={index}>{cat}</li> })}
   </div>
    )
  }
}
 
export default CatList
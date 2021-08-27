import React, { Component } from 'react';

export class CatList extends React.Component {

  render(){
    const { breeds } = this.props
    return (
   <div>
     {breeds.map(cat => <li key={index}>{cat}</li> )}
   </div>
    )
  }
}
 


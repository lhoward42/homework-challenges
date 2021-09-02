import React, { Component } from 'react';
import CatList from './CatList';
 
export class CatIndex extends Component {
  
 constructor(props) {
   super(props)
   this.state = {
     breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
   }
 }

 
 render(){
   const { breeds } = this.state
 return (
   
  <div>
   <CatList breeds={breeds} />
  </div>
  )
 }
}

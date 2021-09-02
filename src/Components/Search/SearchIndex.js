import React, { Component } from 'react';
import {Input} from 'reactstrap';

 
class SearchIndex extends Component {
  constructor(props){
  super(props)
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchResults: [],
    }
    // this.searchFunction = this.searchFunction.bind(this)
  } 

// handleChange = (event) => {
//   this.setState = ({
//     searchTerm: event.target.value
//   })
//   console.log(event);
// }

 searchFunction = (value) => {
   const results = this.state.things.filter(thing => 
    thing.includes(value.toLowerCase())) //filtering the things array, setting results equal to results, value refers to e.target.value, if value equals filtered results then it will return in Results in render
    this.setState({
      searchResults: results //changing the state of search results from an empty array and setting it equal to results on line 22
    })
 }

 displaySearchItem = (newThings, index) => <p key={index}>{newThings}</p>

 render() {
  // const { searchTerm } = this.state
   return(
     <div>
       <Input type="text" placeholder='Search Here' onChange={e => this.searchFunction(e.target.value)}/>
       <h3>Results:</h3> 
       {/* if the empty array (searchResults) have anything in it then map over it and give the items to the displaySearchItem function (newThing) */}
       {/* otherwise map over the original things array and return them */}
       { this.state.searchResults && this.state.searchResults.length > 0 ? this.state.searchResults.map(this.displaySearchItem) : this.state.things.map(this.displaySearchItem)}
     </div>
) 
}
}

 
export default SearchIndex;

import React from 'react';

export class DogFetch extends React.Component {
    constructor(props) {
            super(props)
            this.state = {
                image: []
            }
        }
     fetchDog = () => {
        fetch(`https://dog.ceo/api/breed/hound/images/random`, {       
             method: 'GET'
         })   
        .then(res => res.json())
        .then(data => {
           this.setState({
               image: data.message
           })
        }) .catch ((err) => console.log(err)) 
     }

    render(){
        const { image } = this.state
        return (
            <>
            <button onClick={() => this.fetchDog()} >Fetch Dog</button>
            <img src={image} />
            </>
            )} 
    }
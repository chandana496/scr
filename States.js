import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Hari"
        }
    }
    
    render() {

     setTimeout(()=>{
         this.setState({name:"Hari Chandana"})
     },3000)


        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
            </div>
        )
    }
}

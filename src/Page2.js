import React from 'react';

class Page2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mytext:'',
        }
    }
    getData(){
        fetch(`http://127.0.0.1:3000/json`,{
            method:'get'
        }).then(res => res.json()).then(
            data => {
                this.setState({mytext:data})
            }
        )
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <div>
                <div>{this.state.mytext.name}</div>
                <div>{this.state.mytext.price}</div>
                <div>{this.state.mytext.data}</div>
            </div>
        );
    }
}

export default Page2;
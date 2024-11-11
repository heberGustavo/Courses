import { Component } from "react";

export default class Contador extends Component{
    
    state = {
        numero: this.props.valorInicial 
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }
    
    render(){
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <h1>Contador (usando classe)</h1>
                <span>{this.state.numero}</span>
                <button 
                    style={{border: "1px solid black", width: "20px", height: "30px"}}
                    onClick={this.inc}
                >
                    +</button>
            </div>
        );
    }
}
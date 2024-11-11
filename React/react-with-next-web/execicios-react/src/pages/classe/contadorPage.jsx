import { Component } from "react";
import Contador from "../../../components/classe/Contador";

export default class ContadorPage extends Component{
    render(){
        return(
            <div>
                <Contador valorInicial={100}/>
            </div>
        );
    }
}
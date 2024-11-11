/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useState } from "react";

export default function questao(){

    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/questao/321")
        .then(res => res.json())
        .then(questao => setQuestao(questao));
    }, [])
    
    const renderizarRespostas = () => {
        if(questao){
            return questao.respostas.map((item, i) => {
                return <li key={i}>{item}</li>
            })
        }
        return false;
    }

    return(
        <div>
            <h1>Questão</h1>
            <p>{questao?.id} - {questao?.enunciado}</p>
            <h3>Respostas</h3>
            <ul>
                {renderizarRespostas()}
            </ul>
        </div>
    );
}
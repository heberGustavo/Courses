/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const styleMarginTB = {margin: "2px 0"};

export default function form(){

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    const salvarUsuario = async () => {
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify({ nome, idade })
        })

        setNome('');
        setIdade(0);
        
        const resp = await fetch("/api/form");
        const usuarios = await resp.json();
        setUsuarios(usuarios);
    }

    const renderizarUsuarios = () => {
        return usuarios.map((usuario, i) => {
            return <li key={i}>{usuario.nome} - {usuario.idade}</li>
        })
    }

    return(
        <div>
            <h1>Form to send Data</h1>
            <div style={{color: "#000", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <input 
                    type="text" value={nome}
                    onChange={e => setNome(e.target.value)}
                    style={styleMarginTB}
                />
                <input 
                    type="number" value={idade}
                    onChange={e => setIdade(+e.target.value)}
                    style={styleMarginTB}
                />
                <button onClick={salvarUsuario}>Save</button>
            </div>
            <br />
            <h2>List data</h2>
            <ul>
                {renderizarUsuarios()}
            </ul>
        </div>
    );
}
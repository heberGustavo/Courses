import React, { useEffect, useRef, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge1 = (p1, p2) => {
    var sizeP1 = p1.length;
    var sizeP2 = p2.length;
    var sizeBase = sizeP1 > sizeP2 ? sizeP1 : sizeP2;

    let stringFull = "";
    for (let i = 0; i < sizeBase; i++) {
        stringFull += handleStringFull(p1[i]);
        stringFull += handleStringFull(p2[i]);
    }

    return stringFull;
}

const merge2 = (p1, p2) => {
    return [...p1].map(function (element, i) {
        return `${element}${p2[i] || ""}`
    }).join("");
}

const handleStringFull = (value) => {
    return (value != undefined) ? value : "";
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(() => {
        count.current++;
        myInput2.current.focus();
    }, [value1])
    
    useEffect(() => {
        count.current++;
        myInput1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exemplo 01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge2(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input ref={myInput1} type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exemplo 02" />
            <div className="center">
                <input ref={myInput2} type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} />
            </div>

        </div>
    )
}

export default UseRef

import React, { useContext, useEffect } from 'react'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = (props) => {
    //Execicio 1
    const { state, setState } = useContext(DataContext)

    const addNumber = (n) => {
        setState({
            ...state,
            number: state.number + n
        })
    }

    //Execicio 2
    const { number, text, setNumber, setText } = useContext(AppContext);

    useEffect(() => {
        if(number == 1250)
            setText("Caminho sem volta!!!");
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Execicio 1" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Execicio 2" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext

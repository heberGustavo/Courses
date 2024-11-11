import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from "../../store/index";
import { login, numberAdd2 } from "../../store/actions/index";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user}</span>
                ) : (
                    <span className="text">Sem usuário</span>
                )}
                <span className="text">{state.number}</span>
                
                <button className="btn" onClick={() => login(dispatch, "Heber Gust.")}>Login</button>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberMult7" })}>x7</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberDiv25" })} >/25</button>
                    <button className="btn" onClick={() => dispatch({ type: "numberN", payload: 1000 })}>Add number</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer

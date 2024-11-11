import React, { useCallback, useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from '../../components/UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const sum = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons sum={sum} />
            </div>
        </div>
    )
}

export default UseCallback

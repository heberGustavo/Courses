const initialState = {
    cart: [],
    products: [],
    favorites: [],
    user: null,
    number: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 };
        case 'login':
            return { ...state, user: action.payload };
        case 'numberMult7':
            return {...state, number: state.number * 7 }
        case 'numberDiv25':
            return {...state, number: parseInt(state.number / 25) }
        case 'numberN':
            return {...state, number: state.number + action.payload }
        default:
            return state;
    }
}

export {
    initialState,
    reducer,
}
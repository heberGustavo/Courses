import { legacy_createStore as createStore, combineReducers  } from "redux";

import numerosReducer from "./reducers/numeros";

const reduces = combineReducers({
    numeros: numerosReducer,
})

export default function storeConfig(){
    return createStore(reduces);
}

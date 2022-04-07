import { applyMiddleware, combineReducers, createStore } from "redux";
import catalogReducer from "./catalogReducer";
import createSagaMiddleware from 'redux-saga';
import { datahWatcher } from "./sagas";

let rootReducer = combineReducers({
    catalogState: catalogReducer,  
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(datahWatcher);

export default store;
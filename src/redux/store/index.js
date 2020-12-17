//main
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//reducers
import rootReducer from "redux/reducers";

//rootSaga
import rootSaga from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

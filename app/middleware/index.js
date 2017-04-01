import createSagaMiddleWare from 'redux-saga';
import root from '../sagas/index';

//T?odo!
const createSaga = createSagaMiddleWare.default ? createSagaMiddleWare.default : createSagaMiddleWare;

const sagaMiddleware = createSaga();

const setup = () => {
    sagaMiddleware.run(root);
};

export default {
    middleware: [sagaMiddleware],
    setup: setup
};
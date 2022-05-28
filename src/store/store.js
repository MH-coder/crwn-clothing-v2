import { createStore, compose, applyMiddleware } from 'redux'

import logger from 'redux-logger'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'

const sagaMiddleware = createSagaMiddleware()

const middleWares = [logger, sagaMiddleware]
const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistedStore = persistStore(store)
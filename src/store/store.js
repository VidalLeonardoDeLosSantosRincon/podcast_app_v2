import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit';

//reducers
import { AppReducer } from "./reducers/AppReducer";

const Reducers = combineReducers({AppReducer});

export const Store = configureStore({reducer: Reducers});;
import { all } from "redux-saga/effects";
import BooksSagas from "./book";


export default function* rootSaga(){
    yield all([
        ...BooksSagas
    ])
}
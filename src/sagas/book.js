import {takeEvery,call,fork,put,takeLatest,take} from "redux-saga/effects";
// import { getBooksRequest } from "../actions";

function* getBooks(){
    yield put({
        type: "GET_BOOKS"
    })
}

function* watchGetBooksRequest(){
    yield takeEvery('GET_BOOKS_REQUEST', getBooks)
}

const booksSagas = [
    fork(watchGetBooksRequest),
]

export default booksSagas;
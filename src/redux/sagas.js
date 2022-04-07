import { call, put, takeEvery } from "redux-saga/effects";
import { getDataApi } from "../api/api";
import { getData, GET_DATA_ACTION } from "./catalogReducer";

function* dataWorker () {
    const data = yield call(() => getDataApi());

    yield put(getData(data));
}

export function* datahWatcher() {
    yield takeEvery(GET_DATA_ACTION, dataWorker);
}
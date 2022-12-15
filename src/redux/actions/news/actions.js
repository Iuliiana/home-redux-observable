import {
    NEWS_LIST_FAIL,
    NEWS_LIST_REQUEST,
    NEWS_LIST_SUCCESS
} from "./actionsType";

export const geNewsListRequest = (lastNewsId) => ({
    type: NEWS_LIST_REQUEST, payload: {lastNewsId}
});

export const geNewsListSuccess = (newsList) => ({
    type: NEWS_LIST_SUCCESS, payload: {newsList}
});

export const geNewsListFail = (error) => ({
    type: NEWS_LIST_FAIL, payload: {error}
});


import {
    DELETE_LAST_NEWS_ID,
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

export const deleteLastNewsId = () => ({
    type: DELETE_LAST_NEWS_ID, payload: {}
});


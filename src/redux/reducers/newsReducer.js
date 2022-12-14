import {
    DELETE_LAST_NEWS_ID,
    NEWS_LIST_FAIL,
    NEWS_LIST_REQUEST,
    NEWS_LIST_SUCCESS,
} from "../actions/news/actionsType";

const initialState = {
    group: {
        name: 'Нетология. Меняем карьеру через образование',
        logo: 'https://sun1-95.userapi.com/s/v1/ig2/q6sxepgprtgCnrodYqfE65W5xRjUv-JRm3d5YHmFh_h4p40HlZBGldW863X5-MkSgaH-rDOatBvgkzIxDJerdEwj.jpg?size=100x100&quality=96&crop=0,0,500,500&ava=1'
    },
    newsList: [],
    lastNewsId: '',
    isLoading: false,
    isEnd: false,
    error: null
};

const NEWS_LIMIT = 5;

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS_LIST_REQUEST:
            return {...state, lastNewsId: '', isLoading: true, error: null};
        case NEWS_LIST_SUCCESS:
            const {newsList} = action.payload;
            const isEndData = newsList.length === 0 || newsList.length < 5;
            return {
                ...state,
                newsList: [...state.newsList, ...newsList],
                isLoading: false,
                error: null,
                isEnd: isEndData,
                lastNewsId: newsList[newsList.length - 1]?.id || null
            }
        case NEWS_LIST_FAIL:
            const {error} = action.payload;
            return {...state, isLoading: false, error: error};
        case DELETE_LAST_NEWS_ID:
            return;
        default:
            return state;
    }

}
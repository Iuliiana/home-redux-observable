import {
    CHANGE_SEARCH_SKILLS,
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_RESET,
    SEARCH_SKILLS_SUCCESS
} from "../actions/skills/actionsType";


const initialState = {
    loading: false,
    collection: [],
    error: '',
    searchQuery: ''
};

export default function skillsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SEARCH_SKILLS:
            const {searchQuery} = action.payload;
            return {...state, searchQuery: searchQuery};
        case SEARCH_SKILLS_REQUEST:
            return {...state, collection: [], loading: true, error: null}
        case SEARCH_SKILLS_SUCCESS:
            const {collection} = action.payload;
            return {...state, collection: collection || [], loading: false, error: null};
        case SEARCH_SKILLS_FAILURE:
            const {error} = action.payload;
            return {...state, collection: [], loading: false, error};
        case SEARCH_SKILLS_RESET:
            return {...state, ...initialState};
        default:
            return state;
    }
}
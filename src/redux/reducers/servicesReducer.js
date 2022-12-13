import {
    SERVICE_DETAIL_REQUEST,
    SERVICE_DETAIL_SUCCESS, SERVICES_FAILURE,
    SERVICES_LIST_REQUEST,
    SERVICES_LIST_SUCCESS
} from "../actions/services/actionsType";

const initialState = {
    servicesList: [],
    detail: {},
    isLoading: false,
    error: null
};

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case SERVICES_LIST_REQUEST:
            return {...state, isLoading: true, servicesList: [], detail: {}, error: null};
        case SERVICES_LIST_SUCCESS:
            const {services} = action.payload;
            return {...state, isLoading: false, servicesList: services, error: null};
        case SERVICE_DETAIL_REQUEST:
            return {...state, isLoading: true, detail: {}, error: null};
        case SERVICE_DETAIL_SUCCESS:
            const {service} = action.payload;
            return {...state, isLoading: false, detail: service, error: null};
        case SERVICES_FAILURE:
            const {error} = action.payload;
            return {...state, isLoading: false, detail: {}, servicesList: [], error: error}
        default:
            return state;
    }
}
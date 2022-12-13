import {
    SERVICE_DETAIL_REQUEST,
    SERVICE_DETAIL_SUCCESS,
    SERVICES_FAILURE,
    SERVICES_LIST_REQUEST,
    SERVICES_LIST_SUCCESS
} from "./actionsType";

export const getServicesListRequest = () => ({
    type: SERVICES_LIST_REQUEST, payload: {}
});

export const getServicesListSuccess = (services) => ({
    type: SERVICES_LIST_SUCCESS, payload: {services}
});

export const getServiceDetailRequest = (serviceId) => ({
    type: SERVICE_DETAIL_REQUEST, payload: {serviceId}
});

export const getServiceDetailSuccess = (service) => ({
    type: SERVICE_DETAIL_SUCCESS, payload: {service}
});


export const servicesFailure = (error) => ({
    type: SERVICES_FAILURE, payload: {error}
});

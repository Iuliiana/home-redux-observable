import {ofType} from "redux-observable";
import {SERVICE_DETAIL_REQUEST, SERVICES_LIST_REQUEST} from "../actions/services/actionsType";
import {catchError, map, of, switchMap} from "rxjs";
import {getServiceDetailSuccess, getServicesListSuccess, servicesFailure} from "../actions/services/actions";

// const RETRY_COUNT = 2;

export const getServicesListEpic = (action$, state$, {getJSON}) => action$.pipe(
    ofType(SERVICES_LIST_REQUEST),
    switchMap(() => getJSON(`${process.env.REACT_APP_URL}/api/services`).pipe(
        map(services => getServicesListSuccess(services)),
        // retry(RETRY_COUNT),
        catchError(err => of(servicesFailure(err))),
    )),
)

export const getServicesDetailEpic = (action$, state$, {getJSON}) => action$.pipe(
    ofType(SERVICE_DETAIL_REQUEST),
    switchMap(({payload}) => getJSON(`${process.env.REACT_APP_URL}/api/services/${payload.serviceId}`).pipe(
        map(service => getServiceDetailSuccess(service)),
        // retry(RETRY_COUNT),
        catchError(err => of(servicesFailure(err)))
    ))
)
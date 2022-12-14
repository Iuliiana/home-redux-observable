import {ofType} from "redux-observable";
import {catchError, map, of, switchMap, retry, tap} from "rxjs";
import {NEWS_LIST_REQUEST} from "../actions/news/actionsType";
import {geNewsListFail, geNewsListSuccess} from "../actions/news/actions";

const RETRY_COUNT = 3;

export const getNewsListEpic = (action$, state$, {getJSON}) => action$.pipe(
    ofType(NEWS_LIST_REQUEST),
    map(o => o.payload.lastNewsId),
    map(o => o ? new URLSearchParams({lastSeenId: o}) : ''),
    switchMap((o) => getJSON(`${process.env.REACT_APP_URL}/api/news${(o) && '?' + o}`).pipe(
        map(newsList => geNewsListSuccess(newsList)),
        retry(RETRY_COUNT),
        catchError(err => of(geNewsListFail(err))),
    )),
)


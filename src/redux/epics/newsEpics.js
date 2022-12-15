import {ofType} from "redux-observable";
import {catchError, map, of, switchMap, retry, tap, retryWhen, timer, delayWhen} from "rxjs";
import {NEWS_LIST_REQUEST} from "../actions/news/actionsType";
import {geNewsListFail, geNewsListSuccess} from "../actions/news/actions";

const RETRY_DELAY = 3;

export const getNewsListEpic = (action$, state$, {getJSON}) => action$.pipe(
    ofType(NEWS_LIST_REQUEST),
    map(o => o.payload.lastNewsId),
    map(o => o ? new URLSearchParams({lastSeenId: o}) : ''),
    switchMap((o) => getJSON(`${process.env.REACT_APP_URL}/api/news${(o) && '?' + o}`).pipe(
        map(newsList => geNewsListSuccess(newsList)),
        retryWhen(err => err.pipe(
            delayWhen(() => timer(RETRY_DELAY * 1000))
        )),
        catchError(err => of(geNewsListFail(err))),
    )),
)

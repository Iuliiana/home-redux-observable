import {ofType} from "redux-observable";
import {CHANGE_SEARCH_SKILLS, SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_RESET} from "../actions/skills/actionsType";
import {catchError, debounceTime, filter, map, of, repeat, switchMap, takeUntil} from "rxjs";
import {
    searchSkillsFailure,
    searchSkillsRequest,
    searchSkillsSuccess
} from "../actions/skills/actions";
import {ajax} from 'rxjs/ajax';

export const changeSearchSkillsEpic = (action$) => action$.pipe(
    ofType(CHANGE_SEARCH_SKILLS),
    map(o => o.payload.searchQuery.trim()),
    filter(o => o !== ''),
    debounceTime(100),
    map(o => searchSkillsRequest(o))
);

export const searchSkillsEpic = (action$) => action$.pipe(
    ofType(SEARCH_SKILLS_REQUEST),
    map(o => o.payload.searchQuery),
    map(o => new URLSearchParams({q: o})),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_URL}/api/search?${o}`).pipe(
        map(o => searchSkillsSuccess(o)),
        catchError(e => of(searchSkillsFailure(e)))
    )),
    takeUntil(action$.pipe(
        ofType(SEARCH_SKILLS_RESET)),
    ),
    repeat(),
    // startWith({type: 'searchSkillsReset'}),
    catchError(e => of(searchSkillsFailure(e)))
);
import {createStore, combineReducers, applyMiddleware, compose,} from 'redux';
import skillsReducer from "./reducers/skillsReducer";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {changeSearchSkillsEpic, searchSkillsEpic} from "./epics/skillsEpics";
import {catchError} from "rxjs";


const reducer = combineReducers({
    skills: skillsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epics = combineEpics(
    changeSearchSkillsEpic,
    searchSkillsEpic
);

const rootEpic = (action$, store$, dependencies) =>
    epics(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );


const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(rootEpic);
export default store;
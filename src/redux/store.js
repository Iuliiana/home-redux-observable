import {createStore, combineReducers, applyMiddleware, compose,} from 'redux';
import skillsReducer from "./reducers/skillsReducer";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {changeSearchSkillsEpic, searchSkillsEpic} from "./epics/skillsEpics";
import {catchError} from "rxjs";
import {ajax} from "rxjs/ajax";
import servicesReducer from "./reducers/servicesReducer";
import {getServicesDetailEpic, getServicesListEpic} from "./epics/servicesEpics";


const reducer = combineReducers({
    skills: skillsReducer,
    services: servicesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epics = combineEpics(
    changeSearchSkillsEpic,
    searchSkillsEpic,
    getServicesListEpic,
    getServicesDetailEpic,
);

const rootEpic = (action$, store$, dependencies) =>
    epics(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );


const epicMiddleware = createEpicMiddleware(
    {
        dependencies: {getJSON: ajax.getJSON},
    }
);

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(rootEpic);
export default store;
import React from 'react';
import {Search} from "../components/Search";
import {useSelector} from "react-redux";
import {Error} from "../ui/error/Error";
import {Preloader} from "../ui/preloader/preloader";

const Task1 = () => {
    const {collection, loading, error, searchQuery} = useSelector(state => state.skills);
    const hasQuery = searchQuery !== '';

    return (
        <div className="search-container">

            <Search/>
            {!hasQuery && <div>Type something to search</div>}
            {hasQuery && loading && <Preloader/>}
            {hasQuery && !loading && collection.length === 0 && !error && <div>No result</div>}
            {error
                ? <Error {...error}/>
                : <ul className="search-result">
                    {collection.map((skill) => <li key={skill.id}><span className="text">{skill.name}</span></li>)}
                </ul>}
        </div>

    );
}

export {Task1};
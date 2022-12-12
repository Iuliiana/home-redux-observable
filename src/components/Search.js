import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from "../ui/input/Input";
import {changeSearchSkills, searchSkillsReset} from "../redux/actions/skills/actions";

const Search = () => {
    const {searchQuery} = useSelector(state => state.skills);
    const dispatch = useDispatch();

    const handleChangeSearch = (e) => {
        if (e.target.value.trim() === '' && searchQuery === '')
            return;

        if (e.target.value.trim() === '')
            dispatch(searchSkillsReset());

        dispatch(changeSearchSkills(e.target.value))
    }

    return (
        <Input value={searchQuery} onChange={(e) => handleChangeSearch(e)}/>
    );
}

export {Search};
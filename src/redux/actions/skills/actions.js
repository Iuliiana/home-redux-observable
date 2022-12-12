import {
    CHANGE_SEARCH_SKILLS,
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_RESET,
    SEARCH_SKILLS_SUCCESS
} from "./actionsType";

export const searchSkillsRequest = searchQuery => ({
    type: SEARCH_SKILLS_REQUEST, payload: {searchQuery}
});

export const searchSkillsSuccess = (collection) => ({
    type: SEARCH_SKILLS_SUCCESS, payload: {collection}
});

export const searchSkillsFailure = (error) => ({
    type: SEARCH_SKILLS_FAILURE, payload: {error}
});

export const changeSearchSkills = (searchQuery) => ({
    type: CHANGE_SEARCH_SKILLS, payload: {searchQuery}
});

export const searchSkillsReset = () => ({
    type: SEARCH_SKILLS_RESET, payload: {}
});

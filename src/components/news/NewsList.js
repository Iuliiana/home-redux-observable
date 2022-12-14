import React, {useEffect} from 'react';
import NewsItem from "./NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {geNewsListRequest} from "../../redux/actions/news/actions";
import {Button} from "../../ui/button/Button";
import {Preloader} from "../../ui/preloader/preloader";

const NewsList = () => {
    const {newsList, isLoading, lastNewsId, isEnd, group} = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isEnd)
            dispatch(geNewsListRequest(lastNewsId));
    }, [isEnd])

    const handleMoreNewsLoad = () => {
        if (!isEnd && !isLoading)
            dispatch(geNewsListRequest(lastNewsId));
    }

    return (
        <>
            {isLoading && !lastNewsId && (!newsList.length) && <Preloader/>}
            {
                <div className="news-list d-flex align-items-center flex-column">
                    {newsList.map(news => <NewsItem key={news.id} {...news} group={group}/>)}
                </div>
            }
            {!isEnd && Boolean(newsList.length) &&
                <Button onClick={handleMoreNewsLoad} className={`load ${isLoading && 'loaded'}`} disabled={isLoading}>к
                    предыдущим
                    записям</Button>}

        </>

    );
};

export default NewsList;
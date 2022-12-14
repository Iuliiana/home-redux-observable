import React from 'react';
import NewsList from "../components/news/NewsList";


const News = () => {
    return (
        <section className="news d-flex flex-column justify-content-center">
            <NewsList/>
        </section>
    );
}

export {News};
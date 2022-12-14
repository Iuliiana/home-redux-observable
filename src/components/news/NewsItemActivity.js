import React from 'react';

const NewsItemActivity = (props) => {
    return (
        <div className={`news-item-activity-item news-item-activity__${props.type}`}>
            <div className="_icon">
                <svg>
                    <use xlinkHref={`/sprite.svg#${props.type}`}/>
                </svg>
            </div>
            <div className="_count">{props.count}</div>
        </div>
    );
};

export default NewsItemActivity;
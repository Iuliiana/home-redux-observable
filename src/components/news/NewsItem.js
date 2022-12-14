import React from 'react';
import 'moment/locale/ru';
import moment from "moment";
import propTypes from "prop-types";
import NewsItemAttachment from "./NewsItemAttachment";
import uuid from "react-uuid";
import NewsItemActivity from "./NewsItemActivity";

const NewsItem = (props) => {
    const isAttachments = props.attachments !== [] || props.attachments !== null;

    return (
        <div className="news-item">
            <div className="news-item-header d-flex">
                <img className="news-item-header__icon" alt={props.group.name}
                     src={props.group.logo}/>
                <div className="news-item-header__text  d-flex">
                    <h5>{props.group.name}</h5>
                    <p className="_time">{moment.unix(props.date).format("DD MMM hh:mm")}</p>
                </div>
            </div>
            <div className="news-item-description">
                {props.text}
            </div>

            {
                isAttachments && props.attachments.map(attach => <NewsItemAttachment key={uuid()} {...attach}/>)
            }


            <div className="news-item-activity d-flex align-items-center">
                {
                    ['likes', 'comments', 'reposts', 'views'].map(activity => <NewsItemActivity key={uuid()}
                                                                                                type={activity}
                                                                                                count={props[activity]?.count}/>)
                }
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    id: propTypes.number.isRequired,
    date: propTypes.number.isRequired, //timestamp,
    text: propTypes.string.isRequired,
    attachments: propTypes.array,
    comments: propTypes.shape({
        count: propTypes.number.isRequired,
    }),
    likes: propTypes.shape({
        count: propTypes.number.isRequired,
    }),
    reposts: propTypes.shape({
        count: propTypes.number.isRequired,
    }),
    views: propTypes.shape({
        count: propTypes.number.isRequired,
    })
}

export default NewsItem;
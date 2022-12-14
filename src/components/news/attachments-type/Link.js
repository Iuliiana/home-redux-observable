import React from 'react';

const Link = (props) => {
    return (
        <div className="news-item-link">
            {
                Boolean(props.photo) && <a href="https://netolo.gy" className="news-item-img">
                    {/*ссылки битые - поэтому заглушка*/}
                    <img src="https://sun1-86.userapi.com/RJNGxdccN6jlHGhWWHoS4wBnRd8Ya05_2RI32Q/J39SMhPygzM.jpg"
                         alt={props.title}/>
                    <button className="news-item__save">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             viewBox="0 0 24 24">
                            <path fillRule="evenodd"
                                  d="M12.55 4.7a.6.6 0 0 0-1.1 0L9.83 8.6a.9.9 0 0 1-.77.55l-4.13.26a.6.6 0 0 0-.35 1.05l3.26 2.86a.9.9 0 0 1 .29.9l-.94 3.84a.6.6 0 0 0 .89.66l3.47-2a.9.9 0 0 1 .9 0l3.47 2a.6.6 0 0 0 .88-.66l-.93-3.85a.9.9 0 0 1 .29-.89l3.26-2.86a.6.6 0 0 0-.35-1.05l-4.13-.26a.9.9 0 0 1-.77-.56l-1.62-3.9ZM9.78 4a2.4 2.4 0 0 1 4.44 0l1.4 3.39 3.56.23a2.4 2.4 0 0 1 1.43 4.2l-2.86 2.5.8 3.32a2.4 2.4 0 0 1-3.53 2.64L12 18.54l-3.02 1.74a2.4 2.4 0 0 1-3.54-2.64l.8-3.32-2.85-2.5a2.4 2.4 0 0 1 1.43-4.2l3.56-.23L9.78 4Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </a>
            }
            <div className="news-item-link-description">
                <h4>
                    <a href={props.url}>{props.title}</a>
                </h4>
                <p>
                    {props.description}
                </p>

                {Boolean(props.caption) && <p>
                    <a href={props.caption}>{props.caption}</a>
                </p>}

            </div>
        </div>
    );
};

export default Link;
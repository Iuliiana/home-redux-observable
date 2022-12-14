import React from 'react';

const Video = (props) => {
    return (
        <div className="news-item-video">
            {/*здесь должна быть превью. тоже газгушка на видео*/}
            <div className="news-item-video__play">
                <iframe src="https://vk.com/video_ext.php?oid=-30159897&id=456239831&hash=a25b6ccba1ebefe4&hd=2"
                        width="784" height="350" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                        frameBorder="0" allowFullScreen
                        title="Education show"/>
            </div>
        </div>
    );
};

export default Video;
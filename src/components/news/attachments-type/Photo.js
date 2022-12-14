import React from 'react';

const Photo = (props) => {
    return (
        <div className="news-item-photo news-item-img">
            {/*props.sizes.url*/}
            <img
                src="https://sun1-87.userapi.com/impg/OPHooD7KalVnT7fz3UsR-HH8pH-J1TchfBLvsg/fhEKpGEhdv8.jpg?size=1080x1080&quality=95&sign=04f1567194c2a081be2b031119d629c6&type=album"
                alt={props.text}/>
        </div>
    );
};

export default Photo;
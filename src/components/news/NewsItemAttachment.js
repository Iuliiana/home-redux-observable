import React from 'react';
import Link from "./attachments-type/Link";
import Photo from "./attachments-type/Photo";
import Video from "./attachments-type/Video";

const NewsItemAttachment = (props) => {
    switch (props.type) {
        case 'link':
            return <Link {...props[props.type]}/>;
        case 'photo':
            return <Photo {...props[props.type]}/>;
        case 'video':
            return <Video {...props[props.type]}/>;
        default:
            return false;
    }
};

export default NewsItemAttachment;
//name price content id
import React from 'react';
import propTypes from "prop-types";
import {NavLink} from "react-router-dom";

const ServicesItem = (props) => {
    const {
        id,
        name,
        price
    } = props

    return (
        <tr>
            <td className="link"><NavLink to={`/${id}/details`}>{name}</NavLink></td>
            <td>{price}</td>
        </tr>
    );
};

ServicesItem.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired
}

export default ServicesItem;
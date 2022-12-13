import React from 'react';
import propTypes from "prop-types";
import ServicesItem from "./ServicesItem";

const ServicesList = (props) => {
    const list = props.servicesList;
    return (
        <table className="services">
            <caption>Услуги:</caption>
            <thead>
            <tr>
                <th>Наименование</th>
                <th>Стоимость</th>
            </tr>
            </thead>
            <tbody>
                {list.map(service => <ServicesItem key={service.id} {...service}/>)}
            </tbody>

        </table>

    );
};

ServicesList.propTypes = {
    servicesList: propTypes.array.isRequired
}

export default ServicesList;
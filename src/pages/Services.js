import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getServicesListRequest} from "../redux/actions/services/actions";
import ServicesList from "../components/services/ServicesList";
import {Preloader} from "../ui/preloader/preloader";
import {Error} from "../ui/error/Error";
import {Notfound} from "./Notfound";

const Services = () => {
    const {servicesList, error, isLoading} = useSelector(state => state.services);
    const dispatch = useDispatch();
    const isEmptyServicesList = Array.isArray(servicesList) && servicesList.length;


    useEffect(() => {
        dispatch(getServicesListRequest());
    }, [])

    const handleRestartQuery = () => {
        dispatch(getServicesListRequest());
    }

    return (
        <section className='services-container'>
            {isLoading && <Preloader/>}
            {!isLoading && (
                !error
                    ? (isEmptyServicesList && <ServicesList servicesList={servicesList}/>) || <Notfound/>
                    : <Error {...error} type="restart" children="Повторить запрос" onClick={handleRestartQuery}/>
            )
            }
        </section>
    );
}

export {Services};
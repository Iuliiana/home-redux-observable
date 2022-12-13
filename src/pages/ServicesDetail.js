import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getServiceDetailRequest} from "../redux/actions/services/actions";
import {useParams} from "react-router-dom";
import {Preloader} from "../ui/preloader/preloader";
import {Error} from "../ui/error/Error";
import {isEmpty} from "../helper";
import {Notfound} from "./Notfound";


const ServicesDetail = () => {
    const {serviceId} = useParams();
    const dispatch = useDispatch();
    const {detail, error, isLoading} = useSelector(state => state.services);

    useEffect(() => {
        dispatch(getServiceDetailRequest(serviceId));
    }, [])

    const handleRestartQuery = () => {
        dispatch(getServiceDetailRequest(serviceId));
    }


    return (
        <section className='services-container'>
            {isLoading && <Preloader/>}
            {!isLoading && (
                error
                    ? <Error {...error} type="restart" children="Повторить запрос" onClick={handleRestartQuery}/>
                    : (!isEmpty(detail) && (
                    <div className='service-detail'>
                        <h5><b>{detail.id}</b> {' '} {detail.name} </h5>
                        <p>{detail.content}</p>
                        <p>Цена: <span>{detail.price}</span></p>
                    </div> )) || <Notfound />
                )
            }
        </section>

    );
};

export default ServicesDetail;
import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.svg'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <div className='content' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <div className='card-content-image'>
                <Image
                    className='img-product'
                    // width={150}
                    // height={120}
                    src={device.img}
                />
            </div>
            <div className='card-content'>
                <span className='title'>{device.name}</span>
                <span className='price'>{device.price} ₽</span>
            </div>
            <div className='card-content'>
                <div>
                    <div className='star'>
                        <Image src={star}/>
                    </div>
                    <span>{device.rate}</span>
                </div>
                <div>
                    <button className='button-add'>купить</button>
                </div>
            </div>
        </div>
)
    ;
};

export default DeviceItem;
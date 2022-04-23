import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/star.svg'

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Apple EarPods',
        price: 5999,
        rating: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewgam_BrdO_OIqrFzDdqLdbYI1mEZ6EZTBA&usqp=CAU'
    }
    const description = [
        {id: 1, title: 'Гарантия', description: '12 мес'},
        {id: 2, title: 'Микрофон', description: '+'},
        {id: 3, title: 'Мин частота', description: '20 Гц'},
        {id: 4, title: 'Макс частота', description: '20 000 Гц'},
        {id: 5, title: 'Способ соединения', description: 'проводной'},
        {id: 6, title: 'Разъем', description: 'Lightning'},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{
                                background: `url(${star}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price} ₽</h3>
                        <Button>В корзину</Button>
                    </Card>
                </Col>

                <Col md={4}>

                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h4>Характеристики</h4>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;
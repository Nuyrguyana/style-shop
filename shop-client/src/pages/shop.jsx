import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import TypeBar from "../components/typeBar";
import BrandBar from "../components/brandBar";
import DeviceList from "../components/deviceList";
import '../style.css'

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    {/*<BrandBar/>*/}
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;
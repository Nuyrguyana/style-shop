import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row>
            {device.brands.map(brand =>
                    <div
                        style={{cursor: 'pointer'}}
                        key={brand.id}
                        className='brand-bar'
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </div>
            )}

        </Row>
    );
});

export default BrandBar;
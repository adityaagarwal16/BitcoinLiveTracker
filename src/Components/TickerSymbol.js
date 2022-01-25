import React from 'react';
import {Col, Row} from "react-bootstrap";
import "./TickerMetadata.css"

function TickerSymbol(props) {

    const price = props.price;
    const volume = props.volume;

    return (
        <div>
            <Row>
                <Col xs={12} md={6}>
                    {/*Displays current price of 1 BTC*/}
                    <div data-testid={"price"} className="tickerCard p-4 mt-3 mb-1">
                        <h3 data-testid={"priceTitle"}>BITCOIN</h3>
                        <h1 data-testid={"priceValue"}
                            className={"mt-2"}>$ {price.toFixed(2)}</h1>
                        <i data-testid={"priceImg"}
                           className="d-flex align-top justify-content-end fa fa-btc fa-2x"
                           style={{color:"#3DC3EA"}} aria-hidden="true"/>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    {/*Displays total volume traded in given time frame*/}
                    <div data-testid={'volume'} className="tickerCard p-4 mt-3 mb-1">
                        <h3 data-testid={'volumeTitle'}>Volume</h3>
                        <h1 data-testid={'volumeValue'}
                                       className={"mt-2"}>BTC {(volume).toFixed(4)}</h1>
                        <i data-testid={"volumeImg"}
                           className="d-flex align-top justify-content-end fa fa-line-chart fa-2x"
                           style={{color:"#3DC3EA"}} aria-hidden="true"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default TickerSymbol;

import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import "./TickerMetadata.css"

/*Shows the high and low values*/
function Metadata(props) {

    let high = props.high;
    let low = props.low;

    return (
        <div>
            <Row>
                <Col xs={6} md={4} lg={3}>
                    {/*shows the highest value of BTC in given time frame*/}
                    <div data-testid={"high"} className="tickerCard p-4 mt-3">
                        <h4 data-testid={"highTitle"} >HIGH</h4>
                        <h2 data-testid={"highValue"} style={{color:"rgb(33,162,33)"}}
                            className={"mt-2"}>$ {high.toFixed(2)}</h2>
                    </div>
                </Col>
                <Col xs={6} md={4} lg={3}>
                    {/*shows the lowest value of BTC in given time frame*/}
                    <div data-testid={"low"} className="tickerCard p-4 mt-3">
                        <h4 data-testid={"lowTitle"}>LOW</h4>
                        <h2 data-testid={"lowValue"} style={{color:"rgb(164,20,20)"}}
                            className={"mt-2"}>$ {(low).toFixed(2)}</h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Metadata;

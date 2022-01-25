import React, {Component} from 'react';
import {w3cwebsocket as W3cwebSocket} from "websocket";
import TickerSymbol from "./Components/TickerSymbol";
import {Container} from "react-bootstrap";
import MixedChart from "./Components/MixedChart";
import "./Dashboard.css"
import Metadata from "./Components/Metadata";

/*
* client for websocket API*/
export const client = new W3cwebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

/*gives the date in HH:mm:ss format from milliseconds*/
export function getDate(time) {
    let date = new Date(time)
    return `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
}

/*
  * color of the volume bar graph
  * gives green if the current price has increased, red if decreased
*/
export function getColor(prev,  current) {
    if(current>prev)
        return 'rgb(33,162,33)'
    else
        return 'rgb(164,20,20)'
}

export default class Dashboard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            /*variables displayed on UI */
            time : 0.0,
            totalVolume : 0.0,
            displayBitcoinPrice : 0.0,

            /*
            * variables that are updated through socket
            * these are different from the above variables as they are updated continuously
            * the value of these variables is copied to the above
              variables periodically and they are displayed
            */
            currentVolume : 0,
            bitcoinPrice : 0,

            //data for the graph
            priceData : [],
            volumeData : [],
            colors : [],

            //metadata
            high : Number.MIN_SAFE_INTEGER,
            low : Number.MAX_SAFE_INTEGER
        }
    }


    componentDidMount() {
        client.onopen = () => {
            console.log("client connected")
        }

        /*
        * since multiple trades take place in a second
        * we use a timer that periodically updates all UI values after 1.3 seconds
        */
        this.timerID = setInterval(() => {
            this.setState({
                //graph arrays
                priceData : [...this.state.priceData, {
                    label : getDate(this.state.time),
                    value: this.state.bitcoinPrice
                }],
                volumeData : [...this.state.volumeData, {
                    label : getDate(this.state.time),
                    value : this.state.currentVolume,
                }],
                colors : [...this.state.colors, getColor(this.state.displayBitcoinPrice,
                    this.state.bitcoinPrice)],

                //update dashboard values
                totalVolume : this.state.totalVolume + this.state.currentVolume,
                displayBitcoinPrice : this.state.bitcoinPrice,

                //metadata
                high : Math.max(this.state.bitcoinPrice, this.state.high),
                low: Math.min(this.state.bitcoinPrice, this.state.low)
            })
            }, 1300
        );

        /*
        * received from socket, updates the current variables*/
        client.onmessage = (message) => {
            const data = JSON.parse(message.data)
            this.setState({
                currentVolume : parseFloat(data.q),
                bitcoinPrice: parseFloat(data.p),
                time : parseFloat(data.E)
            })
        }

    }

    componentWillUnmount() {
        /*clear timer when component destroyed*/
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div data-testid={"dashboard"}>
                <Container className="pb-5">
                    <TickerSymbol price = {this.state.displayBitcoinPrice}
                                  volume = {this.state.totalVolume}/>
                    {/*chart*/}
                    <div className="chart-wrapper mt-5 mb-3">
                        <MixedChart
                            priceData = {this.state.priceData}
                            volumeData={this.state.volumeData}
                            color = {this.state.colors}
                        />
                    </div>
                    <Metadata className={"mb-5"}
                        high = {this.state.high}
                        low = {this.state.low}
                    />
                </Container>
            </div>
        );
    }
}

import Chart from "chart.js/auto";
import React, {Component} from 'react';

/*the live tracking graph for the website*/
export default class MixedChart extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    /*called whenever state is updated
    * updates the price, volume data and the color of bar graph*/
    componentDidUpdate(a,b,c) {
        this.myChart.data.labels = this.props.priceData.map(d => d.label);
        this.myChart.data.datasets[0].data = this.props.volumeData.map(d => d.value);
        this.myChart.data.datasets[1].data = this.props.priceData.map(d => d.value);
        this.myChart.data.datasets[0].backgroundColor = this.props.color;
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            options: {
                type : 'line',
                maintainAspectRatio: false,
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'BTC Live Tracker'
                    }
                },
                scales: {
                    yAxes: [{
                        id : 'price-axis',
                        display: true,
                        position : 'right',
                        type : 'linear',
                        ticks: {
                            beginAtZero : false,
                        },
                    }, {
                        id: 'volume-axis',
                        type : 'linear',
                        display : true,
                        position : 'left',
                    }]
                }
            },
            data: {
                labels: this.props.priceData.map(d => d.label),
                datasets: [{
                    type : 'bar',
                    label: "Volume",
                    data: this.props.volumeData.map(d => d.value),
                    backgroundColor: ['rgb(33,162,33)',  'rgb(164,20,20)'],
                    yAxisID: 'volume-axis',
                    order : 2
                }, {
                    type : 'line',
                    label: "Price",
                    fill: false,
                    data: this.props.priceData.map(d => d.value),
                    borderColor: 'rgb(61,195,234)',
                    pointRadius : 0,
                    yAxisID: 'price-axis',
                    order : 1
                }]
            }
        });
    }

    render() {
        return (
            <canvas data-testid={"mixedChart"} className={"mt-2"} ref={this.canvasRef}/>
        );
    }
}

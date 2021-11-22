import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Settings from './config.json';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.predictions = this.props.predictions;
    this.uploaded_data = JSON.parse(this.props.uploaded_data).slice(
      -Settings[0].display_len
    );

    this.up_prices = [];
    this.up_dates = [];
    this.pred_prices = [];
    this.pred_dates = [];
    this.up_current = 0;
    this.pred_current = 0;

    for (const obj of this.uploaded_data) {
      this.up_prices.push(obj['Open']);
      this.up_dates.push(obj['Date'].split(' ')[0]);
    }

    for (const obj of this.predictions) {
      this.pred_prices.push(obj['Open']);
      this.pred_dates.push(obj['Date'].split(' ')[0]);
    }

    this.state = {
      data: {
        x: [],
        y: [],
        type: 'scatter',
        mode: 'lines',
        line: {
          color: 'rgb(234, 162, 33)',
          width: 1.6,
          dash: 'solid',
        },
        fill: 'tozeroy',
        fillcolor: 'rgba(234, 162, 33, 0.034)',
      },
      layout: {
        autosize: true,
        title: {
          text: '',
          font: {
            size: 20,
            color: '#fff',
          },
        },
        xaxis: {
          title: '',
          nticks: 7,
          color: '#fff',
          autorange: true,
          showgrid: false,
          tickmode: 'auto',
          tickcolor: '#444',
          tickson: 'labels',
          zeroline: false,
          visible: false,
        },
        yaxis: {
          title: 'PRICES',
          color: '#fff',
          gridwidth: 0.1,
          showticklabels: true,
          autorange: false,
          zeroline: false,
          range: [0, 1],
        },
        margin: {
          l: 60,
          r: 60,
          t: 30,
          b: 30,
        },
        datarevision: 0,
        paper_bgcolor: 'rgba(17,17,17,0.64)',
        plot_bgcolor: 'rgba(20, 34, 47,0.82)',
        modebar: {
          orientation: 'v',
          remove: ['zoomin', 'zoomout', 'resetScale2d'],
          add: ['drawline', 'eraseshape'],
        },
        shapes: [],
      },
      revision: 0,
      config: {
        responsive: false,
        displaylogo: false,
        scrollZoom: true,
      },
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    const { config } = this.state;
    const resp = config.responsive;
    this.setState({ resp: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    let n_times = 0;
    let m_times = 0;
    const { data, layout } = this.state;
    const intervalID = setInterval(() => {
      if (n_times < this.up_prices.length) {
        data.y.push(this.getNextUpPrice());
        data.x.push(this.getNextUpDate());
        layout.yaxis.range = [
          Math.min(...data.y) - Math.min(...data.y) * 0.13,
          Math.max(...data.y) + Math.max(...data.y) * 0.13,
        ];
        this.setState({ revision: this.state.revision + 1 });
        this.up_current = this.up_current + 1;
        layout.datarevision = this.state.revision + 1;
        ++n_times;
      } else if (n_times >= this.up_prices.length) {
        layout.shapes = [
          {
            type: 'rect',
            xref: 'x',
            yref: 'paper',
            x0: this.up_dates[this.up_dates.length - 2],
            y0: 0,
            x1: this.up_dates[this.up_dates.length - 1],
            y1: 1,
            fillcolor: 'rgb(255, 102, 85)',
            opacity: 0.42,
            line: { width: 0.0 },
          },
        ];
        data.y.push(this.getNextPredPrice());
        data.x.push(this.getNextPredDate());
        layout.yaxis.range = [
          Math.min(...data.y) - Math.min(...data.y) * 0.13,
          Math.max(...data.y) + Math.max(...data.y) * 0.13,
        ];
        this.setState({ revision: this.state.revision + 1 });
        this.pred_current = this.pred_current + 1;
        layout.datarevision = this.state.revision + 1;
        if (++m_times === this.pred_prices.length) {
          layout.xaxis.visible = true;
          window.addEventListener('resize', this.handleResize);
          window.clearInterval(intervalID);
        }
      }
    }, 13);
  }

  getNextUpPrice = () => this.up_prices[this.up_current];
  getNextUpDate = () => this.up_dates[this.up_current];

  getNextPredPrice = () => this.pred_prices[this.pred_current];
  getNextPredDate = () => this.pred_dates[this.pred_current];

  render() {
    return (
      <div>
        <h1>Predictions</h1>
        <Plot
          className="w-100"
          data={[this.state.data]}
          layout={this.state.layout}
          revision={this.state.revison}
          config={this.state.config}
        />
      </div>
    );
  }
}

export default Chart;

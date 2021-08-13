import React from 'react';
import Chart from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import { fetchData, fetchDailyData, fetchDistinctData } from './api/index';
import StatePicker from './components/picker/statePicker';
import DistinctPicker from './components/picker/distinctPicker';
import RuralArbanChart from './components/Chart/ruralArbanChart';
import BarChart from './components/Chart/barchart';
import DatePicker from './components/picker/datepicker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
class App extends React.Component {
  state = {
    cardData: {},
    state: '',
    stateChartData: [],
    ageWisePieData: [],
  };
  async componentDidMount() {
    this.getCardData();
    this.getStateChart();
  }

  getCardData = async (cardValue) => {
    let fetchedData = {};
    if (cardValue) {
      fetchedData = await fetchData(cardValue);
    } else {
      fetchedData = await fetchData();
    }
    this.setState({ cardData: fetchedData });
  };

  getStateChart = async (stateValue) => {
    let dailyData = {};
    if (stateValue) {
      dailyData = await fetchDailyData(stateValue);
    } else {
      dailyData = await fetchDailyData(['Andhra Pradesh', 1]);
    }
    this.setState({ ageWisePieData: dailyData.weeklyVacAgeWiseReport });
    this.setState({ stateChartData: dailyData.last30DaysVaccination });
  };

  getDistinctData = async (distinctValue) => {
    const dailyData = await fetchDistinctData(distinctValue);
    this.setState({ stateChartData: dailyData.last30DaysVaccination });
  };

  handleStateChange = async (value) => {
    const stateSplit = value.split(',');
    this.getStateChart(stateSplit);
    this.getCardData(stateSplit);
  };
  handleDistinctChange = async (value) => {
    const distinctSplit = value.split(',');
    this.getDistinctData(distinctSplit);
    this.getCardData(distinctSplit);
  };
  handleDateChange = async (value) => {
    this.getStateChart();
    this.getCardData(value);
  };
  render() {
    return (
      <div>
        <div className="container" style={{ padding: '10px' }}>
          <h1>COWIN Tracker</h1>
        </div>
        <div className="container">
          <StatePicker handleStateChange={this.handleStateChange} />
          <DistinctPicker handleDistinctChange={this.handleDistinctChange} />
          <DatePicker handleDateChange={this.handleDateChange} />
        </div>
        <div className="container">
          <Cards data={this.state.cardData} />
        </div>
        <h3>Vaccination Trends</h3>
        <div className="container">
          <Chart stateChartData={this.state.stateChartData} />
        </div>
        <h3>Rural vs Urban Trends</h3>
        <div className="container">
          <RuralArbanChart stateChartData={this.state.stateChartData} />
        </div>
        <h3>Age Wise Trends</h3>
        <div className="container">
          <BarChart ageWisePieData={this.state.ageWisePieData} />
        </div>
      </div>
    );
  }
}

export default App;

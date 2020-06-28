import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart'


// import Chart from 'react-c3-component';
// import 'c3/c3.css';

// class Chart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       column1: ['data1', 30, 200, 100, 400, 150, 250],
//       column2: ['data2', 50, 20, 10, 40, 15, 25],
//     };

//     this.changeData = this.changeData.bind(this);
//   }

//   renderChart() {
//     c3.generate({
//       bindto: "#chart1",
//       data: {
//         columns: [this.state.column1, this.state.column2],
//       },
//     });
//   }

//   componentDidMount() {
//     this.renderChart();
//   }

//   componentDidUpdate() {
//     this.renderChart();
//   }

//   // Changes data to something arbitrary on button click
//   changeData() {
//     this.setState({
//       column1: ['data1', 70, 120, 30, 300, 230, 300],
//       column2: ['data2', 100, 120, 50, 140, 150, 80],
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart1"> 
//         </div>
        
//         <button onClick={this.changeData}>Change< /button>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Chart/>

      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

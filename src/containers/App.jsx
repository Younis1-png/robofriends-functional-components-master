import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  const fetchRobot = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  };

  // search robots
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter robots
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetchRobot();
    console.log(count);
  }, [count]); // Only run when count change

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchfield: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json())
//       .then(users => {this.setState({ robots: users})});
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter(robot =>{
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     })
//     return !robots.length ?
//       <h1>Loading</h1> :
//       (
//         <div className='tc'>
//           <h1 className='f1'>RoboFriends</h1>
//           <SearchBox searchChange={this.onSearchChange}/>
//           <Scroll>
//             <CardList robots={filteredRobots} />
//           </Scroll>
//         </div>
//       );
//   }
// }

// export default App;

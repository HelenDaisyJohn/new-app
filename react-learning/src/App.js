
// function App() {
//   return (
//     <div className="Container">
//       <div>
//         <h1>CRUD App with users</h1>
//         <div className="flex-row"> 
//         <div className="flex-large">
//           <h2> Add User</h2>
//         </div>
//         <div className="flex-large">
//           <h2>View user</h2>
//         </div>
//       </div>

const { Component } = require("react");
      
class App extends Component{
  render()
  {
  return(
    <div className="container">
      <h1>My Table</h1>
      <Table/>
    </div>
  )
  }
  }

export default App;


// import {Component} from 'react'

// import Table from './Table';

// class App extends Component{
// render()
// {
// return(
//   <div className="container">
//     <h1>My Table</h1>
//     <Table/>
//   </div>
// )
// }
// }
// export default App;
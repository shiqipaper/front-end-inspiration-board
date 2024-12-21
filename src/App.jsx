import './App.css'
import BoardList from './components/BoardList';
// import { useState } from 'react'
// import axios from 'axios';

const DATA = [
  {
    id: 1,
    title: "Goal Setting",
    owner: "John Doe"
  },
  {
    id: 2,
    title: "Health & Wellness",
    owner: "Jane Smith"
  },
  {
    id: 3,
    title: "New Business Ideas",
    owner: "Alice Johnson"
  },
  {
    id: 4,
    title: "Travel Bucket List",
    owner: "Mike Brown"
  }
];

function App() {
  

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <h2 className="team-name">Oops-we-built-it&apos;s </h2> */}
          <h1 className="logo">Inspiration Board</h1>
        </header>
        <main>
          <div>{<BoardList boardData={DATA}/>}</div>
        </main>
        {/* <NewBoardForm /> */}
      </div>
    </>
  );
};
    


export default App

import './App.css';
import BoardList from './components/BoardList';
import SelectedBoard from './components/SelectedBoard';
import { useState } from 'react';

const DATA = [
  {
    id: 1,
    title: "Project Ideas",
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
  const [boards, setBoards] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState("Select a Board from the Board List!");

  // Function to toggle the boards in box
  const toggleBoard = (id) => {
    setBoards((boards) => {
      return boards.map((board) => {
        if (board.id === id) {
          return { ...board, selected: !board.selected };
        }
        return board;
      });
    });
  };

  // Function to display selectedBoard title
  const displaySelectedBoard = (id) => {
    setSelectedBoard((selectedBoard) => {
      const board = boards.find((board) => board.id === id);
      return board ? board.title : selectedBoard;
    });
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="logo">Inspiration Board</h1>
        </header>
        <main className="main-content">
          <div className="board-list-container">
            <BoardList boardData={boards} onBoardTitle={toggleBoard} onSelectedBoard={displaySelectedBoard} />
          </div>
          <div className="selected-board-container">
            <h2 className="heading-board">Selected Board</h2>
            <SelectedBoard selectedTitle={selectedBoard}  />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

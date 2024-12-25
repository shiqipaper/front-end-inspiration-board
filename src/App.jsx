import './App.css';
import BoardList from './components/board-list/BoardList';
import NewBoardForm from './components/create-new-board/NewBoardForm';
import SelectedBoard from './components/selected-board/SelectedBoard';
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

const SELECT_BOARD_FROM_LIST = "Select a Board from the Board List!";
function App() {
  const [boards, setBoards] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState(SELECT_BOARD_FROM_LIST);


  // Function to display selectedBoard title
  const displaySelectedBoard = (id) => {
    setSelectedBoard((selectedBoard) => {
      const board = boards.find((board) => board.id === id);
      return board ? board.title : selectedBoard;
    });
  };
  const createNewBoard = (newBoard) => {
    setBoards([...boards, {
      ...newBoard,
      id: boards.length + 1,
    }])
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="logo">Inspiration Board</h1>
        </header>
        <main className="main-content">
          <div className="board-list-container">
            <BoardList boards={boards} onSelectBoard={displaySelectedBoard} />
          </div>
          <div className="selected-board-container">
            <h2 className="heading-board">Selected Board</h2>
            <SelectedBoard selectedTitle={selectedBoard}  />
          </div>
          <div className="new-board-form-contaner">
            <h2 className="heading-board">Create a new Board</h2>
            <NewBoardForm submitBoard={createNewBoard}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

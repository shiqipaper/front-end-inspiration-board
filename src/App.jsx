import './App.css';
import BoardList from './components/board-list/BoardList';
import CardList from './components/card-list/CardList';
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
const CARDS = [
  {
    id: 1,
    message: "Project Ideas",
    rate: 3
  },
  {
    id: 2,
    message: "Health & Wellness",
    rate: 0
  },
  {
    id: 3,
    message: "New Business Ideas",
    rate: 1
  },
  {
    id: 4,
    message: "Travel Bucket List",
    rate: 5
  }
];

const SELECT_BOARD_FROM_LIST = "Select a Board from the Board List!";
function App() {
  const [boards, setBoards] = useState(DATA);
  const [selectedBoard, setSelectedBoard] = useState(SELECT_BOARD_FROM_LIST);
  const [isShowNewBoard, setIsShowNewBoard] = useState(true);

  const [cards, setCards ] = useState(CARDS);
  const showCards = selectedBoard !== SELECT_BOARD_FROM_LIST;

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
  const hideOrShowNewBoardForm = () =>{
    setIsShowNewBoard((prev) => !prev)
  }
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id != id);
    setCards(updatedCards)
  }
  const rateCard = (id) => {
    const updatedCards = cards.map((card) => card.id === id ? {...card, rate: card.rate + 1}: card);
    setCards(updatedCards)
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
          <div className="new-board-form-container">
            <h2 className="heading-board">Create a new Board</h2>
            {
              isShowNewBoard && <NewBoardForm submitBoard={createNewBoard}/>
            }
            <button className="hide-or-show-button" type="button" onClick={hideOrShowNewBoardForm}>
              {
                isShowNewBoard ? 'Hide New Board Form' : 'Show New Board Form'
              }
            </button>
          </div>
              {
                showCards &&  <div className="card-list-container">
                <h2 className="heading-board">{`Cards for ${selectedBoard}`}</h2>
                <CardList 
                  cards={cards} 
                  onDeleteCard={deleteCard} 
                  onRateCard={rateCard}
                />
              </div>
              }
      
        </main>
      </div>
    </>
  );
}

export default App;

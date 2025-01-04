import './App.css';
import BoardList from './components/board-list/BoardList';
import CardList from './components/card-list/CardList';
import NewBoardForm from './components/create-new-board/NewBoardForm';
import SelectedBoard from './components/selected-board/SelectedBoard';
import NewCardForm from './components/create-new-card/NewCardForm';
import { useState, useEffect } from 'react';
import { getAllBoardsApi, createAllBoardApi, getBoardIdApi } from './api/boardApi';


const SELECT_BOARD_FROM_LIST = "Select a Board from the Board List!";
function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(SELECT_BOARD_FROM_LIST);
  const [isShowNewBoard, setIsShowNewBoard] = useState(true);

  const [cards, setCards ] = useState([]);
  const showCards = selectedBoard !== SELECT_BOARD_FROM_LIST;

  useEffect(() => {
    getAllBoardsApi().then((fetchedBoards) => {
      setBoards(fetchedBoards);
    }).catch((error) => {
      console.error("Error fetching boards:", error);
    });
  }, []);

  const displaySelectedBoard = (id) => {
      getBoardIdApi(id)
        .then((board) => {
          // console.log("Fetched board:", board);
          setSelectedBoard(board.title);
        })
        .catch((error) => {
          console.log("Error fetching board:", error);
        });
  };

  const createNewBoard = (newBoard) => {
    createAllBoardApi(newBoard)
    .then((createdBoard) => {
      // createdBoard.id = createdBoard.board_id
      setBoards((prevBoards) => [...prevBoards, createdBoard]);
    })
    .catch((error) => {
      console.error("Error creating board:", error);
    });
  };

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
  const createNewCard = (newCard) => {
    setCards([...cards, {
      ...newCard,
      id: cards.length + 1,
      rate: 0,
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
          <div className="new-card-form-container">
            <h2 className= "heading-card">Create a new Card</h2>
            <NewCardForm onAddCard={createNewCard}/>
          </div>
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

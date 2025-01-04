import './App.css';
import BoardList from './components/board-list/BoardList';
import CardList from './components/card-list/CardList';
import NewBoardForm from './components/create-new-board/NewBoardForm';
import SelectedBoard from './components/selected-board/SelectedBoard';
import NewCardForm from './components/create-new-card/NewCardForm';
import { useState, useEffect } from 'react';
import { getAllBoardsApi, createAllBoardApi } from './api/boardApi';
import { likeCard} from './api/cardApi';


const SELECT_BOARD_FROM_LIST = "Select a Board from the Board List!";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(SELECT_BOARD_FROM_LIST);
  const [isShowNewBoard, setIsShowNewBoard] = useState(true);
  const [_, setSelectedBoardId] = useState(null);
  const [cards, setCards ] = useState([]);
  const [isSortByLikes, setIsSortByLikes] = useState(false);
  const showCards = selectedBoard !== SELECT_BOARD_FROM_LIST;

  useEffect(() => {
    getAllBoardsApi().then((fetchedBoards) => {
      setBoards(fetchedBoards);
    });
  }, []);

  // Function to display selectedBoard title
  const displaySelectedBoard = (id) => {
    // setSelectedBoard((selectedBoard) => {
    //   const board = boards.find((board) => board.id === id);
    //   return board ? board.title : selectedBoard;
    // });
    const board = boards.find((board) => board.id === id);
    if (board) {
        setSelectedBoard(board.title);
        setSelectedBoardId(board.id);
        setIsSortByLikes(false);
      }
    };

  const createNewBoard = (newBoard) => {
    createAllBoardApi(newBoard)
    .then((createdBoard) => {
      createdBoard.id = createdBoard.board_id
      setBoards((prevBoards) => [...prevBoards, createdBoard]);
    })
    .catch((error) => {
      console.error("Error creating board:", error);
    });
  };

  const handleRateCard = (id) => {
    console.log("Card ID passed to handleRateCard:", id);
    likeCard(id)
        .then((updatedCard) => {
            setCards((prevCards) =>
                prevCards.map((card) =>
                  card.id === updatedCard.card_id 
            ? { ...card, likes_count: updatedCard.likes_count } 
            : card
                )
            );
        })
        .catch((error) => console.error('Error liking card:', error));
      };

  const handleSortByLikes = () => {
    setIsSortByLikes(true);
  };

  const handleReset = () => {
      setIsSortByLikes(false);
  };

  const displayedCards = isSortByLikes
  ? [...cards].sort((a, b) => b.likes_count - a.likes_count)
  : cards;

  const hideOrShowNewBoardForm = () =>{
    setIsShowNewBoard((prev) => !prev)
  }
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id != id);
    setCards(updatedCards)
  }
  // const rateCard = (id) => {
  //   const updatedCards = cards.map((card) => card.id === id ? {...card, rate: card.rate + 1}: card);
  //   setCards(updatedCards)
  // }
  const createNewCard = (newCard) => {
    setCards([...cards, {
      ...newCard,
      id: cards.length + 1,
      likes_count: 0,
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
                <button onClick={handleSortByLikes}>Sort by Likes</button>
                <button onClick={handleReset}>Reset</button>
                <CardList 
                  cards={displayedCards} 
                  onDeleteCard={deleteCard} 
                  onRateCard={handleRateCard}
                />
              </div>
              }
        </main>
      </div>
    </>
  );
}

export default App;

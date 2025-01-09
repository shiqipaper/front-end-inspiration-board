import './App.css';
import BoardList from './components/board-list/BoardList';
import CardList from './components/card-list/CardList';
import NewBoardForm from './components/create-new-board/NewBoardForm';
import SelectedBoard from './components/selected-board/SelectedBoard';
import NewCardForm from './components/create-new-card/NewCardForm';
import { useState, useEffect } from 'react';
import { getAllBoardsApi, createAllBoardApi, getBoardIdApi } from './api/boardApi';
import { getAllCardsApi, createCardApi, updateCardApi, deleteCardApi } from './api/cardApi';


const SELECT_BOARD_FROM_LIST = "Select a Board from the Board List!";
function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(null);
  const [isShowNewBoard, setIsShowNewBoard] = useState(true);
  const [selectedBoardID, setSelectedBoardID] = useState(0);
  const [selectedBoardOwner, setSelectedBoardOwner] = useState('');
  const [cards, setCards] = useState([]);
  const showCards = selectedBoardTitle !== null;
  const [isSortByLikes, setIsSortByLikes] = useState(false);



  useEffect(() => {
    getAllBoardsApi().then((fetchedBoards) => {
      setBoards(fetchedBoards);
    }).catch((error) => {
      console.error("Error fetching boards:", error);
    });
  }, []);

  const displaySelectedBoard = (boardId) => {
    getBoardIdApi(boardId)
      .then((board) => {
        setSelectedBoardTitle(board.title);
        setSelectedBoardID(board.boardId);
        setSelectedBoardOwner(board.owner);
      })
      .catch((error) => {
        console.error("Error fetching board:", error);
      });
    getAllCardsApi(boardId).then((fetchedCards) => {
      setCards(fetchedCards);
      setIsSortByLikes(false);
    })
      .catch((error) => {
        console.log("Error fetching board:", error);
      });
    setSelectedBoardID(boardId)
  };

  const createNewBoard = (newBoard) => {
    createAllBoardApi(newBoard)
      .then((createdBoard) => {
        setBoards((prevBoards) => [...prevBoards, createdBoard]);
      })
      .catch((error) => {
        console.error("Error creating board:", error);
      });
  };

  const hideOrShowNewBoardForm = () => {
    setIsShowNewBoard((prev) => !prev)
  }
  const deleteCard = (card) => {
    deleteCardApi(card.card_id, card)
      .then(({ message }) => {
        if (message === 'Card deleted successfully') {
          const updatedCards = cards.filter((currentCard) => currentCard.card_id != card.card_id);
          setCards(updatedCards);
        }
      })
  };

  const rateCard = (updated_card) => {

    updateCardApi(updated_card.card_id, updated_card)
      .then(({ card }) => {
        const updatedCards = cards.map((currentCard) => currentCard.card_id === card.card_id ? card : currentCard);
        setCards(updatedCards);
      })
  };

  const createNewCard = (newCard) => {
    if (!selectedBoardTitle) {
      console.error("No board selected or boardId is missing");
      return;
    }
    createCardApi(selectedBoardID, newCard)
      .then(({ card }) => {
        const updatedCards = [...cards, card];
        setCards(updatedCards);
      })
      .catch((error) => {
        console.error("Error creating card:", error);
      });
  };
  const sortedCards = isSortByLikes
    ? [...cards].sort((a, b) => b.likes_count - a.likes_count)
    : cards;

  const sortByLikes = () => {
    setIsSortByLikes(true);
  };

  const resetLikes = () => {
    setIsSortByLikes(false);
  };

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
            {selectedBoardTitle ? (
              <SelectedBoard selectedTitle={selectedBoardTitle} selectedBoardID={selectedBoardID} selectedBoardOwner={selectedBoardOwner} />
            ) : (
              <p>{SELECT_BOARD_FROM_LIST}</p>
            )}
          </div>
          <div className="new-board-form-container">
            <h2 className="heading-board">Create a new Board</h2>
            {
              isShowNewBoard && <NewBoardForm submitBoard={createNewBoard} />
            }
            <button className="hide-or-show-button" type="button" onClick={hideOrShowNewBoardForm}>
              {
                isShowNewBoard ? 'Hide New Board Form' : 'Show New Board Form'
              }
            </button>
            <div className="new-card-form-container">
              {selectedBoardTitle ? (
                <>
                  <h2 className="heading-card">Create a new Card</h2>
                  <NewCardForm onAddCard={createNewCard} />
                </>
              ) : null}
            </div>
          </div>
          {
            showCards && <div className="card-list-container">
              <h2 className="heading-board">{`Cards for ${selectedBoardTitle}`}</h2>
              <div className="sort-reset-container">
                <button onClick={sortByLikes}>Sort by Likes</button>
                <button onClick={resetLikes}>Reset</button>
              </div>
              <CardList
                cards={sortedCards}
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

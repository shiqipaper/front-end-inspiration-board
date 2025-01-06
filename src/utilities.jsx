export const convertIdFromBackend = (board) => {
  return {
    ...board,
    boardId: board.board_id,
  };
};

export const convertIdtoBackend = (board) => {
  return {
    ...board,
    board_id: board.boardId
  };
};

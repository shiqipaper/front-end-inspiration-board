// converting borad_id(backend) --> id(frontend)
export const convertIdFromBackend = (board) => {
    return {
        ...board,
        id: board.board_id,
    };
};

// converting id(frontend) --> borad_id(backend) 
export const convertIdtoBackend = (board) => {
    return {
        ...board,
        board_id: board.id
    };
};

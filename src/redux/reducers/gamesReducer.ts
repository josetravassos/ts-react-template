const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gameSReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

export default gameSReducer;

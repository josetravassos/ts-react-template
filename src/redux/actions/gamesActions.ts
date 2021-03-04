import axios from 'axios';
import { popularGames } from '../api';

export const loadGames = () => async (dispatch: any) => {
  //Fetch axios
  const popularData = await axios.get(popularGames());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
    },
  });
};

// Base URL
const base_url = 'https://api.rawg.io/api/';

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  month < 10 ? `0${month}` : month;
  console.log('month', month);
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  day < 10 ? `0${day}` : day;
  console.log('day', day);
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Porpular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-reating&page_size=20`;

export const popularGames = () => `${base_url}${popularGames}`;

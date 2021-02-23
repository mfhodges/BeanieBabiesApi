import { data } from "./Data.min.js";
import { MONTHS, ASTROLOGY_PAIRS } from "./constants";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getRandomBeanie() {
  const total = data.length;
  const id = getRandomInt(total);
  return data[id];
}

export function getBeanie(id) {
  const beanie = data.filter((b) => Number(b.id) == Number(id));
  return beanie[0];
}

export function getBeanies(searchTerm) {
  const term = searchTerm.toLowerCase();
  // if search term len is 1 then b.title begins with searchTerm
  if (searchTerm.length === 1) {
    return data.filter((b) => b.title.toLowerCase().startsWith(term));
  } // else searching that term is in title
  const beanies = data.filter((b) => b.title.toLowerCase().includes(term));
  return beanies;
}

export function getMatch(astroSign) {
  const possibleMatches = data.filter(
    (b) => b.astroSign === ASTROLOGY_PAIRS[astroSign]
  );
  const randomInt = getRandomInt(possibleMatches.length);
  return possibleMatches[randomInt];
}

export function getBeaniesMonthBday(month) {
  // assumes month is an int
  const monthName = MONTHS[month];
  const beanies = data.filter((b) => b.birthday.includes(monthName));
  return beanies;
}

export function getBeaniesBday(month, day) {
  // assumes month & day are ints
  const dayString = day > 10 ? day.toString() : "0" + day.toString(16);
  const monthBeanies = getBeaniesMonthBday(month);
  const beanies = monthBeanies.filter((b) => b.birthday.startsWith(dayString));
  return beanies;
}

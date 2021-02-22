
import {data} from './Data.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export function getRandomBeanie() {
    const total = data.length
    const id = getRandomInt(total)
    return data[id];
}

export function getBeanie(id) {
    const beanie = data.filter(b => Number(b.id) == Number(id));
    return beanie[0]; 
}

export function getBeanies(searchTerm){
    const term = searchTerm.toLowerCase()    

    // if search term len is 1 then b.title begins with searchTerm 
    if (searchTerm.length ===1 ){
        return data.filter(b => b.title.toLowerCase().startsWith(term))
    }
    // else searching that term is in title
    const beanies = data.filter(b => b.title.toLowerCase().includes(term))
    return beanies;
}

export function getMatch(birthday){
    //bday has format <day> <month> <year>, Year is optional and <day> may start with 0 (e.g.) '09 November'

}



/*
getBeanies(id) {

}

getMatch(sign) {

}*/
import moment from 'moment'

export const dateFormat =(date)=>{
    return moment(date).format("DD/MM/YYYY");
}

export const firstLetterCapital= (word)=>{
    const str = word[0].toUpperCase() + word.slice(1);
    return str;
}
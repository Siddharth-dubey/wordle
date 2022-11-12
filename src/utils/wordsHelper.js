import words from "../json/words.json";

export const getWord = () => {
    const index = Math.floor(Math.random() * 12970);
    return words.words[index]
}
export const isvalidWord = (query) => {
    return words.words.findIndex((word) => query.toLowerCase() === word) !== -1;
}
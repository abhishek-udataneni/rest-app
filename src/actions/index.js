export const getBooksRequest = (searchText) => {
    return ({
    type: "GET_BOOKS_REQUEST",
    searchText
})};
const SearchKeywordReducer = (state, action) => {
    switch(action.type) {
        case 'SearchKeyword':
            return action.text;
        default:
            return state;
    }
};
export default SearchKeywordReducer;
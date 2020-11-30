const auth = (state = false, action) => {
    switch(action.type) {
        case 'logged':
            return !state;
        default:
            return state;
    }
}

export default auth;
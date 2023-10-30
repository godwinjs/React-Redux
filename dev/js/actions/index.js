const selectUser = (user) => {
    console.log('You clicked on this user: ', user.first)
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}

export default function() {
    return {
        selectUser
    }
}
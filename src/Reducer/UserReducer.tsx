

const rootReducer = (state={}, action) => {
    return {
        order: orderReducer(state.order,action),
        listUser: UserListReducer(state.listUser,action)
    }
}

export default rootReducer;
const initialState ={
  Counter: 9999,
  tasks: "whatever",
}

const reducer = (state = initialState, action) => {

  if(action.type === 'INCREMENT') {
    return{
      ...state,
      Counter: state.Counter + 1
    }
  }
  return state
}

export default reducer;
const initalUsers = [];

function reducerUser(state = initalUsers, action) {

  switch (action.type) {
    case "ADD":

      return;
    case "EDIT":
      return;
    case "REMOVE":
      return;

    case "GET":
      console.log('pass get',action.payload,typeof action.payload);
      return [...state,action.payload];

    default:
      return state;
  }
}

export default reducerUser


















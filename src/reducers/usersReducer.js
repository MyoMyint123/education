import * as types from '../constants/actionsTypes';

const users = (state = {
  users: {}
}, action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
      return Object.assign({}, state, {
        users: action.users
      });
    default:
      return state;
  }
};

export default users;

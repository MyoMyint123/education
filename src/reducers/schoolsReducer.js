import * as types from '../constants/actionsTypes';

const schools = (state = {
  schools: {}
}, action) => {
  switch (action.type) {
    case types.REQUEST_SCHOOLS:
      return Object.assign({}, state, {
        schools: action.schools
      });
    default:
      return state;
  }
};

export default schools;

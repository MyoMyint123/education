import * as types from '../constants/actionsTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const requestUsers = (users) => ({ type: types.REQUEST_USERS, users });


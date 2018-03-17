import * as types from '../constants/actionsTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import { getSchools } from '../services/api'

const requestSchool = () => ({ type: types.REQUEST_SCHOOLS });

export const fetchSchoolData = state => dispatch => {    
    dispatch(requestSchool());
    getSchools.then(data=>{
        console.log(data);
    })    
  };
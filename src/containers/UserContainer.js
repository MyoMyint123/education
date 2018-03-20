import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { User, Page } from '../components';
import { getUsers }from '../services/api';
import requestUsers from '../actions/userActions';

class UserContainer extends Component {

  componentWillMount() {
    getUsers()
      .then((data) => {
        // console.log(data);
        this.props.dispatch(requestUsers(data));
        console.log(getState());
      });
  }
  render() {
    const {users} = this.props;
    return (
      <Page>
        <ul>
          {
            // users.map((user) => <User {...user} key={user.id}/>)
          }
        </ul>
      </Page>
    );
  }
}

function mapStateToProps(state){
  return({
    users: state.users
  })
}

export default connect(mapStateToProps)(UserContainer);

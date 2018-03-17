import React, { Component } from 'react';
import { User, Page } from '../components';
import { getUsers }from '../services/api';

export default class UserContainer extends Component {
  state = {
    users: []
  }
  componentWillMount() {
    getUsers()
      .then((data) => {
        this.setState({ users: data });
      });
  }
  render() {
    return (
      <Page>
        <ul>
          {
            this.state.users.map((user) => <User {...user} key={user.id}/>)
          }
        </ul>
      </Page>
    );
  }
}

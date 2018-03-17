import React, { Component } from 'react';
import { Page, School } from '../components';
import { NewCreateForm, SchoolTable, SchoolDetails} from '../components/School';
import { getSchools, getSchoolDetail } from '../services/api';

export default class SchoolContainer extends Component {
  state = {
    schools: [],
    showTable: true,
    newForm: false,
    showDetail: false,
    schoolDetailData: null
  }
  componentDidMount() {
    getSchools().then((data) => {
      this.setState({ schools: data });
    });
  }
  handleNewForm = () =>{
    this.setState({showTable: false, newForm: true});
  }
  backToTable = () =>{
    this.setState({showTable: true, newForm: false, showDetail: false});
  }
  loadSchoolDetailData = (nameSlug)=>{
    getSchoolDetail(nameSlug).then((data)=>{
      this.setState({schoolDetailData: data[0], showDetail:true, showTable: false, newForm: false});
    })
  }
  render() {
    const { schools, showTable, newForm, showDetail } = this.state;
    return (
      <Page>        
          {
            showTable ?
              <SchoolTable 
                schools={schools}
                callbackParent={this.handleNewForm}
                callbackViewDetail={(nameSlug)=>this.loadSchoolDetailData(nameSlug)}
              />
              :
              null
          }
          {
            newForm ?
            <NewCreateForm 
              callbackPageChange={this.backToTable}
            />
            :
            null
          }
          {
            showDetail ?
            <SchoolDetails 
              data={this.state.schoolDetailData}
              callbackPageChange={this.backToTable}
            />
            :
            null
          }          
      </Page>
    );
  }
}

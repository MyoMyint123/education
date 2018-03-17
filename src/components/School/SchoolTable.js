import React, { Component } from 'react';
import { fetchSchoolData } from '../../actions/schoolsActions';

class SchoolTable extends Component{        
    constructor(props){
        super(props);
    }    
    componentDidMount(){
        
    }
    render(){
        return( 
            <div>
                <table className="table">
                    <thead>
                        <tr>                                                
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Township</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {
                            this.props.schools.map(school=>{                        
                                return(
                                    <tr key={school.name}>                                                                                                                    
                                        <td>{school.name}</td>
                                        <td>{school.email}</td>
                                        <td>{school.township}</td>
                                        <td>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={()=>this.props.callbackViewDetail(school.name)}
                                            >
                                                view
                                            </button>
                                        </td>
                                    </tr>
                                    
                                )  
                            })                            
                        }                        
                    </tbody>
                </table>
                <div>
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={()=>this.props.callbackParent()}
                    >
                        Add School
                    </button>                        
                        
                    
                </div>                
            </div>
        )
    }    
}
export default SchoolTable;
import React, {Component} from 'react';
import '../../styles/new-create-form.scss';

class NewCreateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: null,
            address: null,
            township: null,
            location: null,
            phone: null,
            email: null,
            types: null,
            sub_types: null,
            subjects: null
        }
    }
    prepareData = () =>{
        const {
            name,
            address,
            township,
            location,
            phone,
            email,
            types,
            sub_types,
            subjects
        } = this.state;

        const school ={
            name: !!name && name,
            address: !!address && address,
            township: !!township && township,
            location: !!location && location,
            phone: !!phone && phone,
            email: !!email && email,
            types: !!types && types,
            sub_types: !!sub_types && sub_types,
            subjects: !!subjects && subjects
        }
        
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"    
                            className="form-control" 
                            placeholder="Enter school name" 
                            onChange={(e)=>this.setState({name: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Address" 
                            onChange={(e)=>this.setState({address: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Township</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Township" 
                            onChange={(e)=>this.setState({township: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Location" 
                            onChange={(e)=>this.setState({location: e.target.value})}
                        />                                                    
                    </div>                    
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            placeholder="Phone" 
                            onChange={(e)=>this.setState({phone: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="school@mail.com" 
                            onChange={(e)=>this.setState({email: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Types</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="private" 
                            onChange={(e)=>this.setState({types: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Sub Types</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="language-school" 
                            onChange={(e)=>this.setState({sub_types: e.target.value})}
                        />                        
                    </div>
                    <div className="form-group">
                        <label>Subjects</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="English" 
                            onChange={(e)=>this.setState({subjects: e.target.value})}
                        />                        
                    </div>
                    <div className="new-form-btn">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={()=>this.props.callbackPageChange()}
                        >
                            Back
                        </button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    
                    </form>
            </div>
        );
    }
}

export default NewCreateForm;
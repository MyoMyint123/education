import React from 'react';

const SchoolDetails = (props) =>{
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item active">{props.data.name}</li>                                                
                <li className="list-group-item">{props.data.location}</li>
                <li className="list-group-item">{props.data.email}</li>
                <li className="list-group-item">{props.data.township}</li>
                <li className="list-group-item">{props.data.type}</li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={()=>props.callbackPageChange()}
            >
                back
            </button>
        </div>
    )
}
export default SchoolDetails;
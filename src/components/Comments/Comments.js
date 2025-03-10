import React, { Component } from 'react';
import Form from '../Form/Form';
import {connect} from 'react-redux';
import './Comments.css';
 
class Comments extends Component {
    state = {
        comments: '', 
    }

    handleChange= (event) => {
        this.props.dispatch({ type: 'FEEDBACK_LIST', payload:{comments: event.target.value} 
    })
    }

    handleClick = () => {
        if(this.props.feedback.feedbackReducer.comments === ""){
            alert("Please fill out the field!")
        } else{
            this.props.history.push('/review')
        }
        }

    render() {
        return (
         <main>
         <div className="Comments ">
             <h1>Any comments you want to leave?</h1>
             <span>Comments
                 <div>
                 <textarea type="text"
                 rows="8"
                 cols="70"
                 value={this.props.feedback.feedbackReducer.comments}
                 onChange={this.handleChange}>
                 </textarea>
                 <br/>
                 <button onClick={this.handleClick}>NEXT</button>
                 </div>
             </span>
         </div>
         <Form/>
     </main>
        );
    }
}

const mapReduxStateToProps =(reduxState) =>({
    feedback: reduxState
})

export default connect(mapReduxStateToProps) (Comments);
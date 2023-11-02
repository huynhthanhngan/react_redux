import { addPost } from '../actions/ReduxActions';
import React, { Component } from 'react';
import PostForm from '../component/AddPost'
import { connect } from 'react-redux';

class PostFormContainer extends Component {   
    render() {
        return (
            <PostForm addPost={ this.props.addPost } />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, content) => {
            dispatch(addPost(title, content));
        }
    }
};

export default connect(null, mapDispatchToProps)(PostFormContainer);

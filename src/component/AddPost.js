import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input required type="text" placeholder="Title" ref={ (input) => this.getTitle = input } />
                    <br />
                    <textarea placeholder="write sth" ref={ (input) => this.getContent = input } />
                    <br />
                    <button>
                        Create
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getContent.value;
        this.props.addPost(title, content);
        this.getTitle.value = '';
        this.getContent.value = '';
    }
}

export default PostForm;

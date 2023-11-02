import { connect } from 'react-redux';
import AllPost from '../component/AllPost';
import { bindActionCreators } from 'redux';
import * as ReduxAction from '../actions/ReduxActions'
import React, { Component } from 'react';

class AllPostContainer extends Component {
    render() {
        return (
            <AllPost posts={ this.props.posts } actions={ this.props.actions } />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ReduxAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPostContainer);

// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { object } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import Author from '../Author';
import Comment from '../Comment';
import { commentsActionsAsync } from '../../bus/comments/saga/asyncActions';
import { userActionsAsync } from '../../bus/user/saga/asyncActions';

const mapStateToProps = (state) => ({
    comments: state.comments,
    posts:    state.posts,
    user:     state.user,
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            fetchCommentsAsync: commentsActionsAsync.fetchCommentsAsync,
            fetchUserAsync:     userActionsAsync.fetchUserAsync,
        },
        dispatch,
    ),
});

class SinglePost extends Component {
    static propTypes = {
        actions:  object.isRequired,
        comments: object.isRequired,
        match:    object.isRequired,
        posts:    object.isRequired,
        user:     object.isRequired,
    };

    componentDidMount () {
        const { actions, posts, match: { params: { id }}} = this.props;
        const userId = posts.get(id - 1).get('userId');

        actions.fetchCommentsAsync(id);
        actions.fetchUserAsync(userId);
    }

    render () {
        const { comments, posts, user } = this.props;
        const { id } = this.props.match.params;

        const commentsList = comments.map((comment) => (
            <Comment
                body = { comment.get('body') }
                email = { comment.get('email') }
                key = { comment.get('id') }
                name = { comment.get('name') }
                { ...comment }
            />
        ));

        return (
            <div className = { Styles.wrap }>
                <Link className = { Styles.back } to = '/'>{ `< Back To Feed` }</Link>
                <div className = { Styles.post }>
                    <h1>{ posts.get(id - 1).get('title') }</h1>
                    <Author
                        address = { user.get('address') }
                        company = { user.get('company') }
                        email = { user.get('email') }
                        name = { user.get('name') }
                        phone = { user.get('phone') }
                        website = { user.get('website') }
                    />
                    <p>{ posts.get(id - 1).get('body') }</p>
                </div>
                <h3 className = { Styles.heading }>Comments</h3>
                { commentsList }
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePost));

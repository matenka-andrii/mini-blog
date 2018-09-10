// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import Post from '../Post';
import { commentsActions } from '../../bus/comments/actions';
import { postsActionsAsync } from '../../bus/posts/saga/asyncActions';
import { uiActions } from '../../bus/ui/actions';
import { userActions } from '../../bus/user/actions';

const mapStateToProps = (state) => ({
    posts:     state.posts,
    searchKey: state.ui.get('searchKey'),
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            fetchPostsAsync:   postsActionsAsync.fetchPostsAsync,
            resetComments:     commentsActions.resetComments,
            resetUser:         userActions.resetUser,
            setSearchKeyState: uiActions.setSearchKeyState,
        },
        dispatch,
    ),
});

class Feed extends Component {
    static propTypes = {
        actions:   object.isRequired,
        posts:     object.isRequired,
        searchKey: string.isRequired
    };

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
        actions.resetComments();
        actions.resetUser();
    }

    _handleInputChange = ({ target }) => {
        this.props.actions.setSearchKeyState(target.value);
    };

    render () {
        const { posts, searchKey } = this.props;
        const postsList = posts
            .filter((post) => post.get('title').toLowerCase().match(searchKey.toLowerCase()) || post.get('body').toLowerCase().match(searchKey.toLowerCase()))
            .map((post) => (
                <Post
                    body = { post.get('body') }
                    id = { post.get('id') }
                    key = { post.get('id') }
                    title = { post.get('title') }
                />
            ));

        return (
            <div className = { Styles.wrapper }>
                <input
                    className = { Styles.search }
                    placeholder = 'Search'
                    type = 'text'
                    value = { searchKey }
                    onChange = { this._handleInputChange }
                />
                <div className = { Styles.wrap }>
                    { postsList }
                </div>
            </div>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feed));

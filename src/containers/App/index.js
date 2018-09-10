// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

// Instruments
import Styles from './styles.scss';
import Feed from '../../components/Feed';
import SinglePost from '../../components/SinglePost';
import { store, history } from '../../init/store';

export default class App extends Component {
    render () {
        return (
            <Provider store = { store }>
                <Router history = { history }>
                    <div className = { Styles.app }>
                        <Route exact component = { Feed } path = '/' />
                        <Route component = { SinglePost } path = '/posts/:id' />
                    </div>
                </Router>
            </Provider>
        );
    }
}

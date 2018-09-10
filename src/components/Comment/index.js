// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Comment extends Component {
    static propTypes = {
        body:  string.isRequired,
        email: string.isRequired,
        name:  string.isRequired,
    };

    render () {
        const { body, email, name } = this.props;

        return (
            <div className = { Styles.comment }>
                <h4>{ name }</h4>
                <div className = { Styles.meta }>
                    { email }
                </div>
                <p>{ body }</p>
            </div>
        );
    }
}

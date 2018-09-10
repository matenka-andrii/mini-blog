// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Post extends Component {
    static propTypes = {
        body:  string.isRequired,
        id:    number.isRequired,
        title: string.isRequired,
    };

    render () {
        const { body, id, title } = this.props;

        return (
            <div className = { Styles.post }>
                <h3>
                    <Link to = { `/posts/${id}` }>
                        { title }
                    </Link>
                </h3>
                <p>{ body }</p>
                <Link className = { Styles.more } to = { `/posts/${id}` }>Read More</Link>
            </div>
        );
    }
}

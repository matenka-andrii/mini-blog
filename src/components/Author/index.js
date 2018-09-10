// Core
import React, { Component } from 'react';
import { object, string } from 'prop-types';

// Instruments
import Styles from './styles.scss';

export default class Author extends Component {
    static propTypes = {
        address: object.isRequired,
        company: object.isRequired,
        email:   string.isRequired,
        name:    string.isRequired,
        phone:   string.isRequired,
        website: string.isRequired,
    };

    render () {
        const { address, company, email, name, phone, website } = this.props;

        return (
            <div className = { Styles.author }>
                <p><span>Author:</span> { name }</p>
                <p><span>Email:</span> { email }</p>
                <p><span>Phone:</span> { phone }</p>
                <p><span>Site:</span> { website }</p>
                <p><span>Address:</span> { `${address.get('city')}, ${address.get('street')}, ${address.get('suite')}` }</p>
                <p><span>Company:</span> { company.get('name') }</p>
            </div>
        );
    }
}

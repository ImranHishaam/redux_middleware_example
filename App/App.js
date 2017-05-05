import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Reducers/Index';
import ServiceAction from './Actions/ServiceCallAction';

export default class Async_Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <ServiceAction />
            </Provider>
        );
    }
}


import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import List from '../List/List'

export default function App() {
    return (
        <div className="App">
            <AppHeader message="Welcome to React" />
            <AppContent />
        </div>
    );
}

class AppHeader extends Component {

    render() {

        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

class AppContent extends Component {

    render() {

        return (
            <main className="row">
                <List className="col-sm-3" title="Info" />
            </main>
        );
    }
}
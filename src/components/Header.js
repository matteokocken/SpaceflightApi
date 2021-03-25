import React, { Component } from 'react';
import '../styles/header.sass';

class Header extends Component {
    render() {
        return (
            <header>
                <div><button>See on Github</button></div>
                <h1>Actualités sur les vols spatiaux</h1>
            </header>
        );
    }
}

export default Header;

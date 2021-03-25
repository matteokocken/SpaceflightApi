import React, { Component } from 'react';
import GitHubButton from 'react-github-btn'
import '../styles/header.sass';

class Header extends Component {
    render() {
        return (
            <header>
                <div>
                    <GitHubButton href="https://github.com/matteokocken/SpaceflightApi" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" aria-label="Star matteokocken/SpaceflightApi on GitHub">Voir sur Github</GitHubButton>
                </div>
                <h1>Actualités sur les vols spatiaux</h1>
            </header>
        );
    }
}

export default Header;

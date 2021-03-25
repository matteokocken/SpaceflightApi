
import React, { Component } from 'react';
import '../styles/Card-article.sass';

import Aos from 'aos';
import "aos/dist/aos.css";
Aos.init();

class CardArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div data-aos="zoom-in-up" className="article">
                <img src={this.props.id_article.imageUrl} alt="Article Image" />
                <div>
                    <h3>{this.props.id_article.title}</h3>
                    <p className="description">{this.props.id_article.summary}</p>
                    <span><a href={this.props.id_article.url}>Voir plus [{this.props.id_article.newsSite}]</a></span>
                </div>
            </div>
        )
    }
}

export default CardArticle;
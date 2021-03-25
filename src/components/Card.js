

import React, { Component } from 'react';

import CardArticle from './Card-article';
import '../styles/Card.sass';


class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberLoading: this.props.numberLoading,
            article_to_load: [0,1,2,3], // Load four last article
            isLoaded: false,
        }
        this.view_more = this.view_more.bind(this);
    }

    componentDidMount() {
        const url = "https://spaceflightnewsapi.net/api/v2/articles";
        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                data: result,
                isLoaded: true,
                button: "Voir plus !"
            });
        });
    }
    view_more() {
        let load = this.state.article_to_load
        const last = load[load.length - 1];

        //add 5
        if(this.state.data.length > load.length + 3) {
            for(let i = last + 1; i < last + 3; i++) {
                load.push(i);
            }
            this.setState({
                article_to_load: load
            })
        } else {
            this.setState({
                button: "Fin..."
            })
        }
    }

    render() {
        return !this.state.isLoaded ? ( <div className="Loading">Loading</div> )
        : (
            <div>
                <div className="container--article">
                    {
                        this.state.article_to_load.map(i => {
                            return (
                                <CardArticle key={i} id_article={this.state.data[i]} />
                            )
                        })
                    }
                </div>
                <button className="btn-primary" onClick={this.view_more}>{this.state.button}</button>
            </div>
        )
    }
}

export default Card;
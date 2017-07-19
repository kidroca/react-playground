import React, {Component} from 'react';
import './Card.css';

export default class Card extends Component {

    render() {

        let descriptionIcon = '';

        if (this.props.description) {
            descriptionIcon = <span className="card-has-description"
                                    title="This card has description.">
                                 <i className="glyphicon glyphicon-align-justify"/>
                             </span>;
        }

        return (
            <div className="card well well-sm">
                <p className="card-topic">{this.props.topic}</p>
                <span className="card-edit"><i className="glyphicon glyphicon-edit"/></span>
                {descriptionIcon}
            </div>
        );
    }
}
import React, {Component} from 'react';
import Card from './Card';
import './List.css';

export default class List extends Component {

    constructor() {
        super();

        this.items = [
            {topic: 'Fake Credentials', description: true },
            {topic:  'Swagger urls', description: true },
            {topic:  'New Patient States', description: true },
            {topic:  'Intercom chat app', description: false },
            {topic:  'Recommendation Titles', description: true },
            {topic:  'Recommendation dates', description: true }
        ];
    }

    render() {

        const cards = this.items.map(
            (item, i) => <Card key={i} topic={item.topic} description={item.description} />
        );

        return (
            <section className={`trello-list ${this.props.className}`}>
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h4>{this.props.title}</h4>
                    </div>

                    <div className="panel-body">
                        {cards}
                    </div>

                    <div className="panel-footer">
                        Add a card...
                    </div>
                </div>
            </section>
        )
    }
}
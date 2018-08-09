import React from 'react';
import {Link} from 'react-router';

export default class Dog extends React.Component {
    render() {
        return (
            <div className="panel panel-default col-sm-4">
                <div className="panel-heading">
					<Link to={`/dogs/${this.props.title}`}><h3 className="panel-title">{this.props.title}</h3></Link>
                </div>
                <div className="panel-body">
                    <p>{this.props.body}</p>
					<img className="img-dog" src={this.props.img} alt=""/>
                </div>
            </div>
        );
    }
}

import React from "react";
import Dogs from './Dog';


export default class DogsList extends React.Component {

    render() {
        console.log('!!! DogsList', this.props.dogs);


        if(!this.props.dogs){
			console.log('!!! If');
            return null;
        }

		//console.log('!!! afterIf', Object.keys(this.props.dogs.message));


		//let mass=Object.keys(this.props.dogs.message)

        let dogs = this.props.dogs.map((dog, index) => {
			//console.log('!!! let',this.props.imgs[dog]);
            //return <Dogs key={index} title={dog} img={this.props.imgs[index]}/>;
			return <Dogs key={index} title={dog.breed} img={dog.img}/>;
        });

		//img={this.props.imgs[index]}

        return <div>
            <h1>Породы</h1>
            {dogs}
        </div>;
    }
}

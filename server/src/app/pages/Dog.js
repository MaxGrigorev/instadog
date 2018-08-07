import React from 'react';
import axios from 'axios';
import DogComponent from '../components/dog/Dog';

export default class Dog extends React.Component
{
    constructor(props){
        super(props);

        this.state = {
            dogImg: ""
        };

		axios.get('https://dog.ceo/api/breed/'+this.props.params.dogsBreed+'/images/random')
        .then((response) => {
			console.log('response.data.message',response.data.message)

			this.setState({
                    dogImg: response.data.message
                });
        });

    }
    render()
    {
        return (
            <div>

			<DogComponent title={this.props.params.dogsBreed} img={this.state.dogImg}/>

            </div>
        );
    }
}



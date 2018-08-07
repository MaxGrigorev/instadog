import React from "react";
import Dogs from '../components/dog/Dogs';

export default class Dogss extends React.Component {
    render() {
        return <div>
            {
                (!this.props.children) ?
                    (<Dogs/>)
                    :
                    (this.props.children)
            }
        </div>;
    }
}

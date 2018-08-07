import React from 'react';

export default class MenuItem extends React.Component
{
    render()
    {
        let classActive;
        if(this.props.active){
            classActive = 'active-link'
        }
        return <li><a href={this.props.href} className={classActive}>{this.props.children}</a></li>;
    }
}

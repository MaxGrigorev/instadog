import React from 'react';
import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';

export default class Layout extends React.Component
{
    render()
    {

        return <div>
            <Menu brand="InstaDOG">
                <MenuItem href="/">Главная</MenuItem>
				<MenuItem href="/dogs">Собачки</MenuItem>
                <MenuItem href="/notfound">Страница с ошибкой</MenuItem>
            </Menu>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
            <footer>
                <hr/>
                &copy; 2018.
            </footer>
        </div>;
    }
}

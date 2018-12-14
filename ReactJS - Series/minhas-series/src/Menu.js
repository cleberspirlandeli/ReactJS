import React, { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <a className="navbar-brand page-scroll" href="#page-top">
                            <img src="/images/logo.png" height="30" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/new'>Nova Série</Link>
                            </li>
                            <li>
                                <Link to='/about'>Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Menu
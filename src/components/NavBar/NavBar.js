import React,{Component} from "react";
import {navLinks} from "./navLinks"
import './NavBar.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class navbar extends Component{
    state={clicked:false}
    linkState={link_clicked:false}

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked});
    }

    handle_linkClick=()=>{
        this.setState({link_clicked:!this.state.link_clicked});
        this.setState({clicked:!this.state.clicked});
        this.setState({link_clicked:!this.state.link_clicked});
    }

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">V|K<i className="fa-solid fa-user-tie"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={(this.state.clicked ) ? 'fas fa-times': 'fas fa-bars'}></i>
                    
                </div>
                <ul className={(this.state.clicked )?'nav-menu active':'nav-menu'}>
                    <BrowserRouter>
                    {navLinks.map((item,index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url} className='no-underline' smooth>
                                <a className={item.cName} onClick={this.handle_linkClick} href={item.url}>{item.title}</a>
                                </Link>
                            </li>
                        )
                    })}
                    </BrowserRouter>
                </ul>
                
            </nav>
        )
    }
}

export default navbar
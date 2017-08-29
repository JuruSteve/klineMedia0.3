import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';


ReactDOM.render( 
    <Router>
        <div className="container" >
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/">KLINE MEDIA</NavLink>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li ><NavLink exact activeClassName="activeNav" to="/">HOME</NavLink></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                            <li><NavLink activeClassName="activeNav" to="/projects">PROJECTS</NavLink></li>
                            <li><NavLink activeClassName="activeNav" to="/about">ABOUT ME</NavLink></li>
                            <li><NavLink activeClassName="activeNav" to="/contact">CONTACT</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>
        
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

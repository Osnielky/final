import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';
import './App.css';
import SignUp from './components/SignUp';
import contactForm from './components/ContactForm';
import Card from './components/Card';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            socialLinks: socialLinks,
            album: albumItems
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <Header
                        collapsed={this.state.collapsed}
                        toggleNavbar={this.toggleNavbar}
                        socialLinks={this.state.socialLinks}
                    />

                    <Switch>


                        <Route path="/album" render={(props) => <Main {...props} album={this.state.album} />} />

                        <Route path="/contactForm" component={contactForm} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/card" render={(props) => <Card {...props} album={this.state.album} />} />
                        


                    </Switch>







                    <Footer />
                </div>
            </Router>
        );
    }
}
//   <Main album={this.state.album} /> poner en linea 45


//<Route path="/card" component={Card} />

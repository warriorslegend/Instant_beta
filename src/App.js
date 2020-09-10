import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
// styles
import './general.css';
import './App.css';
import './App-mobile.css';
import '@brainhubeu/react-carousel/lib/style.css';
// Content
import NavBar from './components/NavBar';
import HomePath from './paths/HomePath';
import ProductsPath from './paths/ProductsPath';
import StoresPath from './paths/StoresPath';
import CategoriesPath from './paths/CategoriesPath';
import CartPath from './paths/CartPath';
import ContactPath from './paths/ContactPath';
import TermsPath from './paths/TermsPath';
import Footer from './components/Footer';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <section id="main">
                    <NavBar/>
                    <Switch>
                        <Route path="/" exact component={HomePath}/>
                        <Route path="/productos" component={ProductsPath}/>
                        <Route path="/tiendas" component={StoresPath}/>
                        <Route path="/categorias" component={CategoriesPath}/>
                        <Route path="/carrito" component={CartPath}/>
                        <Route path="/contacto" component={ContactPath}/>
                        <Route path="/terminos-y-condiciones" component={TermsPath}/>
                    </Switch>
                    <Footer/>
                </section>
            </Router>
        </Provider>
    )
}

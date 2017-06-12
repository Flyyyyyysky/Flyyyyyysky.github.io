
'use strict';

//引入样式文件
import './styles/app.scss';
import './styles/container.scss'
import './styles/home.scss'
import './styles/trade.scss'
import './styles/about.scss'
import Container from './components/Container'
import Home from './components/Home'
import Trading from './components/Trading'
import About from './components/About'
import Job from './components/Job'
import 'animate.css'
// import './styles/jquery-css-transform'
// import './styles/jquery-animate-css-rotate-scale.js'


//引入组件
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';



render(
<Router history={hashHistory}>
    <Route path='/' components={Container}>
    <IndexRoute components={Home}/>
    <Route path="/home" components={Home} />
    <Route path="/trading" components={Trading} />
    <Route path="/about" components={About} />
    <Route path="/job" components={Job} />
    </Route>
    </Router>,
    app
)
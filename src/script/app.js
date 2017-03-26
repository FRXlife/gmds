require('../style/app.scss')//只写require不需要返回，一旦引进来就把模块打包起来

import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route, IndexRoute, hashHistory} from 'react-router'
import Index from './component/index'
import Home from './component/home'
import Kind from './component/kind'
import Cart from './component/cart'
import My from './component/my'

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Index}>
  		<IndexRoute path="home" component={Home}></IndexRoute>
  		<Route path="home" component={Home}/>
  		<Route path="kind" component={Kind}/>
  		<Route path="cart" component={Cart}/>
  		<Route path="my" component={My}/>
  	</Route>
  </Router>
  ,
  document.getElementById('root')
)

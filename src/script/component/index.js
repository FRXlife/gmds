import React from 'react'

import { Link } from 'react-router'

class Index extends React.Component {
  constructor (props) {
    super(props)

  }

  render() {
    return (

      <div className="m-index">
        <header></header>
        <section>
          {this.props.children}  
        </section>
        <footer>
          <ul>
            <li>
              <Link to="/home">
                <i className="yo-ico">&#xe609;</i>
                <b>首页</b>
              </Link>
            </li>
            <li>
              <Link to="/kind">
                <i className="yo-ico">&#xe633;</i>
                <b>分类</b>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="yo-ico">&#xe60f;</i>
                <b>购物车</b>
              </Link>
            </li>
            <li>
              <Link to="/my">
                <i className="yo-ico">&#xe631;</i>
                <b>我的</b>
              </Link>
            </li>

          </ul>
        </footer>
      </div>
      )
    }

    componentDidMount() {


    }
  }

  export default Index

import React from 'react'
import Carousel from '../../component_dev/carousel/src/index.js'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      bannerlist:  [<div/>],
      ka:[],
      nav:[],
      shop:[]
    }
  }
  componentWillMount () {
    let url = "http://localhost:3000/home.php";
    let that = this;
     fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
         // console.log(data);
          console.log(data.content[0]);
          let arr = [];
          let kaquan = [];
          for(let i=0;i<3;i++){
             arr.push(<li className="item"><img className="img" src={data.content[0].items[1].data[i].image} /></li>)
          }
          console.log(data.content[0].items[2].data[0].image.image);
          kaquan.push(<img src={data.content[0].items[2].data[0].image.image} / >);
          let newNav =data.content[0].items[3].data.map(val=>{
            return (
            <li>
              <a>
                <img src={val.image}/>
                <span>{val.iconName}</span>
              </a>
            </li>
            )
          })
          console.log(data.content[0].items[4].attributes)
          let attr = data.content[0].items[4].attributes;
          let newShop =data.content[0].items[4].data.map(val=>{
            return (
                <div>
                  <h2>
                    <img src={attr.iconUrl} />
                    <b>{attr.title}</b>
                  </h2>
                  <ul>
                     <li>
                      <a>
                        <img src={val.image} />
                      </a>  
                      <h3>{val.title}</h3>
                      <div className="price_wrap">
                        <span>
                          <label>￥</label>
                          {val.price}
                        </span>
                      </div>
                      <span className="limit_count">
                          <em className="limit_num">{val.limitNum}</em>
                      </span>
                      <a className="btna"></a>
                     </li>     
                  </ul>
                </div>
            )
          })
          console.log(kaquan)
          that.setState({
            bannerlist:arr,
            ka:kaquan,
            nav:newNav,
            shop:newShop
          })
      })
      .catch(function (err) {
          console.log(err);
      })
  }
  render() {
    return (
      <div className="m-home">
        <header className="search_header">
            <div className="search">
              <i></i>
              车厘子
            </div>
        </header>
        <div className="swiper">
            <Carousel>
              {this.state.bannerlist}
            </Carousel>
        </div>
        <div className="ka">
          <a>
             {this.state.ka}
          </a>
        </div>
        <div className="nav_wrap">
          <ul>
            {this.state.nav}
          </ul>
        </div>
        <div>
          {this.state.shop}
        </div>
      </div>
    )
  }
  componentDidMount () {


    }
}

export default Home

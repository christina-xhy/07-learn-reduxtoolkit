import React, { PureComponent } from 'react'
import {connect} from "react-redux"
import { subNumber } from '../store/features/counter'
import { fetchHomeMultidataAction } from '../store/features/home'
// import axios from "axios"
// import store from '../store'
// // import { changeBanners, changeRecommend } from '../store/features/home'

export class Profile extends PureComponent {
  componentDidMount(){
    // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //   const banners = res.data.data.banner.list
    //   const recommend = res.data.data.recommend.list
    //   store.dispatch(changeBanners(banners))
    //   store.dispatch(changeRecommend(recommend))
    // })
    this.props.fetchHomeMultidata()
  }

  subNumber(num){
    this.props.subNumber(num)
  }

  render() {
    const {counter,banners,recommend} = this.props
     
    return (
      <div>
        <h2>Profile Counter:{counter}</h2>
         <button onClick = { e => this.subNumber(5)}>-5</button>
         <button onClick = { e => this.subNumber(8)}>-8</button>
         <div>
          <h2>轮播图展示：</h2>
          <ul>
            {
             banners.map((item,index) => {
                return(
                  <li key={index}>
                    {item.title}
                  </li>
                )
              })
            }
          </ul>
         </div>
         <div>
          <h2>推荐展示：</h2>
          <ul>
            {
              recommend.map((item,index)=>{
                return(
                  <li key={index}>
                    {item.title}
                  </li>
                )
              })
            }
          </ul>
         </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
 counter : state.counter.counter,
 banners: state.home.banners,
 recommend:state.home.recommend
})
const mapDispatchToProps = (dispatch) => ({
  subNumber(num){
    dispatch(subNumber(num))
  },
  fetchHomeMultidata(){
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
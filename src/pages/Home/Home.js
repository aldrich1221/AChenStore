import * as React from 'react';
import Header from '../../pages/Header/Header';
import MainFeaturedPost from '../../blog/MainFeaturedPost';
import Vegetable from './resource/vegetable.png'
const mainFeaturedPost = {
  title: '阿陳的店',
  description:
    "守護您的健康",
  image: Vegetable ,
  imageText: 'main image description',
  // linkText: 'Continue reading…',
};
const Home=()=>{
  return <div>
           <Header title="A-Chen Store"  />
           <MainFeaturedPost post={mainFeaturedPost} />

  </div>
}
export default Home;
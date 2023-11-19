import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../pages/Header/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


// import Blog from './blog/Blog'

import Vegetable from './resource/vegetable.png'

const sections = [
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  { title: 'Home 首頁', url: '/' },
  { title: 'Product 產品', url: '/products' },
  { title: 'Health Supplement 保健食品資訊', url: "/blogs" },
  { title: '聯絡我們', url: "/contact" },
];

const mainFeaturedPost = {
  title: 'ㄚ陳的店',
  description:
    "生活小幫手 網購一指通",
  image: Vegetable ,
  imageText: 'main image description',
  // linkText: 'Continue reading…',
};
const imageList=[
 "achenweb/src/blog/resource/bodyInfo1.jpg"
]


const featuredPosts = [
  {
    title: '身體結構左',
    // date: 'Nov 12',
    description:
      '左側身體及相關營養素資訊',
    // image: BodyInfo1 ,
    imageLabel: 'Image Text',
  },
  {
    title: '身體結構右',
    // date: 'Nov 11',
    description:
      '右側身體及相關營養素資訊',
    // image: BodyInfo2 ,
    imageLabel: 'Image Text',
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="A-Chen Store" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />


        </main>
      </Container>
    </ThemeProvider>
  );
}

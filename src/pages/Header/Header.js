import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header(props) {
  const {  title } = props;
  const sections = [
    // { title: 'Technology', url: '#' },
    // { title: 'Design', url: '#' },
    // { title: 'Culture', url: '#' },
    // { title: 'Business', url: '#' },
    // { title: 'Politics', url: '#' },
    // { title: 'Opinion', url: '#' },
    // { title: 'Science', url: '#' },
    { title: 'Home 首頁', url: '/blogs' },
    { title: 'Product 產品', url: '/products' },
    { title: 'Health Supplement 保健食品資訊', url: "/blogs" },
    { title: '聯絡我們', url: "/contact" },
  ];
  return (
    <React.Fragment>
        
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          // noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
    
   

      {/* <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up 註冊
        </Button>
        <Button variant="outlined" size="small">
          Login 登入
        </Button>
      </Toolbar> */}
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

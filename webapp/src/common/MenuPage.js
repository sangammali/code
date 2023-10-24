// MenuPage.js
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

const MenuPage = ({ onClose }) => {
  return (
    <Box sx={{height:"80vh", }}>
    <div>
      <Box onClick={onClose} style={{ position: 'absolute', top: '30px', right: '70px' }}>
       <ClearSharpIcon fontSize='large'/>
      </Box>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        {/* Add more menu links as needed */}
      </ul>
    </div>
    </Box>
  );
}

export default MenuPage;














import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';

const ExpandableParagraph = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Typography variant="body1" component="div">
        {expanded ? text : text.slice(0, 733)} {/* Show first 100 characters or full text based on expansion */}
      </Typography>
      <Button color="primary" onClick={toggleExpanded} sx={{color: "#D0AC54", fontWeight: "500", fontSize:{sm:"25px", md:"15px"},}}>
        {expanded ? 'READ LESS -' : 'READ MORE +'}
      </Button>
    </div>
  );
};

export default ExpandableParagraph;

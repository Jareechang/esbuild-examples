import * as React from 'react';

import {
  Typography,
  Button,
} from '@mui/material';

interface HomeProps {}

const Home : React.FC<HomeProps> = (
  props
) => {
  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <Button>button</Button>
    </div>
  );
}

export default Home;

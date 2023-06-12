import { Box, Slider } from '@mui/material';
import * as React from 'react';

export default function SalaryHappinessTool() {
  const min = 50;
  const max = 150;
  const defaultValue = 65;

  return (
    <Box width={300}>
      <h3>Salary Happiness Tool</h3>

      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label='Default'
        valueLabelDisplay='auto'
      />
    </Box>
  );
}

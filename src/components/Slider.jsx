import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function ColorSlider({ handleSliderChange, sliderValue }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={300}
        max={1500}
        value={sliderValue}
        color='secondary'
        onChange={handleSliderChange}
      />
    </Box>
  );
}

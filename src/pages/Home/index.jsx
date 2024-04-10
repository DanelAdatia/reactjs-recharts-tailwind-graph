import React, { useState } from 'react';
import GraphComponent from '../../components/GraphComponent';
import ColorSlider from '../../components/Slider';
import { Typography, TextField, Box, Grid } from '@mui/material';

const Home = () => {
  const [graphData, setGraphData] = useState({
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    values: [
      { value: 100, color: '#8884d8' },
      { value: 200, color: '#8884d8' },
      { value: 300, color: '#8884d8' },
      { value: 400, color: '#8884d8' },
      { value: 500, color: '#8884d8' },
      { value: 600, color: '#8884d8' },
      { value: 700, color: '#8884d8' },
      { value: 800, color: '#8884d8' },
      { value: 900, color: '#8884d8' },
      { value: 1000, color: '#8884d8' },
      { value: 1100, color: '#8884d8' },
      { value: 1200, color: '#8884d8' },
    ],
  });

  const [graphWidth, setGraphWidth] = useState(500);
  const [sliderValue, setSliderValue] = useState(graphWidth);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    setGraphWidth(e.target.value);
  };

  const handleLabelChange = (index, value) => {
    const newLabels = [...graphData.labels];
    newLabels[index] = value;
    setGraphData({ ...graphData, labels: newLabels });
  };

  const handleValueChange = (index, value) => {
    const newValues = [...graphData.values];
    newValues[index].value = value;
    setGraphData({ ...graphData, values: newValues });
  };

  const handleColorChange = (index, color) => {
    const newValues = [...graphData.values];
    newValues[index].color = color;
    setGraphData({ ...graphData, values: newValues });
  };

  return (
    <Grid container direction='column' alignItems='center' spacing={2}>
      <Grid item>
        <Typography>Width</Typography>
        <ColorSlider
          handleSliderChange={handleSliderChange}
          sliderValue={sliderValue}
        />
      </Grid>
      <Grid item>
        <GraphComponent
          labels={graphData.labels}
          data={graphData.values.map((item) => item.value)}
          colors={graphData.values.map((item) => item.color)}
          graphWidth={graphWidth}
        />
      </Grid>
      <Grid item>
        <Box>
          {graphData.labels.map((label, index) => (
            <Box key={index}>
              <TextField
                variant='standard'
                value={label}
                onChange={(e) => handleLabelChange(index, e.target.value)}
                style={{ marginRight: '10px' }}
              />
              <TextField
                variant='standard'
                value={graphData.values[index].value}
                onChange={(e) => handleValueChange(index, e.target.value)}
                type='number'
                style={{ marginRight: '10px' }}
              />
              <TextField
                variant='standard'
                value={graphData.values[index].color}
                onChange={(e) => handleColorChange(index, e.target.value)}
                style={{ width: '80px' }}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;

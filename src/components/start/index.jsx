import React, { memo, useEffect } from 'react';
import * as echarts from 'echarts';

import { option } from 'model/start/algov';

const AStart = memo(() => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('start'));

    myChart.setOption(option);
  }, []);
  return <div id="start">AStart</div>;
});

export default AStart;

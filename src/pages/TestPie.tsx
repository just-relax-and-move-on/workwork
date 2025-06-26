// import React from 'react';
import { Pie } from '@ant-design/charts';

export default function TestPie() {
  const data = [
    { type: 'A类', value: 27 },
    { type: 'B类', value: 25 },
    { type: 'C类', value: 18 },
    { type: 'D类', value: 15 },
    { type: 'E类', value: 10 },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: '{percentage}',
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return <Pie {...config} />;
}
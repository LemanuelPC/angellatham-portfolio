import React, { useContext } from 'react';
import Portfolio from './Portfolio';
import banner from '../assets/images/works.svg';
import { AuthContext } from '../context';

export default function Works() {
  const { data } = useContext(AuthContext);
  return (
    <Portfolio
      title="works."
      icon="pen"
      data={data?.work || []}
      banner={banner}
      description=" Selected professional works that have been created in the recent years, ranging from branding, art
  direction, illustration, and motion graphics, bringing vision to life."
    />
  );
}

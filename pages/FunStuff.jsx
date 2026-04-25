import React, { useContext } from 'react';
import Portfolio from './Portfolio';
import banner from '../assets/images/fun-stuff.svg';
import { AuthContext } from '../context';

export default function FunStuff() {
  const { data } = useContext(AuthContext);
  return (
    <Portfolio
      title="fun stuff."
      icon="smile"
      data={data?.funStuff || []}
      banner={banner}
      description="A collection of my passion projects consisting of whimsical illustration and animation with a swirl of mythical creatures, fantastical stories, cultures, and everyday life."
    />
  );
}

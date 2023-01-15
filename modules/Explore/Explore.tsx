import Container from '@modules/shared/Container';
import Spacer from '@modules/shared/Spacer';
import Title from '@modules/shared/Title';
import React, { useState } from 'react';
import Categories from './Categories';
import ExploreCollection from './ExploreCollection';

interface IExploreProps {
  children?: React.ReactNode;
}

const Explore:React.FC<IExploreProps> = (props) => {
  const [activeCategory, setActiveCategory] = useState('Trending');

  return (
    <>
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Spacer vertical={30} />
      <Container>
        <Title size={33}>
          {activeCategory} Videos
        </Title>
        <Spacer vertical={30} />
        <ExploreCollection />
      </Container>
    </>
  );
}

export default Explore;

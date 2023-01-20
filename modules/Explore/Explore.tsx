import Container from '@modules/shared/Container';
import Spacer from '@modules/shared/Spacer';
import Title from '@modules/shared/Title';
import React, { useState } from 'react';
import Categories from './Categories';
import ExploreCollection from './ExploreCollection';
import { StyledExploreTitle } from './styled';

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
        <StyledExploreTitle>
          {activeCategory} Videos
        </StyledExploreTitle>
        <Spacer vertical={30} />
        <ExploreCollection />
      </Container>
    </>
  );
}

export default Explore;

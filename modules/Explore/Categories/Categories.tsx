import React from 'react';
import CategoryButton, { ICategory } from '../CategoryButton/CategoryButton';
import { StyledExploreCategories } from './styled';

interface ICategoriesProps {
  children?: React.ReactNode;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categoriesList:ICategory[] = [
  {
    label: 'Trending',
    icon: 'WhatshotOutlined'
  },
  {
    label: 'Music',
    icon: 'HeadphonesOutlined'
  },
  {
    label: 'Gaming',
    icon: 'SportsEsportsOutlined'
  },
  {
    label: 'News',
    icon: 'NewspaperOutlined'
  },
  {
    label: 'Fashion & Beauty',
    icon: 'CheckroomOutlined'
  },
  {
    label: 'Learning',
    icon: 'SchoolOutlined'
  },
  {
    label: 'Live',
    icon: 'StreamOutlined'
  },
  {
    label: 'Sports',
    icon: 'SportsBaseballOutlined'
  },
]

const Categories:React.FC<ICategoriesProps> = ({
  activeCategory,
  setActiveCategory
}) => {
  return (
    <StyledExploreCategories>
      {categoriesList.map(c => (
        <CategoryButton
          onClick={() => setActiveCategory(c.label)}
          isActive={activeCategory === c.label}
          key={c.label}
          {...c}
        />
      ))}
    </StyledExploreCategories>
  );
}

export default Categories;

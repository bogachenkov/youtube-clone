import { SearchOutlined, TuneOutlined } from '@mui/icons-material';
import React from 'react';
import Input from '../../shared/Input';
import { StyledSearchSection, StyledIconWrap } from './styled';

interface ISearchSectionProps {
  children?: React.ReactNode;
}

const SearchSection:React.FC<ISearchSectionProps> = (props) => {
  return (
    <StyledSearchSection>
      <Input type="search" placeholder='Search' IconLeft={SearchOutlined} />
      <StyledIconWrap>
        <TuneOutlined fontSize='inherit' />
      </StyledIconWrap>
    </StyledSearchSection>
  );
}

export default SearchSection;

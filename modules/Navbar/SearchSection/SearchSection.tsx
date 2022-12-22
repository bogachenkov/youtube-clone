import { TuneOutlined } from '@mui/icons-material';
import dynamic from 'next/dynamic';
import React from 'react';
import { StyledSearchSection, StyledIconWrap } from './styled';
const VoiceSearch = dynamic(() => import('@shared/VoiceSearch'), { ssr: false })
interface ISearchSectionProps {
  children?: React.ReactNode;
}

const SearchSection:React.FC<ISearchSectionProps> = (props) => {
  return (
    <StyledSearchSection>
      <VoiceSearch />
      <StyledIconWrap>
        <TuneOutlined fontSize='inherit' />
      </StyledIconWrap>
    </StyledSearchSection>
  );
}

export default SearchSection;

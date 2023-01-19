import DefaultIconButton from '@modules/shared/DefaultIconButton';
import dynamic from 'next/dynamic';
import React from 'react';
import { StyledSearchSection } from './styled';
const VoiceSearch = dynamic(() => import('@shared/VoiceSearch'), { ssr: false })
interface ISearchSectionProps {
  children?: React.ReactNode;
}

const SearchSection:React.FC<ISearchSectionProps> = (props) => {
  return (
    <StyledSearchSection>
      <VoiceSearch />
      <DefaultIconButton
        size={23}
        icon='TuneOutlined'
        title='Not Implemented'
      />
    </StyledSearchSection>
  );
}

export default SearchSection;

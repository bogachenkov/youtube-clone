import Text from '@modules/shared/Text';
import styled from 'styled-components';

export const StyledPlaylistItem = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: var(--item-height);
  padding: 0 2.8em;
  border-radius: 6px;
  background-color: var(--playlist-item-bg);
`;

export const StyledIndex = styled(Text)`
  width: 18px;
  text-align: left;
  padding-top: 2.1em;
`;

export const StyledTitle = styled(Text)`
  padding-top: .8em;
  max-width: 200px;
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow: ellipsis;
`;

export const StyledChannelName = styled(Text)`

`;
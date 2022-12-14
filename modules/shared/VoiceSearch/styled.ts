import styled from 'styled-components';

export const StyledVoiceSearch = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledVoiceButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--color-grayLight);
  position: absolute;
  top: 0;
  right: .8em;
  font-size: 2.5rem;
  height: 100%;
  aspect-ratio: 1/1;
  line-height: 1;

  &:hover {
    color: var(--color-light);
  }
`;
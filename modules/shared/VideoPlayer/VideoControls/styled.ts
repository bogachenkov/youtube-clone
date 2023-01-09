import styled from 'styled-components';

export const StyledVideoControls = styled.div`
  --player-controls-height: 7.6rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -var(--player-controls-height);
  height: var(--player-controls-height);
  padding: 0 2.5rem;
  background: rgba(0, 0, 0, .6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 20px;

  & button {
    background: none;
    border: none;
    color: var(--color-light);
    padding: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;
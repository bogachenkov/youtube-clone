import styled from 'styled-components';

export const StyledVideoControls = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 7.6rem;
  padding: 0 2.5rem;
  background: rgba(0, 0, 0, .6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 20px;

  & button {
    background: none;
    border: none;
    color: var(--color-white);
    padding: 0;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;
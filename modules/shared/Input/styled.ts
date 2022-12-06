import styled from 'styled-components';

export const StyledInputWrap = styled.div`
  position: relative;
  flex: 1;
  --input-height: 3.6rem;
  --padding-left-default: 2.5rem;
  --icon-left-size: 2.4rem;
  --icon-left-padding: 0.4rem;
  --padding-left-resulted: var(--padding-left-default);
`;

export const StyledIconWrap = styled.div`
  position: absolute;
  color: var(--color-grayLight);
  font-size: var(--icon-left-size);
  left: var(--padding-left-default);
  top: calc((var(--input-height) - var(--icon-left-size)) / 2);
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 1rem;
  border: none;
  background-color: var(--color-black);
  height: var(--input-height);
  padding: 0 var(--padding-left-default) 0 var(--padding-left-resulted);
  color: var(--color-grayLight);
  font-size: 1.3rem;
  font-weight: 500;
  
  &:focus {
    outline-style: solid;
    outline-width: 1px;
  }

  &::placeholder {
    color: var(--color-gray);
  }
`;
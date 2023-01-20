import styled from "styled-components";

export const StyledMobileNavItem = styled.div`
  flex: 0 0 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    justify-content: flex-start;
  }

  &:last-of-type {
    justify-content: flex-end;
  }
`;
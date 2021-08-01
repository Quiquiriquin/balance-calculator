import styled from "styled-components";

export const Button = styled.button`
  min-height: 36px;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  box-shadow: 0 3px 6px rgba(0,0,0,.1);
  display: flex;
  align-items: center;
  ${
    props => props.background ? `background: ${props.background} !important;` : `background: #FFFFFF;`
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0,0,0,.1);
  }
  
`;
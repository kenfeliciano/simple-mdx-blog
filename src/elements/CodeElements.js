import styled from 'styled-components'

export const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.colors.main1};
  color: ${(props) => props.theme.colors.main2};
  padding: 0.6rem 1rem;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.9rem;
`
export const CopyCode = styled.button`
  background-color: ${(props) => props.theme.colors.main1};
  color: ${(props) => props.theme.colors.main2};
  position: absolute;
  right: 0;
  top: 0;
  border: 0;
  border-radius: 3px;
  margin: 0.5em;
  opacity: 0.5;
  padding: 0.2rem;
  &:hover {
    opacity: 1;
  }
`

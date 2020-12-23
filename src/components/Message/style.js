import styled from 'styled-components/native'

export const View = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 14%;
  border-color: ${props => props.borderColor};
  border-radius: 8px;
  border-width: 1px;
`;

export const Text = styled.Text`
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color};
`;
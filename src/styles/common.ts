import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 24px auto 40px;
  font-size: 36px;
  letter-spacing: -0.04em;
`;

export const Text = styled.p`
  line-height: 60px;
  font-size: 22px;
`;

export const Button = styled.button`
  width: 350px;
  height: 60px;
  margin: 60px auto 0;
  border-radius: 8px;
`;

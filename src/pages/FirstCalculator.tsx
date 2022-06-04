import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import * as S from '../styles/common';

export const FirstCalculator = () => {
  useEffect(() => {
    axios(
      'https://api.apilayer.com/currency_data/live?source=USD&currencies=KRW,JPY,PHP',
      {
        headers: {
          apikey: '2SbWaoFsAknlmhku0BSVw7YYCRu7HCZm',
        },
      }
    )
      .then((res) => console.log(res.data))
      .catch((error) => console.log('error', error));
  });

  return (
    <Wrapper>
      <Container method='POST' action=''>
        <S.Title>환율계산</S.Title>
        <S.Text>송금국가: 미국(USD)</S.Text>
        <S.Text>
          수취국가:{' '}
          <Select>
            <option value='KO'>한국(KRW)</option>
            <option value='JP'>일본(JPY)</option>
            <option value='PL'>필리핀(PHP)</option>
          </Select>
        </S.Text>
        <S.Text>환율: 1,119.93 KRW/USD</S.Text>
        <S.Text>
          송금액: <Input /> USD
        </S.Text>
        <S.Button type='submit'>
          <S.Text>Submit</S.Text>
        </S.Button>
      </Container>
      <Tabs>
        <Tab>
          <Link to='/'>FIRST</Link>
        </Tab>
        <Tab>
          <Link to='/second'>SECOND</Link>
        </Tab>
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 600px;
  min-height: 700px;
  background-color: beige;
  margin: 30px auto;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  min-height: 600px;
  margin: auto;
  padding: 0 30px;
  background-color: bisque;
`;

const Select = styled.select`
  width: 250px;
  height: 30px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  font-size: 18px;
`;

const Tabs = styled(S.FlexBox)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 80px;
`;

const Tab = styled(S.FlexCenter)`
  width: 300px;
  border: 1px solid #8e8e8e;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;

  & + & {
    border-left: none;
  }
`;

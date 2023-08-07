// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const MainPaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const CardContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    flex-grow: 1;
  }
`
export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: '#ffffff';
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px 24px;
  box-shadow: 0px 4px 16px #d3d9e0;
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 48px;
    max-width: 450px;
  }
`
export const CardTitle = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
`
export const Line = styled.hr`
  width: 118px;
  border: 2px solid #ffd773;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 173px;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 281px;
  height: 200px;
  border-radius: 19px;
  padding: 24px;
  box-shadow: 0px 4px 33px #344e7a;
  @media screen and (min-width: 768px) {
    width: 375px;
    height: 295px;
    border-radius: 42px;
    padding: 32px;
  }
  @media screen and (min-width: 992px) {
    width: 475px;
    height: 325px;
    padding: 48px;
  }
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 42px;
  }
`
export const CardHolderNameLabel = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  font-size: 10px;
  margin: 0;
  margin-top: 31px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 52px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`
export const CardHolderName = styled.p`
  color: #d3d9e0;
  font-size: 18px;
  font-family: 'Roboto';
  padding-top: 3px;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 52px;
    line-height: 1.33;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`
export const PaymentCardTitle = styled.h1`
  color: #475569;
  font-size: 34px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const NameInput = styled.input`
  color: #c3cad9;
  font-size: 15px;
  font-family: 'Roboto';
  height: 30px;
  width: 290px;
  padding: 5px 10px;
  margin: 0px;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
export const NumberInput = styled.input`
  color: #c3cad9;
  font-size: 15px;
  font-family: 'Roboto';
  height: 30px;
  width: 290px;
  margin-top: 24px;
  padding: 12px 24px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`

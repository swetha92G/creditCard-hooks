// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  MainCardContainer,
  MainPaymentContainer,
  CardTitle,
  Line,
  CardContainer,
  Card,
  CardNumber,
  CardHolderNameLabel,
  CardHolderName,
  PaymentCardContainer,
  PaymentCardTitle,
  NameInput,
  NumberInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const ShowName = name.toUpperCase()

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <MainCardContainer>
        <CardTitle>Credit Card</CardTitle>
        <Line />
        <CardContainer data-testid="creditCard">
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderNameLabel htmlFor="name">
              CARDHOLDER NAME
            </CardHolderNameLabel>
            <CardHolderName>{ShowName}</CardHolderName>
          </Card>
        </CardContainer>
      </MainCardContainer>
      <MainPaymentContainer>
        <PaymentCardContainer>
          <PaymentCardTitle>Payment Method</PaymentCardTitle>

          <NumberInput
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />

          <NameInput
            type="text"
            id="name"
            value={name}
            onChange={onChangeName}
            placeholder="CardHolder Name"
          />
        </PaymentCardContainer>
      </MainPaymentContainer>
    </MainContainer>
  )
}

export default CreditCard

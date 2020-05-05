import React from 'react'
import { OrderFinal,PriceAdditions , ButtonToPayments ,  AmountAdditions ,  NewOrderDiv,PriceOFNewAdditions , NewOrderText, CloseIcon, MoreExtensionOrder, MoreOrderText } from './finalOrder-styled'
import {setHiddenPage} from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'
import NouveauItems from '../Checkbox-components/checkbox-component'
import { createStructuredSelector } from 'reselect'
import { selectNumberQuantity , selectQuantityPrice } from '../../redux/cart/cart-selectors'


const   FinalOrder = ({  Total , MoreFoods  , setHiddenPage , PriceFinal}) => {
    
    console.log(PriceFinal)
    return(
        <OrderFinal>
            <NewOrderDiv>
                <NewOrderText >New Orders</NewOrderText>
                
                <CloseIcon onClick={() => setHiddenPage()}/>
            </NewOrderDiv>
            <MoreExtensionOrder>
                <MoreOrderText >Additions Lunch</MoreOrderText>

                {MoreFoods.map((item) => (
                    <NouveauItems key={item.id} item={item}/>
                ))}
                
            </MoreExtensionOrder>
            <PriceOFNewAdditions>
                <AmountAdditions>Total</AmountAdditions>
                <PriceAdditions>{(PriceFinal + Total).toFixed(2)}DT</PriceAdditions>
            </PriceOFNewAdditions>
            <ButtonToPayments>
                    To Payments
            </ButtonToPayments>
        </OrderFinal>
        )
    }
const mapDispatchToProps = dispatch =>({
    setHiddenPage : () => dispatch(setHiddenPage()),
})
const mapStateToProps = createStructuredSelector({
    MoreFoods : selectNumberQuantity , 
    PriceFinal : selectQuantityPrice
})
export default connect(mapStateToProps , mapDispatchToProps)(FinalOrder) ;
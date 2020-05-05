import React from 'react'
import {NouveauOrders , NewText , MoinsIcon , PlusIcon , PriceItem} from './checkbox-styled.jsx'
import {setNumberOfQuantity , removeNumberOfQuantity } from '../../redux/cart/cart-actions'
import { connect } from 'react-redux'
    

const NouveauItems = ({item , setNumberOfQuantity , removeNumberOfQuantity}) => {
    const { nom , quantity , price} = item
    return(
        <NouveauOrders>
                        <NewText >{nom}</NewText>
                        <div>
                            <MoinsIcon onClick={() => removeNumberOfQuantity(item)}/>{quantity}<PlusIcon  onClick={() => setNumberOfQuantity(item)}/>
                        </div>
                        <PriceItem >{price}DT</PriceItem>
        </NouveauOrders>
    )
}

const mapDispatchToProps = dispatch => ({
    setNumberOfQuantity : item => dispatch(setNumberOfQuantity(item)),
    removeNumberOfQuantity : item => dispatch(removeNumberOfQuantity(item)),
})
export default connect(null , mapDispatchToProps)(NouveauItems) ;
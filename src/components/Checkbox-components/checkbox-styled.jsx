import styled from 'styled-components'
import {  Plus } from '@styled-icons/boxicons-regular'
import {Minus} from '@styled-icons/entypo/Minus'

export const NouveauOrders = styled.div`
width : 90% ;
display : flex ;
justify-content : space-between ;
height : 50px ;   
`
export const NewText = styled.span`
    font-size : 19px ;
    width : 30% ;
    font-family :  'Open Sans', sans-serif;
`
export const MoinsIcon = styled(Minus)`
    width : 20px;
    /* height : 30px; */
    color : rgb(145, 150, 154);
    margin-right : 5px;
    cursor : pointer ;
`
export const PlusIcon = styled(Plus)`
    width : 20px;
    /* height : 50px; */
    color : rgb(145, 150, 154);
    margin-left : 5px;
    cursor : pointer ;
`
export const PriceItem = styled.span`
    font-size : 19px;
    color : black ;
    font-family :  'Open Sans', sans-serif;
`

import styled from 'styled-components'
import { Close, Minus, Plus } from 'styled-icons/evil'


export const OrderFinal = styled.div`
    width : 30vw ;
    height : 80vh ;
    position: absolute;
    right : 0 ;
    top : -60px;
    background-color : white;
    border : 1px solid black ;
    z-index : 1000;
    padding : 30px 20px ;
`
export const NewOrderDiv = styled.div`
    position: relative;
    width : 100%;
    height : 20%;
    border-bottom : 1px solid   rgb(245,245,245) ;
    display : flex ;
    justify-content : space-between;
    align-items : center;
`
export const NewOrderText = styled.span`
    font-size : 50px;
    font-family: 'Open Sans', sans-serif;
    font-weight : normal ;
`
export const CloseIcon = styled(Close)`
    width : 30%;
    height : 50%;
    color : black ;
    cursor: pointer;
`
export const MoreExtensionOrder = styled.div`
    width : 100%;
    display : flex ;
    flex-direction : column ;
    padding-top : 50px;
`
export const MoreOrderText  = styled.span`
    font-size : 30px ;
    font-family: 'Open Sans', sans-serif;
    margin-bottom : 30px ;
`
export const NouveauOrders = styled.div`
    width : 90% ;
    display : flex ;
    justify-content : space-between ;
    height : auto ;   
`
export const NewText = styled.span`
    font-size : 20px ;
`
export const MoinsIcon = styled(Minus)`
    width : 20px;
    height : 50px;
    color : rgb(145, 150, 154);
    margin-right : 5px;
    cursor : pointer ;
`
export const PlusIcon = styled(Plus)`
    width : 20px;
    height : 50px;
    color : rgb(145, 150, 154);
    margin-left : 5px;
    cursor : pointer ;
`
export const PriceItem = styled.span`
    font-size : 20px;
    color : black ;
`
export const PriceOFNewAdditions = styled.div`
    position: relative;
    display : flex ;
    flex-direction : column ;
    left : 80% ;
    padding-bottom : 10px ;
    border-bottom : 1px solid  gray   ;
`
export const PriceAdditions = styled.span`
    font-size : 25px ;
`
export const AmountAdditions = styled.span`
    font-size : 10px ;
    color : gray ;
`
export const ButtonToPayments = styled.button`
    width : 92% ;
    height : 10% ;
    margin : auto ;
    background-color : rgb(254,111,1) ;
    position: absolute;
    bottom : 10px ;
    border : none ;
    text-align : center ;
    font-size : 30px ;
    color : white ;
    font-weight : bold ;
    
`

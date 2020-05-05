import styled from 'styled-components'
import { Card,  CardActions } from '@material-ui/core'


export const CardFood = styled(Card)`
    width : 550px ;
    height : 450px ;
    margin : 40px ;
`
export const CardArea = styled(CardActions)`
    display : flex ;
    justify-content : space-between ;
    border-top : 1px solid #D4D4D4 ;
`
export const ButtonOrder = styled.span`
    padding : 10px 20px;
    color :#FF9900 ;
    font-size : 18px ;
    font-weight : bold ;
    font-family : Arial, Helvetica, sans-serif ;
    text-align :center ;
    border-left : 1px solid #D4D4D4 ;
    cursor : pointer ;
`

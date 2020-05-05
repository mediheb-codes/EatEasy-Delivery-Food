import styled, { css } from 'styled-components'
import { Rating } from '@material-ui/lab'
import { Fire } from '@styled-icons/remix-fill/Fire'
import { Leaf } from '@styled-icons/fa-solid/Leaf'
import { Fish } from 'styled-icons/fa-solid'
import {ShoppingBag} from '@styled-icons/boxicons-regular/ShoppingBag'



export const OrderLayout = styled.div`
    width : 100vw ;
    height : 150vh ;
    background-color : rgb(245,245,245) ;
    display : flex ;
    justify-content : center ;
    position: relative;
`
export const OrderItem = styled.div`
    margin-top : 100px ;
    width : 90% ;
    height : auto ;
    background-color : white ;
    border-radius : 5px ;
    padding-top : 30px ;
`
export const OrderDetail = styled.div`
    height : 480px ;
    width : 95% ;
    display : flex ;
    margin : auto ;
    justify-content : space-between ;

`
export const ItemText = styled.div`
    width : 50% ;
    height : 80% ;
    display : flex ;
    flex-direction : column ;
` 
export const TitleReview = styled.div`
    width : 100% ;
    height : auto ;
    display : flex ;
    justify-content : space-between ;
`
export const TitleItem = styled.span`
    font-size : 40px ;
    font-family: 'Manrope', sans-serif;
`
export const ReviewItem = styled(Rating)`
   margin-top : 20px ;
   color : rgb(254,111,1) ;
`
export const ImageOrder = styled.img`
    width : 40% ;
    height : 80% ;
`
export const SomeText = styled.span`
    color : #D4D4D4 ;
    font-family: 'Manrope', sans-serif;
    font-size : 15px ;
`
export const BestDetail = styled.div`
    width : 200px ;
    display : flex ;
    justify-content : space-between ;
    margin-top : 20px ;
`
export const ButtonSuper = styled.span`
    padding : 5px 10px ;
    border : 1px solid rgb(254,111,1) ;
    font-size : 15px ;
    color : rgb(254,111,1) ;
`
const StyleIcons = css`
    width : 20px ;
    height : 20px ;
    padding : 5px ;
    border-radius : 50% ;
    color : white ;
`
export const IconSuper = styled(Fire)`
    ${StyleIcons};
    background-color : rgb(254,111,1); 
    
`
export const IconLeaf = styled(Leaf)`
    ${StyleIcons}
    background-color : #40bad5 ;
`
export const IconFish = styled(Fish)`
    ${StyleIcons}
    background-color : #a0ffe6 ;
`
export const ParagraphOrder = styled.div`
    color : rgb(145, 150, 154) ;
    width : 800px ;
    font-size : 18px ;
    margin-top : 30px ;
`
export const PriceOrder = styled.div`
    width : 100% ;
    display : flex ;
    justify-content : space-between ;
    margin-top : 80px ;
`
export const PriceItem = styled.span`
    font-size : 30px ;
    font-weight : bold ;
`
export const ButtonFinalOrder = styled.div`
    width : 200px ;
    height : 70px ;
    border : 1px solid rgb(145, 150, 154) ;
    display : flex;
    justify-content : space-between ;
    margin-top : -20px ;
    position: relative;
`
export const IconOrder = styled(ShoppingBag)`
    padding : 0 10%;
    background-color : rgb(254,111,1);
    color : white ;
    width : 20% ;
    height : 100%;
`
export const OrderSpan = styled.span`
    font-size : 17px ;
    font-weight : bold ;
    align-self : center;
    margin : auto ;
    cursor : pointer ;
`
export const FoodDetail = styled.div`
    width : 95% ;
    height : auto ;
    display : flex ;
    margin : auto ;
    /* justify-content : space-between ; */
    margin-top : 80px;
`
export const OtherExtensionsFood = styled.div`
    width : 60% ;
    height : 100% ;
    display : flex ;
    flex-direction : column ;
    justify-items : space-between ;
`
export const OtherFoodImages = styled.div`
    position: relative;
    width : 90% ;
    height : auto ;
    display : flex ;
    justify-content : space-between ;
    align-items : flex-start ;
    margin-bottom : 20px ;
`
export const ImageFoods = styled.img`
    width : 100px ;
    height : 80px;
`
export const TextImages = styled.p`
    font-size: 20px ;
    color : rgb(145, 150, 154) ;
    width : 85% ;
`
export const DegradationNumbers = styled.div`
    height : 350px ;
    width : auto;
    display : flex ;
    flex-direction : column ;
`
export const SpecificDegradation = styled.div`
    display : flex ;
    flex-direction : column ;
    margin-bottom : 50px;
`
export const NameDegradation  = styled.span`
    font-size : 25px ;
    color : rgb(145, 150, 154);
`
export const NumberDegradation = styled.span`
    color : rgb(153, 153, 153);
    font-size : 70px ;
`
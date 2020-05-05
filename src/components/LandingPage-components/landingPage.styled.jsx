import styled from 'styled-components'
import {ArrowNarrowRight} from '@styled-icons/heroicons-outline/ArrowNarrowRight'
import { Link } from 'react-router-dom'

export const GeneralPage = styled.div`
    width : 100vw ;
    height : 100vh ;
    background-color : #000000 ;
`
export const RegistrationBox = styled.div`
    position: absolute;
    width : 155px;
    height : 22px;
    left : 123px;
    top : 50px ;
`
export const LoginRegisterText = styled(Link)`
    font-size : 20px ;
    font-family : Arial, Helvetica, sans-serif;
    color : #B5B5B5;
    letter-spacing : 0 ;
    text-decoration : none ;
`
export const FoodBackground = styled.img`
    position: absolute;
    width : 1400px ;
    height : 815px ;
    right : 0;
    top : 0 ;
    opacity : 62% ;
    
`
export const TitleBox = styled.div`
    position: absolute;
    width : 207px;
    height : 160px;
    left : 1541px ;
    top : 0 ;
    background-color : #000000 ;
    z-index : 1000;

`
export const TitleText = styled.div`
    font-size : 77px;
    font-family : 'Manrope', sans-serif;
    color: white;
    line-height : 46px ;
    margin : 25px 10px ;
`
export const ResumeText = styled.div`
    position: absolute;
    left : 246px ;
    top : 248px ; 
    font-family : Arial, Helvetica, sans-serif ;
    font-size : 168px ;
    line-height : 158px ;
    width : 1000px;
    color : white ;
`
export const StartButton = styled.div`
    position: absolute;
    width : 360px ;
    height : 180px ;
    right : 53px ;
    top : 703px;
    background-color : #47B720;
    text-decoration : none ;
    display : flex ;
    align-items : center ;
    
`
export const TextButton = styled.div`
    font-size : 37px;
    font-family: 'Baloo Paaji 2', cursive;
    color : white ;
    text-decoration : none ;
    width : 50%;
    padding-left : 40px ;

`
export const ArrowRight = styled(ArrowNarrowRight)`
    width : 100px;
    height : 100px;
    color : white ;
    position: relative;
`
export const ManageList = styled.div`
    position : absolute ;
    left : 114px ;
    bottom : 70px ;
    width : 200px ;
    height : 260px ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
`
export const ManageText = styled.span`
    font-size : 19px ;
    font-family : Arial, Helvetica, sans-serif ;
    color : #B5B5B5 ;
    margin-bottom : 20px ;
    display : flex ;
    align-items : center ;
    :first-child {
        ::before {
            content : '' ;
            width : 20px ;
            height : 2px;
            background-color : #00FE08;
            margin-right : 12px ;
            


        }
    }

`
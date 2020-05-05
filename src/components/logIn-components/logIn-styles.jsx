import styled from 'styled-components'
import { ReactComponent as iconSvg }  from '../../Assets/undraw.svg'
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'
import {TextField} from '@material-ui/core'

export const LogInPage = styled.div`
    width : 100vw ;
    height : 100vh ;
    display : flex ;
    position: relative;
`
export const SvgSection = styled.div`
    width : 40% ; 
    background-color : #FEBF62 ;
    height : 100vh ; 
    display : flex ;
    align-items : center ;
`
export const SvgIcon = styled(iconSvg)`
    width : 100% ;
    height : 40% ;
`
export const UserLoginSection = styled.div`
    width : 60% ; 
    height : 100%;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex-direction : column;
`
export const UserIcon = styled(UserCircle)`
    width : 100px ;
    height : 50px ;
`
export const TitleLog = styled.span`
    font-family: 'Manrope', sans-serif;
    font-size : 20px ;
    margin-top : 20px ;
`
export const TextLog = styled.span`
    margin-top : 20px ;
    width : 40% ;
    font-size : 15px ;
    font-family : Arial, Helvetica, sans-serif ;
    text-align : center ;
    margin-bottom : 20px ;

`
export const InputSection = styled.div`
    display : flex ;
    flex-direction : column ;
    justify-content : space-between ;
    height : 300px ;
`
export const ButtonSubmit = styled.div`
    padding : 10px 100px ;
    text-align : center ;
    border : 2px solid  #FEBF62;
    color : black ;
    margin-top : 50px ;
    font-family: 'Manrope', sans-serif;
    cursor: pointer;
    :hover{
        color : white ;
        background-color : black
    };
`
export const GoogleLog = styled.img`
    width : 30px ;
    height : 30px ;
    padding : 10px ;
    border-radius : 50% ;
    border : 1px solid #FEBF62 ;
    cursor: pointer;
    :hover{
        background-color : black
    };
`
export const PopLog = styled.div`
    width : 350px ;
    height : 50px ;
    margin-top : 10px ;
    display : flex ; 
    margin-left : 10% ;
    justify-content : space-between ;
`
export const FormInput = styled.form`
    justify-content : center;
    display : flex ;
    flex-direction : column ;
`
export const InputField = styled(TextField)`
    width : 500px ;
    height : 30px ;
    margin-bottom : 20px;

`
export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color:#FEBF62;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`


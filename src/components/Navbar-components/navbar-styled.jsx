import styled from 'styled-components'
import {ShoppingBag} from '@styled-icons/boxicons-solid/ShoppingBag'
import {Bell} from '@styled-icons/entypo/Bell'
import {MoreVerticalOutline} from '@styled-icons/evaicons-outline/MoreVerticalOutline'

export const HeaderNav = styled.div`
    width : auto ;
    height : 80px ;
    display : flex ;
    align-items : center ;
    background-color : white ;
    justify-content : space-between ;
    padding : 0 100px ;
`
export const FirstSideNav = styled.div`
    display : flex ;
    justify-content : space-between ;
`
export const TitleNav = styled.span`
    font-size : 30px ;
    font-family: 'Manrope', sans-serif;
    width : 100px;
    line-height : 24px ;
    cursor : pointer ;
`
export const ItemsNav = styled.span`
    cursor : pointer ;
`

export  const LinkNav = styled.div`
    width : 300px ;
    display : flex ;
    margin-top : 12px ;
    margin-left : 20px ;
    justify-content : space-between ;
`
export const UserNav = styled.div`
    display : flex ;
    justify-content : space-between ;
    justify-items: flex-end ;
`
export const IconShop = styled(ShoppingBag)`
    width : 40px ;
    height : 30px ;
    margin-top : 12px ;
    color : #FF9900 ;
`
export const UserDetail = styled.div`
    width : 230px ;
    display : flex ;
    justify-content : space-around ;
    align-items : center ;
    ::before , ::after{
        content : ' ' ;
        width : 1px ;
        height : 50px ;
        background-color : #D4D4D4 ;
    }
`
export const AlarmNotification = styled(Bell)`
    width : 40px ;
    height : 30px ;
    margin-top : 14px ;
    color : #FF9900 ;
`
export const MenuButton = styled(MoreVerticalOutline)`
    color : black ;
    width : 20px ;
    height : 20px ;
`

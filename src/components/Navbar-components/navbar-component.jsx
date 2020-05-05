import React from 'react'
import { HeaderNav , FirstSideNav , TitleNav  , LinkNav , UserNav , IconShop , UserDetail , AlarmNotification, MenuButton, ItemsNav} from './navbar-styled'
import { Avatar, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase';
import { withRouter } from 'react-router-dom';






class  Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName : '',
            imageUrl : '' ,
            anchorEl : null
        }
    }
    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user){
                this.setState({
                    displayName : user.displayName ,
                    imageUrl : user.photoURL
                })
            }else {
                this.setState({
                    displayName : '',
                    imageUrl : '' 
                })
            }
        })
        
    }
         handleHover = (event) => {
                  this.setState({anchorEl : event.currentTarget})  
        };

         handleClose = () => {
            this.setState({anchorEl : null})  
        } ;
        handleOut = () => {
            auth.signOut().then( () => {
                // this.props.history.push('/')
                window.location.reload();
            })
        }


    render(){
        const {currentUser , history} = this.props
        const {displayName , imageUrl , anchorEl} = this.state
        console.log(currentUser)

        
    return(
        <HeaderNav>
            <FirstSideNav>
                <TitleNav onClick={() => history.push('/Shop')}>eat easy .</TitleNav>
                <LinkNav>
                    <ItemsNav onClick={() => history.push('/Shop')}>Home</ItemsNav>
                    <ItemsNav>My Payments</ItemsNav>
                    <ItemsNav>My orders</ItemsNav>
                </LinkNav>
            </FirstSideNav>
            {currentUser ? (<UserNav>
                <IconShop />
                <UserDetail >
                    <Avatar src={imageUrl} alt={displayName}/>
                    <h5>{displayName}</h5>
                    <IconButton onClick={this.handleHover}>
                        <MenuButton  />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}>
                        <MenuItem onClick={this.handleOut}>Sign Out</MenuItem>
                        <MenuItem>My Profile</MenuItem>
                    </Menu>
                </UserDetail>
                <AlarmNotification />
            </UserNav>)  : (
                <UserDetail>
                    <Button variant='contained' color='primary' disableElevation onClick={() => {this.props.history.push("/Register")}}>Sign Up Now</Button>
                    <Button variant='contained'  disableElevation onClick={() => {this.props.history.push("/Log-in")}}>Sign In</Button>
                </UserDetail>
            )}
            
        </HeaderNav>
    )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser 
})

export default connect(mapStateToProps) (withRouter(Navbar)) ;
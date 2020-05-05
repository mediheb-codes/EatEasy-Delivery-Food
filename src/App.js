import React from 'react';
import {Route  , Switch, Redirect} from 'react-router-dom'
import LandingPage from './components/LandingPage-components/landingPage.components';
import LogIn from './components/logIn-components/logIn-components';
import RegisterPage from './components/Register-components/register-component';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux'
import {createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import ShopPage from './components/ShopHome-components/shophome.component';
import { selectFoodsShopPreview } from './redux/shop/shop-selectors'


class App extends React.Component{
unsubscribeFromAuth = null ;

  componentDidMount(){
    const {setCurrentUser } = this.props
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async user => {
        if(user){
          const userRef = createUserProfileDocument(user);

           (await userRef).onSnapshot(snapShot => {
            setCurrentUser({
                id : snapShot.id ,
                ...snapShot.data()
            });
          });
        }
        setCurrentUser(user)
      });
       
    }
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  
  render(){
    return (
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route  path='/Log-in' render={() => this.props.currentUser ? (<Redirect to='/Shop' />) : (<LogIn />)}/>
            <Route  path='/Register' render={() => this.props.currentUser ? (<Redirect to='/Shop' />) : (<RegisterPage />)} />
            <Route  path='/Shop' component={ShopPage} />
        </Switch>
    );

  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser ,
   collectionsFood : selectFoodsShopPreview
})

export default connect(mapStateToProps , mapDispatchToProps) (App);

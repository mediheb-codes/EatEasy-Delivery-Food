import React from 'react'
import {LogInPage , SvgSection , SvgIcon , UserLoginSection , SpinnerOverlay , SpinnerContainer,   InputField  ,  UserIcon ,  FormInput , PopLog , TitleLog , TextLog ,  GoogleLog , InputSection , ButtonSubmit} from './logIn-styles'
import   GoogleIcon from '../../Assets/google.png'
import   FacebookIcon from '../../Assets/iconfinder.png'
import   TwitterIcon from '../../Assets/twitter.png'
import { auth, googleAuthProvider, FacebookAuthProvider } from '../../firebase/firebase'
import { withRouter  } from 'react-router-dom'


class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email : '' ,
            password : '' ,
            isLoading : false 
        }
    };

    handleSubmit = async event => {
        event.preventDefault() ;
        const {email , password } = this.state ;
        this.setState({isLoading : true})

        try{
            await auth.signInWithEmailAndPassword(email , password).then(() => {
                this.setState({isLoading : true})
            });
            this.setState({ email: '', password: '' });
            
        }catch (error){
            alert(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
    };
    handleGoogle = async event => {
        event.preventDefault() ;
        this.setState({isLoading : true})
     try{
        auth.signInWithRedirect(googleAuthProvider).then(() => {
            this.setState({isLoading : true})
            this.props.history.push('/Shop')
        })
    }catch (error){
        alert(error)
    }
    }



    render(){

        const {email , password , isLoading} = this.state ;
        return( 
            <div>
                {isLoading ? (
                    <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>
                ) : (
            
            <LogInPage>
                <UserLoginSection>
                    <UserIcon />
                    <TitleLog>Log In</TitleLog>
                    <TextLog>You can sign in with your email and password or with account Google  facebook or  twitter</TextLog>
                    <FormInput onSubmit={this.handleSubmit}>
                        <InputSection>
                            <InputField name='email' onChange={this.handleChange} variant="outlined" type='email' value={email}  label='email' />
                            <InputField  name='password'  value={password} type='password'  onChange={this.handleChange} variant="outlined"  label='password'/>
                        </InputSection>
                        <ButtonSubmit as='button' type='submit'>
                            Log In
                        </ButtonSubmit>
                        <p>You can Log in with actually accounts Google,facebook or twitter :</p>
                        <PopLog>
                            <GoogleLog onClick={this.handleGoogle} src={GoogleIcon}/>
                            <GoogleLog onClick={()=> auth.signInWithRedirect(FacebookAuthProvider)} src={FacebookIcon}/>
                            <GoogleLog src={TwitterIcon}/>
                        </PopLog>
                    </FormInput>
                </UserLoginSection>
                <SvgSection>
                    <SvgIcon />
                </SvgSection>
                </LogInPage>
                )}
            </div>
                
           

        )
    }    
};
export default withRouter(LogIn) ;

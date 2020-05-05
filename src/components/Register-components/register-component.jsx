import React from 'react'
import {LogInPage , SvgSection , InputField , SvgIcon , UserLoginSection , UserIcon ,  FormInput , PopLog , TitleLog , TextLog ,  GoogleLog , InputSection , ButtonSubmit} from '../logIn-components/logIn-styles'
import   GoogleIcon from '../../Assets/google.png'
import   FacebookIcon from '../../Assets/iconfinder.png'
import   TwitterIcon from '../../Assets/twitter.png'
import { auth, createUserProfileDocument, googleAuthProvider, FacebookAuthProvider } from '../../firebase/firebase'
import { Alert } from '@material-ui/lab'



class RegisterPage extends React.Component{
    constructor(){
        super();
        this.state={
            email : '' ,
            password : '',
            displayName : '',
            confirmPassword : '',
            errors : false,
            errorText :false,
        }
    };

    handleSubmit = async event => {
        event.preventDefault() ;
        const {email ,displayName , password , confirmPassword , errors } = this.state ;
        try{
            if(password !== confirmPassword){
                this.setState({errors : true , errorText : true})
                console.log(errors)
                return;
            }
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            await createUserProfileDocument(user , {displayName});
            this.setState({ email: '', password: '' , displayName : '' , confirmPassword : '' , errorText : false  , errors : false});
        }catch (error){
            alert(error.message)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    

    };



    render(){
        const {email ,displayName , password , errors , confirmPassword , errorText  } = this.state ;
        return(
            <LogInPage>
                <UserLoginSection>
                    <UserIcon />
                    <TitleLog>Sign Up</TitleLog>
                    <TextLog>You can Sign Up with your email and password or with account Google  facebook or  twitter</TextLog>
                    <FormInput onSubmit={this.handleSubmit}>
                        <InputSection>
                            <InputField   onChange={this.handleChange} value={displayName} variant="outlined" label='display Name'  name='displayName'/>
                            <InputField name='email' onChange={this.handleChange} variant="outlined" type='email' value={email}  label='email' />
                            <InputField error={errors} name='password'  value={password} type='password'  onChange={this.handleChange} variant="outlined"  label='password'/>
                            <InputField error={errors} name='confirmPassword'  value={confirmPassword} type='password'  onChange={this.handleChange} variant="outlined"  label='confirm Password'/>
                            {errorText ? <Alert severity="error">The password is not equivalent</Alert> : null}
                        </InputSection> 
                        <ButtonSubmit as='button' type='submit'>
                            sign Up
                        </ButtonSubmit>
                        
                        <p>You can Log in with actually accounts Google,facebook or twitter :</p>
                        <PopLog>
                            <GoogleLog onClick={()=> auth.signInWithRedirect(googleAuthProvider)} src={GoogleIcon}/>
                            <GoogleLog onClick={()=> auth.signInWithRedirect(FacebookAuthProvider)} src={FacebookIcon}/>
                            <GoogleLog src={TwitterIcon}/>
                        </PopLog>
                    </FormInput>
                </UserLoginSection>
                <SvgSection>
                    <SvgIcon />
                </SvgSection>
            </LogInPage>
        )
    }    
};
export default RegisterPage ;

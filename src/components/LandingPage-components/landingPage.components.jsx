import React from 'react'
import { GeneralPage , RegistrationBox , LoginRegisterText , ManageText , FoodBackground , TitleBox , TitleText , ResumeText, ManageList  , ArrowRight , StartButton , TextButton} from './landingPage.styled'
import BackgroundImage from '../../Assets/food.jpeg'
import {TimelineMax} from 'gsap' 



class LandingPage extends React.Component{
    constructor(props){
        super(props);
        this.timeline = new TimelineMax({paused : true})
    }
    
    componentDidMount(){
        
    }
    
    
    ChangePage = (e , destination) => {
        e.preventDefault();
        this.timeline.from(this.header , 0.5 , {
            autoAlpha : 0 ,
            delay : 0,
            x : -200
        })
        this.timeline.play();
        const timelineDuration = this.timeline.duration() * 1000;
            setTimeout( () => {
                this.props.history.push(destination);

            }, timelineDuration)
    }


    render(){
    
    return(
        <GeneralPage>
            <FoodBackground src={BackgroundImage} />
            <RegistrationBox>
                <LoginRegisterText to='/Login'>login</LoginRegisterText>
                <LoginRegisterText to='/Register'>/Registration</LoginRegisterText>
            </RegistrationBox>
            <TitleBox >
                <TitleText>eat easy.</TitleText>
            </TitleBox>
            <ResumeText>
                Easy Food For Easy Life
            </ResumeText>
            <StartButton onClick = {e => this.ChangePage(e , '/Shop')} ref = { div => (this.header = div)}>
                <TextButton>
                    Start Now
                </TextButton>
                <ArrowRight />
            </StartButton>
            <ManageList>
                <ManageText>About Us</ManageText>
                <ManageText>Food programs</ManageText>
                <ManageText>For Individuals Users</ManageText>
                <ManageText>For Corporate Users</ManageText>
            </ManageList>
        </GeneralPage>

    )

    }
}

export default LandingPage  
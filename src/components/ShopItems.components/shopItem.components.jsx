import React from 'react'
import {CardFood , CardArea , ButtonOrder} from './shopItem.styled.jsx'
import {  CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom';



const FoodShop = ( {title , imageUrl , price , history , routeName , match}) => { 
    return(
        <CardFood>
            <CardActionArea>
                <CardMedia component="img" alt={title} height='250px' image={imageUrl} title={title}/>
                <CardContent>
                    <Typography gutterBottom  variant='h5' component='h2'>{title}</Typography>
                    <Typography variant='body2' color="textSecondary" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas diam.</Typography>
                </CardContent>
            </CardActionArea>
            <CardArea>
                <Typography variant="h5" component="h2">{price}$</Typography>
                <ButtonOrder onClick={() => {history.push(`${match.path}/${routeName}`)}}>To Order</ButtonOrder>
            </CardArea>
        </CardFood>
    )
};

export default withRouter(FoodShop) ;
import React from 'react'
import Navbar from '../Navbar-components/navbar-component'
import {ShopHome} from './shophome.styled'
import FoodPage from '../shopFoodPage-component./shopFood-component.jsx'
import {Route  } from 'react-router-dom'
import OrderPage from '../OrderPage-components/orderPage.components'
import {fetchDataStartAsync } from '../../redux/shop/shop-actions'
import { connect } from 'react-redux'
import withSpinner from '../WithLoading-component/withLoading-components'
import {  fetchingDataForLoading, selectFoodLoading } from '../../redux/shop/shop-selectors'
import { createStructuredSelector } from 'reselect'



const FoodPageWithSpinner = withSpinner(FoodPage) ;
const OrderPageWithSpinner = withSpinner(OrderPage);

class ShopPage extends React.Component{

    componentDidMount(){
      const {fetchDataStartAsync} = this.props ;
       fetchDataStartAsync()
    }
    
    render(){
        const {match , isFetching , dataCollection } = this.props
        return(
            <ShopHome>
                <Navbar />
                <Route exact path={`${match.path}`} render={(props) => <FoodPageWithSpinner isLoading={isFetching} {...props}/>} />
                <Route  path={`${match.path}/:collectionId`} render={(props) => <OrderPageWithSpinner isLoading={!dataCollection} {...props}/>} />
            </ShopHome>
        )
        
    }
}
const mapDispatchToProps = dispatch => ({
    fetchDataStartAsync : () => dispatch(fetchDataStartAsync())
})

const mapStateToProps = createStructuredSelector({
    isFetching : fetchingDataForLoading ,
    dataCollection : selectFoodLoading
})
export default connect(mapStateToProps , mapDispatchToProps) (ShopPage) ;
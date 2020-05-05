import React from 'react'
import { FoodsItems } from './shopFood-styled'
import { createStructuredSelector } from 'reselect'
import { selectFoodsShopPreview } from '../../redux/shop/shop-selectors'
import FoodShop from '../ShopItems.components/shopItem.components'
import { connect } from 'react-redux'



class FoodPage extends React.Component{

    render(){
        const {foodsCollections} = this.props
        return(
                <FoodsItems>
                    {foodsCollections.map(({id , ...otherSections}) => (
                        <FoodShop key={id} {...otherSections} />
                    ))}
                </FoodsItems>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    foodsCollections : selectFoodsShopPreview
})

export default connect(mapStateToProps)(FoodPage)
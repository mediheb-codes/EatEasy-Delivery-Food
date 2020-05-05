import React from 'react'
import { selectFoodShop } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'
import {NumberDegradation , NameDegradation , SpecificDegradation ,DegradationNumbers ,TextImages , ImageFoods ,OtherFoodImages , OtherExtensionsFood , FoodDetail , OrderLayout , OrderItem , OrderDetail , ItemText  , ButtonSuper ,  TitleReview , TitleItem , ReviewItem , ImageOrder  , SomeText , BestDetail, IconSuper, IconLeaf, IconFish, ParagraphOrder, PriceOrder, PriceItem, ButtonFinalOrder, IconOrder, OrderSpan} from './orderPage-styled'
import FinalOrder from '../FinalOrder-components/finalOrder-components'
import { SelectHidden } from '../../redux/cart/cart-selectors'
import {setHiddenPage} from '../../redux/cart/cart-actions'
import {addFoodExtension} from '../../redux/cart/cart-actions'

class OrderPage extends React.Component{
    componentDidMount(){
        const {OrderCollection , addFoodExtension } = this.props

         addFoodExtension(OrderCollection.MoreFood)
    }
    render(){
        const {OrderCollection ,   Hidden , setHiddenPage  } = this.props
        const {title , items , imageUrl , price } = OrderCollection ;
        const {review , description , extensions } = items        
        const submitClick = () => {  
            setHiddenPage();
        }
    return(
        <OrderLayout>
            {OrderCollection ? (
                <OrderItem>
                    <OrderDetail>
                        <ItemText>
                            <TitleReview>
                                <TitleItem>{title}</TitleItem>
                                    <ReviewItem value={review} readOnly name="read-only" size='small'/>
                            </TitleReview>
                            <SomeText>630 g</SomeText>
                            <BestDetail>
                                <ButtonSuper>
                                    Super
                                </ButtonSuper>
                                <IconSuper />
                                <IconLeaf />
                                <IconFish />
                            </BestDetail>
                            <ParagraphOrder>
                               {description} 
                            </ParagraphOrder>
                            <PriceOrder>
                                <PriceItem >{price}DT</PriceItem>
                                <ButtonFinalOrder>
                                    <IconOrder />
                                    <OrderSpan onClick={submitClick}>Order Now</OrderSpan>
                                </ButtonFinalOrder>
                            </PriceOrder>
                        </ItemText>
                        <ImageOrder  src={imageUrl}/>
                    </OrderDetail>
                    <FoodDetail>
                        <OtherExtensionsFood>
                            {extensions.map(({id , photoUrl , descriptionItem}) => (
                                <OtherFoodImages key={id}>
                                    <ImageFoods src={photoUrl}/>
                                    <TextImages>{descriptionItem}</TextImages>
                                </OtherFoodImages>
                            ))}
                        </OtherExtensionsFood>
                        <DegradationNumbers>
                            <SpecificDegradation>
                                <NameDegradation>Proteins ,g</NameDegradation>
                                <NumberDegradation>34</NumberDegradation>
                            </SpecificDegradation>
                            <SpecificDegradation>
                                <NameDegradation>Fats , g</NameDegradation>
                                <NumberDegradation>6</NumberDegradation>
                            </SpecificDegradation>
                            <SpecificDegradation>
                                <NameDegradation>Carbohydrate , g</NameDegradation>
                                <NumberDegradation>12</NumberDegradation>
                            </SpecificDegradation>
                        </DegradationNumbers>
                    </FoodDetail>    
                    {Hidden ?
            
                        (<FinalOrder   Total={price}/>)
                        : null
                        
                        }
                    
                </OrderItem>
            )
                :(<div>jjsdfkdfmkj</div>)
            }
            </OrderLayout>
        )
        
    }
}


const mapDispatchToProps = dispatch =>({
    setHiddenPage : () => dispatch(setHiddenPage()),
    addFoodExtension : items => dispatch(addFoodExtension(items))
})

const mapStateToProps = (state , ownProps) =>({
    OrderCollection : selectFoodShop(ownProps.match.params.collectionId)(state),
    Hidden : SelectHidden(state),    
    
})

export default connect( mapStateToProps , mapDispatchToProps )(OrderPage);
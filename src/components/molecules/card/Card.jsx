import './styles/card.scss';
import { useState } from 'react';
import CN from "classnames";
import Label from '../../atoms/label/Label';
import { labelTypes, productCategoryTypes, cardTypes } from '../../../constants';

function Card({key, product, type}) {
    const [cardHeaderLabel] = useState(labelTypes.cardHeader);
    const [productPriceLabel] = useState(labelTypes.productPrice);
    const [productDescLabel] = useState(labelTypes.productDesc);

    // Appling relevant style class by checking the "type" prop
    const CardClasses = CN({
        "card card__flex": type === cardTypes.flex,
        "card": type === cardTypes.category,
    });

    return (
        <div key={key} data-testid="card" className={CardClasses}>
            <div className='cardHeader'>
                <Label type={cardHeaderLabel} text={product.title}/>
            </div>
            <div className='cardImageContainer'>
                <img src={product.image} className='cardImage' />
            </div>
            <div className={product.category === productCategoryTypes.mensClothing ?
                 'cardContent cardContent__containerTeal' : 'cardContent cardContent__containerPink'}>
                <div className='price'>
                    <Label type={productPriceLabel} text={product.price}/>
                </div>
                <div className='description'>
                    <Label type={productDescLabel} text={product.description}/>
                </div>
            </div>
        </div>
    )
}

export default Card;
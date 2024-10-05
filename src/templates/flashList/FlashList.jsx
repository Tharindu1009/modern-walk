import './styles/flashList.scss';
import { useState } from 'react';
import { labelTypes,cardTypes } from '../../constants';
import Label from '../../components/atoms/label/Label';
import Card from '../../components/molecules/card/Card';
import Alert from '../../components/molecules/alert/Alert';
import { Rings } from 'react-loader-spinner';

function FlashList({products, loading}) {
    const [labelType] = useState(labelTypes.sectionHeader);
    const [titleText] = useState("Flash Sale");

    return (
        <div data-testid="flashList">
            <div data-testid="sectionTitle">
                <Label type={labelType} text={titleText}/>
            </div>
            <div className='flashList'>
                {/* List Loader */}
                {loading && <div className='loader'><Rings color="#878787" height={80} width={80} /></div>}

                {/* Product List */}
                <div className="productWrapper">
                    {products ?
                        products.length > 0 ?
                        products.map((product, i) => (
                            <Card key={i} product={product} type={cardTypes.flex}/>
                        ))
                        : <Alert title="No data found." />
                    : null}
                </div>
            </div>
        </div>
    )
}

export default FlashList;
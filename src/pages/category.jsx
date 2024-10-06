
import './styles/category.scss';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { labelTypes, productCategoryIds, cardTypes } from '../constants';
import { getCategoryProducts } from '../redux/features/products';
import Header from '../components/organisms/header/Header';
import Label from '../components/atoms/label/Label';
import { Grid } from '@mui/material';
import Alert from '../components/molecules/alert/Alert';
import Card from '../components/molecules/card/Card';
import { Rings } from 'react-loader-spinner';

function Category() {
    const dispatch = useDispatch();

    // get url path parameter data to identify selected category type
    const { id } = useParams();

    const [labelType] = useState(labelTypes.sectionHeader);
    const [title] = useState(id === productCategoryIds.men ? "Men's Clothing" : "Women's Clothing");

    // get data from redux store
    const products = useSelector((state) => state.products.categoryProducts);
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
        // get products in initial stage
        dispatch(getCategoryProducts(id));
    }, []);

    return (
        <div>
            <Header />
            <div className='container'>
                <div data-testid="sectionTitle" >
                    <Label type={labelType} text={title}/>
                </div>

                {/* List Loader */}
                {loading && <div className='loader'><Rings color="#878787" height={80} width={80} /></div>}

                <Grid container spacing={2} rowSpacing={4} className='catProductsList'>
                    {!loading && products ?
                        products.length > 0 ?
                        products.map((product, i) => (
                            <Grid key={i} item xs={12} sm={6} md={3}>
                                <Card product={product} type={cardTypes.category}/>
                            </Grid>
                        ))
                        : <Alert title="No data found." />
                    : null}
                </Grid>
            </div>
        </div>
    )
}

export default Category;
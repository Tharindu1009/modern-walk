import './styles/categorySegment.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { labelTypes, productCategoryTypes } from '../../constants';
import Label from '../../components/atoms/label/Label';
import Banner from '../../components/molecules/banner/Banner';
import { Grid } from '@mui/material';

function CategorySegment() {
    const navigate = useNavigate();
    const [labelType] = useState(labelTypes.sectionHeader);
    const [titleText] = useState("Categories");
    const [mensBannerText] = useState("Men's Clothing");
    const [womensBannerText] = useState("Women's Clothing");

    const goToCategory = (type) => {
        const catId = type === productCategoryTypes.mensClothing ? 1 : 2;

        // redirect to the category page
        navigate("/category/"+ catId);
    }

    return (
        <div data-testid="categorySegment" className="categorySegment">
            <div data-testid="sectionTitle" className="title">
                <Label type={labelType} text={titleText}/>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} onClick={() => goToCategory(productCategoryTypes.mensClothing)}>
                    <Banner type={productCategoryTypes.mensClothing} text={mensBannerText} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} onClick={() => goToCategory(productCategoryTypes.womensClothing)}>
                    <Banner type={productCategoryTypes.womensClothing} text={womensBannerText} />
                </Grid>
            </Grid>
        </div>
    )
}

export default CategorySegment;
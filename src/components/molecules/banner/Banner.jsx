import './styles/banner.scss';
import { useState } from 'react';
import Label from '../../atoms/label/Label';
import CN from "classnames";
import { labelTypes, productCategoryTypes } from '../../../constants';

function Banner({type, text}) {
    const [categoryBannerLabel] = useState(labelTypes.categoryBanner);

    // Appling relevant style class by checking the "type" prop
    const BannerClasses = CN({
        "banner banner__teal": type === productCategoryTypes.mensClothing,
        "banner banner__pink": type === productCategoryTypes.womensClothing,
    });

    return (
        <div data-testid="banner" className={BannerClasses}>
            <Label type={categoryBannerLabel} text={text} />
        </div>
    )
}

export default Banner;
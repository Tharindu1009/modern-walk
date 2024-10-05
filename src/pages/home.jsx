import './styles/home.scss';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from '../components/organisms/header/Header';
import FlashList from '../templates/flashList/FlashList';
import CategorySegment from '../templates/categorySegment/CategorySegment';
import { getFlashSaleProducts } from '../redux/features/products';

function Home() {
    const dispatch = useDispatch();

    // get data from redux store
    const products = useSelector((state) => state.products.list);
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
        // get products in initial stage
        dispatch(getFlashSaleProducts());
    }, []);

    return (
        <div>
            <Header />
            <div className='container'>
                <FlashList products={products} loading={loading} />
                <CategorySegment />
            </div>
        </div>
    )
}

export default Home;
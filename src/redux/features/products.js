import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productCategoryIds, productCategoryTypes } from '../../constants';

// get API base URL from .env file
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false, error: { errorStatus: false, errorMessage: "" },
        success: { successStatus: false, successMessage: "" }, list: [], categoryProducts: []
    },
    reducers: {
        getProducts: (state) => {
            state.loading = true;
        },
        getProductsResponse: (state, action) => {
            let productList = []

            // filter only men & women category product items from response data list
            productList = action.payload.filter(product => {
                return product.category === productCategoryTypes.mensClothing || product.category === productCategoryTypes.womensClothing
            });
            
            state.loading = false;

            // set products data to the store 
            state.list = productList;
        },
        getCategoryProductsResp: (state, action) => {
            state.loading = false;

            // set products data to the store 
            state.categoryProducts = action.payload;
        },
        handleError: (state, action) => {
            state.loading = false;
            state.error.errorStatus = true;
            state.error.errorMessage = action.payload;
        },
        clearError: (state) => {
            state.error.errorStatus = false;
            state.error.errorMessage = "";
        },
        clearSuccess: (state) => {
            state.success.successStatus = false;
            state.success.successMessage = "";
        },
    },
});

/**
 * getting flash sale product list
 */
export const getFlashSaleProducts = () => async (dispatch) => {
    let urlPath = `products`;
    try {
        dispatch(getProducts());

        // fetching data
        axios.get(`${apiBaseUrl}/${urlPath}`, {
            params: {
                sort: 'desc'
            }
        }).then(function (response) {
            dispatch(getProductsResponse(response.data));
        }).catch(function (error) {
            dispatch(handleError(error.message));
        })
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

/**
 * getting category product list
 */
export const getCategoryProducts = (id) => async (dispatch) => {
    let categoryPath = id === productCategoryIds.men ? "men's clothing" : "women's clothing";
    let urlPath = `products/category/` + categoryPath;

    try {
        dispatch(getProducts());

        // fetching data
        axios.get(`${apiBaseUrl}/${urlPath}`, {
            params: {
                sort: 'desc'
            }
        }).then(function (response) {
            dispatch(getCategoryProductsResp(response.data));
        }).catch(function (error) {
            dispatch(handleError(error.message));
        })
    } catch (err) {
        dispatch(handleError(err.message));
    }
};

export const { getProducts, getProductsResponse, getCategoryProductsResp, handleError, clearError, clearSuccess } = productSlice.actions;
export default productSlice.reducer;
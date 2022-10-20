import basketReducer from "./reducers/basket-reducer";
import dataReducer from "./reducers/data-reducer";
import productsReduce from "./reducers/products-reducer";
import sellReducer from "./reducers/sell-reducer";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        data: dataReducer,
        productsPage: productsReduce,
        sellPage: sellReducer,
        basketPage: basketReducer
    }
});

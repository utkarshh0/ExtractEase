import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from '../features/invoiceSlices'
import productReducer from '../features/productsSlice'
import customerReducer from '../features/customerSlice'

export const store = configureStore({
    reducer:{
        invoiceReducer,
        productReducer,
        customerReducer
    }
})
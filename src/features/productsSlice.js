
    import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name : 'products',
    initialState : [],
    reducers : {
        setProducts : (state, action) => action.payload,
        updateProducts : (state, action) => {
            const index = state.findIndex(pro => pro.serialNumber === action.payload.serialNumber)
            if(index !== -1){
                state[index] = {...state[index], ...action.payload }
            }
        }
    }
})

export const { setProducts, updateProducts } = productSlice.actions
export default productSlice.reducer
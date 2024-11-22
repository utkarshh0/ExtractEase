
import { createSlice } from '@reduxjs/toolkit'

const customerSlice = createSlice({
    name : 'customers',
    initialState : [],
    reducers : {
        setCustomers : (state, action) => action.payload,
        updateCustomers : (state, action) => {
            const index = state.findIndex(cust => cust.name === action.payload.name)
            if(index !== -1){
                state[index] = {...state[index], ...action.payload}
            }
        }
    }
})

export const {setCustomers, updateCustomers} = customerSlice.actions
export default customerSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
    name : 'invoices',
    initialState : [],
    reducers : {
        setInvoices : (state, action) => action.payload,
        updateInvoices : (state, action) => {
                const index = state.findIndex( inv => inv.serialNumber === action.payload.serialNumber)
                if(index !== -1){
                    state[index] = {...state[index], ...action.payload}
                }
        }
    }
})

export const {setInvoices, updateInvoices} = invoiceSlice.actions
export default invoiceSlice.reducer
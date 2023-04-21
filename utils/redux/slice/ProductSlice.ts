import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types";

const base_Url = 'http://localhost:3000/products';


// get product
export const getProduct = createAsyncThunk("products/getProduct",async () => {
    try {
        const response = await fetch(`${base_Url}`)
        if(!response.ok){
            console.log("Invalid get Data")
        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error, "Error get data")
    }
})

const initialState = {
    products: []
} as any

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url_Product = 'http://localhost:5000/products';



// get product
export const getProduct = createAsyncThunk("products/getProduct",async () => {
    try {
        const response = await fetch(`${url_Product}`)
        if(!response.ok){
            console.log("Invalid get Data")
        }
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error, "Error get data")
    }
})

// search product
export const searchProduct = createAsyncThunk("products/searchProduct",async (searchType:string) => {
    try {
        const response = await fetch(`${url_Product}?q=${searchProduct}`)
        if(!response.ok){
            console.log("Invalid Search Product")
        }
        const data = await response.json()
        console.log(data)
        // return data
    } catch (error) {
        console.log(error, "Invalid Search Product")
    }
    
})


const initialState = {
    products: [],
    mereks: [],
    searchType: ''
} as any

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.searchType = action.payload
        })
    }
})

export default productSlice.reducer
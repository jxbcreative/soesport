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
// export const searchProduct = createAsyncThunk("products/searchProduct",async (query:string) => {
//     try {
//         const response = await fetch(`${url_Product}?q=${query}`)
//         if(!response.ok){
//             console.log("Invalid Search Product")
//         }
//         const data = await response.json()
//         console.log(data)
//         // return data
//     } catch (error) {
//         console.log(error, "Invalid Search Product")
//     }
    
// })


const initialState = {
    products: [],
    query: ''
} as any

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        // setSearchQuery: (state, action: PayloadAction<string>) => {
        //     state.query = action.payload;
        //   },
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.products = action.payload
        })
        // builder.addCase(searchProduct.fulfilled, (state, action) => {
        //     state.products = action.payload
        // })
    }
})

// export const {setSearchQuery} = productSlice.actions;

export default productSlice.reducer
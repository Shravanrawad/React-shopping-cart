import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const Statuses = Object.freeze(
    {
        IDLE: 'idel',
        ERROR: 'error',
        LOADING: 'loading',
    }
)

const productSlice = createSlice({

    name: 'products',
    initialState: {
        data: [],
        status: Statuses.IDLE
    },
    reducers: {

        // setproducts(state, action){

        //     state.data = action.payload
        // },

        // setstatus(state,action){
        //     state.status = action.payload
        // } 
    },
    
    extraReducers: (builder) => {
        builder
        .addCase(fetchproducts.pending, (state, action) => {
            state.status = Statuses.LOADING;
        })
        .addCase(fetchproducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.status = Statuses.IDLE;
        })
        .addCase(fetchproducts.rejected, (state,action) => {
            state.status = Statuses.ERROR;
        })
    } 
   
    
});

export const { setproducts, setstatus } = productSlice.actions;
export const productReducer = productSlice.reducer


export const fetchproducts = createAsyncThunk('product/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data  
})

// export function fetchproducts(){
//     return async function fetchproducts(dispatch, getstate){

//         dispatch(setstatus(Statuses.LOADING))

//         try {
//             const response = await fetch('https://fakestoreapi.com/products')
//             const data = await response.json();
//             dispatch(setproducts(data))
//             dispatch(setstatus(Statuses.IDLE))
//         }
//         catch (err){
//             console.warn(err.message)
//             dispatch(setstatus(Statuses.ERROR))
//         }
//     }
// }
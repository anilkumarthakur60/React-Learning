import {createSlice,configureStore} from "@reduxjs/toolkit";

const  initialState = {
    count: 0,
}
const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },

        incrementByAmount: (state, action) => {
            const { amount } = action.payload || 0;
            state.count += amount;
        },
        decrementByAmount: (state, action) => {
            const { amount } = action.payload || 0;
            state.count -= amount;
        },

        reset: (state) => {
            state.count = 0;
        },

    },

})

const {
    increment,
   decrement,
    decrementByAmount,
    incrementByAmount,
    reset
}=counterSlice.actions


const counterReducer = counterSlice.reducer


const store = configureStore({
    reducer: counterReducer
})

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(incrementByAmount({amount: 10}))
store.dispatch(decrementByAmount({amount: 5}))
store.dispatch(reset())

console.log(store.getState())
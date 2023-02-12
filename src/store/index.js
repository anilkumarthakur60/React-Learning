import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            console.log(state);
            console.log(action);

            state.push(action.payload);
        },

        removeSong(state, action) {
            state.pop(action.payload);
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});
//
// const statingState = store.getState();
//
// console.log(JSON.stringify(statingState));
// store.dispatch({
//     type: "song/addSong",
//     payload: {
//         id: 1,
//         name: "song 1"
//     }
// });
//
// const finalState = store.getState();
//
// console.log(JSON.stringify(finalState));


// console.log('-----------',
// store.dispatch({
//   type: "song/addSong",
//   payload: {
//     id: 1,
//     name: "song 1"
//   }
// })
// )

//
// store.dispatch(
//     songsSlice.actions.addSong({
//         id:324,
//         name:"jsafdkjshdfk"
//     })
// )
//
//
// const finalStates = store.getState();
//
// console.log(JSON.stringify(finalStates));

export  { store, songsSlice}
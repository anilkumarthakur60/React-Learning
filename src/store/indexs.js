import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },

        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },

        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

// const statingState = store.getState();

// console.log(JSON.stringify(statingState));
// store.dispatch({
//   type: "song/addSong",
//   payload: {
//     id: 1,
//     name: "song 1"
//   }
// });

// const finalState = store.getState();

// console.log(JSON.stringify(finalState));

// // console.log('-----------',
// // store.dispatch({
// //   type: "song/addSong",
// //   payload: {
// //     id: 1,
// //     name: "song 1"
// //   }
// // })
// // )

// store.dispatch(
//   songsSlice.actions.addSong({
//     id: 324,
//     name: "jsafdkjshdfk"
//   })
// );

// const finalStates = store.getState();

// console.log(JSON.stringify(finalStates));

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;

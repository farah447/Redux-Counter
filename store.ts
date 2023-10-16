import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../redux-counter/src/component/counterSlice.tsx';

export type RootState = {
    counterR: ReturnType<typeof counterSlice>;
}

export const store = configureStore({
    reducer :{
        counterR:counterSlice,
    },
});
import {createAction, createReducer} from "@reduxjs/toolkit";

type CounterState = {
    count: number;
    maxValue: number;
    startValue: number;
    error: string | null;
    isSettingMode: boolean;
}

export const incrementAC = createAction('counter/increment')
export const resetAC = createAction('counter/reset')
export const maxValueAC = createAction<number>('counter/maxValue')
export const startValueAC = createAction<number>('counter/startValue')
export const setCounterAC = createAction<number>('counter/setCounter')
export const validateValuesAC = createAction<number>('counter/validate')


const initialState:CounterState = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    error: null,
    isSettingMode: false
}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAC, (state) => {
        if (state.count < state.maxValue) {
            state.count += 1
        }
    })
        .addCase(resetAC, (state) => {
            state.count = state.startValue
        })
        .addCase(maxValueAC, (state,action) => {
            state.maxValue = action.payload;
            state.isSettingMode = true;
        })
        .addCase(startValueAC, (state, action) => {
            state.startValue = action.payload;
            state.isSettingMode = true;
        })
        .addCase(setCounterAC, (state, action) => {
            state.count = action.payload;
            state.isSettingMode = true;
        })
        .addCase(validateValuesAC, (state) => {
            state.error =
                state.maxValue <= state.startValue || state.maxValue < 0 || state.startValue < 0
                    ? "Invalid values"
                    : null;
        });
});
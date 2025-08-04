import {createAction, createReducer} from "@reduxjs/toolkit";

type CounterState = {
    count: number;
    maxValue: number;
    startValue: number;
    error: string | null;
    isSettingMode: boolean;
    isInvalid: boolean;
}

export const maxValueAC = createAction<number>('counter/maxValue')
export const startValueAC = createAction<number>('counter/startValue')
export const incrementAC = createAction('counter/increment')
export const resetAC = createAction('counter/reset')
export const setCounterAC = createAction('counter/setCounter')
export const validateValuesAC = createAction('counter/validate')


const initialState:CounterState = {
    count: 0,
    maxValue: 0,
    startValue: 0,
    error: null,
    isSettingMode: false,
    isInvalid: false
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
        .addCase(setCounterAC, (state) => {
            state.count = state.startValue
            state.isSettingMode = false;
        })
        .addCase(validateValuesAC, (state) => {
            if (state.startValue < 0 || state.maxValue < 0) {
                state.error = "Values cannot be negative!";
            } else if (state.maxValue < state.startValue) {
                state.error = "Max value cannot be less than start value!";
            } else if (state.maxValue === state.startValue) {
                state.error = "Max value cannot equal start value!";
            } else if (isNaN(state.startValue) || isNaN(state.maxValue)) {
                state.error = "Values must be valid numbers!";
            } else {
                state.error = null;
            }
            state.isInvalid = !!state.error;
        })

});
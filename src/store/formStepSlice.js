import { createSlice } from '@reduxjs/toolkit';

const initialValue = 2;

export const formStepSlice = createSlice({
    name: 'formStep',
    initialState: {
        formSteps: initialValue,
    },
    reducers: {
        nextStep: (state) => {
            console.log(state.formSteps);
            state.formSteps = state.formSteps + 1;
        },
        previousStep: (state) => {
            console.log(state.formSteps);
            state.formSteps = state.formSteps - 1;
        },
    },
});

export const { nextStep, previousStep } = formStepSlice.actions;
export default formStepSlice.reducer;

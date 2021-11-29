import { createSlice } from '@reduxjs/toolkit';

const initialValue = 1;

const valueForm = {
    'full_name': '',
    'education': '',
    'email': '',
    'phone': '',
    'tell_your_self': '',
    'profile_images': '',
    'what_you_do': '',
    'pricing': 0,
    'ETA': '',
    'short_description': '',
    'job_images': '',
    'token': '',
};

export const formStepSlice = createSlice({
    name: 'formStep',
    initialState: {
        formSteps: initialValue,
        formValue: valueForm,
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
        resetStep: (state) => {
            state.formSteps = 1;
        },
        handleFormData: (state, action) => {
            state.formValue = action.payload;
        },
        handleFormProfile: (state, action) => {
            state.formValue.profile_images = action.payload;
        },
        handleFormJobImages: (state, action) => {
            state.formValue.job_images = action.payload;
        },
        handleTokenDatas: (state, action) => {
            state.formValue.token = action.payload;
        },
        resetForm: (state) => {
            state.formValue = valueForm;
        },
    },
});

export const {
    nextStep,
    previousStep,
    resetStep,
    handleFormData,
    handleFormProfile,
    handleFormJobImages,
    handleTokenDatas,
    resetForm,
} = formStepSlice.actions;
export default formStepSlice.reducer;

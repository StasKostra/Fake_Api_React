import { createSlice } from '@reduxjs/toolkit'

export const FormSlice = createSlice({
    name: 'formValue',
    initialState: {
        formValue: {
            title: "",
            price: "",
            description: "",
            image: "",
            category: "",
        }
    },
    reducers: {
        setFormValue: (state, action) => {
            let { namePayload, valuePayload } = action.payload
            state.formValue[namePayload] = valuePayload
        }
    }
})

export const { setFormValue } = FormSlice.actions

export default FormSlice.reducer

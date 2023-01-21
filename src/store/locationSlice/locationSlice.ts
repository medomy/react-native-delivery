import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Location from '../../types/location'

export interface LocationState {
    location: Location
}

const initialState: LocationState = {
    location: {
        latitude: 0,
        longitude: 0
    }
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, payload: PayloadAction<Location>) => {
            state.location.latitude = payload.payload.latitude;
            state.location.longitude = payload.payload.longitude;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
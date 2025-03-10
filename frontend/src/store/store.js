import React from 'react'
import {configureStore} from "@reduxjs/toolkit"
import dataslice from "./dataslice.js"


export const store = configureStore({
    reducer:{
        data: dataslice
    }
})

export default store;
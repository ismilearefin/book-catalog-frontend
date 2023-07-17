import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../interface/Ibook";

interface IBooks{
    book: IBook[]
}

const initialState: IBooks = {
    book:[]
}

const bookSlice = createSlice({
    name: 'Book',
    initialState,
    reducers:{}
})

export default bookSlice.reducer;
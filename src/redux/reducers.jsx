import {createSlice} from '@reduxjs/toolkit';
import { carList } from '../components/carList';

const initailState = {
    ogList : carList,
    items : [],
    count : 0
}

const listSlice = createSlice({
    name:'theList',
    initialState: initailState,
    reducers:{
        add : (state,action)=>{
            state.items.push(state.ogList[action.payload])
            let h = state.ogList[action.payload]
            alert(`${h.name} is added to yourt cart`)
            state.count = state.count + 1
        },
        remove : (state,action)=>{
            const itemToRemove = state.ogList[action.payload];
            const itemIndex = state.items.findIndex((item) => item.id === itemToRemove.id);
            console.log(itemToRemove);
            state.count = state.count -1             
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
                alert(`${itemToRemove.name} is removed from cart`)
            }else{
                alert('Not in cart')
            }
        }
    }
})


export const listAction = listSlice.actions
export const listReducers = listSlice.reducer
export const listSelectors = (state)=>state.listReducers.items
export const listCount = (state)=> state.listReducers.count
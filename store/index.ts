import { createSlice, configureStore } from '@reduxjs/toolkit'
import { INITIAL_STATE } from './state'

const basketSlice = createSlice({
  name: 'basket',
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
        return state.map(item => {
            if (item.id !== action.payload.id) {
                return item
            }

            return {
                ...item,
                added: true
            }
            })
    },
    remove: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }

        return {
          ...item,
          count:1,
          added: false
        }
      })
    },
    increase: (state,action) => {
      state.map(item => { 
          if (item.id === action.payload.id) 
            { item.count = item.count+1;
                 console.log(item.count)
            }
          
    })
  },
  decrease: (state,action) => {
    state.map(item => { 
        if (item.id === action.payload.id) 
          { 
            if(item.count==1){
              return item
            }
            else {
            item.count = item.count-1;
               console.log(item.count)
          }}
        
  })
}

 }}
)

const store = configureStore({ reducer: basketSlice.reducer })

export const { add, remove, increase, decrease } = basketSlice.actions

export { basketSlice, store }
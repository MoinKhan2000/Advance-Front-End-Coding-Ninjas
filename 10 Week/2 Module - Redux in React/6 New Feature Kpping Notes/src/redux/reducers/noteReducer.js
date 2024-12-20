
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    { text: "Go to Gym at 6 Mujhe apna placement lagwana bahot zaruri hai", createdOn: new Date() },
    { text: "Study at 8 itni jyada zaruri hai unke liye jitna ki maut.", createdOn: new Date() }
  ]
}

export function noteReducer(state = initialState, action) {

  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date()
          }
        ]
      }
    case DELETE_NOTE:
      state.notes.splice(action.index, 1)
      return {
        ...state,
        notes: [...state.notes]
      }
    default:
      return state;
  }
}
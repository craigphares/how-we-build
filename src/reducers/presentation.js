import { NEXT, PREVIOUS } from '../actions'

const presentation = (state = { slide: 0, totalSlides: 10 }, action) => {
  console.log('action: ' + action.type)
  let slide = state.slide
  console.log('slide: ', slide)
  switch (action.type) {
    case NEXT:
      if (slide < state.totalSlides - 1) slide++
      console.log('new slide: ', slide)
      return { ...state, slide: slide }
    case PREVIOUS:
      if (slide > 0) slide--
      return { ...state, slide: slide } 
    default:
      return state
  }
}

export default presentation


import * as constants from '../constants'

export const todoAdd = ( (id = 0) => (text) => ({ type: constants.TODO_ADD, id: id++, text }) )()

export const todoToggle = (id) => ({ type: constants.TODO_TOGGLE, id })

export const visibilityFilterSet = (visibilityFilter) => ({ type: constants.VISIBILITY_FILTER_SET, visibilityFilter })
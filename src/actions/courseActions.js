import *  as types  from  './actionTypes'


export function createCourse(course) {
  return { types: types.CREATE_COURSE, course}

}

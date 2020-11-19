const add = (data) => {
  return {
    type: "ADD",
    payload: data
  }
}

const edit = (data) => {
  return {
    type: "EDIT",
    payload: data
  }
}

const del = (data) => {
  return {
    type: "DEL",
    payload: data
  }
}

export default {
  add,
  edit,
  del
}
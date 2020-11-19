const setActive = (active) => {
  return {
    type: "MODAL_ACTIVE",
    payload: active
  }
}

const setData = (data) => {
  return {
    type: "MODAL_DATA",
    payload: data
  }
}

const setDefault = () => {
  return {
    type: "MODAL_DEFAULT"
  }
}

export default {
  setActive, 
  setData,
  setDefault
}
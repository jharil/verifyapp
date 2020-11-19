const defaultState = {
  active: false,
  data: {
    link: "",
    danger: false,
    provider: ""
  }
}

const modal = (state = defaultState, action) => {
  switch (action.type) {
    case "MODAL_ACTIVE":
      return {
        ...state,
        active: action.payload
      }
    case "MODAL_DATA":
      return {
        ...state,
        data: action.payload,
        active: true
      }
    case "MODAL_DEFAULT":
      return {
        ...state,
        data: defaultState.data
      }
    default:
      return state
  }
}

export default modal;
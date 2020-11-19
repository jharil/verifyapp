const defaultState = {
  list: [
    {
      id: 1,
      link: 'https://bono2.yomequedoencasa.pe/',
      danger: false,
      provider: 'Ministerio de Desarrollo e Inclusión Social'
    },
    {
      id: 2,
      link: 'https://registronacionaldehogares.pe/',
      danger: false,
      provider: 'Ministerio de Desarrollo e Inclusión Social'
    },
    {
      id: 3,
      link: 'https://bonorural.pe/',
      danger: false,
      provider: 'Ministerio de Desarrollo e Inclusión Social'
    },
    {
      id: 4,
      link: 'https://quedatenecasaperu.com/',
      danger: true,
      provider: 'Whatsapp'
    }
  ]
}

const links = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [
          action.payload,
          ...state.list,
        ],
      }  
    case "EDIT":
      const index = state.list.findIndex(e => e.id === action.payload.id)
      if (index > -1) {
        state.list[index] = action.payload
      }
      return {
        ...state,
        list: [...state.list],
      }  
    case "DEL":
      return {
        ...state,
        list: [...state.list.filter(e => e.id !== action.payload )],
      }  
    default:
      return state
  }
}

export default links;
export default function (state = [], action) {
    switch (action.type) {
        case 'HANDLE_ADD_TODO': 
            return state = [
                ...state,
                { name: action.payload.name, checked: action.payload.checked, id: action.payload.id }
            ]

        case 'REMOVE_TODO':
            return state.filter(state => state.id !== action.payload)

        case 'TOGGLE_COMPLET_TASK': 
            return state.map(state => {
                if(state.id === action.payload) {
                    return {...state, checked: !state.checked}
                }
                
                return state
            })

        default: 
            return state
    }
}
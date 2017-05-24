let initialState = {
  showHeader: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SLIDE_HEADER':
      return Object.assign({}, state, {
        showHeader: action.payload
      });
    default :
      return state
  }
}

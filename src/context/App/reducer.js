const defaultTitle = "Navigation title props";

export const initialState = {
  title: defaultTitle,
  user: null,
  pages: [],
  showPage: true,
  currentPage: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_PAGE":
      return { ...state, currentPage: action.payload };
    case "ADD_NEW_PAGE":
      return { ...state, pages: [...state.pages, action.payload] };
    case "UPDATE_PAGES":
      return { ...state, pages: [...state.pages, ...action.payload] };
    case "TOGGLE_CONTENT":
      return { ...state, showPage: !state.showPage };
    case "RESET_TITLE":
      return { ...state, title: defaultTitle };
    case "UPDATE_TITLE":
      return { ...state, title: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;

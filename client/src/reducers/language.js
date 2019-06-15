import { LANG_KOR, LANG_ENG, TOG_NAV, TOG_NAV2 } from '../actions/types';
import language from '../languages/language.json';

const initialState = {
  currentLanguage: null,
  loading: true,
  currentPath: '/',
  decide: false,
  offset: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LANG_KOR:
      return {
        ...state,
        currentLanguage: language.korean,
        loading: false
      };
    case LANG_ENG:
      return {
        ...state,
        currentLanguage: language.english,
        loading: false
      };
    case TOG_NAV:
      return {
        ...state,
        decide: true,
        offset: payload.offset
      };
    case TOG_NAV2:
      return {
        ...state,
        decide: false,
        offset: payload.offset
      };
    default:
      return state;
  }
}

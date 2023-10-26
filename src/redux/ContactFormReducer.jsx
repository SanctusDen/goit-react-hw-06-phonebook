const INITIAL_STATE = {
  filter: '',
  contacts: [],
  options: { name: '', number: '' },
};

export const ContactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contacts/setContacts': {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    case 'contacts/setOptions': {
      return {
        ...state,
        options: action.payload,
      };
    }
    case 'contacts/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

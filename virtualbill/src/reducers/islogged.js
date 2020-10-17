const initialState = {
  login: false,
  token: "",
  id: "",
  name: "",
  email: "",
  role: "",
  uid: ""
};

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "islogin":
      return {
        login: true,
        token: action.payload.token,
        id: action.payload.user.id,
        name: action.payload.user.name,
        email: action.payload.user.email,
        role: action.payload.user.role,
        uid: action.payload.user.uid
      };

    default:
      return false;
  }
};

export default loggedReducer;

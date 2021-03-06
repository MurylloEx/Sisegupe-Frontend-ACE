import { ROLES } from "core/utils/constants";

const Types = {
  LOGIN: "@user/login",
  LOGOUT: "@user/logout",
};

/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} token
 * @property {string} role
 * @property {boolean} isLogged
 */

/**
 * @typedef {{type: @user/login, payload: User}} LoginAction
 * @typedef {{type: @user/logout}} LogoutAction
 */

const Actions = {
  /**
   *
   * @param {User} user
   * @returns LoginAction
   */
  login: (user) => ({ type: Types.LOGIN, payload: user }),

  /**
   *
   * @returns LogoutAction
   */
  logout: () => ({ type: Types.LOGOUT }),
};
/**
 * @typedef {User} UserReducerState
 */
const INITIAL_STATE = {
  id: "",
  name: "",
  email: "",
  password: "",
  token: "",
  role: ROLES.NORMAL_USER,
  isLogged: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN: {
      const { payload: user } = action;

      return { ...user };
    }

    case Types.LOGOUT: {
      return { ...INITIAL_STATE };
    }

    default: {
      return state;
    }
  }
};

userReducer.initialState = INITIAL_STATE;
userReducer.actions = Actions;

export default userReducer;

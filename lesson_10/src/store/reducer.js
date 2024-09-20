import { USERS_SORT_ASC, USERS_SORT_DESC } from "./constanst";
import { SET_SORT_USERS_ACTION, SORT_USERS_ACTION, CHANGE_USER_ACTION } from "./actions";

const initArgs = {
  sortUsers: USERS_SORT_DESC,
  users: [
    {
      name: "Heidi Murray",
      admin: true,
      id: "1",
    },
    {
      name: "Damon Gislason",
      admin: false,
      id: "2",
    },
    {
      name: "Elias Orn",
      admin: true,
      id: "3",
    },
    {
      name: "Mr. Vicky Howe MD",
      admin: false,
      id: "4",
    },
    {
      name: "Ms. Ronald Rohan",
      admin: false,
      id: "5",
    },
    {
      name: "Willard Cronin",
      admin: true,
      id: "6",
    },
    {
      name: "Ross Braun",
      admin: false,
      id: "7",
    },
    {
      name: "Mamie Kunde",
      admin: true,
      id: "8",
    },
    {
      name: "Marshall Ryan",
      admin: false,
      id: "9",
    },
    {
      name: "Edmund Spinka PhD",
      admin: true,
      id: "10",
    },
    {
      name: "Jesus Hansen",
      admin: false,
      id: "11",
    },
    {
      name: "Eva Rowe",
      admin: true,
      id: "12",
    },
    {
      name: "Mario Bahringer",
      admin: true,
      id: "13",
    },
    {
      name: "Miss Veronica Abernathy",
      admin: false,
      id: "14",
    },
    {
      name: "Kendra Murazik",
      admin: true,
      id: "15",
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SORT_USERS_ACTION:
      if(payload===USERS_SORT_ASC || payload===USERS_SORT_DESC) return { ...state, sortUsers: payload };
      break;
    case SORT_USERS_ACTION:
      return {
        ...state,
        users: state.users.sort((a, b) => {
          if (state.sortUsers === USERS_SORT_ASC) return a.admin - b.admin;
          else if (state.sortUsers === USERS_SORT_DESC)
            return b.admin - a.admin;
        }),
      };
    case CHANGE_USER_ACTION:
      return {...state, users: state.users.map(item => {
        if(item.id === payload.id) item = payload;
        return item;
      })}
    default:
      return state;
  }
};

export { reducer, initArgs };

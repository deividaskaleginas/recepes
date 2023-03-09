import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { LoggedUserData, UserData } from "../../types/userDataTypes";

interface ContextProps {
  findUser: (userName: string, userPassword: string) => void;
  loggedUserData: LoggedUserData;
  setLoggedUserData: Dispatch<SetStateAction<LoggedUserData>>;
  userFailedLoggedIn: boolean;
}

const defaultState = {
  loggedUserData: {
    id: "",
    username: "",
    avatar: "",
    favorites: [],
  },
  findUser: (usernaeme: string, userPassword: string) => {},
  setLoggedUserData: (loggedUserData: LoggedUserData) => {},
  userFailedLoggedIn: false,
} as ContextProps;

const UserContext = createContext<ContextProps>(defaultState);

interface ProviderProps {
  children: ReactNode | ReactNode[];
}

const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState<LoggedUserData>({
    id: "",
    username: "",
    avatar: "",
    favorites: [],
  });

  // const [status, setStatus] = useState({
  //   getUserDataStatus: "",
  // });

  const [userFailedLoggedIn, setUserFailedLoggedIn] = useState(Boolean);

  const findUser = (userName: string, userPassword: string) => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((usersList: UserData[]) => {
        console.log(usersList);
        const loggedInUser = usersList.find(
          (user: UserData) =>
            user.username === userName && user.password === userPassword
        );
        if (loggedInUser) {
          setUserFailedLoggedIn(false);
          setLoggedUserData({
            username: loggedInUser.username,
            avatar: loggedInUser.avatar,
            id: loggedInUser.id,
            favorites: loggedInUser.favorites,
          });

          console.log(loggedInUser);
        } else {
          setUserFailedLoggedIn(true);
        }
      });
  };

  console.log(userFailedLoggedIn);

  return (
    <UserContext.Provider
      value={{
        loggedUserData,
        setLoggedUserData,
        findUser,
        userFailedLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;

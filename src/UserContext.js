import { createContext, useState} from "react"

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [userinfo,Setuserinfo] = useState({});
        return(
            <UserContext.Provider value={{userinfo,Setuserinfo}}>
                {children};
            </UserContext.Provider>
        )
}

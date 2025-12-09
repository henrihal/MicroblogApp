import { createContext } from "react";
import type { User } from "../App"

export const AuthContext = createContext<null | User>(null)

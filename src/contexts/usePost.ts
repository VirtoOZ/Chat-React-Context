import { useContext } from "react";
import { PostContext } from "./PostContext";

export const usePost = () => useContext(PostContext);
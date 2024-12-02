import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./redux";

export function useAuthRequired(){
    const { isAuthenticated } = useAppSelector(state => state.userSlice)
    const navigate = useNavigate();

    useEffect(() => {
        
        if(!isAuthenticated){
            navigate('/auth')
        }
    }, [isAuthenticated, navigate])
}

import {loginFailure,loginStart, loginSuccess} from "./userRedux";
// --
import {registerFailure,registerStart, registerSuccess} from "./userRedux";
// --
import {publicRequest} from "../requestMethod"

// LOGIN
export  const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res=await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
        
    } catch (err) {
        dispatch(loginFailure())
        
    }
}
 //-- 
// REGISTER 
export  const register=async(dispatch,user)=>{

    // newUser
    dispatch(registerStart());
    try {
        const res=await publicRequest.post("/auth/register",user)
        dispatch(registerSuccess(res.data))
        
    } catch (err) {
        dispatch(registerFailure())
        
    }
}
// --
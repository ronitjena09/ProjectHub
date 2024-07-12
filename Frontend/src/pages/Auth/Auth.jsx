import { useState } from "react"
import Signup from "./Signup"
import Login from "./Login"
import { Button } from "@/components/ui/button"

const Auth = () => {
    const [active, setActive] = useState(true)
return (
    <div className="loginContainer">
        <div className="box h-[30rem] w-[25rem]">
            <div className="minContainer login">
            <div className="loginBox w-full px-10 space-y-5">
                {active?<Signup />:<Login />}
            </div>
            <div>
                <span>Already have an Account?</span>
                <Button variant="ghost" onClick={()=>setActive(!active)}>{active?"Sign In":"Sign Up"}</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
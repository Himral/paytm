import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
export const Dashboard = ()=>{
    const userToken = JSON.parse(localStorage.getItem('user'));
    return <div>
        <Appbar/>
        <Balance/>
        <Users/>
    </div>
}
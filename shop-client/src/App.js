import './-/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
import NavBar from "./components/navBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 1000)
    }, [])

    if (loading) {
        return <div className='text-center'>
            <div className="sr-only ">Loading</div>
            <div className="spinner-border" role="status">...</div>
        </div>


    }
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;

import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Login from "./Login";
import Chat from "./Chat";

import { useAuthState } from "react-firebase-hooks/auth"
import { useContext } from "react";
import { Context } from "../index";

const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                )}
                <Route path="*" element={<Chat />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({ path, Component }) =>
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                )}
                <Route path="*" element={<Login />} />
            </Routes>
        )
}

export default AppRouter;
import { lazy } from 'react'

const Home = lazy(() =>
    import("./pages/Home/Home").then(({ Home }) => ({
        default: Home,
    }))
);


export const routes = [
    {
        id: 1,
        path: "/",
        component: Home,
        exact: true
    }
]
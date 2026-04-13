import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../pages/commons/home-page'
import App from '../App'
import RecipePage from '../pages/commons/recipe-page'
import RecipeDetailPage from '../pages/commons/recipe-detail-page'
import SubscriberPage from '../pages/commons/subscriber-page'



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            index: true,
            element: <HomePage/>
        },
        {
            path: "recipe",
            element: <RecipePage/>
        },
        {
            path: "recipe/:id",
            element: <RecipeDetailPage/>
        },
        {
            path: "subscibe",
            element: <SubscriberPage/>
        }
    ]
    }
])
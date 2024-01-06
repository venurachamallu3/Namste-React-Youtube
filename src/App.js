import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
// import MainContainer from "./Components/MainContainer";
// import Sidebar from "./Components/Sidebar";
 
import store from "./Utilis/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchContainer from "./Components/WatchContainer";


const appRoute = createBrowserRouter([
  {
    path:'/',element:<Body/> ,
    children:[
      {
        path:'/',element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchContainer/>
      }
    ]
  }
])



function App() {
  return (
    <div > 
      <Provider store={store} >    
        <Header/>
        <RouterProvider router={appRoute}/>
        </Provider>
    </div>
  );
}

export default App;

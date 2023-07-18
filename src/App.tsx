import ChatView from "./views/ChatView";
import LoginView from "./views/LoginView";
import "./index.css"
import { Route, Routes, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import BaseLoader from "./components/UI/Loader/BaseLoader";

function App() {
  const { user, isLoading } = useAuth()

  if(isLoading) {
    return (
      <div className="flex h-screen w-full justify-center py-2">
        <div className="flex justify-center h-full w-full px-6">
          <div className="h-full w-full flex justify-center items-center flex-col gap-2">
            <BaseLoader />
            <small className="text-gray-500">Getting info...</small> 
          </div>
        </div>
      </div>  
    )
  }

  return (
    <div className="flex h-screen w-full justify-center py-2">
      <div className="flex justify-center h-full w-full sm:px-6 px-2">
        <Routes>
            <Route path="/" element={
              user !== null
              ? <ChatView />
              : <Navigate to="/login" /> 
            } />
            <Route path="/chat" element={ 
              user !== null
              ? <ChatView />
              : <Navigate to="/login" /> }
              />
              <Route path="/login" element={ <LoginView />} />
          </Routes>
      </div>
    </div>
  )
}

export default App;

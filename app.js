import React from "react";
import ChatBox from "./components";
import { ChatProvider } from "./context";

const App = () => {
  return (
    <ChatProvider>
        
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ChatBox />
      </div>
    </ChatProvider>
  );
};

export default App;
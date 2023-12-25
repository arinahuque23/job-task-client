import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import AuthProvider from "./Provider/AuthProvider.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router/router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <QueryClientProvider client={queryClient}>
      <div className="ml-12 mr-12 mt-5">
      <AuthProvider>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={Router} />
          <Toaster />
        </DndProvider>
      </AuthProvider>
      </div>
      </QueryClientProvider>
   
  </React.StrictMode>
);

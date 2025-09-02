import { ListPage } from "@/features/list/pages/list-page";
import { ListsPage } from "@/features/lists/pages/lists-page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/lists" replace />} />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/list/:id" element={<ListPage />} />
            </Routes>
        </BrowserRouter>
    )
}

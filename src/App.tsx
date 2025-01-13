import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicketsPage from './components/ticketsModule/ticketsPage'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TicketsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
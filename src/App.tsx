import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import UserPage from "./Components/UserPage/UserPage";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/mainpage'} element={<MainPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/userPage/:id'} element={<UserPage/>}/>
                </Routes>
            </main>
        </>

    );
}

export default App;

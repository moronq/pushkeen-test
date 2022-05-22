import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";
import UserPage from "./Components/UserPage/UserPage";
import AllPostPage from "./Components/AllPostPage/AllPostPage";
import PostPage from "./Components/PostPage/PostPage";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/mainPage'} element={<MainPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/userPage/:id'} element={<UserPage/>}/>
                    <Route path={'/userPost/:id/post/:idPost'} element={<PostPage/>}/>
                    <Route path={'/userPost/:id'} element={<AllPostPage/>}/>
                </Routes>
            </main>
        </>

    );
}

export default App;

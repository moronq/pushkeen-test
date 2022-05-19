import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainPage from "./Components/MainPage/MainPage";

function App() {
    return (
        <>
            <Header/>
            <main>
                <MainPage/>
            </main>
        </>

    );
}

export default App;

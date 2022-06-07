// @ts-ignore
import logo from "../DSC00202-copy.svg";
import React from 'react';
import InputForm from "./InputForm";
import './pagesStyles.scss'


export const Home= () =>{
    const dialogAlert = () => {
        alert('There is no hint in here')
    }
    const dialogAlert2 = () => {
        alert('There is no good or bad name, it is just a name, do not worry')
    }
    return (
        <main>
            <div className="landing">
                <header className="landing-header">
                    <img src={logo} className="landing-logo" alt="logo" width="640" height="360"   />
                    <p>
                        Give a name to an abstract woman above
                    </p>
                    <button onClick={dialogAlert}>Give Me a hint</button>
                    <button onClick={dialogAlert2}>Any hint, please</button>
                    <InputForm/>
                    <a
                        className="landing-link"
                        href="https://github.com/emilierave/daftcode-react-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >link to git repo</a>
                    <a
                        className="landing-link"
                        href="https://en.wikipedia.org/wiki/Edge_cover"
                        target="_blank"
                        rel="noopener noreferrer"
                    >edge cover</a>
                </header>
            </div>
        </main>
    );
};
export default Home;

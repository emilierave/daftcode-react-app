import React, { useEffect, useState } from "react";

const InputForm = () => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(false);
    const win = window.localStorage;
    function nameHandler(e) {
        let itemName = e.target.value;
        if (itemName.length < 3 || itemName.length > 20) {
            setNameErr(true);
        } else {
            setNameErr(false);
        }
        setName(itemName);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        win.clear();
        setName("");
    };
    useEffect(() => {
        if (win.getItem("name")) {
            setName(win.getItem("name"));
        }
    });

    useEffect(() => {
        win.setItem("name", name);
    },);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onInput={nameHandler}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {nameErr ? <span>Invalid User name</span> : null}
                </div>
                <div className="btnSubmit">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;
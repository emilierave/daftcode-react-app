import {useState, useEffect, useCallback} from "react";
interface IFormInputValue {
    defaultValue?: string;
}
const storageFormKey = 'inputValue';
export const InputForm = (props?: IFormInputValue) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('empty')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const formReadyToSubmit = !(displayError || !inputValue);
    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if (messageLength < 3 || messageLength > 20) {
            if (messageLength < 3) {
                setErrorMessage('Name too short')
            }
            if (messageLength > 20) {
                setErrorMessage('Name too long')
            }
            setDisplayError(true)}
        else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }
    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFormKey, inputValue)
        }
    }, [inputValue])

    useEffect(() => {
        let valueToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            valueToSet = localStorageData;}
        else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue;
            }
        }
        setInputValue(valueToSet);
    }, [])
    const [] = useState(0);
    return<div2 style={{display: "flex", flexDirection: 'column'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>The name:</div>
        <input
            autoComplete="off"
            type="text"
            placeholder="Some name"
            onInput={handleInputChange}
            value={inputValue}
            />
        <br/>
        <button onClick={handleSubmit} disabled={!formReadyToSubmit}>sent</button>
    </div2>
}

export default InputForm
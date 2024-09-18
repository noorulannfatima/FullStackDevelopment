import React, { useState, useCallback, useEffect, useRef } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(7)
    const [numbers, setNumber] = useState(false);
    const [characters, setCharacters] = useState(false);
    const [password, setPassword] = useState("");

    // useRef Hook for reference
    const passwordRef = useRef(null)

    // Used Callback hook for memoization
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numbers) str += "0123456789";
        if (characters) str += "!@#$%^&*?";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numbers, characters, setPassword]); // used setPassword for optimization

    // code for copy functionality
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 50); // select the text in the input field
        passwordRef.current?.focus();   // focus on the input field
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator(); // calling
    }, [length, numbers, characters, passwordGenerator]);

    return (
        <div className='h-screen w-full bg-black flex justify-center items-center'>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-4 bg-gray-600'>
                <h1 className='text-2xl font-bold text-center my-2 pb-5 text-black'>Password Generator</h1>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input
                        type='text'
                        value={password}
                        className='outline-none w-full py-1 px-3 text-orange-700'
                        placeholder='Password'
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='range'
                            min={7}
                            max={50}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={numbers}
                            id="numberInput"
                            onChange={() => setNumber(prev => !prev)} // callback fire
                            className='cursor-pointer'
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type='checkbox'
                            defaultChecked={characters}
                            id="charInput"
                            onChange={() => setCharacters(prev => !prev)}
                            className='cursor-pointer'
                        />
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;

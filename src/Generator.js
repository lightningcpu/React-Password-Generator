import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

function Generator() {

    const [password, setPassword] = useState("")
    const [passwordLength, setPasswordLength] = useState(8)
    const [includeUpperCase, setincludeUpperCase] = useState(true)
    const [includeNumbers, setincludeNumbers] = useState(true)
    const [includeSpecials, setincludeSpecials] = useState(true)

    const generatePassword = () => {
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let validChars = lowerCase

    if(includeUpperCase){
        validChars += upperCase
    }
    if(includeNumbers){
        validChars += numbers
    }
    if(includeSpecials){
        validChars += specials
    }

    let generatePassword = ""
    for(let i=0; i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random() * validChars.length)
        generatePassword += validChars.charAt(randomIndex)
    }

    setPassword(generatePassword)

    }   

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col gap-5 bg-white w-[300px] rounded-lg py-5 shadow-2xl'>
                <div className='flex justify-center'>
                    <label>Password length:</label>
                    <input className='w-12 bg-white rounded-sm ml-2' type='number' value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)}></input>
                </div>
                <div className='flex justify-center'>
                    <label>Include Uppercase:</label>
                    <ReactSwitch checked={includeUpperCase} onChange={()=>setincludeUpperCase(!includeUpperCase)}className='ml-2' width={40} height={20} handleDiameter={18} />
                </div>
                <div className='flex justify-center'>
                    <label>Include Numbers:</label>
                    <ReactSwitch checked={includeNumbers} onChange={()=>setincludeNumbers(!includeNumbers)}className='ml-2' width={40} height={20} handleDiameter={18} />
                </div>
                <div className='flex justify-center'>
                    <label>Include Specials:</label>
                    <ReactSwitch checked={includeSpecials} onChange={()=>setincludeSpecials(!includeSpecials)}className='ml-2' width={40} height={20} handleDiameter={18} />
                </div>
                <div className='flex justify-center'>
                    <button className='border-2 border-solid border-white px-5 py-2 text-white rounded-md bg-black' onClick={generatePassword}>
                        Generate
                    </button>
                </div>
                <div className='flex justify-center mb-2'>
                    <h2>{password}</h2>
                </div>
            </div>
        </div>
    )
}

export default Generator
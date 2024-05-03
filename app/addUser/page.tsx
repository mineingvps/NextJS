"use client"
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const router = useRouter()
    const [first_Name , setFirstName] = useState<string>("")
    const [ last_Name , setLastName] = useState<string>("")
    const [ phone_number , setPhoneNumber] = useState<string>("")
    const [ email , setEmail] = useState<string>("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data : IUser = {
            first_Name,
            last_Name,
            phone_number,
            email
        }

        const response = await axios.post("https://66348a3c9bb0df2359a1d3a2.mockapi.io/api/v1/users" , data)
        if(response.status === 201) {
            alert("Add User success")
            router.push("/")
        } else {
            alert("Add User Failed")
        }
    }
  return (
    <> 
    <h1>Add user</h1>
    <form>
        <label>First name : </label>
        <input type='text' name='first_Name' required onChange={(e) => {setFirstName(e.target.value)}} value={first_Name} />
        <br/>
        <label>Last name : </label>
        <input type='text' name='Last_Name' required onChange={(e) => {setLastName(e.target.value)}} value={last_Name} />
        <br/>
        <label>Phone number : </label>
        <input type='text' name='phone_number' required onChange={(e) => {setPhoneNumber(e.target.value)}} value={phone_number} />
        <br/>
        <label>Email : </label>
        <input type='text' name='email' required onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <br/>
        <button type='submit' onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}
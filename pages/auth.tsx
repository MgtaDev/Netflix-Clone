import React from 'react'
import Input from '@/components/input'
import {useState} from 'react'

const Auth = () => {
const [email, setemail] = useState('')
const [name, setname] = useState('')
const [password, setpassword] = useState('')


return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover" >
        <div className='bg-black bg-opacity-50 w-full h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                <img src="/images/logo.png" alt="Logo" className='h-12' />
            </nav>
            <div className='flex justify-center'>
                <div className='bg-black opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
                    <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
                    <div className='flex justify-center flex-col gap-4'>
                        <Input 
                        label='Email'
                        onChange={(e)=> setemail(e.target.value)}
                        id='email'
                        type='email'
                        value={email}
                        />
                          <Input 
                        label='Username'
                        onChange={(e)=> setname(e.target.value)}
                        id='name'
                        value={name}
                        />
                           <Input 
                        label='Password'
                        onChange={(e)=> setpassword(e.target.value)}
                        id='name'
                        type='password'
                        value={password}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth
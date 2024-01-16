'use client'

import { Button, Container, Form, FormControl, FormLabel, FormText } from "react-bootstrap";
import Link from 'next/link';
import { useState } from "react";

const Login = ({handleLogin}: {handleLogin: (username: string, password: string) => Promise<void>}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container style={{ width: '50%' }} className="d-flex flex-column justify-content-center" >
            <h1 className='d-flex justify-content-center m-4'>
                Login
            </h1>
            <Form onSubmit={(e) => {e.preventDefault(); handleLogin(username, password)}} className='m-4 d-flex flex-column'>
                <FormLabel>Email address</FormLabel>
                <FormControl value={username} onChange={(e) => setUsername(e.currentTarget.value)} type="text" placeholder="name@example.com" />
                <FormText className="text-muted">
                    We will never share your email with anyone else.
                </FormText>
                <FormLabel>Password</FormLabel>
                <FormControl value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                <div className='d-flex flex-row align-items-center justify-content-center m-4  '>
                    <Button className='me-3' variant="primary" type='submit'>Login</Button>
                    <Link href='/auth/signup'>Register</Link>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
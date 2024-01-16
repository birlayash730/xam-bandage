'use client'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Container } from "react-bootstrap";
import Login from './login';
import { useLoginUserMutation } from '../api';
import { useRouter } from 'next/navigation';
import { Spinner } from 'react-bootstrap';
import { useLocalStorage } from '../useLocalStorage';

export default function Page() {
    const router = useRouter();
    const [token, setToken] = useLocalStorage('token', '');
    const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
    const handleLogin = async (username: string, password: string) => {
        const result = await loginUser({ username, password }).unwrap();
        if (result) {
            setToken(result.token);
            router.push("/");
        }
    };

    if (isLoading) {
        return <div className="d-flex justify-content-center"><Spinner variant="primary" animation="border" /></div>;
    }

    if (isError) {
        return <div>{`Error: ` + (error as any)?.data.message}</div>;
    }
    return (
        <>
            <Login handleLogin={handleLogin} />
        </>
    );
}
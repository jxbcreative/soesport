export type Register = {
    name: string;
    phone_number: string;
    address: string;
    email: string;
    password: string;
    retryPassword: string;
}

export type Login = {
    email: string;
    password: string;
}

export type User = {
    name: string;
    phone_number: string;
    address: string;
    email: string;
    password: string;
}
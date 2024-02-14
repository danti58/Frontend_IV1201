// types.tsx

export interface UserState {
    token: string | null;
    role_id: number | null;
    username: string | null;
}

export interface AuthState {
    userState: UserState;
}
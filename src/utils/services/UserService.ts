import { jwtDecode } from "jwt-decode";
import http from "../api/http-common";
import { User } from "../lib/types";
import { AxiosResponse } from "axios";

type AuthResponse = {
    // id: number,
    username: string,
    email: string,
    // firstName: string,
    // lastName: string,
    // gender: string,
    access_token: string,
    refresh_token: string
}

type RefreshAuthResponse = {
    accessToken: string
    refreshToken: string
}


const loginUser = (username: string, password:  string): Promise<AuthResponse> => {
    return http.post<any>(
        '/auth/login', 
        {
            "email": username,
            "password": password,
        }).then(resp => {
            const authResponse: AuthResponse = resp.data;
            console.log(authResponse.access_token)
            setAccessToken(authResponse.access_token);
            setRefreshToken(authResponse.refresh_token);
            return authResponse;
        } )
}

const logoutUser = async () => {
    const tokens = {
        access_token: getAccessToken(),
        refresh_token: getRefreshToken(),
    };

    await http.post('auth/logout', tokens);
    setAccessToken(null);
    setRefreshToken(null)
}


const getUser = async (id: number): Promise<User> => {
    const response: AxiosResponse<User> = await http.get<User>(
        `/auth/${id}`
    )
    return response.data;
}

const getAuthUser = async (): Promise<User> => {
    const authUser = await http.get<User>(
        '/users/me',
    )        
    return authUser.data;
}

const getAccessToken = () => {
    return localStorage.getItem('accessToken'); 
};

const getRefreshToken = () => {
    return localStorage.getItem('refreshToken'); 
  };

const setAccessToken = (token: string | null) => {
    localStorage.setItem('accessToken', token ? token : '');
 }

const setRefreshToken = (token: string | null) => {
    localStorage.setItem('refreshToken', token ? token : '');
}  

const refreshAuthToken = async (): Promise<RefreshAuthResponse> => {
    const currentToken = {
        accessToke: getAccessToken(),
        refreshToken: getRefreshToken()
    };
    const response = await http.post<RefreshAuthResponse>(
        'auth/tokens/access',
        currentToken
    );

    setAccessToken(response.data.accessToken);
    setRefreshToken(response.data.refreshToken);

    return response.data;
}

const isTokenValid = () : boolean => {
    let isValid: boolean = false;
    const accessToken = localStorage.getItem('accessToken')   

    //TODO: решить проблему с возможным отсутствием значения exp
    if(accessToken && jwtDecode(accessToken).exp! >= Date.now() / 1000){
        isValid = true;
    }

    console.log('is token valid: ',isValid)
    return isValid;
}


const UserService = {
    loginUser,
    getUser,
    getAccessToken,
    getAuthUser,
    refreshAuthToken,
    logoutUser,
    isTokenValid
}

export default UserService;
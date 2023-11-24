export interface AuthModel {
    access_token: string,
    token_type: string
}

// Define the type for your country data
export interface CountryCodeModel {
    [key: string]: {
        name: string;
        dial_code: string;
        code: string;
    };
}

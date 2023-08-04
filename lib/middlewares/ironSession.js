export const ironConfig = {
    cookieName: process.env.SESSION_TOKEN_NAME,
    password: process.env.SESSION_PASSWORD,
    cookiesOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
}
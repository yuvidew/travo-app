const api = process.env.API_URL;

export const api_end_points = {
    signup : `${api}/auth/sign-up`,
    signin : `${api}/auth/sign-in`,
    verify_otp : `${api}/auth/verify-otp`,
}
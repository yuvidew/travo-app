const api = "http://192.168.1.4:2000/v1";

export const api_end_points = {
    signup : `${api}/auth/user/sign-up`,
    signin : `${api}/auth/user/sign-in`,
    verify_otp : `${api}/auth/user/verify-otp`,
    verify_email : `${api}/auth/user/verify-email`,
    verify_reset_pass_otp : `${api}/auth/user/verify-forget-password-opt`,
    reset_password : `${api}/auth/user/reset-new-password`,
}
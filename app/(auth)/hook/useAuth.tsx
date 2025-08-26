import { useMutation, useQueryClient, } from "@tanstack/react-query"
import { otpCheck, resetPassword, saveToken, signin, signup, verifyEmail, verifyOtp } from "../api";

export const useSignUp = () => {
    return useMutation({
        mutationFn: signup,
        mutationKey: ["sign-up"],
    })
}

export const useSignin = () => {
    return useMutation({
        mutationFn: signin,
        mutationKey: ["sign-in"]
    })
}

export const useVerifyOTP = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: otpCheck,
        mutationKey: ["verify-otp"],
        onSuccess: async (data) => {
            await saveToken({accessToken : data?.token as string});
            await qc.invalidateQueries({ queryKey: ["verify-otp"]});
        },
    })
}

export const useVerifyEmail = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn : verifyEmail,
        mutationKey : ["verify-email"],
        onSuccess : async () => {
            await qc.invalidateQueries({ queryKey: ["verify-email"]});
        }
    })
}

export const useVerifyOtpToResetPassword = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn : verifyOtp,
        mutationKey : ["verify-otp-to-reset-password"],
        onSuccess : async () => {
            await qc.invalidateQueries({ queryKey: ["verify-otp-to-reset-password"]});
        }
    })
}

export const useResetPassword = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn : resetPassword,
        mutationKey : ["reset-password"],
        onSuccess : async () => {
            await qc.invalidateQueries({ queryKey: ["reset-password"]});
        }
    })
}
import { useMutation, useQueryClient, } from "@tanstack/react-query"
import { otpCheck, saveToken, signin, signup } from "../api";

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
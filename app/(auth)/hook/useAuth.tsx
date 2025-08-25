import { useMutation, useQueryClient, } from "@tanstack/react-query"
import { otpCheck, saveToken, signin, signup } from "../api";
import { router } from "expo-router";

export const useSignUp = () => {
    return useMutation({
        mutationFn: signup,
        mutationKey: ["sign-up"],
        onSuccess : async () => {
            router.push("/(auth)/sign-in")
        }
    })
}

export const useSignin = () => {
    return useMutation({
        mutationFn: signin,
        mutationKey: ["sign-in"],
        onSuccess : async () => {
            router.push("/(auth)/otp")
        }
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
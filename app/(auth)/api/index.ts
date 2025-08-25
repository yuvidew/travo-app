import Toast from "react-native-toast-message";
import { api_end_points } from "../../../constants/api-endpoints";
import { SigninFormType, SignupFormType } from "../../../types/type";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Handles user signup request.
 *
 * @async
 * @param {SignupFormType} form - The signup form data.
 * @returns {Promise<void>} Resolves when the signup process is completed.
 */

export const signup = async (form: SignupFormType): Promise<void> => {
    try {
        const { data, status } = await axios.post(api_end_points.signup, form);

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            return data;
        }

    } catch (error) {
        console.log("Error to sign up: ", error);

        if (isAxiosError(error)) {
            if (error.response?.status === 409) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            } else if (error.response?.status === 400) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            } else if (error.response?.status === 500) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            }
        }
    }
}

/**
 * Handles user signin request.
 *
 * @async
 * @param {SigninFormType} form - The signin form data.
 * @returns {Promise<void>} Resolves when the signin process is completed.
 */
export const signin = async (form: SigninFormType): Promise<void> => {
    try {
        const { data, status } = await axios.post(api_end_points.signin, form);

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            return data;
        }

    } catch (error) {
        console.log("Error to sign in: ", error);

        if (isAxiosError(error)) {
            if (error.response?.status === 401) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            } else if (error.response?.status === 400) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            } else if (error.response?.status === 500) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
            }
        }
    }
}

type VerifyOtpInput = { email: string; pin: string };
type VerifyOtpResponse = { message: string; token: string };

/**
 * Verifies OTP for a user.
 *
 * @async
 * @param {{ email: string, pin: string }} form - The OTP verification form data.
 * @returns {Promise<void>} Resolves when OTP verification is completed.
 */

export const otpCheck = async (form: VerifyOtpInput) => {
    try {
        const { data, status } = await axios.post<VerifyOtpResponse>(api_end_points.verify_otp, form);

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            return data;
        }

    } catch (error) {
        console.log("Error to verify otp: ", error);

        if (isAxiosError(error)) {
            if (error.response?.status === 401) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            } else if (error.response?.status === 400) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            } else if (error.response?.status === 500) {
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })

                throw error
            }
        }
    }
}

type Tokens = { accessToken: string; refreshToken?: string };

/**
 * Saves authentication tokens in AsyncStorage.
 *
 * @async
 * @param {Tokens} tokens - The tokens object containing access and optional refresh tokens.
 * @returns {Promise<void>} Resolves when tokens are stored.
 */
export const saveToken = async (tokens: Tokens): Promise<void> => {
    await AsyncStorage.setItem("accessToken", tokens.accessToken);
    if (tokens.refreshToken) {
        await AsyncStorage.setItem("refreshToken", tokens.refreshToken);
    }
}

/**
 * Retrieves the access token from AsyncStorage.
 *
 * @async
 * @returns {Promise<string | null>} The stored access token, or null if not found.
 */
export const getAccessToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem("accessToken");

}

/**
 * Clears authentication tokens from AsyncStorage.
 *
 * @async
 * @returns {Promise<void>} Resolves when tokens are removed.
 */
export const clearTokens = async (): Promise<void> => {
    await AsyncStorage.multiRemove(["accessToken", "refreshToken"]);

}
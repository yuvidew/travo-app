import Toast from "react-native-toast-message";
import { api_end_points } from "../../../constants/api-endpoints";
import { SigninFormType, SignupFormType } from "../../../types/type";
import axios, { isAxiosError } from "axios";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ApiResponse = { message: string; token?: string };

/**
 * Handles user signup request.
 *
 * @async
 * @param {SignupFormType} form - The signup form data.
 * @returns {Promise<void>} Resolves when the signup process is completed.
 */

export const signup = async (form: SignupFormType): Promise<void> => {
    console.log("call the sign up 1", form);
    try {
        const { data, status } = await axios.post(api_end_points.signup, form);
        console.log("call the sign up 2");

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            router.push("/(auth)/sign-in")

            return data;
        }
        console.log("call the sign up 3");

    } catch (error) {
        console.log("Error to sign up: ", error);

        if (isAxiosError(error)) {
            console.log("the error", error.message, error.status);
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

            await AsyncStorage.setItem("user_email", form.email);

            router.push("/(auth)/otp");
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

type VerifyOtpInput = { pin: string };


/**
 * Verifies OTP for a user.
 *
 * @async
 * @param {{ pin: string }} form - The OTP verification form data.
 * @returns {Promise<void>} Resolves when OTP verification is completed.
 */

export const otpCheck = async (form: VerifyOtpInput) => {
    const email = await AsyncStorage.getItem("user_email");
    try {
        const { data, status } = await axios.post<ApiResponse>(api_end_points.verify_otp, {
            email,
            pin: form.pin
        });

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            await AsyncStorage.removeItem("user_email");

            router.push("/(root)/(tabs)")

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

type VerifyEmailFromType = {
    email: string
}

export const verifyEmail = async (form: VerifyEmailFromType) => {

    try {
        const { data, status } = await axios.post(api_end_points.verify_email, form);

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            await AsyncStorage.setItem("user_email", form.email);

            router.push("/(auth)/password-reset-code")

            return data

        }

    } catch (error) {
        console.log("Error to verify email: ", error);

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


export const verifyOtp = async (form: VerifyOtpInput) => {
    const email = await AsyncStorage.getItem("user_email");
    try {
        const { data, status } = await axios.post(api_end_points.verify_reset_pass_otp, {
            email,
            pin: form.pin
        });
        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            await AsyncStorage.setItem("verify_token", data.token);

            router.push("/(auth)/reset-password")

            return data

        }
    } catch (error) {
        console.log("Error to verify email: ", error);

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

type ResetPasswordType = {
    newPassword: string
}

export const resetPassword = async (form: ResetPasswordType) => {
    const token = await AsyncStorage.getItem("verify_token");
    const email = await AsyncStorage.getItem("user_email");

    try {
        const { data, status } = await axios.put(api_end_points.reset_password, {
            email,
            newPassword: form.newPassword
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (status === 200) {
            Toast.show({
                type: "success",
                text1: data.message,
            });

            await AsyncStorage.removeItem("user_email");
            await AsyncStorage.removeItem("verify_token");

            router.push("/(auth)/sign-in")

            return data
        }

    } catch (error) {
        console.log("Error to verify email: ", error);

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
            } else if (error.response?.status === 404) {
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

/**
 * Checks if tokens exist in AsyncStorage.
 *
 * @async
 * @returns {Promise<boolean>} True if tokens exist, false otherwise.
 */
export const checkTokens = async (): Promise<boolean> => {
    try {
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshToken = await AsyncStorage.getItem("refreshToken");
        return !!(accessToken && refreshToken);
    } catch (error) {
        console.error("Error checking tokens ❌", error);
        return false;
    }
};

import axios, { AxiosError } from "axios";

export type EmailResponse = {
  success?: boolean;
  error?: boolean;
  message: string;
};

export const joinPlaytest = async (email: string): Promise<EmailResponse> => {
  const formData = new FormData();
  formData.append("email", email);

  try {
    const res = await axios.post("/php/mail.php", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return { success: true, message: "You've successfully joined the list!" };
  } catch (error) {
    const err = error as AxiosError;
    if (err.isAxiosError) {
      return {
        error: true,
        message: "An error has occurred, try again",
      };
    }
    return {
      error: true,
      message: "An error has occurred, try again",
    };
  }
};

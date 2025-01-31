import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystery Feedback | Verify your email",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Email sent successfully" };
  } catch (emailError) {
    console.error("Error sending email", emailError);
    return {
      success: false,
      message: "Error sending email",
    };
  }
}

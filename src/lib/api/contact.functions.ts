import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getRecaptchaSecret } from "../config.server";

type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export const verifyRecaptcha = createServerFn({ method: "POST" })
  .inputValidator(z.object({ token: z.string().min(1) }))
  .handler(async ({ data }) => {
    const secret = getRecaptchaSecret();
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: data.token,
      }),
    });

    const result = (await response.json()) as RecaptchaVerifyResponse;

    if (!result.success) {
      throw new Error("reCAPTCHA verification failed. Please try again.");
    }

    return { success: true as const };
  });

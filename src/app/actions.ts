"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function saveContactMessage(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const contactsRef = ref(db, "contacts");
    const newContactRef = push(contactsRef);
    await set(newContactRef, {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return {
      message: "Thank you! Nandhini P. will reach out soon.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Firebase error:", error);
    return {
      message: "An error occurred while sending your message. Please try again.",
      success: false,
      errors: {},
    };
  }
}

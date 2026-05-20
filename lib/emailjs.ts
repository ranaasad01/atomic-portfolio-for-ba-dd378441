// EmailJS integration — replace with your actual Service ID, Template ID, and Public Key
// from https://www.emailjs.com/

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
}

// Mock implementation — replace with real EmailJS call in production
export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In production, replace this with:
  // import emailjs from '@emailjs/browser';
  // return emailjs.send(
  //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //   {
  //     from_name: data.name,
  //     from_email: data.email,
  //     subject: data.subject,
  //     message: data.message,
  //   },
  //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  // );

  // Mock success response
  console.log("Contact form submission:", data);
  return {
    success: true,
    message: "Message sent successfully! I'll get back to you within 24 hours.",
  };
}

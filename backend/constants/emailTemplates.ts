import config from "../config/index";


export const verificationEmailTemplate = (name: string, id: string): string => `
  <p>Dear ${name},</p>
  <p>Thank you for signing up to host your project on the Amplify Research Virtual Backroom platform. Please click the link below to verify your account information:</p>
  <p><a href="${config.frontend_base_url}/verify-account?id=${id}">Verify Your Account</a></p>
  <p>You will not be able to set up project details or conduct any sessions until this step is complete, so we encourage you to do this immediately upon receipt of this email.</p>
  <p>Thank you!</p>
  <p>The Amplify Team</p>
`;

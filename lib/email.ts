export const EMAIL_TO = process.env.EMAIL_TO || "sean@practices.fyi";

// Defaults to your requested domain; override via env for flexibility
const DEFAULT_FROM_ADDRESS = "no-reply@practices.fyi";
const DEFAULT_FROM_NAME = "Practices.fyi";

export const EMAIL_FROM_ADDRESS = process.env.EMAIL_FROM || DEFAULT_FROM_ADDRESS;
export const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME || DEFAULT_FROM_NAME;
export const EMAIL_FROM = `${EMAIL_FROM_NAME} <${EMAIL_FROM_ADDRESS}>`;

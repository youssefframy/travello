/**
 * An array of routes that are public
 * @type {string[]}
 */
export const publicRoutes = ["/", "/blogs", "/memberships", "/gallery"];

/**
 * An array of nested routes that are public
 * @type {string[]}
 */
export const publicNestedRoutes = ["/blogs"];

/**
 * An array of the query params that opens the authentication modals
 * @type {string}
 */
export const authRoutes = [
  "auth=login",
  "auth=signup",
  "auth=verify",
  "auth=login-with-otp",
];

/**
 * The prefix for the authentication API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

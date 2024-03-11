import axios from "axios";

const THREE_MINUTES = 3 * 60 * 1000;
export const baseURL = "http://localhost:8000";

/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
const PortfolioHttpClient = axios.create({
  baseURL,
  timeout: THREE_MINUTES,
});

/**
 * Pass Integito API Key in Header
 */

export { PortfolioHttpClient };

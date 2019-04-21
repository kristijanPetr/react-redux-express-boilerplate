const SERVER_BASE_URL = `http://localhost:${process.env.REACT_APP_SERVER_PORT ||
  5000}`;

const API_ENDPOINTS = {
  TEST_API: `${SERVER_BASE_URL}/api/test`
};

export default API_ENDPOINTS;

import axios from 'axios';

// Create an axios instance with custom configuration
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log(">> check inside response: >>", response);
    if (response && response.data.data) {
        return response.data;
    }
    // Do something with response data
    return response;
  }, function onRejected(error) {
    if(error.response && error.response.data) {
        return error.response.data;
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
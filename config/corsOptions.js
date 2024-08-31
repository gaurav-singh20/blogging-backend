// corsOptions.js

const corsOptions = {
    origin: "*", // Allow all origins
    credentials: true, // Allow cookies and other credentials in cross-origin requests
    optionsSuccessStatus: 200, // Ensure success status for preflight requests
};

module.exports = corsOptions;

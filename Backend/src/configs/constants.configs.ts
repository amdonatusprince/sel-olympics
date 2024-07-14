const PORT = process.env.PORT || 9871;
const basePath = "/api/v1"
const DATABASES = {
    PROFILE: "profile",
    POINTS: "point",
    CAMPAIGN: "campaign",
    PRODUCT: "product",
    TRANSACTION: "transaction"
};

const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:"
    },
    PROFILE: {
        CREATED: "Profile created successfully.",
        FETCHED: "Profile fetched successfully.",
        INVALID_ID: "UserId doesn't exist.",
        DUPLICATE_EMAIL: "Email already exist.",
        UPDATED: "Profile details updated successfully.",
        NOT_FOUND: "Profile not found."
    },
    UNEXPECTED_ERROR: "An unexpected error occured."
};

export {
    PORT,
    basePath,
    MESSAGES,
    DATABASES
};
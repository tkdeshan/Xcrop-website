module.exports = {
  statusCodes: {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    serverError: 500,
  },

  error: {
    connectionError: { code: 13000, message: "MongoDB connection error" },
    invalidEmailOrPassword: { code: 13001, message: "invalid Email or Password" },
    emailExists: { code: 13002, message: "Email is already exists" },
    counterCreatedFailed: { code: 13003, message: "Counter created failed" },
    counterNotFound: { code: 13004, message: "Counter not found" },
    internalServerError: { code: 13005, message: "Internal Server Error" },
    projectCreatedFailed: { code: 13006, message: "Project created failed" },
    projectNotFound: { code: 13007, message: "Project not found" },
    feedbackCreatedFailed: { code: 13008, message: "Feedback created failed" },
    feedbackNotFound: { code: 13009, message: "Feedback not found" },
  },

  success: {
    connectionSuccessful: { code: 14000, message: "Connected to MongoDB" },
    loggedInSuccess: { code: 14001, message: "Logged in Successfully" },
    userCreated: { code: 14002, message: "User created Successfully" },
    counterCreated: { code: 14003, message: "Counter created Successfully" },
    counterUpdated: { code: 14004, message: "Counter updated Successfully" },
    projectCreated: { code: 14005, message: "Project created Successfully" },
    projectDeleted: { code: 14006, message: "Project deleted Successfully" },
    feedbackCreated: { code: 14007, message: "Feedback created Successfully" },
    feedbackDeleted: { code: 14008, message: "Feedback deleted Successfully" },
  },
};

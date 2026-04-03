# Backend Project Structure

This document explains what each folder and file in `Backend/src` does.

## Root-level Files

- `src/server.js`: Entry point. Starts the app, connects database, and listens on configured port.
- `src/app.js`: Express app setup (security, CORS, logging, JSON parsing, routes, error handlers).

## `src/config`

- `config/env.js`: Loads and validates environment variables; exports runtime config values.
- `config/database.js`: Creates MongoDB connection using Mongoose.

## `src/constants`

- `constants/httpStatus.js`: Reusable HTTP status code constants.
- `constants/roles.js`: User role constants and role normalization helpers.

## `src/routes`

- `routes/index.js`: Main API router (`/health`, `/auth`, `/events`, `/registrations`).
- `routes/auth.routes.js`: Authentication and OTP endpoints.
- `routes/event.routes.js`: Event create/list/detail/update/delete and event-registration list routes.
- `routes/registration.routes.js`: Current-user registration routes.

## `src/controllers`

- `controllers/auth.controller.js`: Handles register/login/profile/OTP request-response flow.
- `controllers/event.controller.js`: Handles event API request-response flow.
- `controllers/registration.controller.js`: Handles registration API request-response flow.

## `src/services`

- `services/auth.service.js`: Auth business logic (register/login/JWT/OTP generation and verification).
- `services/email.service.js`: SMTP mail sender for OTP emails.
- `services/event.service.js`: Event business rules and orchestration.
- `services/registration.service.js`: Registration business rules and orchestration.

## `src/repositories`

- `repositories/user.repository.js`: User database operations.
- `repositories/event.repository.js`: Event database operations.
- `repositories/registration.repository.js`: Registration database operations.

## `src/models`

- `models/user.model.js`: User schema (identity, role, auth, OTP fields).
- `models/event.model.js`: Event schema (details, owner, schedule, capacity, status).
- `models/registration.model.js`: Registration schema mapping users to events.

## `src/middlewares`

- `middlewares/auth.middleware.js`: JWT authentication + role-based authorization checks.
- `middlewares/error.middleware.js`: Global error response formatter.
- `middlewares/notFound.middleware.js`: Handles unknown routes (`404`).
- `middlewares/validateObjectId.middleware.js`: Ensures URL params are valid Mongo ObjectIds.

## `src/validators`

- `validators/auth.validator.js`: Validates auth/OTP payloads.
- `validators/event.validator.js`: Validates event payloads and query inputs.

## `src/utils`

- `utils/appError.js`: Custom operational error class with status code support.
- `utils/asyncHandler.js`: Async route wrapper to forward errors to middleware.
- `utils/pagination.js`: Shared pagination helper utilities.

## `src/scripts`

- `scripts/migrate-user-roles.js`: One-time script for role migration/normalization in existing users.

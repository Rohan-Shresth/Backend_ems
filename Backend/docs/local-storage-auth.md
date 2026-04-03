# Frontend Local Storage Auth (JWT)

Use this when connecting your frontend to this backend and you want auth tokens saved in browser `localStorage`.

## Files

- Example helper: `docs/examples/auth-local-storage.js`

## What it does

- Saves token to `localStorage` after login
- Reads token for every API request
- Adds `Authorization: Bearer <token>` header automatically
- Clears token on logout

## Typical usage

```js
import {
  loginAndStoreToken,
  loadMyProfile,
  clearAuthToken
} from './auth-local-storage.js';

await loginAndStoreToken('user@example.com', 'password123');
const profile = await loadMyProfile();

// on logout
clearAuthToken();
```

## Important

- `localStorage` is a frontend/browser feature; it is not available in backend Node.js runtime.
- Keep HTTPS enabled in production to protect token transport.
- If you prefer higher security for auth tokens, use `httpOnly` cookies instead of `localStorage`.

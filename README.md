This project is distributed into two part, **Backend** and **Frontend**.
| Repo | URL 
|---------------|--------------------
| Frontend - Next.js (ReactJS)| https://github.com/aryabhthakur/mysite-frontend
| Backend - FastAPI (Python) | https://github.com/aryabhthakur/mysite-backend

You are currently in **Backend** Repo developed in ReactJS using Next.js Framework. 

## Getting Started
Before you start, make changes to your **env file.** Add your fastapi server url, you can get fastapi server from above url.
```
NEXT_PUBLIC_BACKEND_URL  = your-fastapi-server
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Here's folder structure :
|Folder / File | Description  |
|--|--|
| Components/* | Contains all react components & layouts 
| lib/* | Contains some small but commonly used functions as libs
| hooks/* | Contains Auth, Formsubmit & getdata like custom hooks
| pages/* | Contains pages, **Note:** Some of pages are under-development like user pages such as verify-email, reset-pass,register and so on. These will be functional from next update.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

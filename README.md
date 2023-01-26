# Groceries.app


## Requirements

The requirements for this project can be found [Here](https://netorgft8053317-my.sharepoint.com/:w:/g/personal/wahid_khan_mysocialpulse_com/EQccgADN3l5Dn-y-JFDKHc4B012yqC0k3HK-XGpcgbjRyQ?rtime=Qa2Gtgj92kg)

## Requirements Checklist

- [x] User authentication using Auth0.
- [x] User can create notes (preferably in markdown or Rich Text format) and name them.
- [x] User can search for notes by names or tags.
- [x] Show the creation time and last modified time.
- [ ] Bonus points if you can show edit history.
- [x] Also please use the best practices you know, to ensure project quality. The application should be reasonably efficient and tested.


## Getting Started

1. First, Configure your [**Auth0**](https://auth0.com/docs/quickstart/webapp/nextjs/01-login#get-your-application-keys) Environment Variables:

    - Create a new file named `.env` in the root directory
    - Copy the contents of the `.env.example` file into the `.env` file. Configure your [variables]((https://auth0.com/docs/quickstart/webapp/nextjs/01-login#get-your-application-keys)) accordingly.

2. Make sure you have [**NodeJS**](https://auth0.com/docs/quickstart/webapp/nextjs/01-login#get-your-application-keys) installed. Then install the necessary packages.

    ```bash
    npm install
    ```

3. Finally run the app

    ```bash
    npm run dev
    ```


   And open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stacks, Frameworks and Libraries

- The new NextJS 13 with AppDir Enabled
- React-Bootstrap for frontend
- Auth0 for authentication
- ESLint for linting
- TypeScript Language for Type Safety
- react-markdown for rendering markdown
- react-select for Dropdown/Select
- uuid for making unique identifier for notes
- Prisma as ORM
- PostgreSQL as Database

# SaaS Web App Starter

This simple starter app is designed for building SaaS web applications using NextJS's NextAuth (now AuthJS) and AWS DynamoDB. Our goal is to provide a foundational structure for SaaS projects.

### Features

- Passwordless authentication using email.
- Passwordless authentication using Google and GitHub.

### Currently Working On

- [ ] Adding a dashboard.
- [ ] Implementing teams/tenant isolation.
- [ ] Integrating Role-Based Access Control.

We are still working on the app. **More features coming soon.**

### Run the App in Development Mode

Install dependencies:

```bash
npm i // npm
yarn // yarn
pnpm i // pnpm
```

At the root of the project, create a file named `.env` and add the following variables:

```bash
# ---------- Google Auth ----------

GOOGLE_CLIENT_ID="" # Google auth client id
GOOGLE_CLIENT_SECRET="" # Google auth client secret

# ---------- Github Auth ----------

GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# ---------- Email ----------
# I am using SendGrid to send emails. You can use any other email provider.
SMTP_USER="apikey"
SMTP_PASSWORD=""
SMTP_HOST=""
SMTP_PORT=587
EMAIL_FROM=""

# ---------- AWS DynamoDB ----------
# You can use any other database. Follow the Next-auth documentation to set up the database.
AWS_DYNAMODB_KEY=""
AWS_DYNAMODB_SECRET=""
AWS_DYNAMODB_REGION=""
AWS_DYNAMODB_TABLE_NAME=""
```

This app is built using [Next-auth](https://next-auth.js.org/), which has been rebranded as [AuthJS](https://authjs.dev/).

For email authentication to work, you need to set up an email provider. You can choose any provider you prefer. Find more details [here](https://authjs.dev/getting-started/providers/email-tutorial). In this case, I'm using [SendGrid](https://app.sendgrid.com/).

To store user data, I'm utilizing [AWS DynamoDB](https://aws.amazon.com/dynamodb/). If you prefer a different database, follow the [Next-auth documentation](https://authjs.dev/getting-started/adapters).

I've set up Google and GitHub as auth providers. Create clients in Google and GitHub to obtain credentials. You can add more providers in the `app/api/auth/_common/authOptions.ts` file. Find more details about adding auth providers [here](https://authjs.dev/getting-started/providers).

Once everything is set up, run the app:

```bash
npm run dev // npm
yarn dev // yarn
pnpm dev // pnpm
```

The simplest way to deploy the production version is to use [Vercel](https://vercel.com/).

If you want to self-host the app, follow the instructions [here](https://nextjs.org/docs/pages/building-your-application/deploying).

Note: We are concurrently working on a UI library built on top of [Tailwind CSS](https://tailwindcss.com/), which is also utilized in this project. You can find the repository [here](https://github.com/metalnethq/baremetal-ui).

<span
style="color: red; font-weight: bold; font-size: 1.5rem;"> Warning: Both repositories are works in progress. Many aspects are still under development and subject to change. Therefore, use them at your own risk.<span>

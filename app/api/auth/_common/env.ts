const env = {
  AWS_DYNAMODB_KEY: process.env.AWS_DYNAMODB_KEY,
  AWS_DYNAMODB_SECRET: process.env.AWS_DYNAMODB_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  SECRET: process.env.SECRET,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: Number(process.env.SMTP_PORT),
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,
  AWS_DYNAMODB_TABLE_NAME: process.env.AWS_DYNAMODB_TABLE_NAME,
  AWS_DYNAMODB_REGION: process.env.AWS_DYNAMODB_REGION,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
};

Object.entries(env).forEach(([key, value]) => {
  if (!value) throw new Error(`${key} env var not found`);
});

export default env;

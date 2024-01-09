"use client";
import { Button, Form, Input, InputError, Alert } from "@metalnethq/baremetal-ui";
import { signIn } from "next-auth/react";
import { useState } from "react";
import z, { ZodError } from "zod";
import { errors } from "../../_common/consts";

const { invalid_type_error, required_error, sending_failed } =
  errors.auth.email;
const schema = z.string({ invalid_type_error, required_error }).email();

function EmailLink() {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [networkErrors, setNetworkErrors] = useState({
    status: false,
    error: "",
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [emailSent, setEmailSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      try {
        const validatedEmail = schema.parse(e.currentTarget.email.value);
        setSendingEmail(true);
        await signIn("email", {
          email: validatedEmail,
          redirect: false,
        });

        setSendingEmail(false);
        setEmailSent(true);
      } catch (error: unknown) {
        if (error instanceof ZodError) {
          setValidationErrors(error.issues.map((issue) => issue.message));
        }
      }
    } catch (error) {
      setNetworkErrors({
        status: true,
        error: sending_failed,
      });
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        {networkErrors.status && (
          <InputError className="mb-3">{networkErrors.error}</InputError>
        )}
      </div>
      {!emailSent && (
        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            error={validationErrors}
            placeholder="Email"
            label=""
          />

          <Button
            fullWidth
            type="submit"
            className="mt-3"
            selfAlign="end"
            size="lg"
            loading={sendingEmail}
          >
            Send me a login link
          </Button>
        </Form>
      )}
      {emailSent && (
        <Alert intent="success">
          Email sent!
        </Alert>
      )}
    </div>
  );
}

export default EmailLink;

"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/lib/actions/auth";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="btn-submit" type="submit" disabled={pending}>
      {pending ? "Checking…" : "Sign in"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <div className="form-card">
      <form className="form" action={formAction}>
        <div className="f-field full">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="username" required />
        </div>
        <div className="f-field full">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        {state.error ? (
          <p className="form-error" role="alert">
            {state.error}
          </p>
        ) : null}
        <div className="form-actions">
          <Submit />
        </div>
      </form>
    </div>
  );
}

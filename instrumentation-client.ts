import posthog from "posthog-js";

if (process.env.VERCEL_ENV === "production") {
  let consecutiveFailures = 0;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2025-05-24",
    loaded: (posthog) => {
        // posthog.debug();

      if (posthog.get_distinct_id?.() === "anonymous-id") {
        posthog.reset();
      }

      posthog.register({
        repository: "bauscribe",
        app_name: "BauScribe",
      });
    },
    autocapture: true,
    rageclick: true,
    person_profiles: "always",
    persistence: "localStorage+cookie",
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: {
        password: true,
      },
    },
    capture_exceptions: true,
    on_request_error(error) {
      if (!error) {
        consecutiveFailures = 0;
        return;
      }

      console.warn("PostHog request failed:", error);

      consecutiveFailures++;

      if (consecutiveFailures > 5) {
        console.error(
          "PostHog: Too many consecutive failures, disabling capture",
        );
        posthog.opt_out_capturing();
      }
    },
  });
}

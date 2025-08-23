// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://99db3c097ac6d6e7fa1bb851da666d58@o4509812406550528.ingest.us.sentry.io/4509812413693952",

  integrations:[
    Sentry.mongooseIntegration()
  ],
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

// Sentry.profiler.startProfiler();

// Sentry.startSpan({
//   name: "My First Transaction"
// },()=>{

// })
// Sentry.profiler.stopProfiler()
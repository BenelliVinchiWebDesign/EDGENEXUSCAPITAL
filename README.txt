EDGE NEXUS CAPITAL — GitHub Pages frontend package (31 October 2026)

This folder contains the public static website (HTML, CSS, JavaScript, images and a PDF).
It does NOT include the Node.js backend or private environment variables.

DEPLOYMENT
1. Upload the CONTENTS of this folder to the ROOT of the GitHub repository used for GitHub Pages (or configure Pages to publish from the correct folder).
2. Deploy the Node.js backend separately to an HTTPS-capable host. Configure its private environment variables in the hosting dashboard, not in GitHub.
3. Edit backend-config.js: set window.EDGE_API_BASE to the deployed HTTPS API origin (no trailing slash). This file is public: never put secrets in it.
4. Configure backend CORS to allow the actual GitHub Pages/custom domain origin.
5. Test investment and contact enquiries, CRM, MFA and responsive pages on the live domain.

NOTES
- Enquiry forms have been confirmed working in local/LAN testing, but cannot submit on GitHub Pages until the backend is hosted and backend-config.js is configured.
- analytics.js is disabled by default pending production/privacy configuration; enabling it requires a working /api/analytics/page-view endpoint and an appropriate privacy/consent assessment.
- Language selection may rely on external machine translation.
- Confirm all financial, regulatory and legal statements with the client's compliance advisers before publishing.
- Keep your original local project unchanged; this package is a separate deployment copy.

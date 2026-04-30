# Insighta Web Portal

A secure, professional web portal for **Insighta Labs+** — an intelligent profile intelligence platform designed for authorized team members to access, analyze, and manage profile data with ease.

## 🎯 Overview

The Insighta Web Portal is a modern, responsive web application built with vanilla JavaScript and Tailwind CSS. It provides authenticated users with tools to view dashboards, manage profiles, and configure account settings. Authentication is handled securely through GitHub OAuth integration.

### Key Features

- 🔐 **Secure GitHub OAuth Authentication** — Team members authenticate using their GitHub identity with HTTP-only cookies
- 📊 **Interactive Dashboard** — Real-time data visualization and analytics
- 👥 **Profile Management** — Create, view, and manage user profiles
- ⚙️ **Account Settings** — Configure personal preferences and security settings
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** — Clean, professional interface built with Tailwind CSS

## 📁 Project Structure

```
insighta_web_portal/
├── index.html           # Login page (GitHub OAuth entry point)
├── dashboard.html       # Main dashboard with analytics
├── profiles.html        # Profile management interface
├── account.html         # Account settings and preferences
├── README.md            # This file
├── leapcell.yaml        # Deployment configuration
└── js/
    ├── api.js           # API client and fetch utilities
    └── auth.js          # Authentication logic and session management
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js/npm (optional, for local development server)
- Access to the Insighta backend API
- GitHub OAuth credentials configured

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/feomzie/insighta_web_portal.git
   cd insighta_web_portal
   ```

2. **Start a local development server** (optional)
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Or using Node.js (http-server)
   npm install -g http-server
   http-server
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8080` (or your server port)

### Configuration

Update the API endpoint in `js/api.js` if deploying to a different environment:

```javascript
const API_BASE_URL = "https://insightaiq-feomzie228-b8bfdn1b.leapcell.dev"
```

## 🔑 Authentication

The portal uses GitHub OAuth for secure authentication:

1. Users click "Login with GitHub" on the login page
2. Request is sent to the backend at `/auth/github`
3. GitHub redirects user back with auth token
4. Auth token is stored in HTTP-only cookies (secure cross-domain)
5. User is redirected to the dashboard

**Note:** Internal team access only — authorized personnel are tracked via GitHub identity.

## 📝 Pages

| Page | Purpose |
|------|---------|
| **index.html** | GitHub OAuth login portal |
| **dashboard.html** | Main analytics and insights dashboard |
| **profiles.html** | User profile management interface |
| **account.html** | Personal account settings and configuration |

## 🔌 API Integration

The portal communicates with the backend API through standardized fetch requests. Key endpoints:

- `GET /auth/github` — Initiate GitHub OAuth flow
- API requests include version header: `X-API-Version: 1`
- Sessions managed via HTTP-only cookies
- Automatic redirect to login on 401 Unauthorized

See `js/api.js` for the API client implementation.

## 🎨 Styling

The project uses **Tailwind CSS** for rapid, utility-first styling:

- Loaded from CDN: `https://cdn.tailwindcss.com`
- Responsive breakpoints for mobile-first design
- Custom color scheme with blue accents

To customize colors or styling, modify the Tailwind configuration or add custom CSS.

## 🌐 Deployment

### Leapcell Deployment

The project is configured for deployment on Leapcell using `leapcell.yaml`:

```yaml
name: insighta-web-portal
type: static
static:
  dir: .
```

To deploy:
```bash
# Install Leapcell CLI
npm install -g @leapcell/cli

# Deploy
leapcell deploy
```

### Alternative Hosting

Can also be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file hosting service

## 🛡️ Security Considerations

- Authentication tokens stored in **HTTP-only cookies** (prevents XSS attacks)
- Credentials included in cross-domain requests with `credentials: "include"`
- Automatic logout on 401 responses
- GitHub OAuth ensures secure identity verification
- Internal team access only

## 📦 Dependencies

- **Tailwind CSS** — UI styling framework (CDN)
- **GitHub OAuth** — Authentication provider
- **Backend API** — Data and session management

No npm packages required for the frontend — pure vanilla JavaScript!

## 🔧 Development

### Adding a New Page

1. Create `newpage.html` with the same structure as existing pages
2. Import necessary scripts: `<script src="js/auth.js"></script>` and `<script src="js/api.js"></script>`
3. Add navigation links to other pages
4. Implement page-specific logic in JavaScript

### Debugging

- Check browser console for fetch errors and API responses
- Verify API_BASE_URL in `js/api.js` matches your backend
- Ensure GitHub OAuth credentials are correctly configured
- Check Network tab in DevTools for request/response details

## 📞 Support

For issues or questions:
- Check the browser console for error messages
- Verify backend API is running and accessible
- Ensure GitHub OAuth is properly configured
- Review API response status codes

## 👥 Contributors

Built by Ifeoma
---

**Last Updated:** April 2026
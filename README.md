# Éramos Um - School Website

A modern, multilingual school website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multilingual Support**: Portuguese and English
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean, professional design
- **Online Applications**: Complete admission form system
- **School Management**: Information about programs, activities, and services

## 🔧 Environment Setup

### Required Environment Variables

This project requires certain environment variables to function properly. Follow these steps:

1. **Copy the example file:**
   ```bash
   cp env.example .env
   ```

2. **Configure Email Service (N8N Webhook):**
   Edit the `.env` file and add your N8N webhook configuration:
   ```env
   VITE_N8N_WEBHOOK_URL=your_n8n_webhook_url
   VITE_N8N_API_KEY=your_n8n_api_key
   ```

3. **School Contact Information:**
   ```env
   VITE_SCHOOL_EMAIL=contact@eramosum.edu.pt
   VITE_SCHOOL_PHONE=+351-xxx-xxx-xxx
   VITE_ADMISSIONS_EMAIL=admissions@eramosum.edu.pt
   ```

### 🔐 Security Notes

- **Never commit** your actual `.env` file to version control
- Environment variables in Vite are **exposed to the client** - avoid putting truly sensitive data here
- For production, use your hosting platform's environment variable system (Vercel, Netlify, etc.)

### 📧 N8N Webhook Setup

This project uses N8N workflows for email sending:

1. Set up an N8N instance or use a hosted service
2. Create a webhook workflow for email processing
3. Configure your webhook URL and API key
4. Add the credentials to your `.env` file

**Email Flow:**
- Frontend sends form data to N8N webhook
- N8N processes the data and sends emails
- Supports attachments and retry logic

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd eramos-um-website-portal

# Install dependencies
npm install

# Set up environment variables
cp env.example .env
# Edit .env with your actual values

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📱 Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **N8N Webhooks** - Email service integration

## 🌍 Internationalization

The site supports Portuguese (default) and English. Translation files are located in:
- `src/translations/pt.json`
- `src/translations/en.json`

## 📄 License

Private educational project.

## Project info

**URL**: https://lovable.dev/projects/17a8a276-a4f9-4236-abec-c66c9cc4a6aa

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/17a8a276-a4f9-4236-abec-c66c9cc4a6aa) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/17a8a276-a4f9-4236-abec-c66c9cc4a6aa) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

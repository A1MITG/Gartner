# Quick Start Guide

## 🚀 Your Gartner-Style Market Analysis Agent is Ready!

The application is currently running at: **http://localhost:3000**

## ⚡ Next Steps

### 1. Configure Your GROK API Key

**IMPORTANT**: Before using the application, you need to add your GROK API key:

1. Open the file `.env.local` in the root directory
2. Replace `your_grok_api_key_here` with your actual GROK API key from [x.ai](https://x.ai)
3. Save the file
4. The server will automatically restart

### 2. Use the Application

1. Enter a market topic (e.g., "AI-powered cybersecurity", "Cloud computing", "Electric vehicles")
2. Click "Generate Gartner-Style Report"
3. Wait for the AI analysis
4. Review the structured report with:
   - Market Overview
   - Key Players
   - Forecasts
   - Opportunities & Risks
   - Strategic Insights

## 🐳 Docker Deployment

To run in a containerized environment:

1. Stop the current dev server (Ctrl+C in terminal)
2. Create a `.env` file with your GROK_API_KEY
3. Run: `docker-compose up -d`
4. Access at http://localhost:3000

## 📋 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint

# Docker commands
docker-compose up -d          # Start container
docker-compose down           # Stop container
docker-compose logs -f        # View logs
```

## 🔧 Troubleshooting

### API Key Not Working
- Verify your GROK API key is correct in `.env.local`
- Check you have credits in your x.ai account
- Restart the dev server after changing the key

### Port Already in Use
- Stop any other applications using port 3000
- Or change the port: `npm run dev -- -p 3001`

### Build Errors
- Delete `.next` folder: `Remove-Item -Recurse -Force .next`
- Reinstall dependencies: `Remove-Item -Recurse -Force node_modules; npm install`

## 📚 Documentation

See `README.md` for complete documentation including:
- Detailed setup instructions
- API documentation
- Docker deployment guide
- Project structure
- Technology stack

---

**Enjoy generating professional market analysis reports! 📊**

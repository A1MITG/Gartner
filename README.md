# Market Analysis Agent

A powerful web application that leverages the OpenAI API to generate comprehensive market analysis reports. Built with Next.js, TypeScript, and Tailwind CSS, this tool provides expert-level market research, competitive intelligence, and strategic forecasting.

## Features

- **Professional Framework**: Follows a proven 5-part structure for comprehensive market analysis
  1. Market Overview
  2. Key Players
  3. Forecast (1-3 years)
  4. Opportunities & Risks
  5. Strategic Insights

- **OpenAI Integration**: Powered by OpenAI's GPT-4o model for accurate and analytical insights
- **Modern UI/UX**: Beautiful, responsive interface with dark mode support
- **Markdown Rendering**: Supports tables, charts, and structured formatting
- **Docker Ready**: Fully containerized for easy deployment on any PC
- **TypeScript**: Type-safe development with full IntelliSense support

## Prerequisites

- Node.js 18+ or Docker
- OpenAI API key from [platform.openai.com](https://platform.openai.com)

## Getting Started

### Option 1: Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_URL=https://api.openai.com/v1/chat/completions
   OPENAI_API_KEY=your_actual_openai_api_key_here
   OPENAI_MODEL=gpt-4o
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Option 2: Docker Deployment (Recommended for PC)

1. **Create environment file**
   
   Create a `.env` file with your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_actual_openai_api_key_here
   OPENAI_MODEL=gpt-4o
   ```

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000)

4. **View logs** (optional)
   ```bash
   docker-compose logs -f
   ```

5. **Stop the container**
   ```bash
   docker-compose down
   ```

### Option 3: Manual Docker Build

1. **Build the Docker image**
   ```bash
   docker build -t market-agent .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 3000:3000 \
     -e OPENAI_API_KEY=your_actual_openai_api_key_here \
     -e OPENAI_MODEL=gpt-4o \
     --name market-agent \
     market-agent
   ```

## Usage

1. Enter a market topic or industry in the input field (e.g., "AI-powered cybersecurity tools", "Electric vehicle batteries", "Cloud storage solutions")

2. Click "Generate Market Report"

3. Wait for the AI to analyze and generate a comprehensive report

4. Review the structured output with:
   - Market overview and trends
   - Key player analysis
   - 1-3 year forecasts
   - Risk assessments
   - Strategic recommendations

## Project Structure

```
market-agent/
├── src/
│   └── app/
│       ├── api/
│       │   └── analyze/
│       │       └── route.ts        # OpenAI API integration
│       ├── globals.css             # Global styles
│       ├── layout.tsx              # Root layout
│       └── page.tsx                # Main UI component
├── public/                         # Static assets
├── Dockerfile                      # Docker configuration
├── docker-compose.yml              # Docker Compose setup
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## API Endpoint

### POST `/api/analyze`

Generates a comprehensive market analysis report.

**Request Body:**
```json
{
  "topic": "Your market topic or industry"
}
```

**Response:**
```json
{
  "result": "Markdown-formatted market analysis report"
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------||
| `OPENAI_API_URL` | OpenAI API endpoint | `https://api.openai.com/v1/chat/completions` |
| `OPENAI_API_KEY` | Your OpenAI API key | Required |
| `OPENAI_MODEL` | OpenAI model to use | `gpt-4o` |
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `3000` |

## Building for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

## Troubleshooting

### API Key Issues
- Ensure your `.env.local` (development) or `.env` (Docker) file contains a valid OpenAI API key
- Verify the API key has proper permissions and credits

### Docker Issues
- Make sure Docker Desktop is running
- Check if port 3000 is available: `netstat -ano | findstr :3000`
- View container logs: `docker-compose logs -f`

### Build Errors
- Clear the `.next` folder: `Remove-Item -Recurse -Force .next`
- Delete `node_modules` and reinstall: `Remove-Item -Recurse -Force node_modules; npm install`

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Model**: OpenAI GPT-4o
- **Markdown**: react-markdown
- **Containerization**: Docker

## License

This project is provided as-is for market analysis purposes.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Docker logs if using containers
3. Verify OpenAI API key configuration

---

**Built with ❤️ using OpenAI API for professional market analysis**

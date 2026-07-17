import { NextRequest, NextResponse } from 'next/server';

// Replace with your actual GROK API endpoint and key
default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const { topic } = await req.json();
  if (!topic) {
    return NextResponse.json({ error: 'Missing topic' }, { status: 400 });
  }

  // Gartner-style prompt
  const prompt = `You are a world-class industry analyst with expertise in market research, competitive intelligence, and strategic forecasting.\n\nYour goal is to simulate a Gartner-style report using public data, historical trends, and logical estimation.\n\nFor each request:\n• Generate clear, structured insights based on known market signals.\n• Build data-backed forecasts using assumptions (state them).\n• Identify top vendors and categorize them by niche, scale, or innovation.\n• Highlight risks, emerging players, and future trends.\n\nBe analytical, not vague. Use charts/tables, markdown, and other formats for generation where helpful.\n\nBe explicit about what’s estimated vs known.\n\nUse this structure:\n1. Market Overview\n2. Key Players\n3. Forecast (1–3 years)\n4. Opportunities & Risks\n5. Strategic Insights\n\nTopic: ${topic}`;

  // Call GROK API (replace with actual API call)
  const grokApiUrl = process.env.GROK_API_URL;
  const grokApiKey = process.env.GROK_API_KEY;

  const response = await fetch(grokApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${grokApiKey}`,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'GROK API error' }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json({ result: data.result });
}

export { handler as POST };
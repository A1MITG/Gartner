import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();
    
    if (!topic) {
      return NextResponse.json({ error: 'Missing topic' }, { status: 400 });
    }

    // Gartner-style prompt
    const systemPrompt = `You are a world-class industry analyst with expertise in market research, competitive intelligence, and strategic forecasting.

Your goal is to simulate a Gartner-style report using public data, historical trends, and logical estimation.

For each request:
• Generate clear, structured insights based on known market signals.
• Build data-backed forecasts using assumptions (state them).
• Identify top vendors and categorize them by niche, scale, or innovation.
• Highlight risks, emerging players, and future trends.

Be analytical, not vague. Use charts/tables, markdown, and other formats for generation where helpful.

Be explicit about what's estimated vs known.

Use this structure:
1. Market Overview
2. Key Players
3. Forecast (1–3 years)
4. Opportunities & Risks
5. Strategic Insights`;

    const openaiApiUrl = process.env.OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const openaiModel = process.env.OPENAI_MODEL || 'gpt-4o';

    if (!openaiApiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const response = await fetch(openaiApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Generate a Gartner-style market analysis report for: ${topic}` }
        ],
        model: openaiModel,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json({ error: 'OpenAI API error', details: errorData }, { status: 500 });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || 'No response generated';
    
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error in GROK API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

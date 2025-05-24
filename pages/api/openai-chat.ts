import type { NextApiRequest, NextApiResponse } from 'next';
import { rules } from '../../lib/prompts/systemPrompt';
import { seikotsuExamples } from '../../lib/prompts/examples_seikotsu_acupuncture';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log('--- /api/openai-chat 受信 ---');
  const apiKey = process.env.OPENAI_API_KEY;
  const { query } = req.body;

  console.log('[ENV OPENAI_API_KEY]', process.env.OPENAI_API_KEY);
  console.log('[RECV BODY]', req.body);

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    console.log('[apiKey]', apiKey);
    const systemPrompt = `${rules}\n\n【整骨・鍼灸の回答例】\n${seikotsuExamples}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ]
      })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error('[OpenAIエラー]', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 
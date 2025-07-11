import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'sanritto0407@gmail.com';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: '必須項目が不足しています' });
      }

      const { data, error } = await resend.emails.send({
        from: 'SunlitWest Contact Form <info@send.sunlit.fit>',
        to: [toEmail],
        subject: `【HP問い合わせ】${subject}`,
        replyTo: email,
        html: `
          <h1>ホームページからの新しいお問い合わせ</h1>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
          <hr>
          <h2>お問い合わせ内容</h2>
          <p><strong>件名:</strong> ${subject}</p>
          <p><strong>内容:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return res.status(500).json({ error: 'メールの送信に失敗しました。' });
      }

      res.status(200).json({ message: 'メールは正常に送信されました。' });
    } catch (error) {
      console.error('Server Error:', error);
      res.status(500).json({ error: 'サーバーで予期せぬエラーが発生しました。' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

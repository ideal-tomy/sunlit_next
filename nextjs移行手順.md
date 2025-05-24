# Next.js移行＆デプロイ完全手順書（Vite＋React＋Express → Next.js）

## 🚩 安定バージョンの徹底使用について

- **必ず下記の安定バージョンを使用してください。**
- バージョン違いによる不具合・挙動差異を防ぐため、**プロジェクト全体で統一**してください。
- バージョン指定のないツールやパッケージは、公式のLTS（Long Term Support）または安定版を選択してください。

### 推奨バージョン一覧

| ツール         | 推奨バージョン例         | バージョン確認コマンド         |
|----------------|--------------------------|-------------------------------|
| Node.js        | 18.x.x または 20.x.x（LTS） | `node -v`                     |
| npm            | 9.x.x 以上                | `npm -v`                      |
| Next.js        | 14.x.x 以上（公式安定版）  | `npm list next`               |
| React          | 18.x.x 以上                | `npm list react`              |
| Tailwind CSS   | 3.x.x 以上                 | `npm list tailwindcss`        |
| OpenAI API     | v1エンドポイント           | -                             |

#### 例：Node.jsのバージョン確認・インストール

```bash
node -v
# v18.19.0 などが表示されればOK
```

- Node.jsのインストールは [公式サイト](https://nodejs.org/ja/) からLTS版を選択
- nvm（Node Version Manager）を使う場合：
  ```bash
  nvm install 18
  nvm use 18
  ```

#### 例：Next.jsのバージョン指定インストール

```bash
npx create-next-app@14 sunlit-next --ts --tailwind
```

#### 例：Tailwind CSSのバージョン指定インストール

```bash
npm install tailwindcss@3 postcss autoprefixer
```

---

## 🧭 この手順書の目的

* 現在の Vite + React + Express 構成のWebサイトを、Next.jsへ移行し、Vercelにて正常稼働させること
* チャットボット（OpenAI API）のAPI接続部分を Next.js のAPI Routesに置き換えること
* サイトの見た目や挙動は変更せず、構造と内部処理のみ最適化すること
* ⚠️ **UIに関しては一切勝手に変更を加えないこと（指示なしの文言変更・スタイル変更などもNG）**

---

## ✅ 1. Next.js新規プロジェクト作成

```bash
npx create-next-app@latest sunlit-next --ts --tailwind
cd sunlit-next
```

---

## ✅ 2. 既存のReactコンポーネント・ページを移植

* `src/components/` → `sunlit-next/components/`
* `src/pages/Contact.tsx` → `sunlit-next/pages/contact.tsx`
* 他のページも同様に `pages/` 配下へ移動
* （ファイル名は小文字推奨（Next.jsのルール））

### ファイル・フォルダ対応表

| 元（Vite）                | 移動先（Next.js）            | 備考                                    |
|---------------------------|-----------------------------|----------------------------------------|
| src/pages/Contact.tsx     | pages/contact.tsx           | ファイル名は小文字に                    |
| public/images/～          | public/images/～            | 画像系そのままOK                        |
| styles/globals.css        | styles/globals.css          | Tailwindスタイルも                      |
| .env（←中身のみ）         | .env.local                  | キー貼り直し注意                        |
| openai-chat.ts            | pages/api/openai-chat.ts    | Expressの中身流用                       |

---

## ✅ 3. 画像・アセット・CSSの移植

* `public/` フォルダの画像やアセット → `sunlit-next/public/`
* TailwindやグローバルCSS → `sunlit-next/styles/globals.css` などにコピペ
* `tailwind.config.js` や `postcss.config.js` もプロジェクトルートにコピー

---

## ✅ 4. Express APIロジックをNext.js API Routeに移植

* 例：`pages/api/openai-chat.ts` に作成

```ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const apiKey = process.env.OPENAI_API_KEY;
  const { query, conversation_id } = req.body;

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
        user: 'sunlit-site',
      }),
    });

    const data = await openaiRes.json();
    res.status(openaiRes.status).json(data);
  } catch (err) {
    console.error('[OpenAI API Error]', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```

---

## ✅ 5. フロントエンドのAPI呼び出し先を修正

* fetch先を `/api/openai-chat` に変更（Vite時代のproxy設定は不要）

---

## ✅ 6. 環境変数の設定

* プロジェクトルートに `.env.local` を作成し、以下を記載：

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx
```

* Vercelの「Environment Variables」にも `OPENAI_API_KEY` を追加

---

## ✅ 7. 動作確認

```bash
npm run dev
```

* `http://localhost:3000` で見た目・機能が変わらず動くか確認

---

## ✅ 8. デプロイ（Vercel推奨）

* Vercel公式サイトでGitHubリポジトリを連携
* 「New Project」→リポジトリ選択→「Import」
* 環境変数（OPENAI\_API\_KEY）を追加
* デプロイボタンを押すだけで完了！

---

## 🚩 注意点まとめ

* UI/UX・テキスト・スタイルの見た目は一切変更しないこと
* ファイル名・ディレクトリ名はNext.jsのルールに合わせる（pages, components, public, styles）
* API Routeは `pages/api/` 配下に置く（Expressは不要）
* Vite特有の設定ファイル（vite.config.ts, server.cjs など）は削除OK
* 環境変数は `.env.local` と Vercel側の両方で設定
* 画像やCSSは `public/` や `styles/` に置くだけで自動適用される
* TailwindやPostCSSの設定はNext.jsでもそのまま使用可

---

## 📁 最終フォルダ構成イメージ

```
sunlit-next/
├── pages/
│   ├── index.tsx
│   ├── contact.tsx
│   └── api/
│       └── openai-chat.ts
├── public/
│   └── images/
│       └── botimage.png
├── components/
├── styles/
│   └── globals.css
├── .env.local
├── tailwind.config.js
├── next.config.js
```

---

## ✅ 完了チェックリスト（納品前の最終確認）

* [ ] Next.js新規プロジェクトの作成完了
* [ ] Reactコンポーネント・ページの移植完了
* [ ] public/images と styles/globals.css の移植完了
* [ ] API Route（openai-chat.ts）動作確認済
* [ ] fetch先が `/api/openai-chat` に変更されている
* [ ] `.env.local` 反映・OpenAI応答確認済
* [ ] Vercelへデプロイ完了・問い合わせ機能動作確認済

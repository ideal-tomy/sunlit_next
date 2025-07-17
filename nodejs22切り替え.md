# Node.js バージョンアップ対応作業指示書（Vercel）

## 🎯 目的
Vercel が Node.js 18 のサポートを終了するため、対象アプリを Node.js 22 にアップグレードし、今後のセキュリティアップデートと正常な動作を確保する。

- **公式案内:** [Node.js 18 is being deprecated – Vercel](https://vercel.com/changelog/node-js-18-is-being-deprecated)
- **対応方法:** [Vercel Docs - Node.js Versions](https://vercel.com/docs/projects/project-configuration#node.js-version)

---

## ✅ 対応手順チェックリスト

1.  **`package.json` の `engines` を編集**
    ```json
    "engines": {
      "node": "22.x"
    }
    ```

2.  **Vercel プロジェクト設定を確認・変更**
    -   該当プロジェクトを開く
    -   `Settings` → `General` → `Node.js Version` を `22` に変更

3.  **必要に応じて、CLI で対象プロジェクトを洗い出し（チームアカウント使用時）**
    ```bash
    npm i -g vercel@latest
    vercel project ls --update-required --scope <YOUR_TEAM_SLUG>
    ```

4.  **依存パッケージのバージョン確認・アップデート**
    以下のパッケージを中心に、Node.js 22 対応バージョンへ更新：
    -   `next`
    -   `tailwindcss`
    -   `prisma`
    -   `shadcn/ui`
    -   その他 `node-fetch`, `dotenv`, `eslint` など

5.  **新しいデプロイメントを作成（更新反映のため）**
    ```bash
    vercel --prod
    ```

---

## ⚠️ 注意点
-   バージョンアップに伴い、ビルドエラーや動作不良が発生する可能性があるため、本番環境に影響が出ないよう、ステージング環境で事前確認を行うこと。
-   `engines.node` は省略してもVercelの設定が優先されるが、明示的に書いておくとGitHubなど外部CI/CDでも有効。

---

## 🗂 対象プロジェクト一覧（例）

| プロジェクト名 | 現状Nodeバージョン | 対応ステータス | 備考 |
| :--- | :--- | :--- | :--- |
| サンリットウェスト | 18.x | ⬜ 未対応 | 本番運用中。優先度高。 |
| その他のプロジェクトA | 18.x | ⬜ 未対応 | |
| その他のプロジェクトB | 20.x | ✅ 対応済 | Node 20 もLTS対象。 |

*必要に応じてこのテンプレを Notion や GitHub の issue に貼り付けて、対応を割り振ってください。*
*別のフォーマットやチーム共有用にもカスタマイズできますので、必要なら言ってください。*

---
---

### あなた:
ブランチきって実行していってデプロイできたらマージって感じかな

### ChatGPT:
はい、それがベストプラクティスです！以下のような流れで進めるのが安全かつスムーズです：

## 🚀 Node.js 22 アップグレード作業フロー（ブランチ戦略）

1.  **🔧 ブランチ作成（例: `chore/upgrade-node22`）**
    ```bash
    git checkout -b chore/upgrade-node22
    ```

2.  **✏️ 修正作業内容**
    -   `package.json` に `"engines": { "node": "22.x" }` を追加 or 更新
    -   必要に応じて依存パッケージのアップグレード（`next`, `tailwind`, `prisma` など）
    -   動作確認（ローカル環境 / ステージング）

3.  **⚙️ Vercel の設定も変更（2パターン）**
    -   **GUI:** プロジェクトの `Settings` → `General` → `Node.js 22` に変更
    -   **CLI or API:** 自動化しても可（今回は手動でもOK）

4.  **📦 デプロイ実行**
    ```bash
    vercel --prod
    ```
    またはプルリク作成で Vercel のプレビュー環境で確認。

5.  **✅ 動作確認（重要）**
    -   ビルドが成功しているか？
    -   実際の画面でエラーがないか？
    -   API や DB 接続系で挙動に影響が出ていないか？

6.  **🔁 問題なければ `main` や `production` にマージ**
    ```bash
    git checkout main
    git merge chore/upgrade-node22
    git push
    ```

### ✨補足
-   複数プロジェクトある場合、それぞれ個別ブランチで同様に対応
-   もし `pnpm` や `yarn` を使っている場合は、lockファイルの扱いに注意（`pnpm-lock.yaml` など）

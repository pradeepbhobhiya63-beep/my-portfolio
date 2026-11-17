# Pradeep — Portfolio (with AI Agent)

```
portfolio/
├── index.html      ← poori website (design + data + AI chat)
└── api/chat.js     ← Vercel serverless function (real AI, Gemini)
```

## 1. Apni details daalo
`index.html` me `CONFIG` dhundo (script ke top pe):
- `github` → apna GitHub username
- `email`, `linkedin`, `tryhackme`, `bugcrowd`
- `resume` → `"resume.pdf"` (file repo root me rakh do)

Phir `PROJECTS` me har project ka `repo:` apne **actual repo name** se match karo
(e.g. `repo:"max-pay"` → `github.com/<username>/max-pay`). `live:` me live URL daal sakte ho.

Naya project / writeup add karna ho → `PROJECTS` / `WRITEUPS` array me ek object copy-paste karo. Bas.

## 2. Deploy (Vercel — tera existing repo)
1. Purane portfolio repo me ye files replace karo (`index.html` + `api/` folder).
2. `git add . && git commit -m "new portfolio with AI agent" && git push`
3. Vercel auto-deploy kar dega.

## 3. AI agent ON karo (free)
1. https://aistudio.google.com/apikey → **Create API key** (free).
2. Vercel → Project → **Settings → Environment Variables**
   - `GEMINI_API_KEY` = tumhari key
3. **Redeploy** karo.

Key kabhi `index.html` me mat daalna — woh public hota hai. Key sirf Vercel env me rahegi.

Bina key ke bhi agent chalega — built-in "offline brain" se answers dega
(projects, writeups, skills, contact). Key lagane ke baad real AI answers aayenge.

## 4. Agent ko naya info sikhana
`api/chat.js` me `PROFILE` ke FACTS update karo → push.

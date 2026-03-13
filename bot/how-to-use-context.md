# How to Use context.json

The file is a **reference document for the bot** — it doesn't do anything automatically. You use it by telling the bot to fetch it at the start of a session, so it knows who you are, what it can do, and how you want it to behave.

## The Basic Pattern

At the start of any new chat session, say:

> "Fetch my context file at https://tictacjoe.github.io/bot/context.json and use it to orient yourself before we start."
>
> The bot will navigate to that URL, read the JSON, and load in your preferences, constraints, and capabilities before taking any action.
>
> ---
>
> ## What Each Section Does
>
> **`identity`** — tells the bot its own entry point URL so it can always find your other bot files without you having to repeat the URL.
>
> **`capabilities`** — a complete map of every tool available. Useful when you want to ask the bot "can you do X?" and have it answer accurately based on your actual setup rather than guessing.
>
> **`constraints`** — the bot already follows these by default, but having them in the file means you can point to it if you ever want to review or update what's allowed vs. prohibited.
>
> **`preferences`** — the most useful part day-to-day. Tells the bot to decline cookies by default, prefer ref-ID clicking over coordinates, use `get_page_text` before screenshots, and keep responses concise for simple tasks. These are behaviors you'd otherwise have to re-state every session.
>
> **`owner_context`** — your name, GitHub user, key repos, and interests. This means if you say "open my QA sandbox" the bot already knows that means `tictacjoe/codex-qa`, without explanation.
>
> ---
>
> ## Keeping It Updated
>
> Whenever you want to change a default behavior or add a new preference, edit `context.json` in the repo (GitHub web editor works fine) and commit. The live URL updates within ~60 seconds. Next session, the bot picks up the new version automatically.
>
> ---
>
> ## Practical Example
>
> Start a new session and say:
>
> > "Load https://tictacjoe.github.io/bot/context.json then help me check my codex-qa repo for any open issues."
> >
> > The bot fetches the file, knows `codex-qa` maps to `tictacjoe/codex-qa`, knows to decline cookies on any pages it visits, and gets to work — no setup conversation needed.
> >
> > ---
> >
> > ## File Locations
> >
> > | File | URL | Purpose |
> > |------|-----|---------|
> > | `index.json` | https://tictacjoe.github.io/bot/index.json | Manifest — always the bot's entry point |
> > | `context.json` | https://tictacjoe.github.io/bot/context.json | Extension context — fetch this to orient the bot |
> > | `how-to-use-context.md` | https://tictacjoe.github.io/bot/how-to-use-context.md | This document |
> > 

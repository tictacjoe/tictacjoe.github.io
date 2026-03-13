# /bot — Bot-Accessible File Repository

This directory is the static, publicly accessible file store for the Claude browser extension.

## Entry Point

The bot should always start at:

```
https://tictacjoe.github.io/bot/index.json
```

This manifest lists all available files with their URLs, types, and descriptions.

## How to Add a File

1. Add the file to this `/bot/` directory in the repo (commit to `master`).
2. 2. Update `index.json` to register the file — add an entry to the `"files"` array:
  
   3. ```json
      {
        "name": "filename.ext",
        "url": "https://tictacjoe.github.io/bot/filename.ext",
        "type": "json|md|html|txt",
        "description": "What this file is for"
      }
      ```

      3. GitHub Pages will serve the new file within ~60 seconds of the commit.
     
      4. ## File Naming Conventions
     
      5. - Use lowercase, hyphenated names (e.g. `task-list.md`, `config.json`)
         - - Use `.json` for structured data the bot reads programmatically
           - - Use `.md` for human-readable notes and instructions
             - - Use `.html` for interactive pages the bot navigates
              
               - ## URL Pattern
              
               - All files are served at:
               - ```
                 https://tictacjoe.github.io/bot/<filename>
                 ```

                 ## Notes

                 - This directory is **publicly readable** — do not store sensitive data here.
                 - - The repo source is private; only the published site is public.
                   - - Jekyll does not process files in `/bot/` — they are served as-is (raw static files).
                     - 

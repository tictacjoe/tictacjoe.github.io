# tdsync Bidirectional Flow Diagram

This diagram visualizes the bidirectional synchronization logic implemented in `~/Dev/scripts/tdsync`.

```mermaid
graph TD
    subgraph GDrive [Google Drive Remote]
        R_GJOE[(gdrive:joe/gjoe)]
        R_SCRIPTS[(gdrive:joe/scripts)]
        R_BACKUP[(td-backup/YYYYMMDD-HHMM)]
    end

    subgraph Local [WSL Ubuntu Local]
        L_GJOE[~/gjoe]
        L_SCRIPTS[~/Dev/scripts]
        LOG[/tdsync.log/]
    end

    %% PULL PHASE
    GDrive -- "PULL (rclone copy --update)" --> Local
    R_GJOE -.->|gjoe-sync.txt| L_GJOE
    R_SCRIPTS -.-> L_SCRIPTS

    %% PUSH PHASE
    Local -- "PUSH (rclone copy --update)" --> GDrive
    L_SCRIPTS -.-> R_SCRIPTS
    
    L_GJOE -- "1. td/ files only" --> R_GJOE
    R_GJOE -- "Backup existing" --> R_BACKUP
    
    L_GJOE -- "2. non-td/ files" --> R_GJOE

    %% LOGGING
    Local --> LOG
```

### Key Logic
- **Safety:** GDrive `td/` files are backed up to a timestamped folder before any overwrite.
- **Filtering:** Uses three distinct filters (`gjoe-sync.txt`, `td-only.txt`, `gjoe-no-td.txt`) to manage complex sync rules.
- **Concurrency:** Pulls and Pushes are executed in parallel using background processes and `wait`.
- **Logs:** All activity is appended to `~/gjoe/tdsync.log`.

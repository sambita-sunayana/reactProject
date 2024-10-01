### How to run the application

```bash
# start the database
json-server --watch db.json --port 3001

# in another terminal, run the server
npm run start

# Update the API link in the React component
const API_URL = 'https://3001-sambitasuna-reactprojec-yyts9vr8kvr.ws-us116.gitpod.io/persons';
```

### how to fix an empty repo push

- There might be a embeded git repository
    - Remove that 
    ```bash
    # Perform this in the project root location
    ls -la 
    # If a .git directory is visible then remove it
    rm -rf .git
    ```
- If there is not .git repo, still an empty file push is happening then
    ```bash
    # Undo the previous commit
    gitpod /workspace/reactProject (main) $ git reset HEAD~ 

    # Check whether the files are now visible in git status or not
    gitpod /workspace/reactProject (main) $ git status
    On branch main
    Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
    (use "git pull" to update your local branch)

    Untracked files:
    (use "git add <file>..." to include in what will be committed)
            axios-lab/

    nothing added to commit but untracked files present (use "git add" to track)

    # Then add and commit
    # All the files tracked by Git should be visible in the output
    ```bash
    gitpod /workspace/reactProject (main) $ git add .
    gitpod /workspace/reactProject (main) $ git commit -m "add axios-lab basic component"
    [main 2606902] add axios-lab basic component
    21 files changed, 20827 insertions(+)
    create mode 100644 axios-lab/.gitignore
    create mode 100644 axios-lab/README.md
    create mode 100644 axios-lab/db.json
    create mode 100644 axios-lab/package-lock.json
    create mode 100644 axios-lab/package.json
    create mode 100644 axios-lab/public/favicon.ico
    create mode 100644 axios-lab/public/index.html
    create mode 100644 axios-lab/public/logo192.png
    create mode 100644 axios-lab/public/logo512.png
    create mode 100644 axios-lab/public/manifest.json
    create mode 100644 axios-lab/public/robots.txt
    create mode 100644 axios-lab/src/App.css
    create mode 100644 axios-lab/src/App.js
    create mode 100644 axios-lab/src/App.test.js
    create mode 100644 axios-lab/src/components/PersonList.css
    create mode 100644 axios-lab/src/components/PersonList.js
    create mode 100644 axios-lab/src/index.css
    create mode 100644 axios-lab/src/index.js
    create mode 100644 axios-lab/src/logo.svg
    create mode 100644 axios-lab/src/reportWebVitals.js
    create mode 100644 axios-lab/src/setupTests.js
    ```
    - If you are seeing any errors about errorspec or already any info available in the remote, then force push
    ```bash
    gitpod /workspace/reactProject (main) $ git push
    To github.com:sambita-sunayana/reactProject.git
    ! [rejected]        main -> main (non-fast-forward)
    error: failed to push some refs to 'github.com:sambita-sunayana/reactProject.git'
    hint: Updates were rejected because the tip of your current branch is behind
    hint: its remote counterpart. If you want to integrate the remote changes,
    hint: use 'git pull' before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.
    gitpod /workspace/reactProject (main) $ git push -f
    Enumerating objects: 28, done.
    Counting objects: 100% (28/28), done.
    Delta compression using up to 16 threads
    Compressing objects: 100% (27/27), done.
    Writing objects: 100% (27/27), 187.63 KiB | 2.98 MiB/s, done.
    Total 27 (delta 1), reused 16 (delta 0), pack-reused 0 (from 0)
    remote: Resolving deltas: 100% (1/1), completed with 1 local object.
    To github.com:sambita-sunayana/reactProject.git
    + 127f562...2606902 main -> main (forced update)
    ```

- 
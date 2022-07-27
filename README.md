# Auth Wiki Project.
# Team 10
Codebase for Authe Wiki - Team 10
<br>

## Overview
In this project, we're building an Wiki Platform that has authentication codes that developers can download and use in their own projects. 

### Directory Structure
- ***Frontend:*** Frontend code is found in the `client` directory.
- ***Backend:*** Backend code is found in the `server` directory.

### Project Links

- Design Link - https://www.figma.com/file/rim5Uin1lkaLl0JD5rhcf5/Zuri-Project-File


### How to contribute
Follow these steps if you want to contribute to this project:
- Fork the repository. Open your your terminal and clone the forked repo locally.
- Navigate to the folder and open in your text editor
- On your terminal, set upstream branch:
  ```js
    git remote add upstream https://github.com/zuri-training/auth_wiki_team_10.git
  ```
- Pull upstream: `git pull upstream dev`
- Create a branch for the feauture you're working on `git checkout -b <feature-name>`
- After making changes, stage all the changes you have made locally for a commit by running `git add <file-names>`
- Commit your changes with a descriptive commit message `git commit -m "your commit message"`
- Before you push to your changes always make sure that your branch is always up-to-date in other to avoid merge conflicts: `git pull upstream dev`
- After making sure your branch is up-to-date, push the new changes to your new branch: `git push origin <your-current-branch-name>`
- Create a pull request to the dev branch
- ***DO NOT*** merge your PRs. They'll be reviewed and merged.

### Server (backend) Setup and Installation
Follow these steps to setup and run server:
- Navigate into the `server` directory
  ```js
    cd auth_wiki_team_10/server
  ```
- Create a virtual environment 
  ```js
    python -m venv my-env
  ```
- Activate the just created virtual environment 
  ```js
    source env/Scripts/activate
  ```
- Rename the `.env-example` file to `.env`. That's where you'd put all future environment variable/configs
- Install all packages
  ```js
    pip install requirements.txt
  ```
- Create a table on your local myqsl DBMS called `auth_wiki`.
- Run migrations `python manage.py migrate`.
- Run server `python manage.py runserver`.

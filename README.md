# Plant learning study

Study designed by Class of 2027 students at the School for Science and Math at Vanderbilt, advised by Dr. Pam Popp.

Site is live at [https://pamop.github.io/plant-learning-study/](https://pamop.github.io/plant-learning-study/).

## Project set up

### Initialize vite template

Name project folder and select vue + javascript options

```sh
npm create vite@latest
```

Follow the prompts, which will cd you into the project directory and npm install.

### Connect to github repo

Log in to github and create new repo with same name as your project folder. Don't use a template, add a readme, or any of the optional options.

You can do this now or later - remove the line "dist" from .gitignore. (necessary to publish the dist folder in a subtree branch later)

In terminal from your project folder,

```sh
git init
git remote add origin https://github.com/pamop/plant-learning-study.git
git add .
git commit -m "Initial vue vite project template"
git push origin main
```

### Add base public path

In vite.config.js, add the repo name under "base" in defineConfig.

```sh
export default defineConfig({
  base: "/plant-learning-study/",
  plugins: [],
  ...
```

### Create gh-pages branch to contain distribution files

If you haven't already, make sure dist is not included in your .gitignore file. If it is, delete or comment out that line, then save and commit.

```sh
npm run build
git subtree push --prefix dist origin gh-pages
```

### Github project settings to deploy from gh-pages branch

On your Github repo page, go to Settings --> Pages. Under Build and Deployment, for Source pick "Deploy from a Branch" and for Branch select gh-pages then save.

### Install gh-pages module

```sh
npm install gh-pages --save-dev
```

Add the following scripts to package.json:

```sh
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
}
```

When you want to deploy your updated project to the gh-pages site, run:

```sh
npm run deploy
```

References:
[How to Deploy Your Vite/Vue 3 Application in GitHub Pages 2023](https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a)

### Setting up Google Sheets integration

Follow steps 1 through 5 in the tutorial [here](https://github.com/levinunnink/html-form-to-google-sheet), but with your own custom column headers. Copy the web app url from the deployment and insert it in the submit method in the vue page with the form.

_NOTE:_ You may have issues if you are logged in to multiple Google accounts in this browser. I used an incognito window that was ONLY logged into the account that owns the Google Sheet.

However, at the top of your doPost(e) function in the script, add:

```
// Determine which sheet to use based on survey type
var surveyType = e.parameter.survey; // Get 'pre' or 'post' from the data
if (!surveyType) throw new Error("Missing 'survey' parameter");
var sheetName = surveyType === 'post' ? 'PostSurvey' : 'PreSurvey';
```

_NOTE:_ If you make a change to the apps script, you need to re-deploy before the changes will take effect. Go to Deploy, Manage Deployments, Edit, select New Version, and click Deploy.

### Favicon

[Plant](https://icons8.com/icon/PLAf53HxOkuk/natural-food) icon by [Icons8](https://icons8.com).

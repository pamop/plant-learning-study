# Plant learning study

Study designed by Class of 2027 students at the School for Science and Math at Vanderbilt.

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

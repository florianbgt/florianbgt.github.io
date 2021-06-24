# nuxt-blog

Simple static website generator made with nuxt js and nuxt content

## Build Setup

```bash
#Install needed dependencies
$ npm install
```

```bash
# serve with hot reload at localhost:3000 . Ideal for development
$ npm run dev
```

```bash
# build for production and launch server
$ npm run build
$ npm run start
```

```bash
# deploy the app on github page
$ npm run generate
$ npm run deploy
```

For deployment, do not forget to change the base value according to your need ('/' if serve at the root of your website)
More info here: [https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/)

## Resume

The / route is a resume like page.

The content of that page is driven by the file resume.json inside the content folder.

## Blog

The /blog route is a blog like page.

The content of that page is driven by .md files located inside the content/blog folder.

The routes will be generated automatically according to the folder structure of the content/blog folder.

Each .md file must be named "index.md" and must be placed inside a subfolder of /blog folder. You can serve image from that folder as well if you wish. You must use the special img tag for that (see examples)

If you wish to add a custom header image, put it inside the .md file folder and include the name of the file at the top of the .md file with the 'image' tag (see examples). If you leave that tag empty, the default.png image will be assign automatically as a header
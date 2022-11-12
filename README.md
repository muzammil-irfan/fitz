##Fitz-Cornerz Next js Web App

First, download node_modules using yarn package manager and run the development server

```bash
yarn 
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Some points to notice about this project are as follows:
1. Almost all the text is imported by en.json and ar.json files inside lang folder, incase of changing any text. Explore that files to change the text of particular id
2. Next js image component is not used everywhere because the api is providing images with different domains and if any domain will not be included in the next js config then it will produce an error instead of showing image.
3. All the pages is rendering inside Layout component. You would find that in layout folder. Header and footer is also placed from there. 
4. Default SEO is used in _app.js, you can configure it from there. 



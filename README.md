# Sdg4People Server

You'll need MongoDB to be running to use in development.

```
npm install
mongoimport --db test --collection hello_world --drop --file ./primer-dataset.json
node index.js
```

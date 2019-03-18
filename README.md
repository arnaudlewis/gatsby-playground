# Gatsby x Prismic playground
This project is a playground to develop on `gatsby-source-prismic-graphql`.

## How to start

- install the `node_modules`
```bash
yarn install
```
- checkout the `gatsby-source-prismic-graphql` from github in the `node_modules`
```bash
git clone gatsby-source-prismic-graphql ./node_modules/
```
- remove the `graphql` package from the plugin `node_modules`
```bash
rm -rf ./node_modules/gatsby-source-prismic-graphql/node_modules/graphql
```
- Create a symlink from the `graphql` modules from this playground to the `node_modules` of the plugin
```bash
ln -s ./node_modules/graphql ./node_modules/gatsby-source-prismic-graphql/node_modules/graphql
```
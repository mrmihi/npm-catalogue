# npm-catalogue

### A curated list of NPM packages developed by the SLIIT FOSS community

<br/>

## Getting started

- Generate a npm access token from [here](https://www.npmjs.com/settings/sliit.foss/tokens)
- Edit npmrc.sh and replace TOKEN with the newly generated token
- Execute npmrc.sh to generate the npmrc file required for authentication with the Gitlab NPM registry
- Run `pnpm install` to install all dependencies

<br/>

## Test and Deploy

- Run `pnpm test` from the root directory to run all test suites in all packages
- Run `pnpm build` from the root directory to build all packages
- Run `pnpm test` from inside a package directory to run test suites for that particular package
- Run `pnpm release` from inside a package directory to publish it to the registry

<br/>

## Git commit messages

- We follow conventional commits during our development workflow as it helps us automate our release process. More information can be found at their official [documentation](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#examples)

- Supported commit message prefixes for version bumping are as follows:

  ```js
  - Feat! - bump major version
  ```

  ```js
  - Feat  - bump minor version
  ```

  ```js
  - Fix   - bump patch version
  ```

- Refer the [commitlint.config.js](https://github.com/sliit-foss/npm-catalogue/commitlint.config.js) file for a full list of supported commit message prefixes

<br/>

## Disable version bumping for specific commit<br/><br/>

- Add the following to a commit message as follows: "--no-bump"<br/>

```bash
  git commit -m "Feat: some feature --no-bump"
```

<br/>

## Linting and Formatting

- Run `pnpm lint` to lint all packages
- Run `pnpm format` to format all packages

<br/>

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```bash
pnpm dlx turbo link
```

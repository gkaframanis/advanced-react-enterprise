# Advanced React For Enterprise: React for Senior Engineers

## Atomic Design Methodology

- Atoms
  - Can exist on each own
  - eg: Label, Input, Button, Text, Link, Logo, Icon
- Molecules
  - Combination of atoms
- Organisms
  - Combination of molecules
  - eg: NavBar, Footer, TopBar
- Templates
  - Combinations of organisms
  - Representation of what the actual page will be without data.
- Pages
  - Combination of templates

***Carbon design system*** by IBM.
***Fluent UI*** by Microsoft.

The work of an engineer is to translate the DS in reusable code.

## CSS Architecture Checklist
- Organized - fixed code structure
- No specificity issues
- Atomic design principles
- Easy to understand (comments, variables)
- Fully customizable / theme-able
- Reusable across teams / projects


The ***foundation*** folder can also be called ***abstract***.

***mixins*** for reusable functionality.

     @mixin tablet {
        @media (min-width: map-get($breakpoints, "md")) {
          @content;
        }
      }

How to use the mixin: 

      .body {
        font-size: 12px;

        @include tablet {
          font-size: 14px;
        }
      }

- ***yarn add normalize-scss*** (_check _reset.scss file)
- ***yarn add --dev stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier*** (check .stylelintrc.json file and package.json file)
- ***yarn add --dev husky lint-staged***
  - ***husky*** is a package that helps us use git hooks, eg if we want to run a command before or after we commit or before we pull or after we push. (check package.json)
  - ***lint-staged*** is package that uses husky only on files before committed.

      npm uninstall husky
 
      npm install -D husky@4
 
      npm install -D husky

### Compile sass to css
- ***yarn add --dev node-sass***


## Monorepository strategy
Manage all the packages in one repository.

***yarn add --dev lerna***

- Lerna will give us some commands that will help us
  - publish our packages to npm easily
  - commit
  - push
  - change logs etc
  - in combination with yarn workspaces

***yarn lerna init***

***yarn add --dev react @types/react typescript***
***yarn add --dev rollup rollup-plugin-typescript2***
  - rollup.config.js file and add script in package.json file in react package.
  - yarn build


#### Playgrounds
***yarn add --dev react react-dom @types/react-dom @types/react typescript parcel-bundler***

***yarn add --dev nodemon***


## Unit testing atomic components
In the packages/react: 
- ***yarn add --dev jest @types/jest @babel/preset-env @babel/preset-typescript @babel/preset-react @testing-library/react @testing-library/jest-dom jest-environment-jsdom***

In the packages/foundation:
- ***yarn add --dev jest @types/jest @babel/preset-env @babel/preset-typescript jest-environment-jsdom***

## Storybook with react
In the packages/react:
- ***yarn add --dev @storybook/react***
- ***yarn add --dev @storybook/preset-typescript***
- ***yarn add --dev babel-loader***
- ***yarn add --dev @storybook/addon-controls***


[chromatic.com](https://chromatic.com)
- ***yarn add --dev chromatic***
- ***yarn chromatic --project-token=##############***
- Let it add the script command to our package.json file.

## Publish to npm

1. + Add organization
2. Unlimited public packages
3. In terminal:
   1. npm login
   2. npm publish (but we have 3 packages)
4. We have been using lerna
   1. Add to the packages package.json file: 
    
      "publishConfig": {
          "access": "public"
        }
    
    2. To the playground package.json ==> ***"private": true***
    3. Lerna will the control the version numbers.
    4. ***npm login*** (username, password, email)
    5. ***yarn lerna publish***
    6. We need to follow semantic versioning. (Usually a minor for the first publish)
    7. Also makes a commit to github with the new tagged version.

### Conventional commits
[Conventional commits](https://conventionalcommits.org)
- ***yarn add --dev commitizen cz-conventional-changelog -W*** (for the top root)

Linting for our commits:
- ***yarn add --dev @commitlint/cli @commitlint/config-conventional -W***
[For husky to work correctly](https://stackoverflow.com/questions/66246587/how-to-fix-error-not-found-husky-run-when-committing-new-code)
- *** yarn add husky --dev -W && npx husky-init && npm exec -- github:typicode husky-4-to-7 --remove-v4-config***

## Github actions /CI/CD
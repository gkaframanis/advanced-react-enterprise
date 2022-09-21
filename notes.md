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
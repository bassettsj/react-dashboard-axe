# React Dashboard (MUI Example)

This project is based on the [MUI Dashboard example](https://mui.com/material-ui/getting-started/templates/dashboard/).

## Purpose

This repository is used for evaluating GitHub Copilot agents and their ability to:
- Test and fix accessibility (AXE) issues
- Use automated tools such as [cypress-axe](https://github.com/component-driven/cypress-axe)
- Demonstrate agent-driven workflows for code improvement

**Note:** Most of the code is generated or adapted from the official MUI dashboard template. All fixes and improvements will be made using Copilot agent-driven automation.

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm start
   ```

3. **Run the linter:**
   ```sh
   npm run lint
   ```

4. **(Optional) Add and run accessibility tests:**
   - Install Cypress and cypress-axe:
     ```sh
     npm install --save-dev cypress cypress-axe
     ```
   - Add and configure your Cypress tests to use cypress-axe for accessibility checking.

For more details, see the [MUI documentation](https://mui.com/material-ui/getting-started/templates/dashboard/) and [cypress-axe documentation](https://github.com/component-driven/cypress-axe).

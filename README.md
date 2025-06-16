# React Dashboard (MUI Example)

This project is based on the [MUI Dashboard example](https://mui.com/material-ui/getting-started/templates/dashboard/).

## Purpose

This repository is used for evaluating GitHub Copilot agents and their ability to:
- Test and fix accessibility (AXE) issues
- Use automated tools such as [cypress-axe](https://github.com/component-driven/cypress-axe)
- Demonstrate agent-driven workflows for code improvement

**Note:** Most of the code is generated or adapted from the official MUI dashboard template. All fixes and improvements will be made using Copilot agent-driven automation.

## Pilot Project: Using OpenAI Codex as a Coding Agent

This repository serves as a pilot playground to experiment with using OpenAI's CODEX coding agent to automatically address accessibility issues found by automated testing tools.

### Pilot Workflow

1. **Run Accessibility Tests:**
   - The Codex agent will run the Cypress accessibility tests (using cypress-axe) to identify accessibility violations in the codebase.

2. **Analyze and Locate Issues:**
   - When violations are found, the agent will analyze the test output and search the codebase to locate the source of each issue.

3. **Propose and Apply Fixes:**
   - The agent will attempt to generate and apply code fixes to resolve the accessibility issues. If the issue is within a third-party dependency, the agent will:
     - Evaluate and summarize the problem.
     - Prepare a report or make it easier to file an issue with the third-party maintainers.

4. **Iterate and Validate:**
   - The agent will re-run the tests to validate that the fixes resolve the issues, iterating as needed.

### Goals
- Evaluate the effectiveness of autonomous coding agents in real-world codebases.
- Measure the agent's ability to:
  - Detect, localize, and fix accessibility issues.
  - Interact with third-party code and reporting workflows.
- Provide a reproducible workflow for future agent-driven code improvement projects.

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

4. **Run accessibility tests:**
   ```sh
   npx cypress run
   ```

For more details, see the [MUI documentation](https://mui.com/material-ui/getting-started/templates/dashboard/) and [cypress-axe documentation](https://github.com/component-driven/cypress-axe).

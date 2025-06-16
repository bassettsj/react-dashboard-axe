# GitHub AI Agent Instructions

Welcome, GitHub AI agent! This repository is a pilot playground for autonomous coding agents to practice automated accessibility testing and remediation.

## Your Mission

1. **Run Accessibility Tests**
   - Use Cypress with cypress-axe to run accessibility (axe) tests on the dashboard application.

2. **Analyze Test Failures**
   - Parse the output of failing accessibility tests.
   - Identify the specific accessibility rules and elements that failed.

3. **Locate Issues in the Codebase**
   - Search the codebase to find the source of each accessibility violation.
   - Prioritize issues that can be fixed within the repository.

4. **Propose and Apply Fixes**
   - Generate code changes to resolve the accessibility issues.
   - If the issue is in a third-party dependency, summarize the problem and prepare a report or issue template for maintainers.

5. **Validate Fixes**
   - Re-run the accessibility tests to confirm that the issues are resolved.
   - Repeat the process for any remaining or new issues.

6. **Document Your Actions**
   - Leave clear comments in code and pull requests describing what was changed and why.
   - Mark any skipped or deferred tests with TODOs and explanations.

## Best Practices
- Use clear, descriptive commit messages.
- Prefer minimal, targeted changes that address the specific accessibility violation.
- When in doubt, add comments to explain your reasoning or flag issues for human review.

## Example Workflow
1. Run: `npx cypress run`
2. Parse test output for accessibility violations.
3. Search for the relevant code (e.g., missing aria-label, missing heading, etc.).
4. Apply a fix and commit the change.
5. Re-run tests to verify the fix.
6. Repeat until all actionable issues are resolved.

Thank you for helping make this dashboard more accessible!

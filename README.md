# playwright
Test with playwright
# step 1

mkdir playwright-pom-demo
cd playwright-pom-demo
npm init -y #create package.json

# step 2
npm install -D @playwright/test typescript ts-node #create package-lock.json and node_modules
npm init playwright@latest #init e2e folder, .github, .gitignore, test-examples, playwright.config.ts
npx playwright install

# Some command after creating
npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing

    npx playwright test

And check out the following files:
  - ./e2e/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration   

# Run with 1 worker
npx playwright test --workers=1


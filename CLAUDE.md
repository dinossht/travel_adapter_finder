# Travel Adapter Finder Project Guidelines

## Running the Project
- Run locally: `python -m http.server` and visit http://localhost:8000
- Test in browser: Open index.html directly in browser

## Codebase Structure
- HTML: Root and adapters/ directory (country-specific pages)
- CSS: css/style.css
- JavaScript: js/ directory (modular organization)

## Code Style Guidelines
- HTML: HTML5 semantic elements
- CSS: Use existing variables for consistency (colors, spacing)
- JavaScript:
  - Naming: camelCase for variables/functions, PascalCase for classes
  - Use ES6+ features (classes, arrow functions, template literals)
  - Keep functions short and focused on single responsibility
  - Separate display logic from data/types
  - Add descriptive comments for complex logic

## Adding New Features
- Country adapters: Add new HTML files in adapters/ directory
- New plug types: Update js/plug-types.js
- UI components: Extend js/plug-display.js when needed
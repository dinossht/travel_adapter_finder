# Travel Adapter Guide Website

A user-friendly website helping travelers find the right power adapters for their destinations, with a primary focus on UK travelers.

## Project Overview

The Travel Adapter Guide Website provides:
- Clear information about power adapter types worldwide
- Focus on UK travelers' needs
- Visual guides for different plug types
- Affiliate links to trusted UK retailers
- Mobile-responsive design optimized for all age groups

## Development Setup

1. **Local Development:**  
   ```bash
   python -m http.server
   # Then visit http://localhost:8000
   ```

2. **Production Site:**  
   - Deployed at [traveladapterfinder.com](https://traveladapterfinder.com)
   - Uses GitHub Pages with custom domain
   - Automatic deployment from main branch

## Project Structure

```
travel_adapter_finder/
├── CNAME               # Domain configuration (traveladapterfinder.com)
├── index.html          # Main homepage
├── adapters/
│   └── norway.html     # Norway-specific adapter information
├── css/
│   └── style.css       # Global styles
├── js/
│   ├── main.js         # Core functionality
│   ├── plug-types.js   # Plug type definitions and mappings
│   └── plug-display.js # SVG generation and display logic
└── images/
    └── [adapter images for fallback]
```

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Development Steps](#development-steps)
  - [HTML Development](#html-development)
  - [CSS Development](#css-development)
  - [JavaScript Development](#javascript-development)
  - [Affiliate Integration](#affiliate-integration)
- [Testing and Deployment](#testing-and-deployment)
- [Maintenance and Future Enhancements](#maintenance-and-future-enhancements)
- [Conclusion](#conclusion)

## Overview

The website will:
- Provide clear and accessible information on wall adapters, starting with Norway.
- Feature large, readable text and a simple navigation design.
- Include images of each adapter with proper alt text.
- Contain affiliate links to local online shops for purchasing the adapters.

## Technologies Used

- **HTML5:** For semantic markup and accessible website structure
- **CSS3:** For responsive styling with a focus on accessibility (large fonts, high contrast, simple layout)
- **JavaScript (ES6+):** For interactive elements and dynamic SVG generation of plug types
- **SVG:** For scalable, responsive visualizations of different plug types
- **GitHub Pages:** For hosting with a custom domain
- **Modular Code Structure:** Separate files for plug types, display logic, and core functionality

## Setup Instructions

1. **Project Directory:**  
   Create a new directory for the project.
   ```bash
   mkdir travel_adapter_finder
   cd travel_adapter_finder
   ```

2. **Version Control:**  
   Initialize a Git repository.
   ```bash
   git init
   ```

3. **Development Environment:**  
   - Install a code editor (e.g., Visual Studio Code).
   - Optionally, install a local web server (e.g., using the Live Server extension in VS Code).

## Development Steps

### HTML Development

- **index.html:**  
  - Create a homepage that introduces the website.
  - Include navigation to the adapter pages.
  
- **adapters/norway.html:**  
  - Create a dedicated page for Norwegian wall adapters.
  - Add clear descriptions, images (with appropriate alt text), and sections for affiliate links.
  
- **Accessibility:**  
  - Ensure all images include descriptive alt text.
  - Use semantic HTML tags for better accessibility and SEO.

### CSS Development

- **style.css:**  
  - Develop a simple, minimal design using large fonts and high-contrast color schemes.
  - Keep the layout uncluttered with ample spacing for ease of navigation.
  - Consider using CSS media queries to ensure responsiveness across devices.

### JavaScript Development

- **main.js (if needed):**  
  - Add any interactive elements, such as smooth scrolling or dynamic content loading.
  - Ensure any JavaScript enhances accessibility rather than hindering it.
  
### Affiliate Integration

- **Identify Affiliate Partners:**  
  - Research local online shops that sell wall adapters and join their affiliate programs.
  
- **Embed Affiliate Links:**  
  - In your HTML, include affiliate links within product descriptions or image captions.
  - Optionally, maintain a separate JavaScript or JSON file to manage affiliate URLs for easy updating.

## Testing and Deployment

1. **Testing:**  
   - Test the website across multiple browsers (Chrome, Firefox, Safari) and devices (desktop, tablet, mobile).
   - Validate HTML and CSS using online validators (e.g., W3C Validator).

2. **Deployment:**  
   - The site is deployed using GitHub Pages at [traveladapterfinder.com](https://traveladapterfinder.com)
   - A custom domain is configured using a CNAME record
   - All changes pushed to the main branch are automatically deployed
   - For local testing, use a simple HTTP server:
     ```bash
     python -m http.server
     # Then visit http://localhost:8000
     ```

## Maintenance and Future Enhancements

- **Content Expansion:**  
  - Once the Norwegian site is stable, consider adding additional country pages.
  
- **User Feedback:**  
  - In the future, integrate a feedback system or simple user reviews.
  
- **Analytics:**  
  - Add analytics tools (e.g., Google Analytics) to monitor site traffic and affiliate link clicks.
  
- **CMS Integration:**  
  - If content updates become frequent, consider migrating to a CMS like WordPress for easier management.

## Conclusion

This README provides a step-by-step guide to develop the Norwegian Wall Adapter Helper Website. By following these instructions, you can build a fully functional, accessible, and easy-to-navigate site aimed at helping older users identify the correct wall adapter, along with integrating local affiliate links.

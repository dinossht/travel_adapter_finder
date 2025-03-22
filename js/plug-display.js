class PlugDisplay {
    constructor() {
        this.plugContainer = null;
        this.init();
    }

    init() {
        // Create plug container if it doesn't exist
        if (!this.plugContainer) {
            this.plugContainer = document.createElement('div');
            this.plugContainer.id = 'plug-display';
            this.plugContainer.className = 'plug-display';
        }
    }

    // Generate SVG for a specific plug type
    generatePlugSVG(type) {
        const svgTemplates = {
            'A': `<svg viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                    <rect x="30" y="30" width="10" height="40" fill="black"/>
                    <rect x="60" y="30" width="10" height="40" fill="black"/>
                </svg>`,
            'C': `<svg viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                    <circle cx="35" cy="50" r="5" fill="black"/>
                    <circle cx="65" cy="50" r="5" fill="black"/>
                </svg>`,
            'F': `<svg viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                    <circle cx="50" cy="50" r="35" fill="none" stroke="black" stroke-width="2"/>
                    <circle cx="35" cy="50" r="5" fill="black"/>
                    <circle cx="65" cy="50" r="5" fill="black"/>
                </svg>`,
            // Add more SVG templates for other plug types...
        };

        return svgTemplates[type] || `<div class="plug-placeholder">Type ${type}</div>`;
    }

    // Display plugs for a specific country
    displayPlugsForCountry(country) {
        const plugTypes = PLUG_TYPES[country.toLowerCase()] || [];
        this.plugContainer.innerHTML = '';

        if (plugTypes.length === 0) {
            this.plugContainer.innerHTML = '<p>No plug information available for this country.</p>';
            return;
        }

        const plugsHTML = plugTypes.map(type => `
            <div class="plug-item">
                <div class="plug-svg">
                    ${this.generatePlugSVG(type)}
                </div>
                <div class="plug-info">
                    <h3>Type ${type}</h3>
                    <p>${PLUG_DESCRIPTIONS[type]}</p>
                </div>
            </div>
        `).join('');

        this.plugContainer.innerHTML = plugsHTML;
    }

    // Get the container element
    getContainer() {
        return this.plugContainer;
    }
} 
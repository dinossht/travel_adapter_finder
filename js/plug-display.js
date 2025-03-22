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
            'B': `<svg viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                    <rect x="30" y="30" width="10" height="40" fill="black"/>
                    <rect x="60" y="30" width="10" height="40" fill="black"/>
                    <circle cx="50" cy="75" r="5" fill="black"/>
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
            'G': `<svg viewBox="0 0 100 100">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                    <rect x="30" y="25" width="10" height="25" fill="black"/>
                    <rect x="60" y="25" width="10" height="25" fill="black"/>
                    <rect x="45" y="60" width="10" height="25" fill="black"/>
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
    
    // Display a universal adapter
    displayUniversalAdapter() {
        this.plugContainer.innerHTML = `
            <div class="plug-item">
                <div class="plug-svg">
                    <svg viewBox="0 0 100 100">
                        <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" stroke-width="2" rx="10"/>
                        <!-- Type G pins (UK) -->
                        <rect x="30" y="20" width="8" height="20" fill="black" opacity="0.6"/>
                        <rect x="62" y="20" width="8" height="20" fill="black" opacity="0.6"/>
                        <rect x="46" y="55" width="8" height="20" fill="black" opacity="0.6"/>
                        <!-- Type A/B pins (US) -->
                        <rect x="25" y="45" width="8" height="30" fill="black" opacity="0.6"/>
                        <rect x="67" y="45" width="8" height="30" fill="black" opacity="0.6"/>
                        <!-- Type C/F pins (EU) -->
                        <circle cx="35" cy="40" r="4" fill="black" opacity="0.6"/>
                        <circle cx="65" cy="40" r="4" fill="black" opacity="0.6"/>
                    </svg>
                </div>
                <div class="plug-info">
                    <h3>Universal Adapter</h3>
                    <p>Supports multiple plug types for worldwide use</p>
                </div>
            </div>
        `;
    }

    // Get the container element
    getContainer() {
        return this.plugContainer;
    }
} 
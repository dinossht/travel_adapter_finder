// Plug type definitions and mappings
const PLUG_TYPES = {
    // Europe
    'norway': ['C', 'F'],
    'germany': ['C', 'F'],
    'france': ['C', 'E'],
    'uk': ['G'],
    'italy': ['C', 'F', 'L'],
    'switzerland': ['C', 'J'],
    
    // North America
    'usa': ['A', 'B'],
    'canada': ['A', 'B'],
    
    // Asia
    'japan': ['A', 'B'],
    'china': ['A', 'C', 'I'],
    'india': ['C', 'D', 'M'],
    'thailand': ['A', 'B', 'C', 'O'],
    
    // Oceania
    'australia': ['I'],
    'newzealand': ['I'],
    
    // South America
    'brazil': ['C', 'N'],
    'argentina': ['C', 'I'],
};

// Plug type descriptions
const PLUG_DESCRIPTIONS = {
    'A': 'Ungrounded 2-pin plug (110-120V)',
    'B': 'Grounded 3-pin plug (110-120V)',
    'C': 'Euro-plug 2-pin (220-240V)',
    'D': 'Indian 3-pin (220-240V)',
    'E': 'French 2-pin with ground (220-240V)',
    'F': 'German Schuko 2-pin with side clips (220-240V)',
    'G': 'British 3-pin (220-240V)',
    'H': 'Israeli 3-pin (220-240V)',
    'I': 'Australian/Chinese 3-pin (220-240V)',
    'J': 'Swiss 3-pin (220-240V)',
    'K': 'Danish 3-pin (220-240V)',
    'L': 'Italian 3-pin (220-240V)',
    'M': 'South African 3-pin (220-240V)',
    'N': 'Brazilian 3-pin (220-240V)',
    'O': 'Thai 3-pin (220-240V)'
}; 
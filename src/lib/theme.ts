/**
 * FlexLayers Theme Configuration
 *
 * This file serves as a central location for theme variables and settings that
 * aren't handled by Tailwind CSS configuration. It's intended for JavaScript/TypeScript
 * accessible theme values that need to be referenced in your components.
 *
 *
 * Import this in your components using:
 * import { theme } from '$lib/theme';
 */

// Define theme interface with index signature to allow string indexing
interface ThemeConfig {
	zIndex: Record<string, number>;
	animation: Record<string, number | string>;
	layout: Record<string, number | string | Record<string, string>>;
	features: Record<string, boolean>;
	meta: Record<string, string>;
	[key: string]: any; // Index signature to allow string indexing
}

export const theme: ThemeConfig = {
	zIndex: {
		// Define your z-index hierarchy here
	},

	animation: {
		// Define animation-related values here
	},

	layout: {
		// Define layout constants here (sidebar widths, etc.)
	},

	features: {
		// Define feature toggles here
	},

	meta: {
		// Theme name, version, author info, etc.
	}
};

export type ThemeType = typeof theme;

/**
 * Gets a value from the theme object using a dot notation path.
 *
 * @param path - Dot notation path (e.g., 'zIndex.modal')
 * @returns The value at the specified path or undefined if not found
 */
export function getThemeValue(path: string): any {
	return path.split('.').reduce((obj, key) => {
		return obj && typeof obj === 'object' ? obj[key] : undefined;
	}, theme as any);
}

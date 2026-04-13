import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Convert title → kebab-case filename
 */
function generateFileName(title) {
    return title
        .toLowerCase()
        .replaceAll(/\s+/g, '-')   // spaces → hyphen
        .replaceAll(/[^a-z0-9\-]/g, '') // remove special chars (optional)
        + '.mjs';
}

/**
 * Create file in given directory
 */
async function createFile(title, folderPath) {
    try {
        const fileName = generateFileName(title);

        // Resolve full directory path
        const fullDirPath = path.resolve(__dirname, folderPath);

        // Ensure directory exists (recursive like mkdir -p)
        await mkdir(fullDirPath, { recursive: true });

        // Full file path
        const fullFilePath = path.join(fullDirPath, fileName);

        // Create file safely (fails if exists)
        await writeFile(fullFilePath, '', { flag: 'wx' });

        console.log(`✅ File created: ${fullFilePath}`);
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('⚠️ File already exists');
        } else {
            console.error('❌ Error:', err);
        }
    }
}

// Example usage
const title = "Rotate Lists";
const folder = "./linked-list/";

createFile(title, folder);
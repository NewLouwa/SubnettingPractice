import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// Générer un UUID puis le tronquer à 10 caractères
export function generateShortUUID(length = 10) {
    const uuid = uuidv4().replace(/-/g, '');  // Supprimer les tirets de l'UUID
    return uuid.slice(0, length);             // Tronquer à la longueur souhaitée
}
const { v4: uuidv4 } = require('uuid');

// Générer un UUID puis le tronquer à 10 caractères
function generateShortUUID(length = 10) {
    const uuid = uuidv4().replace(/-/g, '');  // Supprimer les tirets de l'UUID
    return uuid.slice(0, length);             // Tronquer à la longueur souhaitée
}

module.exports = { generateShortUUID };

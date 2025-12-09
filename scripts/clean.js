const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist');

if (fs.existsSync(distPath)) {
  console.log('Nettoyage du répertoire dist...');
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('Répertoire dist nettoyé avec succès.');
} else {
  console.log('Le répertoire dist n\'existe pas, aucun nettoyage nécessaire.');
}

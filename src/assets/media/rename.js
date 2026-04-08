const fs = require('fs');
const path = require('path');

const dir = __dirname;
const renames = [
  ['Design gráfico', 'graphic-design'],
  ['Design para redes', 'design-for-webs'],
  ['Identidade visual', 'visual-identity'],
  ['Mídia OOH', 'midea-OOH'],
  ['Vídeo Para Redes', 'video-for-webs']
];

for (const [oldName, newName] of renames) {
  try {
    fs.renameSync(path.join(dir, oldName), path.join(dir, newName));
  } catch(e) {}
}
console.log("Renamed successfully");

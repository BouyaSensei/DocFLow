const { jsPDF } = require("jspdf");
const boucle = 50;

for (let i = 0; i <= boucle; i++) {
  const doc = new jsPDF();
  doc.text(`hello world ligne ${i}`, 10, 10);
  doc.save(`generate/${i}.pdf`);
}

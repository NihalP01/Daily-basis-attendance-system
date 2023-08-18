export const Utils = {
  formattedDate
};

function formattedDate() {
  const cuurentDate = new Date();
  const day = String(cuurentDate.getDate()).padStart(2, 0);
  const month = String(cuurentDate.getMonth() + 2).padStart(2, 0);
  const year = String(cuurentDate.getFullYear());
  return `${day}-${month}-${year}`;
}

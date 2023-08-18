export const Utils = {
  formattedDate,
};

function formattedDate() {
  const cuurentDate = new Date();
  const day = String(cuurentDate.getDate()).padStart(2, 0); // add +1 after the getDate() to change the date to next date
  const month = String(cuurentDate.getMonth() + 1).padStart(2, 0); // change +1 value to (2, 3, 4...) after the getMonth() to change the month to next month
  const year = String(cuurentDate.getFullYear());
  return `${day}-${month}-${year}`;
}

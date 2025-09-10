export const formatPhoneNumber = (input: string): string => {
  const digits = input.replace(/\D/g, "");

  let formatted = "+375 ";
  if (digits.length > 3) {
    formatted += digits.substring(3, 5) + " ";
  }
  if (digits.length > 5) {
    formatted += digits.substring(5, 8) + "-";
  }
  if (digits.length > 8) {
    formatted += digits.substring(8, 10) + "-";
  }
  if (digits.length > 10) {
    formatted += digits.substring(10, 12);
  }

  return formatted;
};

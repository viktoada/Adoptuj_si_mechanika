export const generateIBAN = () => 'CZ9355000000001234567890';
export const bankCode = '5500';

export const generateQRValue = (amount, mechanicId, note = '') => {
  const iban = generateIBAN();
  // Simple QR code format for bank transfer
  return `SPD*1.0*ACC:${iban}*AM:${amount}*CC:CZK*MSG:${note}*`;
};

export const formatAmount = (amount) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0
  }).format(amount);
};

export const predefinedAmounts = [100, 250, 500, 1000];

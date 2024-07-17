export const formatCurrency = (amount: number) => {
  return Number(amount).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
};

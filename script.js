// Scoop Selection Logic
const pills = document.querySelectorAll('.pill');
const btnPrice = document.querySelector('.btn-price');
const addBtn = document.getElementById('addToCart');
const paymentBtn = document.getElementById('paymentButton');

let currentPrice = 999, currentLabel = '1 scoop', currentItems = '5+ items';

pills.forEach(p => {
  p.addEventListener('click', () => {
    pills.forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    currentPrice = Number(p.dataset.price);
    currentLabel = p.dataset.label;
    currentItems = p.dataset.items;
    btnPrice.textContent = `₹${currentPrice.toLocaleString('en-IN')}`;
  });
});

addBtn.addEventListener('click', () => {
  alert(`Demo cart ✨\n\nAdded: ${currentLabel} (${currentItems})\nTotal: ₹${currentPrice.toLocaleString('en-IN')}`);
});

// Payment Button (to be connected with Razorpay)
paymentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert(`Payment link for ${currentLabel} — ₹${currentPrice} would open here once Razorpay integration is complete.`);
});

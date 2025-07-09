document.addEventListener('DOMContentLoaded', () => {
  const billingToggle = document.getElementById('billingToggle');
  const planCards = document.querySelectorAll('.plan-card');

  const pricingData = {
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
  };

  const updatePrices = () => {
    const isYearly = billingToggle.checked;

    planCards.forEach(card => {
      const plan = card.getAttribute('data-plan');
      const priceElement = card.querySelector('.price');

      if (isYearly) {
        priceElement.textContent = `$${pricingData[plan]['yearly']}/yr`;
      } else {
        priceElement.textContent = `$${pricingData[plan]['monthly']}/mo`;
      }
    });
  };

  billingToggle.addEventListener('change', updatePrices);

  updatePrices();

  // function to update each page when user click prev btn and next btn
});


document.addEventListener("DOMContentLoaded", function () {
    const taxForm = document.getElementById('taxForm');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const taxResult = document.getElementById('taxResult');
  
    taxForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const age = document.getElementById('age').value;
      const income = parseFloat(document.getElementById('income').value);
      const extraIncome = parseFloat(document.getElementById('extraIncome').value);
      const deductions = parseFloat(document.getElementById('deductions').value);
  
      const ageError = document.getElementById('ageError');
      const incomeError = document.getElementById('incomeError');
      const extraIncomeError = document.getElementById('extraIncomeError');
      const deductionsError = document.getElementById('deductionsError');
  
      ageError.style.display = 'none';
      incomeError.textContent = '';
      extraIncomeError.textContent = '';
      deductionsError.textContent = '';
  
      let hasErrors = false;
      if (!age) {
        ageError.style.display = 'inline';
        hasErrors = true;
      }
      if (isNaN(income)) {
        incomeError.textContent = 'Invalid input';
        hasErrors = true;
      }
      if (isNaN(extraIncome)) {
        extraIncomeError.textContent = 'Invalid input';
        hasErrors = true;
      }
      if (isNaN(deductions)) {
        deductionsError.textContent = 'Invalid input';
        hasErrors = true;
      }
  
      if (!hasErrors) {
        let tax = 0;
        if (income + extraIncome - deductions > 800000) {
          if (age === '<40') {
            tax = 0.3 * (income + extraIncome - deductions - 800000);
          } else if (age === '>=40 & <60') {
            tax = 0.4 * (income + extraIncome - deductions - 800000);
          } else if (age === '>=60') {
            tax = 0.1 * (income + extraIncome - deductions - 800000);
          }
        }
  
        taxResult.textContent = `INR ${tax}`;
        modal.style.display = 'block';
      }
    });
  
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  
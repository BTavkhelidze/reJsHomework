const form = document.querySelector<HTMLFormElement>('form');

if (form) {
  const id = location.pathname.split('/')[2];

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const titleInput = form.querySelector<HTMLInputElement>(
      'input[name="title"]'
    );
    const categoryInput = form.querySelector<HTMLInputElement>(
      'input[name="category"]'
    );
    const amountInput = form.querySelector<HTMLInputElement>(
      'input[name="amount"]'
    );

    if (!titleInput || !categoryInput || !amountInput) {
      console.error('Form inputs not found');
      return;
    }

    const newExpense = {
      title: titleInput.value,
      category: categoryInput.value,
      amount: parseFloat(amountInput.value),
    };

    try {
      const res = await fetch(`http://localhost:3000/expenses-list/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      });

      if (res.ok) {
        titleInput.value = '';
        categoryInput.value = '';
        amountInput.value = '';

        setTimeout(() => {
          location.href = `/expenses-list/${id}`;
        }, 1000);
      } else {
        console.error('Failed to update expense:', res.statusText);
        alert('Failed to update expense. Please try again.');
      }
    } catch (error) {
      console.error('Error while updating expense:', error);
      alert(
        'An error occurred while updating the expense. Please try again later.'
      );
    }
  });
} else {
  console.error('Form element not found.');
}

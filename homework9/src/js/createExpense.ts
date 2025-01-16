const formCreate = document.querySelector<HTMLFormElement>('form');

if (formCreate) {
  formCreate.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const titleInput = formCreate.querySelector<HTMLInputElement>(
      'input[name="title"]'
    );
    const categoryInput = formCreate.querySelector<HTMLInputElement>(
      'input[name="category"]'
    );
    const amountInput = formCreate.querySelector<HTMLInputElement>(
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
      const res = await fetch('http://localhost:3000/expenses-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newExpense),
      });

      if (res.ok) {
        titleInput.value = '';
        categoryInput.value = '';
        amountInput.value = '';

        setTimeout(() => {
          location.href = `/expenses-list`;
        }, 1000);
      } else {
        console.error('Failed to create expense:', res.statusText);
        alert('Failed to create expense. Please try again.');
      }
    } catch (error) {
      console.error('Error while creating expense:', error);
      alert(
        'An error occurred while creating the expense. Please try again later.'
      );
    }
  });
} else {
  console.error('Form element not found.');
}

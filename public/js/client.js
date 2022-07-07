const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const desc = event.target.inputDesc.value;
  const name = event.target.inputName.value;
  const { id } = event.target;

  const sendChanges = await fetch(`/animalsApi/${form.id}/edit`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id, name, desc }),
  });

  if (sendChanges.status === 200) {
    window.location = '/animals';
  }
});

// const allChangeButtons = document.querySelectorAll('.card_change');
// allChangeButtons.forEach((button) => button.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(`Ты кликнула на карточку с id ${button.id}`);
// // const changeCard = await
// }));

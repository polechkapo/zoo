document.querySelector('.card__lists')?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCard')) {
    event.preventDefault();
    const url = event.target.href;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json();
    if (data.status === 'ok') {
      document.querySelector('.cardItem').remove();
      event.target.remove();
    }
  }
});

const formEdit = document.querySelector('.tarif-edit');
// console.log(formEdit);
// const btn1 = document.querySelector('.btn1');

formEdit.addEventListener('submit', async (event) => {
  event.preventDefault();
  // const arr1 = [];

  const in1 = event.target.in10.value;
  const in2 = event.target.in11.value;
  const in3 = event.target.in12.value;
  const in4 = event.target.in13.value;

  const in5 = event.target.in20.value;
  const in6 = event.target.in21.value;
  const in7 = event.target.in22.value;
  const in8 = event.target.in23.value;

  const in9 = event.target.in30.value;
  const in10 = event.target.in31.value;
  const in11 = event.target.in32.value;
  const in12 = event.target.in33.value;

  const arr1 = [in1, in2, in3, in4];
  const arr2 = [in5, in6, in7, in8];
  const arr3 = [in9, in10, in11, in12];
  const res = await fetch('/cabinet/api/edit', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      arr1, arr2, arr3,
    }),
  });
  const status = res.text();
  console.log(status);
});

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const desc = event.target.inputDesc.value;
  const name = event.target.inputName.value;
  const { id } = event.target;
  //   const { photo } = event.target.inputFile.value;
  //   console.log(photo);

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

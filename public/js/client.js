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
formEdit?.addEventListener('submit', async (event) => {
  event.preventDefault();

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
  const status = await res.text();
  console.log(status);
  if (status === 'ok') {
    alert('тариф изменен');
  }
});

const AdmEdit = document.querySelector('.AdmEdit');
AdmEdit?.addEventListener('submit', async (event) => {
  event.preventDefault();
  // console.log(123);
  const login = event.target.login.value;
  const pass1 = event.target.pas.value;
  const pass2 = event.target.pass2.value;
  // console.log(login);
  // console.log(pass1);
  // console.log(pass2);

  if (pass1 !== pass2) {
    alert('пароль не совпадает, ДУБИНА!');
    return;
  }
  const { id } = event.target.dataset;
  const res = await fetch(`/cabinet/api/${id}/edit`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login, pass1,
    }),
  });
  const req = await res.text();
  if (req === 'ok') {
    alert('логин и пароль изменен');
  }
});

const addAdmin = document.querySelector('.addAdmin');
addAdmin?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(123);
  const login = event.target.login.value;
  const pass1 = event.target.pass.value;
  const pass2 = event.target.pass1.value;
  console.log(login);
  console.log(pass1);
  console.log(pass2);
  if (pass1 !== pass2) {
    alert('пароль не совпадает, ДУБИНА!');
    return;
  }
  const res = await fetch('/cabinet/api/add', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login, pass1,
    }),
  });
  event.target.login.value = '';
  event.target.pass.value = '';
  event.target.pass1.value = '';
  const req = await res.json();
  console.log('===>', req.admin);
  alert(`админ ${req.admin.login} успешно добавлен`);
  const html = (
    `<div className="tar delAdm1">
      <p>{${req.admin.login}</p>
      <a href="/" data-id={${req.admin.id} className="btn-x">X</a>
    </div>`
  );
  document.querySelector('.delAdm').insertAdjacentHTML('delAdm1', html);
  // document.querySelector('#die-container').innerHTML = (
  //   `<div class="die">
  //       <span class="roll">
  //         ${die}
  //       </span>
  //     </div>`
  // );
});

const delAdm = document.querySelector('.delAdm');
delAdm?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('btn-x')) {
    const { id } = event.target.dataset;
    const res = await fetch(`/cabinet/api/${id}/del`, {
      method: 'DELETE',
    });
    const req = await res.text();
    alert(`админ ${req} успешно удален`);
    document.querySelector('.delAdm1').remove();
  }
});

const addAnimals = document.querySelector('.addAnimals');
addAnimals?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const desc = event.target.desc.value;
  console.log(name);
  console.log(desc);
  const res = await fetch('/cabinet/api/add/animal', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name, desc,
    }),
  });
  console.log(111);
  event.target.name.value = '';
  event.target.desc.value = '';
  const req = await res.text();
  alert('гамункул добавлен добавлана');
});
// console.log(123);

const editform = document.querySelector('.editForm');
console.log(editform);
editform?.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(123);
  const desc = event.target.inputDesc.value;
  const name = event.target.inputName.value;
  const { id } = event.target;
  const sendChanges = await fetch(`/animalsApi/${editform.id}/edit`, {
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

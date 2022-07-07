document.querySelector('.card__lists').addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCard')) {
    event.preventDefault();
    const url = event.target.href  
    const response = await fetch(url, {
      method: 'DELETE',
    });    
    const data = await response.json();   
    if(data.status === 'ok') {     
      document.querySelector('.cardItem').closest('.cardItem').remove();      
      event.target.remove();    
    };
  };
});


const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const list = document.getElementById('guest-list');
let guestCount = 0;
const maxGuests = 10;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = input.value.trim();
  if (!name) return;

  if (guestCount >= maxGuests) {
    alert('Guest limit reached (10)');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name}</span>
    <div>
      <button class=\"rsvp\">Attending</button>
      <button class=\"remove\">Remove</button>
    </div>
  `;

  list.appendChild(li);
  guestCount++;

  input.value = '';

  
  li.querySelector('.rsvp').addEventListener('click', (e) => {
    const btn = e.target;
    btn.textContent =
      btn.textContent === 'Attending' ? 'Not Attending' : 'Attending';
  });


  li.querySelector('.remove').addEventListener('click', () => {
    list.removeChild(li);
    guestCount--;
  });
});

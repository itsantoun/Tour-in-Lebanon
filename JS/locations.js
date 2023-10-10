const el = document.getElementById('places');

el.addEventListener('change', function handleChange(event) {
    const sage = document.getElementById('Jeita');
  if (event.target.value == '1') {
    sage.style.display = 'block';
  } else {
    sage.style.display = 'none';
  }
});



el.addEventListener('change', function handleChange(event) {
    const b = document.getElementById('Baalbek');
  if (event.target.value == '2') {
    b.style.display = 'block';
  } else {
    b.style.display = 'none';
  }
});



el.addEventListener('change', function handleChange(event) {
    const r = document.getElementById('Raouche');
  if (event.target.value == '3') {
    r.style.display = 'block';
  } else {
    r.style.display = 'none';
  }
});

el.addEventListener('change', function handleChange(event) {
    const o = document.getElementById('OldSouk');
  if (event.target.value == '4') {
    o.style.display = 'block';
  } else {
    o.style.display = 'none';
  }
});


el.addEventListener('change', function handleChange(event) {
    const b1 = document.getElementById('Beit');
  if (event.target.value == '5') {
    b1.style.display = 'block';
  } else {
    b1.style.display = 'none';
  }
});

el.addEventListener('change', function handleChange(event) {
    const g = document.getElementById('Qadisha');
  if (event.target.value == '6') {
    g.style.display = 'block';
  } else {
    g.style.display = 'none';
  }
});




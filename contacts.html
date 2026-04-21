
// animation on scroll
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.card').forEach(el=>observer.observe(el));

function calculate(){
  const type = document.getElementById('type').value;
  const city = document.getElementById('city').value;

  const base = {
    md: 1000000,
    mall: 800000,
    standalone: 1500000
  }[type];

  const multiplier = parseFloat(city);

  const costs = {
    franchise: 50000,
    rent: base * 0.2 * multiplier,
    equipment: base * 0.3,
    staff: base * 0.15,
    repair: base * 0.1,
    marketing: base * 0.05,
    products: base * 0.1,
    utilities: base * 0.05,
    taxes: base * 0.05
  };

  let total = 0;
  for(let key in costs){ total += costs[key]; }

  document.getElementById("result").innerHTML =
    "Загальні витрати: <b>$" + Math.round(total) + "</b>";

  const ctx = document.getElementById('chart');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(costs),
      datasets: [{ data: Object.values(costs) }]
    }
  });
}

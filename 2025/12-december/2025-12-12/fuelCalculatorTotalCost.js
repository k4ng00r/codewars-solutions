function fuelPrice(litres, pricePerLitre) {
  let discount = 0;
  switch (true) {
    case (litres >= 10): discount = 0.25; break;
    case (litres >= 8): discount = 0.20; break;
    case (litres >= 6): discount = 0.15; break;
    case (litres >= 4): discount = 0.10; break;
    case (litres >= 2): discount = 0.05; break;
    default: discount = 0.0;
  }
  const x = pricePerLitre * litres - discount * litres;
  return +Number.parseFloat(x).toFixed(2);
}
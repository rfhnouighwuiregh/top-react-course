function PrimeConditionsReturn() {
  let text;
  const isAdmin = true;

  if (isAdmin) {
    text = <p>ю ис администратион</p>;
  } else {
    text = <p></p>;
  }

  return text;
}

export default PrimeConditionsReturn;

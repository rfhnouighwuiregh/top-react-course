function PrimeConditionsShow() {
  let text;
  const isAdult = true;

  if (isAdult) {
    text = <p>ok</p>;
  } else {
    text = <p>ты че ахуел пёс?</p>;
  }

  return <div>{text}</div>;
}
export default PrimeConditionsShow;

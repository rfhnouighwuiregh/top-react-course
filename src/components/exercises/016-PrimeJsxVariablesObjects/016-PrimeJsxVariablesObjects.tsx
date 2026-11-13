function PrimeJsxVariablesObjects() {
  const obj = { n: 'john', s: 'smit' };

  return (
    <div>
      <p>
        name <span>{obj.n} </span>
        <br />
        surname <span>{obj.s}</span>
      </p>
    </div>
  );
}
export default PrimeJsxVariablesObjects;

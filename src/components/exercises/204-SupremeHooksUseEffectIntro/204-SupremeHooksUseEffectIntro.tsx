import { useEffect } from 'react';
function SupremeHooksUseEffectIntro() {
  useEffect(() => {
    document.body.style.backgroundColor = 'pink';
  }, []);
  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default SupremeHooksUseEffectIntro;

import React, { useContext } from 'react';

// hook pattern
import { FamilyContext } from '../App';

const Siblings = () => {
  const value = useContext(FamilyContext);

  return (
    <section className="siblings">
      {value.siblings.map(s => (
        <div className="person" key={s.name}>
          <img width="150" src={s.img} alt={s.name} />
          <strong>{s.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;
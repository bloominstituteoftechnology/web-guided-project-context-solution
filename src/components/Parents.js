import React from 'react';

// render prop pattern 😫🤮😵
import { FamilyContext } from '../App';

const Parents = () => {
  return (
    <section className="parents">
      <FamilyContext.Consumer>
        {family => (
          // React.Fragment
          <>
            {family.parents.map(p => (
              <div className="person" key={p.name}>
                <img width="150" src={p.img} alt={p.name} />
                <strong>{p.name}</strong>
              </div>
            ))}
          </>
        )}
      </FamilyContext.Consumer>
    </section>
  );
};

export default Parents;

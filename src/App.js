import React, { useState, createContext } from 'react';

import FamilyTree from './components/FamilyTree';
import './styles.scss';

import { data } from './data';

export const FamilyContext = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <FamilyContext.Provider value={activeFamily}>
        <section className="header">
          <h1>Family Trees</h1>
          {families.map(d => (
            <button
              className={`family-button ${d.familyName ===
                activeFamily.familyName && 'active'}`}
              key={d.familyName}
              onClick={() => setActiveFamily(d)}
            >
              {d.familyName}
            </button>
          ))}
        </section>
        {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>
    </div>
  );
}

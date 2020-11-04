import React from 'react';

import Parents from './Parents';
import Siblings from './Siblings';

// TODO: consume data via context instead of props

export default function FamilyTree(props) {
  return (
    <section className="FamilyTree">
      <h1>{props.family.familyName}</h1>
      <h2>Parents</h2>
      <Parents />
      <div className="spacer" />
      <h2>Siblings</h2>
      <Siblings />
    </section>
  );
}
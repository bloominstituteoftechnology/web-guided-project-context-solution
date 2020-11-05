import React, {useContext} from 'react';

import Parents from './Parents';
import Siblings from './Siblings';
import { FamilyContext } from './../App';


export default function FamilyTree() {
  const family = useContext(FamilyContext);

  return (
    <section className="FamilyTree">
      <h1>{family.familyName}</h1>
      <h2>Parents</h2>
      <Parents />
      <div className="spacer" />
      <h2>Siblings</h2>
      <Siblings />
    </section>
  );
}
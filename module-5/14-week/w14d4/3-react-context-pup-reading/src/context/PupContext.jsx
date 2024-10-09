

import { createContext, useState } from 'react';
import speedy from '../pups/speedy-pup.jpg';
// ...

export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(speedy);

  return (
    <PupContext.Provider>
      {props.children}
    </PupContext.Provider>
  );
}
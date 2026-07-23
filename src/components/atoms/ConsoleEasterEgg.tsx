'use client';

import { useEffect } from 'react';

// Module-level so React's double-mount in dev doesn't log twice
let alreadyGreeted = false;

const ConsoleEasterEgg = () => {
  useEffect(() => {
    if (alreadyGreeted) return;
    alreadyGreeted = true;

    console.log(
      '%cmartacodes.it',
      `font: 600 28px ui-monospace, "JetBrains Mono", monospace;`
    );
    console.log(
      '%c👋 You found the console. Nicely done.',
      `font-size: 13px;`
    );
    console.log(
      '%cwhile (awake) {\n  code();\n  coffee();\n  repeat();\n}',
      `font-family: ui-monospace, monospace;`
    );
    console.log(
      '%c→ Hiring? marta_panc@me.com',
      `font-size: 13px;`
    );
  }, []);

  return null;
};

export default ConsoleEasterEgg;

LinkedIn's daily puzzles are good, but there's only one of each a day. So I rebuilt two of them –
<a href="https://queens-unlimited.netlify.app" target="_blank">Queens</a> and
<a href="https://tango-unlimited.netlify.app" target="_blank">Tango</a> – with generators that make as many boards as you
want, a daily board seeded from the date so it's the same on every device, and a difficulty rating that is **measured
rather than assumed**.

Both generators work backwards from a finished grid. For Queens that means drawing a valid placement first, then growing
the colour regions around it – which almost never yields a uniquely solvable board: measured at about **1% across 2,400
attempts**. Rerolling was hopeless, so instead each rival solution is hunted down and killed: find a second solution,
take one of its queens that ours doesn't use, and move that single cell into a neighbouring region so the rival becomes
illegal while ours is untouched. That took the yield to 31–59%. Tango starts from a random legal grid, writes down every
clue it implies, then strips them away one at a time while the answer stays unique – shuffling cells and `=`/`×` signs
together, since removing either kind first produces a degenerate board.

Difficulty isn't board size or clue count. Each game has a **logical solver** whose deduction rules are ordered
easiest-first, and a board's rating is the hardest rule it actually *forces* you to use. The same ladder powers the
hints: they explain the next forced step rather than giving it away, highlight only the cells involved, and hold the
board on that step until you've acted on it. A build-time check proves the ladder alone walks every generated board to
its one real solution – the promise being that you never have to guess.

The two games live in a **pnpm workspace** and share more than they look like they would: the difficulty ladder, the
seeded RNG, local progress storage, the leaderboard and the dialogs are one package, imported as source. What isn't
shared is what makes each game itself – its solver, its generator, its board. Each is a **Next.js** PWA that installs to
the home screen and plays fully offline, since boards are generated on-device, and each deploys to its own **Netlify**
site that skips the build when a push didn't touch it.

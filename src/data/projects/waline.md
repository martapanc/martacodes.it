Adding comments to a static site usually means handing your readers' data to a third party and accepting whatever UI
they give you. [Waline](https://github.com/walinejs/waline) is a lovely open-source alternative - a self-hosted comment
system with a Vue widget and a serverless backend - but running it for a real site meant it needed to behave the way I
wanted, not the way it shipped.

So I forked it. The client is patched and published as a private package, **`@martapanc/waline-client`**, to **GitHub
Packages**, which means the sites that consume it pin a normal semver dependency instead of vendoring a patched copy or
maintaining a long-lived diff. The **server** runs as a **Netlify Function**, with all traffic redirected into a single
handler.

The changes that mattered most were about moderation and reach. Comments now go through an *audit-first* flow so
nothing appears publicly before I've seen it, and a "please accept the comment regulations" confirmation sits next to
the Submit button - small, but it sets expectations before someone hits send rather than after. On the other side, new
comments *and* reactions fire **Discord and Telegram notifications**, so I actually find out when someone engages
instead of discovering it a fortnight later. The rest was polish: readable relative dates, breathing room between the
Like and Comment controls, and moving the Giphy API key out of the bundle and into client initialisation where it
belongs.

The fun part of forking a mature OSS project is how much of the work is *restraint* - keeping the diff small enough
that pulling upstream changes stays a merge rather than an archaeology exercise.

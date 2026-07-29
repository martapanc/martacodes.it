A media server kept fragmenting my ~12,000-track MP3 library into duplicate albums, and the usual advice – "just re-tag
everything" – is terrifying advice when the dataset is irreplaceable and half the files came from sources you can't
re-download. So I built `mlt`, a small **Python** toolkit for batch tag editing that treats _not corrupting the library_
as the actual feature.

The tool has three parts: a **diagnostic** pass that finds the root cause of album splits (divergent MusicBrainz ids,
blank album-artist fields, inconsistent artwork or year, mixed ID3 versions, disc/track collisions), a set of **fixers**
for tag spam, conflicting ID3v1 frames and version normalisation, and a **playlist generator** that turns keyword and
include/exclude lists into portable `.m3u8` files.

The core of it is one function. `audio_fingerprint` takes a SHA-256 of the MPEG payload alone, with every tag container
stripped on a scratch copy – because you _can't_ verify a tag write by comparing reported duration, which shifts on a
VBR file even when the audio is untouched. Every mutating command dry-runs by default, backs up the original, and
asserts that fingerprint is unchanged afterwards. Across thousands of writes the assertion never fired, which is exactly
the point: proof rather than hope.

The rest of the value is in the gotchas the code now encodes – `glob` treating `[` and `]` as a character class, so a
folder named `Avatar [Deluxe Edition]` silently matches zero files and a write "succeeds" while touching nothing; macOS
storing filenames as Unicode NFD, so `príncipe` never matches an NFC literal; ExifTool being read-only for MP3;
AppleDouble `._*` files sharing the `.mp3` extension. Each one is a bug that looks like success.

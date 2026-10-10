#!/bin/sh
# Re-renders the public baseline CV from the AI CV master into public/cv.pdf.
# The public copy drops the phone number and the permit line; the master is not changed.
# The public link stays https://vospr.github.io/cv.pdf; commit and push to publish.
set -eu
here=$(cd "$(dirname "$0")/.." && pwd)
design="$here/../drafts/cv/design"
tmp=$(mktemp -d)
python3 - "$design/cv-mono-spec.html" "$tmp/cv-mono-spec.html" <<'PY'
import re, sys
s = open(sys.argv[1], encoding="utf-8").read()
s, n_phone = re.subn(r" · \+41[\d ]+(?= · )", "", s)
s, n_permit = re.subn(r"\s*<p class=\"permit\">.*?</p>", "", s)
if n_phone != 1 or n_permit != 1:
    sys.exit(f"update-cv: expected one phone and one permit line, found {n_phone} and {n_permit}")
open(sys.argv[2], "w", encoding="utf-8").write(s)
PY
"$design/render_pdf.sh" "$tmp/cv-mono-spec.html" "$here/public/cv.pdf"
rm -rf "$tmp"

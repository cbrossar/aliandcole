import pandas as pd
import re

def split_guests(name_str):
    # Normalize and title-case
    s = str(name_str).strip()
    s = re.sub(r'\s+', ' ', s)        # collapse repeated whitespace
    s = s.title()

    # Split on commas, ampersands, or the word 'and' (use word boundaries so "Terando" is safe)
    parts = [p.strip() for p in re.split(r'\s*(?:,|&|\band\b)\s*', s, flags=re.I) if p.strip()]

    # Find fallback surname from the rightmost part that has >=2 tokens
    fallback_last = None
    for part in reversed(parts):
        toks = part.split()
        if len(toks) >= 2:
            fallback_last = toks[-1]
            break

    guests = []
    for part in parts:
        toks = part.split()
        if not toks:
            continue
        if len(toks) == 1:
            guests.append((toks[0], fallback_last if fallback_last else ""))
        else:
            guests.append((toks[0], toks[-1]))
    return guests


# --- Run the conversion ---
df = pd.read_csv("Ali And Cole Guests Website.csv")

rows = []
for rsvp_id, name in enumerate(df["Name of Guest"], start=1):
    for first, last in split_guests(name):
        rows.append({"RSVP ID": rsvp_id, "First Name": first, "Last Name": last})

guests_df = pd.DataFrame(rows, columns=["RSVP ID", "First Name", "Last Name"])
guests_df.to_csv("wedding-guest-list-converted.csv", index=False)
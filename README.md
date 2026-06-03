# FIFA World Cup Dataset (1930–2014)

## Source
- **Dataset:** [FIFA World Cup - Kaggle](https://www.kaggle.com/datasets/abecklas/fifa-world-cup)
- **License:** CC0-1.0 (Public Domain)
- **Downloaded:** 2026-06-03

## Raw Files

| File | Rows | Description |
|------|------|-------------|
| `WorldCups.csv` | 20 | Tournament-level summary (winner, runner-up, goals, attendance) |
| `WorldCupMatches.csv` | 4,572 | Match-level results (teams, scores, stages, stadiums, referees) |
| `WorldCupPlayers.csv` | 37,784 | Player appearances per match (position, events, coach) |

## Data Cleaning

Cleaning script: [`clean_data.py`](clean_data.py)

### WorldCups_clean.csv (20 rows, 10 columns)

| Change | Details |
|--------|---------|
| Attendance type fix | Removed dot separators (e.g. `1.045.246` → `1045246`) and converted from string to integer |
| Team name standardisation | Renamed `Germany FR` → `Germany` across Winner, Runners-Up, Third, and Fourth columns |

### WorldCupMatches_clean.csv (852 rows, 22 columns)

| Change | Details |
|--------|---------|
| Removed null rows | Dropped 3,720 empty/duplicate rows (852 valid matches remain) |
| Data type fixes | Converted Year, Goals, Attendance, RoundID, MatchID from float to integer |
| Datetime parsing | Parsed mixed-format date strings (e.g. `13 Jul 1930 - 15:00`, `17 June 1970 - 16:00`) into datetime |
| Team name standardisation | `Germany FR` → `Germany`, fixed encoding issues (e.g. `rn)">Iran` → `Iran`) |
| Stage normalisation | Consolidated 23 stage labels into 6: `Group Stage`, `Round of 16`, `Quarter-finals`, `Semi-finals`, `Third Place`, `Final` |
| New column: `Result` | Derived from goals: `Home Win`, `Away Win`, or `Draw` |
| New column: `Total Goals` | Sum of Home Team Goals + Away Team Goals |

### WorldCupPlayers_clean.csv (37,784 rows, 13 columns)

| Change | Details |
|--------|---------|
| Filtered to valid matches | Kept only rows matching valid MatchIDs from the cleaned matches file |
| Position nulls filled | Replaced missing Position values with `Unknown` |
| Line-up labels | Renamed `S` → `Starter`, `N` → `Substitute` |
| New column: `Goals` | Count of goal events (e.g. `G40'`) per player per match |
| New column: `OwnGoals` | Count of own goal events (`OG`) per player per match |
| New column: `YellowCards` | Count of yellow card events (`Y`) per player per match |
| New column: `RedCards` | Count of red card (`R`) and second yellow (`SY`) events per player per match |

## Data Merge: 2018 & 2022 World Cups

The original dataset only covered 1930–2014. Match data for 2018 and 2022 was sourced from a supplementary Kaggle dataset and merged in.

- **Supplement source:** [FIFA World Cup Matches (1974–2022)](https://www.kaggle.com/datasets/ibrahimshahrukh/fifa-world-cup-matches-19742022-dataset)
- **License:** CC-BY-NC-SA-4.0
- **Merge script:** [`merge_data.py`](merge_data.py)

### What was added

| Tournament | Winner | Matches Added |
|------------|--------|---------------|
| 2018 (Russia) | France | 64 |
| 2022 (Qatar) | Argentina | 64 |

### WorldCupMatches_clean.csv

- 128 matches appended (2018 + 2022)
- Columns mapped from supplement format (`year` → `Year`, `home_team` → `Home Team Name`, etc.)
- `Result` and `Total Goals` derived to match existing data

### WorldCups_clean.csv

- 2 tournament rows added manually with verified stats (goals, attendance, final standings)

### Limitations of merged data

- **Half-time scores** not available for 2018/2022 matches (set to 0)
- **Attendance, Stadium, City, Referee** not available for 2018/2022 matches (set to defaults)
- **WorldCupPlayers_clean.csv** remains 1930–2014 only (no player data for 2018/2022)

## Data Quality Notes

- **Coverage:** 22 World Cup tournaments from 1930 to 2022
- **Player Position:** ~89% of position values are unknown (only GK and Captain reliably tagged)
- **Player Events:** ~76% of event values are null (no event recorded for that player in that match)
- **Attendance:** Two null attendance values in the raw matches file were filled with 0
- **2018/2022 gaps:** See "Limitations of merged data" above

## Clean File Summary

| File | Rows | Columns | Coverage |
|------|------|---------|----------|
| `WorldCups_clean.csv` | 22 | 10 | 1930–2022 |
| `WorldCupMatches_clean.csv` | 980 | 22 | 1930–2022 |
| `WorldCupPlayers_clean.csv` | 37,784 | 13 | 1930–2014 |

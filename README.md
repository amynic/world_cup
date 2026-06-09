# FIFA World Cup Dataset (1930–2022)

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
| Team name standardisation | Renamed `Germany FR` → `West Germany` across Winner, Runners-Up, Third, and Fourth columns (preserving the historical distinction from reunified Germany) |

### WorldCupMatches_clean.csv (852 rows, 22 columns)

| Change | Details |
|--------|---------|
| Removed null rows | Dropped 3,720 empty/duplicate rows (852 valid matches remain) |
| Data type fixes | Converted Year, Goals, Attendance, RoundID, MatchID from float to integer |
| Datetime parsing | Parsed mixed-format date strings (e.g. `13 Jul 1930 - 15:00`, `17 June 1970 - 16:00`) into datetime |
| Team name standardisation | `Germany FR` → `West Germany` (preserving historical distinction), fixed encoding issues (e.g. `rn)">Iran` → `Iran`) |
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

## Running the Analysis

The analysis notebook [`world_cup_analysis.ipynb`](world_cup_analysis.ipynb) contains 16 exploratory analyses with visualisations covering tournament winners, goal trends, attendance, home advantage, top scorers, discipline, and more.

### Prerequisites

- Python 3.9+
- Required packages:

```bash
pip install pandas matplotlib seaborn jupyter
```

### Option 1: VS Code (Recommended)

1. Install the [Jupyter extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) for VS Code
2. Open the notebook:
   ```bash
   code world_cup_analysis.ipynb
   ```
3. Select a Python kernel (top right of the notebook)
4. **Run All Cells** — `Ctrl+Shift+Enter` (Windows) / `Cmd+Shift+Enter` (Mac)

### Option 2: Jupyter Notebook / JupyterLab

```bash
# Start Jupyter
jupyter notebook

# Or use JupyterLab
jupyter lab
```

Then open `world_cup_analysis.ipynb` from the file browser and click **Run All** from the **Cell** menu.

### Option 3: Command Line

Run the notebook non-interactively and export to HTML:

```bash
jupyter nbconvert --to html --execute world_cup_analysis.ipynb
```

This generates `world_cup_analysis.html` which you can open in any browser.

### What's in the Analysis

| # | Section | Chart Type |
|---|---------|------------|
| 1 | 🏆 Tournament Winners | Horizontal bar |
| 2 | 📈 Goals per Tournament | Dual-axis bar + line |
| 3 | 🏟️ Attendance Trends | Area chart |
| 4 | 🏠 Home Advantage | Pie + bar over time |
| 5 | 🌍 Top 15 Countries (All-Time) | Stacked W/D/L bars |
| 6 | ⚽ Top 20 Goal Scorers | Horizontal bar |
| 7 | 🟨🟥 Cards by Tournament | Stacked bar |
| 8 | 🎯 Goals by Match Stage | Box plot + bar |
| 9 | 📊 1st vs 2nd Half Goals | Pie + grouped bar |
| 10 | 🔥 Highest Scoring Matches | Horizontal bar |
| 11 | 🏠🌍 Host Nation Performance | Bar + table |
| 12 | 😲 Biggest Upsets | Horizontal bar |
| 13 | 🎽 Most-Capped World Cup Players | Horizontal bar |
| 14 | 🌐 Country Debut Analysis | Timeline |
| 15 | 🔥 Head-to-Head Rivalry Heatmap | Heatmap |
| 16 | 📏 Score Margin Distribution | Distribution |

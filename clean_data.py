import pandas as pd
import os

out_dir = r'C:\Users\amynic\github\world_cup'

# ============================================================
# 1. WorldCups.csv
# ============================================================
cups = pd.read_csv(os.path.join(out_dir, 'WorldCups.csv'))

# Fix Attendance: remove dot separators and convert to int
cups['Attendance'] = cups['Attendance'].str.replace('.', '', regex=False).astype(int)

# Standardize team names (Germany FR -> Germany)
for col in ['Winner', 'Runners-Up', 'Third', 'Fourth']:
    cups[col] = cups[col].replace({'Germany FR': 'Germany'})

cups.to_csv(os.path.join(out_dir, 'WorldCups_clean.csv'), index=False)
print('WorldCups_clean.csv saved')
print('Shape:', cups.shape)
print('Dtypes:')
print(cups.dtypes)
print()

# ============================================================
# 2. WorldCupMatches.csv
# ============================================================
matches = pd.read_csv(os.path.join(out_dir, 'WorldCupMatches.csv'))

# Drop fully null rows
matches = matches.dropna(subset=['Year']).copy()

# Fix types
matches['Year'] = matches['Year'].astype(int)
matches['Home Team Goals'] = matches['Home Team Goals'].astype(int)
matches['Away Team Goals'] = matches['Away Team Goals'].astype(int)
matches['Half-time Home Goals'] = matches['Half-time Home Goals'].astype(int)
matches['Half-time Away Goals'] = matches['Half-time Away Goals'].astype(int)
matches['Attendance'] = matches['Attendance'].fillna(0).astype(int)
matches['RoundID'] = matches['RoundID'].astype(int)
matches['MatchID'] = matches['MatchID'].astype(int)

# Parse datetime (mixed month formats: 'Jul' vs 'June')
matches['Datetime'] = pd.to_datetime(matches['Datetime'].str.strip(), format='mixed', dayfirst=True)

# Standardize team names
name_fixes = {
    'Germany FR': 'Germany',
    'rn)">Iran': 'Iran',
}
matches['Home Team Name'] = matches['Home Team Name'].replace(name_fixes)
matches['Away Team Name'] = matches['Away Team Name'].replace(name_fixes)

# Fix any names containing encoding issues
for col in ['Home Team Name', 'Away Team Name']:
    matches[col] = matches[col].str.replace(r'rn\)\">', '', regex=True)
    matches[col] = matches[col].replace({
        "C\u00f4te d'Ivoire": "Ivory Coast",
        "Ivory Coast": "Ivory Coast",
    })

# Normalize stage names
stage_map = {
    'Group 1': 'Group Stage', 'Group 2': 'Group Stage', 'Group 3': 'Group Stage',
    'Group 4': 'Group Stage', 'Group 5': 'Group Stage', 'Group 6': 'Group Stage',
    'Group A': 'Group Stage', 'Group B': 'Group Stage', 'Group C': 'Group Stage',
    'Group D': 'Group Stage', 'Group E': 'Group Stage', 'Group F': 'Group Stage',
    'Group G': 'Group Stage', 'Group H': 'Group Stage',
    'Preliminary round': 'Group Stage', 'First round': 'Group Stage',
    'Match for third place': 'Third Place', 'Third place': 'Third Place',
    'Play-off for third place': 'Third Place',
}
matches['Stage'] = matches['Stage'].replace(stage_map)

# Add derived columns
def get_result(row):
    if row['Home Team Goals'] > row['Away Team Goals']:
        return 'Home Win'
    elif row['Home Team Goals'] < row['Away Team Goals']:
        return 'Away Win'
    else:
        return 'Draw'

matches['Result'] = matches.apply(get_result, axis=1)
matches['Total Goals'] = matches['Home Team Goals'] + matches['Away Team Goals']

matches.to_csv(os.path.join(out_dir, 'WorldCupMatches_clean.csv'), index=False)
print('WorldCupMatches_clean.csv saved')
print('Shape:', matches.shape)
print('Stages:', matches['Stage'].unique().tolist())
print('Results:', matches['Result'].value_counts().to_dict())
print()

# ============================================================
# 3. WorldCupPlayers.csv
# ============================================================
players = pd.read_csv(os.path.join(out_dir, 'WorldCupPlayers.csv'))

# Only keep players that match valid matches
valid_match_ids = set(matches['MatchID'].unique())
players = players[players['MatchID'].isin(valid_match_ids)].copy()

# Fill missing Position
players['Position'] = players['Position'].fillna('Unknown')

# Clean Line-up values
players['Line-up'] = players['Line-up'].replace({'S': 'Starter', 'N': 'Substitute'})

# Parse events into goal/card flags
events = players['Event'].fillna('')
players['Goals'] = events.str.count(r'G\d')
players['OwnGoals'] = events.str.count(r'OG\d')
players['YellowCards'] = events.str.count(r'Y\d')
players['RedCards'] = events.str.count(r'R\d') + events.str.count(r'SY\d')

players.to_csv(os.path.join(out_dir, 'WorldCupPlayers_clean.csv'), index=False)
print('WorldCupPlayers_clean.csv saved')
print('Shape:', players.shape)
print('Positions:', players['Position'].value_counts().to_dict())
print('Line-up:', players['Line-up'].value_counts().to_dict())
print('Total goals from events:', players['Goals'].sum())
print('Total yellow cards:', players['YellowCards'].sum())
print('Total red cards:', players['RedCards'].sum())

print()
print('='*60)
print('CLEANING COMPLETE - Summary')
print('='*60)
print(f"WorldCups_clean.csv:      {cups.shape[0]} rows, {cups.shape[1]} cols")
print(f"WorldCupMatches_clean.csv: {matches.shape[0]} rows, {matches.shape[1]} cols")
print(f"WorldCupPlayers_clean.csv: {players.shape[0]} rows, {players.shape[1]} cols")

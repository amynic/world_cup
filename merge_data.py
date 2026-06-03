import pandas as pd
import os

out_dir = r'C:\Users\amynic\github\world_cup'

# Load existing clean data
cups = pd.read_csv(os.path.join(out_dir, 'WorldCups_clean.csv'))
matches = pd.read_csv(os.path.join(out_dir, 'WorldCupMatches_clean.csv'), parse_dates=['Datetime'])

# Load supplement
supp = pd.read_csv(os.path.join(out_dir, 'supplement', 'world_cup_last_50_years.csv'))
new_matches = supp[supp['year'].isin([2018, 2022])].copy()

# ============================================================
# 1. Add 2018 & 2022 to WorldCupMatches_clean.csv
# ============================================================
new_matches = new_matches.rename(columns={
    'year': 'Year',
    'date': 'Datetime',
    'stage': 'Stage',
    'home_team': 'Home Team Name',
    'away_team': 'Away Team Name',
    'home_goals': 'Home Team Goals',
    'away_goals': 'Away Team Goals',
    'match_id': 'MatchID',
})

new_matches['Datetime'] = pd.to_datetime(new_matches['Datetime'])

# Add missing columns with defaults
new_matches['Stadium'] = ''
new_matches['City'] = ''
new_matches['Win conditions'] = ''
new_matches['Attendance'] = 0
new_matches['Half-time Home Goals'] = 0
new_matches['Half-time Away Goals'] = 0
new_matches['Referee'] = ''
new_matches['Assistant 1'] = ''
new_matches['Assistant 2'] = ''
new_matches['RoundID'] = 0
new_matches['Home Team Initials'] = ''
new_matches['Away Team Initials'] = ''

# Derive Result and Total Goals
def get_result(row):
    if row['Home Team Goals'] > row['Away Team Goals']:
        return 'Home Win'
    elif row['Home Team Goals'] < row['Away Team Goals']:
        return 'Away Win'
    else:
        return 'Draw'

new_matches['Result'] = new_matches.apply(get_result, axis=1)
new_matches['Total Goals'] = new_matches['Home Team Goals'] + new_matches['Away Team Goals']

# Drop the 'winner' column from supplement
new_matches = new_matches.drop(columns=['winner'], errors='ignore')

# Reorder columns to match existing
new_matches = new_matches.reindex(columns=matches.columns, fill_value='')

# Combine
combined_matches = pd.concat([matches, new_matches], ignore_index=True)
combined_matches = combined_matches.sort_values(['Year', 'Datetime']).reset_index(drop=True)
combined_matches.to_csv(os.path.join(out_dir, 'WorldCupMatches_clean.csv'), index=False)

print('WorldCupMatches_clean.csv updated')
print(f'  Before: {len(matches)} matches (up to {matches["Year"].max()})')
print(f'  Added: {len(new_matches)} matches (2018 + 2022)')
print(f'  After: {len(combined_matches)} matches (up to {combined_matches["Year"].max()})')
print()

# ============================================================
# 2. Add 2018 & 2022 to WorldCups_clean.csv
# ============================================================
new_cups = pd.DataFrame([
    {
        'Year': 2018, 'Country': 'Russia', 'Winner': 'France',
        'Runners-Up': 'Croatia', 'Third': 'Belgium', 'Fourth': 'England',
        'GoalsScored': 169, 'QualifiedTeams': 32, 'MatchesPlayed': 64,
        'Attendance': 3031768
    },
    {
        'Year': 2022, 'Country': 'Qatar', 'Winner': 'Argentina',
        'Runners-Up': 'France', 'Third': 'Croatia', 'Fourth': 'Morocco',
        'GoalsScored': 172, 'QualifiedTeams': 32, 'MatchesPlayed': 64,
        'Attendance': 3404252
    }
])

combined_cups = pd.concat([cups, new_cups], ignore_index=True)
combined_cups.to_csv(os.path.join(out_dir, 'WorldCups_clean.csv'), index=False)

print('WorldCups_clean.csv updated')
print(f'  Before: {len(cups)} tournaments')
print(f'  After: {len(combined_cups)} tournaments (1930-2022)')
print()
print('Updated winners table:')
print(combined_cups['Winner'].value_counts().to_string())
print()

# ============================================================
# Summary
# ============================================================
print('='*50)
print('MERGE COMPLETE')
print('='*50)
print(f'WorldCups_clean.csv:       {len(combined_cups)} tournaments')
print(f'WorldCupMatches_clean.csv: {len(combined_matches)} matches')
print('Coverage: 1930-2022')

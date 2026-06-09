import pandas as pd
import json
import random
import os

random.seed(42)

data_dir = os.path.dirname(__file__)
cups = pd.read_csv(os.path.join(data_dir, 'WorldCups_clean.csv'))
matches = pd.read_csv(os.path.join(data_dir, 'WorldCupMatches_clean.csv'))
players = pd.read_csv(os.path.join(data_dir, 'WorldCupPlayers_clean.csv'))

questions = []
used_ids = set()


def add_question(qid=None, question=None, options=None, answer=None, difficulty=None, category=None, fact=None, **kwargs):
    """Add a validated question to the bank."""
    # Support both 'qid' and 'id' parameter names
    if qid is None:
        qid = kwargs.get('id')
    if qid is None or qid in used_ids:
        return
    if answer not in options:
        return
    if len(options) != 4 or len(set(options)) != 4:
        return
    if not question or not answer:
        return
    used_ids.add(qid)
    questions.append({
        'id': qid,
        'question': question,
        'options': options,
        'answer': answer,
        'difficulty': difficulty,
        'category': category,
        'fact': fact
    })


def pick_distractors(correct, pool, n=3):
    """Pick n plausible distractors from pool, excluding correct."""
    candidates = [x for x in pool if x != correct]
    if len(candidates) < n:
        return None
    return random.sample(candidates, n)


def shuffled_options(correct, distractors):
    """Return shuffled list of correct + distractors."""
    opts = [correct] + distractors
    random.shuffle(opts)
    return opts


# ============================================================
# EASY: Tournament winner questions
# ============================================================
all_winners = cups['Winner'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    winner = row['Winner']
    distractors = pick_distractors(winner, all_winners)
    if distractors:
        add_question(
            f'winner-{year}',
            f'Who won the {year} FIFA World Cup?',
            shuffled_options(winner, distractors),
            winner, 'easy', 'Tournament Winners',
            f'{winner} won the {year} World Cup held in {row["Country"]}.'
        )

# ============================================================
# EASY: Host country questions
# ============================================================
all_hosts = cups['Country'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    host = row['Country']
    distractors = pick_distractors(host, all_hosts)
    if distractors:
        add_question(
            f'host-{year}',
            f'Which country hosted the {year} FIFA World Cup?',
            shuffled_options(host, distractors),
            host, 'easy', 'Host Countries',
            f'The {year} World Cup was hosted by {host}.'
        )

# ============================================================
# EASY: Runner-up questions
# ============================================================
all_runners = cups['Runners-Up'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    runner = row['Runners-Up']
    distractors = pick_distractors(runner, all_runners)
    if distractors:
        add_question(
            f'runner-up-{year}',
            f'Who was the runner-up in the {year} FIFA World Cup?',
            shuffled_options(runner, distractors),
            runner, 'easy', 'Tournament Results',
            f'{runner} lost the {year} final to {row["Winner"]}.'
        )

# ============================================================
# MEDIUM: Goals scored in tournament
# ============================================================
all_goals = cups['GoalsScored'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    goals = int(row['GoalsScored'])
    distractors = pick_distractors(goals, all_goals)
    if distractors:
        add_question(
            f'goals-total-{year}',
            f'How many goals were scored in the {year} World Cup?',
            shuffled_options(goals, distractors),
            goals, 'medium', 'Goal Stats',
            f'{goals} goals were scored across {int(row["MatchesPlayed"])} matches in {year}.'
        )

# ============================================================
# MEDIUM: Number of qualified teams
# ============================================================
all_teams_count = cups['QualifiedTeams'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    teams = int(row['QualifiedTeams'])
    distractors = pick_distractors(teams, all_teams_count)
    if distractors:
        add_question(
            f'teams-{year}',
            f'How many teams qualified for the {year} World Cup?',
            shuffled_options(teams, distractors),
            teams, 'medium', 'Tournament Facts',
            f'{teams} teams competed in the {year} World Cup in {row["Country"]}.'
        )

# ============================================================
# MEDIUM: Third place questions
# ============================================================
all_thirds = cups['Third'].unique().tolist()
for _, row in cups.iterrows():
    year = int(row['Year'])
    third = row['Third']
    distractors = pick_distractors(third, all_thirds)
    if distractors:
        add_question(
            f'third-{year}',
            f'Which team finished third in the {year} World Cup?',
            shuffled_options(third, distractors),
            third, 'medium', 'Tournament Results',
            f'{third} took third place in {year}, beating {row["Fourth"]} in the play-off.'
        )

# ============================================================
# MEDIUM: Match result questions (select interesting matches)
# ============================================================
finals = matches[matches['Stage'] == 'Final'].copy()
for _, row in finals.iterrows():
    year = int(row['Year'])
    home = row['Home Team Name']
    away = row['Away Team Name']
    hg = int(row['Home Team Goals'])
    ag = int(row['Away Team Goals'])
    score = f'{hg}-{ag}'

    # "What was the score in the YEAR final?"
    other_scores = [f'{int(r["Home Team Goals"])}-{int(r["Away Team Goals"])}' for _, r in finals.iterrows()
                    if int(r['Year']) != year]
    other_scores = list(set(other_scores))
    distractors = pick_distractors(score, other_scores)
    if distractors:
        add_question(
            f'final-score-{year}',
            f'What was the score in the {year} World Cup Final ({home} vs {away})?',
            shuffled_options(score, distractors),
            score, 'medium', 'Finals',
            f'The {year} final ended {home} {hg} - {ag} {away}.'
        )

# ============================================================
# HARD: Highest scoring match in a tournament
# ============================================================
for year in matches['Year'].unique():
    year = int(year)
    yr_matches = matches[matches['Year'] == year]
    top_match = yr_matches.loc[yr_matches['Total Goals'].idxmax()]
    home = top_match['Home Team Name']
    away = top_match['Away Team Name']
    total = int(top_match['Total Goals'])
    matchup = f'{home} vs {away}'

    other_matchups = [f'{r["Home Team Name"]} vs {r["Away Team Name"]}'
                      for _, r in yr_matches.iterrows()
                      if f'{r["Home Team Name"]} vs {r["Away Team Name"]}' != matchup]
    distractors = pick_distractors(matchup, list(set(other_matchups)))
    if distractors:
        add_question(
            f'highest-scoring-{year}',
            f'Which match had the most goals at the {year} World Cup?',
            shuffled_options(matchup, distractors),
            matchup, 'hard', 'Match Records',
            f'{matchup} produced {total} goals — the most in the {year} tournament.'
        )

# ============================================================
# HARD: Top scorer questions (from player data, 1930-2014)
# ============================================================
scorer_totals = players[players['Goals'] > 0].groupby('Player Name')['Goals'].sum()
top_scorers = scorer_totals.nlargest(20).reset_index()
all_scorer_names = top_scorers['Player Name'].tolist()

for _, row in top_scorers.head(10).iterrows():
    name = row['Player Name']
    goals = int(row['Goals'])
    distractors = pick_distractors(name, all_scorer_names)
    if distractors:
        add_question(
            f'top-scorer-{name.replace(" ", "-").lower()}',
            f'Which player scored {goals} World Cup goals (1930-2014)?',
            shuffled_options(name, distractors),
            name, 'hard', 'Player Records',
            f'{name} scored {goals} goals across their World Cup career.'
        )

# ============================================================
# CURATED: Insight-based questions from our analysis
# ============================================================
curated = [
    {
        'id': 'curated-most-titles',
        'question': 'Which country has won the most FIFA World Cup titles?',
        'options': ['Brazil', 'Italy', 'West Germany', 'Argentina'],
        'answer': 'Brazil',
        'difficulty': 'easy',
        'category': 'All-Time Records',
        'fact': 'Brazil has won the World Cup 5 times (1958, 1962, 1970, 1994, 2002).'
    },
    {
        'id': 'curated-first-winner',
        'question': 'Who won the very first FIFA World Cup in 1930?',
        'options': ['Uruguay', 'Argentina', 'Brazil', 'Italy'],
        'answer': 'Uruguay',
        'difficulty': 'easy',
        'category': 'All-Time Records',
        'fact': 'Uruguay won the inaugural World Cup in 1930, hosted on home soil in Montevideo.'
    },
    {
        'id': 'curated-home-advantage',
        'question': 'Approximately what percentage of World Cup matches are won by the home team?',
        'options': ['57%', '45%', '65%', '38%'],
        'answer': '57%',
        'difficulty': 'medium',
        'category': 'Analysis Insights',
        'fact': 'Home teams win about 57% of World Cup matches — a significant home advantage.'
    },
    {
        'id': 'curated-goals-half',
        'question': 'In which half of a World Cup match are more goals typically scored?',
        'options': ['2nd Half', '1st Half', 'Equal', 'Extra Time'],
        'answer': '2nd Half',
        'difficulty': 'medium',
        'category': 'Analysis Insights',
        'fact': 'More goals are scored in the 2nd half, likely due to fatigue and tactical changes.'
    },
    {
        'id': 'curated-cards-introduced',
        'question': 'In which World Cup were yellow and red cards first introduced?',
        'options': ['1970 (Mexico)', '1966 (England)', '1974 (Germany)', '1978 (Argentina)'],
        'answer': '1970 (Mexico)',
        'difficulty': 'hard',
        'category': 'Tournament History',
        'fact': 'Cards were introduced at the 1970 World Cup in Mexico after controversial refereeing in 1966.'
    },
    {
        'id': 'curated-highest-scoring-tournament',
        'question': 'Which World Cup had the highest average goals per match?',
        'options': ['1954 (Switzerland)', '1958 (Sweden)', '1930 (Uruguay)', '1970 (Mexico)'],
        'answer': '1954 (Switzerland)',
        'difficulty': 'hard',
        'category': 'Goal Records',
        'fact': 'The 1954 World Cup averaged 5.38 goals per match — a record that still stands.'
    },
    {
        'id': 'curated-peak-attendance',
        'question': 'Which World Cup had the highest total attendance?',
        'options': ['1994 (USA)', '2014 (Brazil)', '2006 (Germany)', '2022 (Qatar)'],
        'answer': '1994 (USA)',
        'difficulty': 'medium',
        'category': 'Tournament Facts',
        'fact': 'The 1994 World Cup in the USA attracted over 3.5 million spectators — the all-time record.'
    },
    {
        'id': 'curated-group-vs-knockout',
        'question': 'Do group stage or knockout matches typically produce more goals per game?',
        'options': ['Group Stage', 'Knockout Rounds', 'Equal', 'Finals only'],
        'answer': 'Group Stage',
        'difficulty': 'medium',
        'category': 'Analysis Insights',
        'fact': 'Group stage matches average more goals — knockout matches tend to be more cautious and tactical.'
    },
    {
        'id': 'curated-germany-names',
        'question': 'What was the official FIFA name for West Germany in tournament records before reunification?',
        'options': ['Germany FR', 'West Germany', 'Deutsche', 'German Republic'],
        'answer': 'Germany FR',
        'difficulty': 'hard',
        'category': 'Tournament History',
        'fact': 'West Germany was listed as "Germany FR" (Federal Republic) in FIFA records until reunification in 1990. In this dataset they are recorded as "West Germany" for historical clarity.'
    },
    {
        'id': 'curated-2022-winner',
        'question': 'Who won the 2022 FIFA World Cup in Qatar?',
        'options': ['Argentina', 'France', 'Croatia', 'Morocco'],
        'answer': 'Argentina',
        'difficulty': 'easy',
        'category': 'Recent History',
        'fact': 'Argentina beat France on penalties in one of the greatest World Cup finals ever played.'
    },
]

for q in curated:
    add_question(**q)

# ============================================================
# Validate and write output
# ============================================================
print(f'Total questions generated: {len(questions)}')
print(f'  Easy: {sum(1 for q in questions if q["difficulty"] == "easy")}')
print(f'  Medium: {sum(1 for q in questions if q["difficulty"] == "medium")}')
print(f'  Hard: {sum(1 for q in questions if q["difficulty"] == "hard")}')

categories = {}
for q in questions:
    categories[q['category']] = categories.get(q['category'], 0) + 1
print(f'\nCategories:')
for cat, count in sorted(categories.items()):
    print(f'  {cat}: {count}')

# Write as JS module
output_path = os.path.join(os.path.dirname(__file__), 'trivia_game', 'questions.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('const QUESTIONS = ')
    json.dump(questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f'\nWritten to {output_path}')

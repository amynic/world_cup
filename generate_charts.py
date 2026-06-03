import pandas as pd
import matplotlib.pyplot as plt
import matplotlib
import seaborn as sns
import os

matplotlib.use('Agg')
sns.set_theme(style='whitegrid', palette='muted')

data_dir = os.path.dirname(__file__)
out_dir = os.path.join(data_dir, 'trivia_game', 'charts')

cups = pd.read_csv(os.path.join(data_dir, 'WorldCups_clean.csv'))
matches = pd.read_csv(os.path.join(data_dir, 'WorldCupMatches_clean.csv'))
players = pd.read_csv(os.path.join(data_dir, 'WorldCupPlayers_clean.csv'))

charts = []

# ============================================================
# 1. Tournament Winners
# ============================================================
winners = cups['Winner'].value_counts()
fig, ax = plt.subplots(figsize=(8, 4))
colors = ['#005A93' if i == 0 else '#c8102e' if i < 3 else '#aab7c4' for i in range(len(winners))]
winners.plot(kind='barh', ax=ax, color=colors)
ax.set_xlabel('Titles')
ax.set_title('FIFA World Cup Winners (1930–2022)', fontweight='bold')
ax.invert_yaxis()
for i, v in enumerate(winners.values):
    ax.text(v + 0.05, i, str(v), va='center', fontweight='bold')
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'winners.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/winners.png',
    'title': 'All-Time Winners',
    'insight': 'Brazil leads with 5 World Cup titles, followed by Germany and Italy with 4 each. Argentina joined the 3-title club in 2022.'
})

# ============================================================
# 2. Goals Per Tournament
# ============================================================
cups['GoalsPerMatch'] = cups['GoalsScored'] / cups['MatchesPlayed']
fig, ax1 = plt.subplots(figsize=(8, 4))
ax2 = ax1.twinx()
ax1.bar(cups['Year'], cups['GoalsScored'], color='#005A93', alpha=0.7, label='Total Goals')
ax2.plot(cups['Year'], cups['GoalsPerMatch'], color='#c8102e', marker='o', linewidth=2, label='Per Match')
ax1.set_xlabel('Year')
ax1.set_ylabel('Total Goals', color='#005A93')
ax2.set_ylabel('Goals per Match', color='#c8102e')
ax1.set_title('Goals Per Tournament Over Time', fontweight='bold')
ax1.tick_params(axis='x', rotation=45)
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'goals_trend.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/goals_trend.png',
    'title': 'Goal Scoring Trends',
    'insight': 'The 1954 World Cup holds the record at 5.38 goals per match. Modern tournaments average around 2.5 goals per match — tactics and defence have evolved!'
})

# ============================================================
# 3. Home Advantage
# ============================================================
result_counts = matches['Result'].value_counts()
fig, ax = plt.subplots(figsize=(6, 4))
colors_pie = ['#005A93', '#c8102e', '#aab7c4']
ax.pie(result_counts.values, labels=result_counts.index, autopct='%1.1f%%',
       colors=colors_pie, startangle=90, textprops={'fontsize': 12})
ax.set_title('Match Results Breakdown', fontweight='bold')
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'home_advantage.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/home_advantage.png',
    'title': 'Home Advantage is Real',
    'insight': 'Home teams win roughly 57% of World Cup matches. Playing in front of your own fans makes a measurable difference!'
})

# ============================================================
# 4. Top Goal Scorers
# ============================================================
scorers = players[players['Goals'] > 0].groupby('Player Name')['Goals'].sum()
top10 = scorers.nlargest(10)
fig, ax = plt.subplots(figsize=(8, 4))
colors_bar = ['#c8102e' if i == 0 else '#005A93' for i in range(len(top10))]
top10.plot(kind='barh', ax=ax, color=colors_bar)
ax.set_xlabel('Goals')
ax.set_title('Top 10 World Cup Goal Scorers (1930–2014)', fontweight='bold')
ax.invert_yaxis()
for i, v in enumerate(top10.values):
    ax.text(v + 0.1, i, str(v), va='center', fontweight='bold')
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'top_scorers.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/top_scorers.png',
    'title': 'Top Goal Scorers',
    'insight': 'The all-time World Cup top scorers read like a hall of fame. Scoring consistently across multiple tournaments is one of football\'s greatest achievements.'
})

# ============================================================
# 5. Attendance Trends
# ============================================================
fig, ax = plt.subplots(figsize=(8, 4))
ax.fill_between(cups['Year'], cups['Attendance'], alpha=0.3, color='#005A93')
ax.plot(cups['Year'], cups['Attendance'], marker='o', color='#005A93', linewidth=2)
ax.set_xlabel('Year')
ax.set_ylabel('Total Attendance')
ax.set_title('World Cup Attendance Over Time', fontweight='bold')
ax.tick_params(axis='x', rotation=45)
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, _: f'{x/1e6:.1f}M'))
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'attendance.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/attendance.png',
    'title': 'Growing Global Audience',
    'insight': 'The 1994 USA World Cup set the attendance record at 3.59 million. The World Cup has grown from 590K spectators in 1930 to millions — a truly global event.'
})

# ============================================================
# 6. Goals by Stage
# ============================================================
stage_order = ['Group Stage', 'Round of 16', 'Quarter-finals', 'Semi-finals', 'Third Place', 'Final']
matches['Stage'] = pd.Categorical(matches['Stage'], categories=stage_order, ordered=True)
avg_goals = matches.groupby('Stage', observed=True)['Total Goals'].mean()
fig, ax = plt.subplots(figsize=(8, 4))
avg_goals.plot(kind='bar', ax=ax, color=['#005A93', '#1a6faa', '#3484bf', '#4e99d4', '#aab7c4', '#c8102e'])
ax.set_ylabel('Avg Goals per Match')
ax.set_title('Average Goals by Tournament Stage', fontweight='bold')
ax.tick_params(axis='x', rotation=30)
for i, v in enumerate(avg_goals.values):
    ax.text(i, v + 0.05, f'{v:.2f}', ha='center', fontweight='bold')
plt.tight_layout()
plt.savefig(os.path.join(out_dir, 'goals_by_stage.png'), dpi=150)
plt.close()
charts.append({
    'image': 'charts/goals_by_stage.png',
    'title': 'Goals by Stage',
    'insight': 'Group stage matches produce more goals on average than knockout rounds. When elimination is on the line, teams play more cautiously!'
})

# ============================================================
# Write insights JS file
# ============================================================
import json
output_path = os.path.join(data_dir, 'trivia_game', 'insights.js')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('const INSIGHTS = ')
    json.dump(charts, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f'Generated {len(charts)} chart images in {out_dir}')
print(f'Written insights.js with {len(charts)} entries')
for c in charts:
    print(f'  - {c["title"]}: {c["image"]}')

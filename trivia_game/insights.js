const INSIGHTS = [
  {
    "image": "charts/winners.png",
    "title": "All-Time Winners",
    "insight": "Brazil leads with 5 World Cup titles, followed by Germany* and Italy with 4 each. Germany's total combines West Germany (1954, 1974, 1990) and reunified Germany (2014). Argentina joined the 3-title club in 2022."
  },
  {
    "image": "charts/goals_trend.png",
    "title": "Goal Scoring Trends",
    "insight": "The 1954 World Cup holds the record at 5.38 goals per match. Modern tournaments average around 2.5 goals per match — tactics and defence have evolved!"
  },
  {
    "image": "charts/home_advantage.png",
    "title": "Home Advantage is Real",
    "insight": "Home teams win roughly 57% of World Cup matches. Playing in front of your own fans makes a measurable difference!"
  },
  {
    "image": "charts/top_scorers.png",
    "title": "Top Goal Scorers",
    "insight": "The all-time World Cup top scorers read like a hall of fame. Scoring consistently across multiple tournaments is one of football's greatest achievements."
  },
  {
    "image": "charts/attendance.png",
    "title": "Growing Global Audience",
    "insight": "The 1994 USA World Cup set the attendance record at 3.59 million. The World Cup has grown from 590K spectators in 1930 to millions — a truly global event."
  },
  {
    "image": "charts/goals_by_stage.png",
    "title": "Goals by Stage",
    "insight": "Group stage matches produce more goals on average than knockout rounds. When elimination is on the line, teams play more cautiously!"
  }
];

const HOST_COUNTRIES = [
  { year: 1930, country: "Uruguay", winner: "Uruguay", runnerUp: "Argentina" },
  { year: 1934, country: "Italy", winner: "Italy", runnerUp: "Czechoslovakia" },
  { year: 1938, country: "France", winner: "Italy", runnerUp: "Hungary" },
  { year: 1950, country: "Brazil", winner: "Uruguay", runnerUp: "Brazil" },
  { year: 1954, country: "Switzerland", winner: "Germany", runnerUp: "Hungary" },
  { year: 1958, country: "Sweden", winner: "Brazil", runnerUp: "Sweden" },
  { year: 1962, country: "Chile", winner: "Brazil", runnerUp: "Czechoslovakia" },
  { year: 1966, country: "England", winner: "England", runnerUp: "Germany" },
  { year: 1970, country: "Mexico", winner: "Brazil", runnerUp: "Italy" },
  { year: 1974, country: "Germany", winner: "Germany", runnerUp: "Netherlands" },
  { year: 1978, country: "Argentina", winner: "Argentina", runnerUp: "Netherlands" },
  { year: 1982, country: "Spain", winner: "Italy", runnerUp: "Germany" },
  { year: 1986, country: "Mexico", winner: "Argentina", runnerUp: "Germany" },
  { year: 1990, country: "Italy", winner: "Germany", runnerUp: "Argentina" },
  { year: 1994, country: "USA", winner: "Brazil", runnerUp: "Italy" },
  { year: 1998, country: "France", winner: "France", runnerUp: "Brazil" },
  { year: 2002, country: "Korea/Japan", winner: "Brazil", runnerUp: "Germany" },
  { year: 2006, country: "Germany", winner: "Italy", runnerUp: "France" },
  { year: 2010, country: "South Africa", winner: "Spain", runnerUp: "Netherlands" },
  { year: 2014, country: "Brazil", winner: "Germany", runnerUp: "Argentina" },
  { year: 2018, country: "Russia", winner: "France", runnerUp: "Croatia" },
  { year: 2022, country: "Qatar", winner: "Argentina", runnerUp: "France" }
];

const WORLD_CUP_2026 = {
  dates: "11 June – 19 July 2026",
  hosts: "USA, Mexico & Canada",
  teams: 48,
  matches: 104,
  venues: 16,
  groups: 12,
  debutNations: ["Uzbekistan", "Jordan", "Cape Verde", "Curaçao"],
  openingMatch: { venue: "Estadio Azteca", city: "Mexico City", teams: "Mexico vs South Africa" },
  final: { venue: "MetLife Stadium", city: "New York/New Jersey" },
  groupDraw: {
    "A": ["Mexico", "South Korea", "South Africa", "Czech Republic"],
    "B": ["Canada", "Switzerland", "Qatar", "Bosnia & Herzegovina"],
    "C": ["Brazil", "Morocco", "Scotland", "Haiti"],
    "D": ["United States", "Australia", "Paraguay", "Türkiye"],
    "E": ["Germany", "Ecuador", "Ivory Coast", "Curaçao"],
    "F": ["Netherlands", "Japan", "Tunisia", "Sweden"],
    "G": ["Belgium", "Iran", "Egypt", "New Zealand"],
    "H": ["Spain", "Uruguay", "Saudi Arabia", "Cape Verde"],
    "I": ["France", "Senegal", "Norway", "Iraq"],
    "J": ["Argentina", "Austria", "Algeria", "Jordan"],
    "K": ["Portugal", "Colombia", "Uzbekistan", "DR Congo"],
    "L": ["England", "Croatia", "Panama", "Ghana"]
  },
  keyChanges: [
    "Expanded from 32 to 48 teams",
    "12 groups of 4 (was 8 groups)",
    "New Round of 32 knockout stage",
    "104 matches (was 64)",
    "39-day tournament (was 32 days)",
    "First World Cup hosted by 3 countries"
  ]
};

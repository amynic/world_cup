const QUESTIONS = [
  {
    "id": "winner-1930",
    "question": "Who won the 1930 FIFA World Cup?",
    "options": [
      "France",
      "Spain",
      "Uruguay",
      "Italy"
    ],
    "answer": "Uruguay",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Uruguay won the 1930 World Cup held in Uruguay."
  },
  {
    "id": "winner-1934",
    "question": "Who won the 1934 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Germany",
      "France",
      "Italy"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Italy won the 1934 World Cup held in Italy."
  },
  {
    "id": "winner-1938",
    "question": "Who won the 1938 FIFA World Cup?",
    "options": [
      "France",
      "Spain",
      "Italy",
      "Uruguay"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Italy won the 1938 World Cup held in France."
  },
  {
    "id": "winner-1950",
    "question": "Who won the 1950 FIFA World Cup?",
    "options": [
      "Germany",
      "Argentina",
      "Uruguay",
      "Spain"
    ],
    "answer": "Uruguay",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Uruguay won the 1950 World Cup held in Brazil."
  },
  {
    "id": "winner-1954",
    "question": "Who won the 1954 FIFA World Cup?",
    "options": [
      "Germany",
      "Uruguay",
      "Brazil",
      "Argentina"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Germany won the 1954 World Cup held in Switzerland."
  },
  {
    "id": "winner-1958",
    "question": "Who won the 1958 FIFA World Cup?",
    "options": [
      "Spain",
      "Brazil",
      "Italy",
      "Germany"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Brazil won the 1958 World Cup held in Sweden."
  },
  {
    "id": "winner-1962",
    "question": "Who won the 1962 FIFA World Cup?",
    "options": [
      "Brazil",
      "Spain",
      "Uruguay",
      "England"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Brazil won the 1962 World Cup held in Chile."
  },
  {
    "id": "winner-1966",
    "question": "Who won the 1966 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Brazil",
      "Spain",
      "England"
    ],
    "answer": "England",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "England won the 1966 World Cup held in England."
  },
  {
    "id": "winner-1970",
    "question": "Who won the 1970 FIFA World Cup?",
    "options": [
      "Argentina",
      "Brazil",
      "Spain",
      "Germany"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Brazil won the 1970 World Cup held in Mexico."
  },
  {
    "id": "winner-1974",
    "question": "Who won the 1974 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Germany",
      "Spain",
      "France"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Germany won the 1974 World Cup held in Germany."
  },
  {
    "id": "winner-1978",
    "question": "Who won the 1978 FIFA World Cup?",
    "options": [
      "Argentina",
      "Italy",
      "Spain",
      "Uruguay"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Argentina won the 1978 World Cup held in Argentina."
  },
  {
    "id": "winner-1982",
    "question": "Who won the 1982 FIFA World Cup?",
    "options": [
      "Germany",
      "Italy",
      "France",
      "Brazil"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Italy won the 1982 World Cup held in Spain."
  },
  {
    "id": "winner-1986",
    "question": "Who won the 1986 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Argentina",
      "Germany",
      "France"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Argentina won the 1986 World Cup held in Mexico."
  },
  {
    "id": "winner-1990",
    "question": "Who won the 1990 FIFA World Cup?",
    "options": [
      "Italy",
      "Germany",
      "France",
      "England"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Germany won the 1990 World Cup held in Italy."
  },
  {
    "id": "winner-1994",
    "question": "Who won the 1994 FIFA World Cup?",
    "options": [
      "Germany",
      "Uruguay",
      "Brazil",
      "France"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Brazil won the 1994 World Cup held in USA."
  },
  {
    "id": "winner-1998",
    "question": "Who won the 1998 FIFA World Cup?",
    "options": [
      "France",
      "Uruguay",
      "Germany",
      "Brazil"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "France won the 1998 World Cup held in France."
  },
  {
    "id": "winner-2002",
    "question": "Who won the 2002 FIFA World Cup?",
    "options": [
      "Brazil",
      "Italy",
      "France",
      "England"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Brazil won the 2002 World Cup held in Korea/Japan."
  },
  {
    "id": "winner-2006",
    "question": "Who won the 2006 FIFA World Cup?",
    "options": [
      "Italy",
      "Spain",
      "Brazil",
      "Germany"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Italy won the 2006 World Cup held in Germany."
  },
  {
    "id": "winner-2010",
    "question": "Who won the 2010 FIFA World Cup?",
    "options": [
      "England",
      "Spain",
      "Argentina",
      "Brazil"
    ],
    "answer": "Spain",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Spain won the 2010 World Cup held in South Africa."
  },
  {
    "id": "winner-2014",
    "question": "Who won the 2014 FIFA World Cup?",
    "options": [
      "Italy",
      "Argentina",
      "England",
      "Germany"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Germany won the 2014 World Cup held in Brazil."
  },
  {
    "id": "winner-2018",
    "question": "Who won the 2018 FIFA World Cup?",
    "options": [
      "Italy",
      "France",
      "Argentina",
      "Spain"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "France won the 2018 World Cup held in Russia."
  },
  {
    "id": "winner-2022",
    "question": "Who won the 2022 FIFA World Cup?",
    "options": [
      "Argentina",
      "Brazil",
      "Spain",
      "England"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Winners",
    "fact": "Argentina won the 2022 World Cup held in Qatar."
  },
  {
    "id": "host-1930",
    "question": "Which country hosted the 1930 FIFA World Cup?",
    "options": [
      "USA",
      "Italy",
      "Spain",
      "Uruguay"
    ],
    "answer": "Uruguay",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1930 World Cup was hosted by Uruguay."
  },
  {
    "id": "host-1934",
    "question": "Which country hosted the 1934 FIFA World Cup?",
    "options": [
      "France",
      "Spain",
      "Italy",
      "Sweden"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1934 World Cup was hosted by Italy."
  },
  {
    "id": "host-1938",
    "question": "Which country hosted the 1938 FIFA World Cup?",
    "options": [
      "Uruguay",
      "France",
      "Russia",
      "USA"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1938 World Cup was hosted by France."
  },
  {
    "id": "host-1950",
    "question": "Which country hosted the 1950 FIFA World Cup?",
    "options": [
      "Switzerland",
      "Brazil",
      "Spain",
      "South Africa"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1950 World Cup was hosted by Brazil."
  },
  {
    "id": "host-1954",
    "question": "Which country hosted the 1954 FIFA World Cup?",
    "options": [
      "Korea/Japan",
      "Switzerland",
      "Chile",
      "Sweden"
    ],
    "answer": "Switzerland",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1954 World Cup was hosted by Switzerland."
  },
  {
    "id": "host-1958",
    "question": "Which country hosted the 1958 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Mexico",
      "Spain",
      "Sweden"
    ],
    "answer": "Sweden",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1958 World Cup was hosted by Sweden."
  },
  {
    "id": "host-1962",
    "question": "Which country hosted the 1962 FIFA World Cup?",
    "options": [
      "Uruguay",
      "Mexico",
      "Brazil",
      "Chile"
    ],
    "answer": "Chile",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1962 World Cup was hosted by Chile."
  },
  {
    "id": "host-1966",
    "question": "Which country hosted the 1966 FIFA World Cup?",
    "options": [
      "Korea/Japan",
      "Germany",
      "England",
      "France"
    ],
    "answer": "England",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1966 World Cup was hosted by England."
  },
  {
    "id": "host-1970",
    "question": "Which country hosted the 1970 FIFA World Cup?",
    "options": [
      "Sweden",
      "Switzerland",
      "Mexico",
      "Germany"
    ],
    "answer": "Mexico",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1970 World Cup was hosted by Mexico."
  },
  {
    "id": "host-1974",
    "question": "Which country hosted the 1974 FIFA World Cup?",
    "options": [
      "Germany",
      "Spain",
      "Argentina",
      "Chile"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1974 World Cup was hosted by Germany."
  },
  {
    "id": "host-1978",
    "question": "Which country hosted the 1978 FIFA World Cup?",
    "options": [
      "Qatar",
      "Russia",
      "Brazil",
      "Argentina"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1978 World Cup was hosted by Argentina."
  },
  {
    "id": "host-1982",
    "question": "Which country hosted the 1982 FIFA World Cup?",
    "options": [
      "England",
      "Germany",
      "Brazil",
      "Spain"
    ],
    "answer": "Spain",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1982 World Cup was hosted by Spain."
  },
  {
    "id": "host-1986",
    "question": "Which country hosted the 1986 FIFA World Cup?",
    "options": [
      "England",
      "Uruguay",
      "Mexico",
      "Italy"
    ],
    "answer": "Mexico",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1986 World Cup was hosted by Mexico."
  },
  {
    "id": "host-1990",
    "question": "Which country hosted the 1990 FIFA World Cup?",
    "options": [
      "Mexico",
      "Italy",
      "Spain",
      "Germany"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1990 World Cup was hosted by Italy."
  },
  {
    "id": "host-1994",
    "question": "Which country hosted the 1994 FIFA World Cup?",
    "options": [
      "Brazil",
      "USA",
      "Qatar",
      "Korea/Japan"
    ],
    "answer": "USA",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1994 World Cup was hosted by USA."
  },
  {
    "id": "host-1998",
    "question": "Which country hosted the 1998 FIFA World Cup?",
    "options": [
      "France",
      "Italy",
      "Switzerland",
      "Spain"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 1998 World Cup was hosted by France."
  },
  {
    "id": "host-2002",
    "question": "Which country hosted the 2002 FIFA World Cup?",
    "options": [
      "South Africa",
      "Qatar",
      "England",
      "Korea/Japan"
    ],
    "answer": "Korea/Japan",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2002 World Cup was hosted by Korea/Japan."
  },
  {
    "id": "host-2006",
    "question": "Which country hosted the 2006 FIFA World Cup?",
    "options": [
      "Italy",
      "USA",
      "Germany",
      "Chile"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2006 World Cup was hosted by Germany."
  },
  {
    "id": "host-2010",
    "question": "Which country hosted the 2010 FIFA World Cup?",
    "options": [
      "Brazil",
      "Chile",
      "South Africa",
      "Mexico"
    ],
    "answer": "South Africa",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2010 World Cup was hosted by South Africa."
  },
  {
    "id": "host-2014",
    "question": "Which country hosted the 2014 FIFA World Cup?",
    "options": [
      "Sweden",
      "Mexico",
      "Brazil",
      "Chile"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2014 World Cup was hosted by Brazil."
  },
  {
    "id": "host-2018",
    "question": "Which country hosted the 2018 FIFA World Cup?",
    "options": [
      "Brazil",
      "Uruguay",
      "Argentina",
      "Russia"
    ],
    "answer": "Russia",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2018 World Cup was hosted by Russia."
  },
  {
    "id": "host-2022",
    "question": "Which country hosted the 2022 FIFA World Cup?",
    "options": [
      "Chile",
      "Sweden",
      "Qatar",
      "England"
    ],
    "answer": "Qatar",
    "difficulty": "easy",
    "category": "Host Countries",
    "fact": "The 2022 World Cup was hosted by Qatar."
  },
  {
    "id": "runner-up-1930",
    "question": "Who was the runner-up in the 1930 FIFA World Cup?",
    "options": [
      "Sweden",
      "Brazil",
      "Czechoslovakia",
      "Argentina"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Argentina lost the 1930 final to Uruguay."
  },
  {
    "id": "runner-up-1934",
    "question": "Who was the runner-up in the 1934 FIFA World Cup?",
    "options": [
      "France",
      "Germany",
      "Czechoslovakia",
      "Sweden"
    ],
    "answer": "Czechoslovakia",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Czechoslovakia lost the 1934 final to Italy."
  },
  {
    "id": "runner-up-1938",
    "question": "Who was the runner-up in the 1938 FIFA World Cup?",
    "options": [
      "Argentina",
      "Germany",
      "Sweden",
      "Hungary"
    ],
    "answer": "Hungary",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Hungary lost the 1938 final to Italy."
  },
  {
    "id": "runner-up-1950",
    "question": "Who was the runner-up in the 1950 FIFA World Cup?",
    "options": [
      "Argentina",
      "Brazil",
      "Croatia",
      "Germany"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Brazil lost the 1950 final to Uruguay."
  },
  {
    "id": "runner-up-1954",
    "question": "Who was the runner-up in the 1954 FIFA World Cup?",
    "options": [
      "Netherlands",
      "Czechoslovakia",
      "Hungary",
      "Argentina"
    ],
    "answer": "Hungary",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Hungary lost the 1954 final to Germany."
  },
  {
    "id": "runner-up-1958",
    "question": "Who was the runner-up in the 1958 FIFA World Cup?",
    "options": [
      "Argentina",
      "Sweden",
      "Netherlands",
      "Brazil"
    ],
    "answer": "Sweden",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Sweden lost the 1958 final to Brazil."
  },
  {
    "id": "runner-up-1962",
    "question": "Who was the runner-up in the 1962 FIFA World Cup?",
    "options": [
      "Italy",
      "Czechoslovakia",
      "Hungary",
      "Netherlands"
    ],
    "answer": "Czechoslovakia",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Czechoslovakia lost the 1962 final to Brazil."
  },
  {
    "id": "runner-up-1966",
    "question": "Who was the runner-up in the 1966 FIFA World Cup?",
    "options": [
      "Brazil",
      "Italy",
      "Germany",
      "Hungary"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Germany lost the 1966 final to England."
  },
  {
    "id": "runner-up-1970",
    "question": "Who was the runner-up in the 1970 FIFA World Cup?",
    "options": [
      "Germany",
      "France",
      "Netherlands",
      "Italy"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Italy lost the 1970 final to Brazil."
  },
  {
    "id": "runner-up-1974",
    "question": "Who was the runner-up in the 1974 FIFA World Cup?",
    "options": [
      "Netherlands",
      "Sweden",
      "Croatia",
      "Czechoslovakia"
    ],
    "answer": "Netherlands",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Netherlands lost the 1974 final to Germany."
  },
  {
    "id": "runner-up-1978",
    "question": "Who was the runner-up in the 1978 FIFA World Cup?",
    "options": [
      "Netherlands",
      "Germany",
      "Argentina",
      "Hungary"
    ],
    "answer": "Netherlands",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Netherlands lost the 1978 final to Argentina."
  },
  {
    "id": "runner-up-1982",
    "question": "Who was the runner-up in the 1982 FIFA World Cup?",
    "options": [
      "Hungary",
      "Germany",
      "Netherlands",
      "France"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Germany lost the 1982 final to Italy."
  },
  {
    "id": "runner-up-1986",
    "question": "Who was the runner-up in the 1986 FIFA World Cup?",
    "options": [
      "Sweden",
      "Croatia",
      "Italy",
      "Germany"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Germany lost the 1986 final to Argentina."
  },
  {
    "id": "runner-up-1990",
    "question": "Who was the runner-up in the 1990 FIFA World Cup?",
    "options": [
      "Argentina",
      "Croatia",
      "Italy",
      "Hungary"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Argentina lost the 1990 final to Germany."
  },
  {
    "id": "runner-up-1994",
    "question": "Who was the runner-up in the 1994 FIFA World Cup?",
    "options": [
      "Italy",
      "Brazil",
      "Czechoslovakia",
      "Germany"
    ],
    "answer": "Italy",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Italy lost the 1994 final to Brazil."
  },
  {
    "id": "runner-up-1998",
    "question": "Who was the runner-up in the 1998 FIFA World Cup?",
    "options": [
      "Argentina",
      "Brazil",
      "Germany",
      "France"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Brazil lost the 1998 final to France."
  },
  {
    "id": "runner-up-2002",
    "question": "Who was the runner-up in the 2002 FIFA World Cup?",
    "options": [
      "Germany",
      "Netherlands",
      "Italy",
      "Argentina"
    ],
    "answer": "Germany",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Germany lost the 2002 final to Brazil."
  },
  {
    "id": "runner-up-2006",
    "question": "Who was the runner-up in the 2006 FIFA World Cup?",
    "options": [
      "Hungary",
      "France",
      "Netherlands",
      "Sweden"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "France lost the 2006 final to Italy."
  },
  {
    "id": "runner-up-2010",
    "question": "Who was the runner-up in the 2010 FIFA World Cup?",
    "options": [
      "Germany",
      "Netherlands",
      "Croatia",
      "Czechoslovakia"
    ],
    "answer": "Netherlands",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Netherlands lost the 2010 final to Spain."
  },
  {
    "id": "runner-up-2014",
    "question": "Who was the runner-up in the 2014 FIFA World Cup?",
    "options": [
      "Brazil",
      "Sweden",
      "Argentina",
      "Italy"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Argentina lost the 2014 final to Germany."
  },
  {
    "id": "runner-up-2018",
    "question": "Who was the runner-up in the 2018 FIFA World Cup?",
    "options": [
      "Hungary",
      "Croatia",
      "Argentina",
      "Germany"
    ],
    "answer": "Croatia",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "Croatia lost the 2018 final to France."
  },
  {
    "id": "runner-up-2022",
    "question": "Who was the runner-up in the 2022 FIFA World Cup?",
    "options": [
      "Czechoslovakia",
      "France",
      "Germany",
      "Italy"
    ],
    "answer": "France",
    "difficulty": "easy",
    "category": "Tournament Results",
    "fact": "France lost the 2022 final to Argentina."
  },
  {
    "id": "goals-total-1930",
    "question": "How many goals were scored in the 1930 World Cup?",
    "options": [
      102,
      95,
      70,
      169
    ],
    "answer": 70,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "70 goals were scored across 18 matches in 1930."
  },
  {
    "id": "goals-total-1934",
    "question": "How many goals were scored in the 1934 World Cup?",
    "options": [
      115,
      102,
      70,
      161
    ],
    "answer": 70,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "70 goals were scored across 17 matches in 1934."
  },
  {
    "id": "goals-total-1938",
    "question": "How many goals were scored in the 1938 World Cup?",
    "options": [
      88,
      145,
      84,
      171
    ],
    "answer": 84,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "84 goals were scored across 18 matches in 1938."
  },
  {
    "id": "goals-total-1950",
    "question": "How many goals were scored in the 1950 World Cup?",
    "options": [
      102,
      132,
      88,
      141
    ],
    "answer": 88,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "88 goals were scored across 22 matches in 1950."
  },
  {
    "id": "goals-total-1954",
    "question": "How many goals were scored in the 1954 World Cup?",
    "options": [
      146,
      115,
      171,
      140
    ],
    "answer": 140,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "140 goals were scored across 26 matches in 1954."
  },
  {
    "id": "goals-total-1958",
    "question": "How many goals were scored in the 1958 World Cup?",
    "options": [
      171,
      169,
      115,
      126
    ],
    "answer": 126,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "126 goals were scored across 35 matches in 1958."
  },
  {
    "id": "goals-total-1962",
    "question": "How many goals were scored in the 1962 World Cup?",
    "options": [
      84,
      95,
      146,
      89
    ],
    "answer": 89,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "89 goals were scored across 32 matches in 1962."
  },
  {
    "id": "goals-total-1966",
    "question": "How many goals were scored in the 1966 World Cup?",
    "options": [
      115,
      161,
      141,
      89
    ],
    "answer": 89,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "89 goals were scored across 32 matches in 1966."
  },
  {
    "id": "goals-total-1970",
    "question": "How many goals were scored in the 1970 World Cup?",
    "options": [
      146,
      161,
      84,
      95
    ],
    "answer": 95,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "95 goals were scored across 32 matches in 1970."
  },
  {
    "id": "goals-total-1974",
    "question": "How many goals were scored in the 1974 World Cup?",
    "options": [
      97,
      141,
      88,
      161
    ],
    "answer": 97,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "97 goals were scored across 38 matches in 1974."
  },
  {
    "id": "goals-total-1978",
    "question": "How many goals were scored in the 1978 World Cup?",
    "options": [
      102,
      132,
      140,
      169
    ],
    "answer": 102,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "102 goals were scored across 38 matches in 1978."
  },
  {
    "id": "goals-total-1982",
    "question": "How many goals were scored in the 1982 World Cup?",
    "options": [
      146,
      132,
      126,
      95
    ],
    "answer": 146,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "146 goals were scored across 52 matches in 1982."
  },
  {
    "id": "goals-total-1986",
    "question": "How many goals were scored in the 1986 World Cup?",
    "options": [
      171,
      146,
      89,
      132
    ],
    "answer": 132,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "132 goals were scored across 52 matches in 1986."
  },
  {
    "id": "goals-total-1990",
    "question": "How many goals were scored in the 1990 World Cup?",
    "options": [
      115,
      161,
      95,
      132
    ],
    "answer": 115,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "115 goals were scored across 52 matches in 1990."
  },
  {
    "id": "goals-total-1994",
    "question": "How many goals were scored in the 1994 World Cup?",
    "options": [
      145,
      141,
      169,
      95
    ],
    "answer": 141,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "141 goals were scored across 52 matches in 1994."
  },
  {
    "id": "goals-total-1998",
    "question": "How many goals were scored in the 1998 World Cup?",
    "options": [
      169,
      146,
      132,
      171
    ],
    "answer": 171,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "171 goals were scored across 64 matches in 1998."
  },
  {
    "id": "goals-total-2002",
    "question": "How many goals were scored in the 2002 World Cup?",
    "options": [
      97,
      95,
      126,
      161
    ],
    "answer": 161,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "161 goals were scored across 64 matches in 2002."
  },
  {
    "id": "goals-total-2006",
    "question": "How many goals were scored in the 2006 World Cup?",
    "options": [
      145,
      147,
      88,
      161
    ],
    "answer": 147,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "147 goals were scored across 64 matches in 2006."
  },
  {
    "id": "goals-total-2010",
    "question": "How many goals were scored in the 2010 World Cup?",
    "options": [
      172,
      147,
      145,
      141
    ],
    "answer": 145,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "145 goals were scored across 64 matches in 2010."
  },
  {
    "id": "goals-total-2014",
    "question": "How many goals were scored in the 2014 World Cup?",
    "options": [
      171,
      97,
      161,
      140
    ],
    "answer": 171,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "171 goals were scored across 64 matches in 2014."
  },
  {
    "id": "goals-total-2018",
    "question": "How many goals were scored in the 2018 World Cup?",
    "options": [
      97,
      84,
      169,
      140
    ],
    "answer": 169,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "169 goals were scored across 64 matches in 2018."
  },
  {
    "id": "goals-total-2022",
    "question": "How many goals were scored in the 2022 World Cup?",
    "options": [
      172,
      145,
      132,
      161
    ],
    "answer": 172,
    "difficulty": "medium",
    "category": "Goal Stats",
    "fact": "172 goals were scored across 64 matches in 2022."
  },
  {
    "id": "teams-1930",
    "question": "How many teams qualified for the 1930 World Cup?",
    "options": [
      24,
      13,
      15,
      32
    ],
    "answer": 13,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "13 teams competed in the 1930 World Cup in Uruguay."
  },
  {
    "id": "teams-1934",
    "question": "How many teams qualified for the 1934 World Cup?",
    "options": [
      16,
      32,
      15,
      24
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1934 World Cup in Italy."
  },
  {
    "id": "teams-1938",
    "question": "How many teams qualified for the 1938 World Cup?",
    "options": [
      15,
      24,
      16,
      13
    ],
    "answer": 15,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "15 teams competed in the 1938 World Cup in France."
  },
  {
    "id": "teams-1950",
    "question": "How many teams qualified for the 1950 World Cup?",
    "options": [
      16,
      32,
      13,
      24
    ],
    "answer": 13,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "13 teams competed in the 1950 World Cup in Brazil."
  },
  {
    "id": "teams-1954",
    "question": "How many teams qualified for the 1954 World Cup?",
    "options": [
      24,
      13,
      16,
      32
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1954 World Cup in Switzerland."
  },
  {
    "id": "teams-1958",
    "question": "How many teams qualified for the 1958 World Cup?",
    "options": [
      32,
      15,
      16,
      24
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1958 World Cup in Sweden."
  },
  {
    "id": "teams-1962",
    "question": "How many teams qualified for the 1962 World Cup?",
    "options": [
      15,
      16,
      32,
      13
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1962 World Cup in Chile."
  },
  {
    "id": "teams-1966",
    "question": "How many teams qualified for the 1966 World Cup?",
    "options": [
      24,
      16,
      15,
      32
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1966 World Cup in England."
  },
  {
    "id": "teams-1970",
    "question": "How many teams qualified for the 1970 World Cup?",
    "options": [
      13,
      16,
      32,
      15
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1970 World Cup in Mexico."
  },
  {
    "id": "teams-1974",
    "question": "How many teams qualified for the 1974 World Cup?",
    "options": [
      15,
      16,
      24,
      32
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1974 World Cup in Germany."
  },
  {
    "id": "teams-1978",
    "question": "How many teams qualified for the 1978 World Cup?",
    "options": [
      32,
      13,
      15,
      16
    ],
    "answer": 16,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "16 teams competed in the 1978 World Cup in Argentina."
  },
  {
    "id": "teams-1982",
    "question": "How many teams qualified for the 1982 World Cup?",
    "options": [
      13,
      32,
      16,
      24
    ],
    "answer": 24,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "24 teams competed in the 1982 World Cup in Spain."
  },
  {
    "id": "teams-1986",
    "question": "How many teams qualified for the 1986 World Cup?",
    "options": [
      24,
      16,
      15,
      13
    ],
    "answer": 24,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "24 teams competed in the 1986 World Cup in Mexico."
  },
  {
    "id": "teams-1990",
    "question": "How many teams qualified for the 1990 World Cup?",
    "options": [
      16,
      32,
      15,
      24
    ],
    "answer": 24,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "24 teams competed in the 1990 World Cup in Italy."
  },
  {
    "id": "teams-1994",
    "question": "How many teams qualified for the 1994 World Cup?",
    "options": [
      13,
      32,
      16,
      24
    ],
    "answer": 24,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "24 teams competed in the 1994 World Cup in USA."
  },
  {
    "id": "teams-1998",
    "question": "How many teams qualified for the 1998 World Cup?",
    "options": [
      13,
      15,
      24,
      32
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 1998 World Cup in France."
  },
  {
    "id": "teams-2002",
    "question": "How many teams qualified for the 2002 World Cup?",
    "options": [
      16,
      24,
      13,
      32
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2002 World Cup in Korea/Japan."
  },
  {
    "id": "teams-2006",
    "question": "How many teams qualified for the 2006 World Cup?",
    "options": [
      24,
      16,
      32,
      15
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2006 World Cup in Germany."
  },
  {
    "id": "teams-2010",
    "question": "How many teams qualified for the 2010 World Cup?",
    "options": [
      13,
      24,
      16,
      32
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2010 World Cup in South Africa."
  },
  {
    "id": "teams-2014",
    "question": "How many teams qualified for the 2014 World Cup?",
    "options": [
      24,
      13,
      15,
      32
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2014 World Cup in Brazil."
  },
  {
    "id": "teams-2018",
    "question": "How many teams qualified for the 2018 World Cup?",
    "options": [
      13,
      16,
      15,
      32
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2018 World Cup in Russia."
  },
  {
    "id": "teams-2022",
    "question": "How many teams qualified for the 2022 World Cup?",
    "options": [
      16,
      15,
      32,
      24
    ],
    "answer": 32,
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "32 teams competed in the 2022 World Cup in Qatar."
  },
  {
    "id": "third-1930",
    "question": "Which team finished third in the 1930 World Cup?",
    "options": [
      "Poland",
      "Portugal",
      "Germany",
      "USA"
    ],
    "answer": "USA",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "USA took third place in 1930, beating Yugoslavia in the play-off."
  },
  {
    "id": "third-1934",
    "question": "Which team finished third in the 1934 World Cup?",
    "options": [
      "Poland",
      "Turkey",
      "Germany",
      "Sweden"
    ],
    "answer": "Germany",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Germany took third place in 1934, beating Austria in the play-off."
  },
  {
    "id": "third-1938",
    "question": "Which team finished third in the 1938 World Cup?",
    "options": [
      "Brazil",
      "Italy",
      "Croatia",
      "Poland"
    ],
    "answer": "Brazil",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Brazil took third place in 1938, beating Sweden in the play-off."
  },
  {
    "id": "third-1950",
    "question": "Which team finished third in the 1950 World Cup?",
    "options": [
      "Germany",
      "Sweden",
      "Chile",
      "Austria"
    ],
    "answer": "Sweden",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Sweden took third place in 1950, beating Spain in the play-off."
  },
  {
    "id": "third-1954",
    "question": "Which team finished third in the 1954 World Cup?",
    "options": [
      "Poland",
      "Austria",
      "Belgium",
      "Croatia"
    ],
    "answer": "Austria",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Austria took third place in 1954, beating Uruguay in the play-off."
  },
  {
    "id": "third-1958",
    "question": "Which team finished third in the 1958 World Cup?",
    "options": [
      "Chile",
      "Poland",
      "France",
      "Brazil"
    ],
    "answer": "France",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "France took third place in 1958, beating Germany in the play-off."
  },
  {
    "id": "third-1962",
    "question": "Which team finished third in the 1962 World Cup?",
    "options": [
      "Chile",
      "Belgium",
      "France",
      "Austria"
    ],
    "answer": "Chile",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Chile took third place in 1962, beating Yugoslavia in the play-off."
  },
  {
    "id": "third-1966",
    "question": "Which team finished third in the 1966 World Cup?",
    "options": [
      "Belgium",
      "USA",
      "Portugal",
      "Italy"
    ],
    "answer": "Portugal",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Portugal took third place in 1966, beating Soviet Union in the play-off."
  },
  {
    "id": "third-1970",
    "question": "Which team finished third in the 1970 World Cup?",
    "options": [
      "Germany",
      "Poland",
      "Portugal",
      "Netherlands"
    ],
    "answer": "Germany",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Germany took third place in 1970, beating Uruguay in the play-off."
  },
  {
    "id": "third-1974",
    "question": "Which team finished third in the 1974 World Cup?",
    "options": [
      "Turkey",
      "Netherlands",
      "Poland",
      "Portugal"
    ],
    "answer": "Poland",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Poland took third place in 1974, beating Brazil in the play-off."
  },
  {
    "id": "third-1978",
    "question": "Which team finished third in the 1978 World Cup?",
    "options": [
      "Brazil",
      "Austria",
      "Portugal",
      "France"
    ],
    "answer": "Brazil",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Brazil took third place in 1978, beating Italy in the play-off."
  },
  {
    "id": "third-1982",
    "question": "Which team finished third in the 1982 World Cup?",
    "options": [
      "Poland",
      "Netherlands",
      "Portugal",
      "Italy"
    ],
    "answer": "Poland",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Poland took third place in 1982, beating France in the play-off."
  },
  {
    "id": "third-1986",
    "question": "Which team finished third in the 1986 World Cup?",
    "options": [
      "France",
      "Poland",
      "Chile",
      "Netherlands"
    ],
    "answer": "France",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "France took third place in 1986, beating Belgium in the play-off."
  },
  {
    "id": "third-1990",
    "question": "Which team finished third in the 1990 World Cup?",
    "options": [
      "Sweden",
      "Belgium",
      "Italy",
      "Germany"
    ],
    "answer": "Italy",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Italy took third place in 1990, beating England in the play-off."
  },
  {
    "id": "third-1994",
    "question": "Which team finished third in the 1994 World Cup?",
    "options": [
      "Sweden",
      "Austria",
      "Poland",
      "Belgium"
    ],
    "answer": "Sweden",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Sweden took third place in 1994, beating Bulgaria in the play-off."
  },
  {
    "id": "third-1998",
    "question": "Which team finished third in the 1998 World Cup?",
    "options": [
      "Sweden",
      "Croatia",
      "Austria",
      "Germany"
    ],
    "answer": "Croatia",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Croatia took third place in 1998, beating Netherlands in the play-off."
  },
  {
    "id": "third-2002",
    "question": "Which team finished third in the 2002 World Cup?",
    "options": [
      "USA",
      "Turkey",
      "Poland",
      "Austria"
    ],
    "answer": "Turkey",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Turkey took third place in 2002, beating Korea Republic in the play-off."
  },
  {
    "id": "third-2006",
    "question": "Which team finished third in the 2006 World Cup?",
    "options": [
      "Germany",
      "France",
      "Italy",
      "USA"
    ],
    "answer": "Germany",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Germany took third place in 2006, beating Portugal in the play-off."
  },
  {
    "id": "third-2010",
    "question": "Which team finished third in the 2010 World Cup?",
    "options": [
      "Germany",
      "Croatia",
      "Brazil",
      "USA"
    ],
    "answer": "Germany",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Germany took third place in 2010, beating Uruguay in the play-off."
  },
  {
    "id": "third-2014",
    "question": "Which team finished third in the 2014 World Cup?",
    "options": [
      "Brazil",
      "France",
      "Portugal",
      "Netherlands"
    ],
    "answer": "Netherlands",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Netherlands took third place in 2014, beating Brazil in the play-off."
  },
  {
    "id": "third-2018",
    "question": "Which team finished third in the 2018 World Cup?",
    "options": [
      "Germany",
      "Netherlands",
      "Belgium",
      "Chile"
    ],
    "answer": "Belgium",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Belgium took third place in 2018, beating England in the play-off."
  },
  {
    "id": "third-2022",
    "question": "Which team finished third in the 2022 World Cup?",
    "options": [
      "Brazil",
      "Italy",
      "Croatia",
      "Belgium"
    ],
    "answer": "Croatia",
    "difficulty": "medium",
    "category": "Tournament Results",
    "fact": "Croatia took third place in 2022, beating Morocco in the play-off."
  },
  {
    "id": "final-score-1930",
    "question": "What was the score in the 1930 World Cup Final (Uruguay vs Argentina)?",
    "options": [
      "4-2",
      "0-2",
      "2-1",
      "3-2"
    ],
    "answer": "4-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1930 final ended Uruguay 4 - 2 Argentina."
  },
  {
    "id": "final-score-1934",
    "question": "What was the score in the 1934 World Cup Final (Italy vs Czechoslovakia)?",
    "options": [
      "1-2",
      "2-1",
      "0-2",
      "3-1"
    ],
    "answer": "2-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1934 final ended Italy 2 - 1 Czechoslovakia."
  },
  {
    "id": "final-score-1938",
    "question": "What was the score in the 1938 World Cup Final (Italy vs Hungary)?",
    "options": [
      "3-2",
      "4-2",
      "3-1",
      "1-0"
    ],
    "answer": "4-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1938 final ended Italy 4 - 2 Hungary."
  },
  {
    "id": "final-score-1954",
    "question": "What was the score in the 1954 World Cup Final (Germany vs Hungary)?",
    "options": [
      "0-3",
      "3-1",
      "1-2",
      "3-2"
    ],
    "answer": "3-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1954 final ended Germany 3 - 2 Hungary."
  },
  {
    "id": "final-score-1958",
    "question": "What was the score in the 1958 World Cup Final (Brazil vs Sweden)?",
    "options": [
      "1-1",
      "5-2",
      "0-2",
      "1-0"
    ],
    "answer": "5-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1958 final ended Brazil 5 - 2 Sweden."
  },
  {
    "id": "final-score-1962",
    "question": "What was the score in the 1962 World Cup Final (Brazil vs Czechoslovakia)?",
    "options": [
      "0-3",
      "0-0",
      "3-1",
      "4-1"
    ],
    "answer": "3-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1962 final ended Brazil 3 - 1 Czechoslovakia."
  },
  {
    "id": "final-score-1966",
    "question": "What was the score in the 1966 World Cup Final (England vs Germany)?",
    "options": [
      "4-1",
      "4-2",
      "1-0",
      "0-0"
    ],
    "answer": "4-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1966 final ended England 4 - 2 Germany."
  },
  {
    "id": "final-score-1970",
    "question": "What was the score in the 1970 World Cup Final (Brazil vs Italy)?",
    "options": [
      "1-1",
      "3-2",
      "4-1",
      "0-3"
    ],
    "answer": "4-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1970 final ended Brazil 4 - 1 Italy."
  },
  {
    "id": "final-score-1974",
    "question": "What was the score in the 1974 World Cup Final (Netherlands vs Germany)?",
    "options": [
      "3-1",
      "1-2",
      "5-2",
      "3-2"
    ],
    "answer": "1-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1974 final ended Netherlands 1 - 2 Germany."
  },
  {
    "id": "final-score-1978",
    "question": "What was the score in the 1978 World Cup Final (Argentina vs Netherlands)?",
    "options": [
      "3-1",
      "1-1",
      "0-2",
      "0-0"
    ],
    "answer": "3-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1978 final ended Argentina 3 - 1 Netherlands."
  },
  {
    "id": "final-score-1982",
    "question": "What was the score in the 1982 World Cup Final (Italy vs Germany)?",
    "options": [
      "1-0",
      "4-2",
      "1-1",
      "3-1"
    ],
    "answer": "3-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1982 final ended Italy 3 - 1 Germany."
  },
  {
    "id": "final-score-1986",
    "question": "What was the score in the 1986 World Cup Final (Argentina vs Germany)?",
    "options": [
      "1-0",
      "0-0",
      "5-2",
      "3-2"
    ],
    "answer": "3-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1986 final ended Argentina 3 - 2 Germany."
  },
  {
    "id": "final-score-1990",
    "question": "What was the score in the 1990 World Cup Final (Germany vs Argentina)?",
    "options": [
      "3-1",
      "4-1",
      "2-1",
      "1-0"
    ],
    "answer": "1-0",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1990 final ended Germany 1 - 0 Argentina."
  },
  {
    "id": "final-score-1994",
    "question": "What was the score in the 1994 World Cup Final (Brazil vs Italy)?",
    "options": [
      "1-1",
      "2-1",
      "0-0",
      "4-1"
    ],
    "answer": "0-0",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1994 final ended Brazil 0 - 0 Italy."
  },
  {
    "id": "final-score-1998",
    "question": "What was the score in the 1998 World Cup Final (Brazil vs France)?",
    "options": [
      "0-3",
      "1-1",
      "4-1",
      "4-2"
    ],
    "answer": "0-3",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 1998 final ended Brazil 0 - 3 France."
  },
  {
    "id": "final-score-2002",
    "question": "What was the score in the 2002 World Cup Final (Germany vs Brazil)?",
    "options": [
      "0-2",
      "1-2",
      "4-2",
      "0-0"
    ],
    "answer": "0-2",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2002 final ended Germany 0 - 2 Brazil."
  },
  {
    "id": "final-score-2006",
    "question": "What was the score in the 2006 World Cup Final (Italy vs France)?",
    "options": [
      "1-2",
      "1-1",
      "0-2",
      "3-1"
    ],
    "answer": "1-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2006 final ended Italy 1 - 1 France."
  },
  {
    "id": "final-score-2010",
    "question": "What was the score in the 2010 World Cup Final (Netherlands vs Spain)?",
    "options": [
      "0-0",
      "0-1",
      "1-1",
      "4-2"
    ],
    "answer": "0-1",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2010 final ended Netherlands 0 - 1 Spain."
  },
  {
    "id": "final-score-2014",
    "question": "What was the score in the 2014 World Cup Final (Germany vs Argentina)?",
    "options": [
      "1-1",
      "1-0",
      "0-1",
      "5-2"
    ],
    "answer": "1-0",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2014 final ended Germany 1 - 0 Argentina."
  },
  {
    "id": "final-score-2018",
    "question": "What was the score in the 2018 World Cup Final (Argentina vs Mexico)?",
    "options": [
      "1-0",
      "0-3",
      "3-1",
      "5-2"
    ],
    "answer": "1-0",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2018 final ended Argentina 1 - 0 Mexico."
  },
  {
    "id": "final-score-2022",
    "question": "What was the score in the 2022 World Cup Final (Algeria vs Argentina)?",
    "options": [
      "1-2",
      "4-2",
      "0-2",
      "1-0"
    ],
    "answer": "1-0",
    "difficulty": "medium",
    "category": "Finals",
    "fact": "The 2022 final ended Algeria 1 - 0 Argentina."
  },
  {
    "id": "highest-scoring-1930",
    "question": "Which match had the most goals at the 1930 World Cup?",
    "options": [
      "Chile vs Mexico",
      "Yugoslavia vs Brazil",
      "Uruguay vs Argentina",
      "Argentina vs Mexico"
    ],
    "answer": "Argentina vs Mexico",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Argentina vs Mexico produced 9 goals — the most in the 1930 tournament."
  },
  {
    "id": "highest-scoring-1934",
    "question": "Which match had the most goals at the 1934 World Cup?",
    "options": [
      "Germany vs Belgium",
      "Czechoslovakia vs Germany",
      "Italy vs USA",
      "Austria vs France"
    ],
    "answer": "Italy vs USA",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Italy vs USA produced 8 goals — the most in the 1934 tournament."
  },
  {
    "id": "highest-scoring-1938",
    "question": "Which match had the most goals at the 1938 World Cup?",
    "options": [
      "Brazil vs Poland",
      "Sweden vs Cuba",
      "Brazil vs Sweden",
      "Hungary vs Switzerland"
    ],
    "answer": "Brazil vs Poland",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Brazil vs Poland produced 11 goals — the most in the 1938 tournament."
  },
  {
    "id": "highest-scoring-1950",
    "question": "Which match had the most goals at the 1950 World Cup?",
    "options": [
      "Brazil vs Yugoslavia",
      "Uruguay vs Bolivia",
      "England vs Chile",
      "Sweden vs Spain"
    ],
    "answer": "Uruguay vs Bolivia",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Uruguay vs Bolivia produced 8 goals — the most in the 1950 tournament."
  },
  {
    "id": "highest-scoring-1954",
    "question": "Which match had the most goals at the 1954 World Cup?",
    "options": [
      "Germany vs Turkey",
      "Hungary vs Germany",
      "Uruguay vs England",
      "Austria vs Switzerland"
    ],
    "answer": "Austria vs Switzerland",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Austria vs Switzerland produced 12 goals — the most in the 1954 tournament."
  },
  {
    "id": "highest-scoring-1958",
    "question": "Which match had the most goals at the 1958 World Cup?",
    "options": [
      "France vs Paraguay",
      "England vs Austria",
      "Sweden vs Germany",
      "France vs Northern Ireland"
    ],
    "answer": "France vs Paraguay",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "France vs Paraguay produced 10 goals — the most in the 1958 tournament."
  },
  {
    "id": "highest-scoring-1962",
    "question": "Which match had the most goals at the 1962 World Cup?",
    "options": [
      "Soviet Union vs Yugoslavia",
      "Chile vs Italy",
      "Soviet Union vs Colombia",
      "Chile vs Soviet Union"
    ],
    "answer": "Soviet Union vs Colombia",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Soviet Union vs Colombia produced 8 goals — the most in the 1962 tournament."
  },
  {
    "id": "highest-scoring-1966",
    "question": "Which match had the most goals at the 1966 World Cup?",
    "options": [
      "Portugal vs Korea DPR",
      "Germany vs Switzerland",
      "Korea DPR vs Chile",
      "England vs Germany"
    ],
    "answer": "Portugal vs Korea DPR",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Portugal vs Korea DPR produced 8 goals — the most in the 1966 tournament."
  },
  {
    "id": "highest-scoring-1970",
    "question": "Which match had the most goals at the 1970 World Cup?",
    "options": [
      "Belgium vs El Salvador",
      "Germany vs Bulgaria",
      "Brazil vs Italy",
      "Uruguay vs Soviet Union"
    ],
    "answer": "Germany vs Bulgaria",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Germany vs Bulgaria produced 7 goals — the most in the 1970 tournament."
  },
  {
    "id": "highest-scoring-1974",
    "question": "Which match had the most goals at the 1974 World Cup?",
    "options": [
      "Sweden vs Bulgaria",
      "Australia vs Chile",
      "Yugoslavia vs Zaire",
      "German DR vs Germany"
    ],
    "answer": "Yugoslavia vs Zaire",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Yugoslavia vs Zaire produced 9 goals — the most in the 1974 tournament."
  },
  {
    "id": "highest-scoring-1978",
    "question": "Which match had the most goals at the 1978 World Cup?",
    "options": [
      "Italy vs Argentina",
      "Argentina vs Brazil",
      "Germany vs Mexico",
      "Argentina vs France"
    ],
    "answer": "Germany vs Mexico",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Germany vs Mexico produced 6 goals — the most in the 1978 tournament."
  },
  {
    "id": "highest-scoring-1982",
    "question": "Which match had the most goals at the 1982 World Cup?",
    "options": [
      "Chile vs Austria",
      "France vs Kuwait",
      "England vs Czechoslovakia",
      "Hungary vs El Salvador"
    ],
    "answer": "Hungary vs El Salvador",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Hungary vs El Salvador produced 11 goals — the most in the 1982 tournament."
  },
  {
    "id": "highest-scoring-1986",
    "question": "Which match had the most goals at the 1986 World Cup?",
    "options": [
      "Argentina vs Belgium",
      "Denmark vs Uruguay",
      "England vs Poland",
      "Germany vs Mexico"
    ],
    "answer": "Denmark vs Uruguay",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Denmark vs Uruguay produced 7 goals — the most in the 1986 tournament."
  },
  {
    "id": "highest-scoring-1990",
    "question": "Which match had the most goals at the 1990 World Cup?",
    "options": [
      "USA vs Czechoslovakia",
      "Argentina vs Soviet Union",
      "rn\">United Arab Emirates vs Colombia",
      "Italy vs Austria"
    ],
    "answer": "USA vs Czechoslovakia",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "USA vs Czechoslovakia produced 6 goals — the most in the 1990 tournament."
  },
  {
    "id": "highest-scoring-1994",
    "question": "Which match had the most goals at the 1994 World Cup?",
    "options": [
      "Russia vs Cameroon",
      "Sweden vs Brazil",
      "Mexico vs rn\">Republic of Ireland",
      "Nigeria vs Italy"
    ],
    "answer": "Russia vs Cameroon",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Russia vs Cameroon produced 7 goals — the most in the 1994 tournament."
  },
  {
    "id": "highest-scoring-1998",
    "question": "Which match had the most goals at the 1998 World Cup?",
    "options": [
      "Netherlands vs Mexico",
      "Nigeria vs Bulgaria",
      "South Africa vs Saudi Arabia",
      "Spain vs Bulgaria"
    ],
    "answer": "Spain vs Bulgaria",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Spain vs Bulgaria produced 7 goals — the most in the 1998 tournament."
  },
  {
    "id": "highest-scoring-2002",
    "question": "Which match had the most goals at the 2002 World Cup?",
    "options": [
      "Costa Rica vs Brazil",
      "Paraguay vs South Africa",
      "Germany vs Saudi Arabia",
      "Portugal vs Poland"
    ],
    "answer": "Germany vs Saudi Arabia",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Germany vs Saudi Arabia produced 8 goals — the most in the 2002 tournament."
  },
  {
    "id": "highest-scoring-2006",
    "question": "Which match had the most goals at the 2006 World Cup?",
    "options": [
      "Italy vs Ghana",
      "Spain vs France",
      "Germany vs Costa Rica",
      "Sweden vs England"
    ],
    "answer": "Germany vs Costa Rica",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Germany vs Costa Rica produced 6 goals — the most in the 2006 tournament."
  },
  {
    "id": "highest-scoring-2010",
    "question": "Which match had the most goals at the 2010 World Cup?",
    "options": [
      "Portugal vs Korea DPR",
      "France vs South Africa",
      "Germany vs Serbia",
      "England vs Algeria"
    ],
    "answer": "Portugal vs Korea DPR",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Portugal vs Korea DPR produced 7 goals — the most in the 2010 tournament."
  },
  {
    "id": "highest-scoring-2014",
    "question": "Which match had the most goals at the 2014 World Cup?",
    "options": [
      "Korea Republic vs Belgium",
      "Brazil vs Germany",
      "Argentina vs Switzerland",
      "Colombia vs Uruguay"
    ],
    "answer": "Brazil vs Germany",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Brazil vs Germany produced 8 goals — the most in the 2014 tournament."
  },
  {
    "id": "highest-scoring-2018",
    "question": "Which match had the most goals at the 2018 World Cup?",
    "options": [
      "France vs Costa Rica",
      "Iran vs Italy",
      "Iran vs Senegal",
      "USA vs Costa Rica"
    ],
    "answer": "Iran vs Italy",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "Iran vs Italy produced 5 goals — the most in the 2018 tournament."
  },
  {
    "id": "highest-scoring-2022",
    "question": "Which match had the most goals at the 2022 World Cup?",
    "options": [
      "Japan vs Australia",
      "Croatia vs Denmark",
      "England vs Switzerland",
      "Iran vs Argentina"
    ],
    "answer": "England vs Switzerland",
    "difficulty": "hard",
    "category": "Match Records",
    "fact": "England vs Switzerland produced 6 goals — the most in the 2022 tournament."
  },
  {
    "id": "top-scorer-klose",
    "question": "Which player scored 17 World Cup goals (1930-2014)?",
    "options": [
      "Oscar MIGUEZ",
      "Diego MARADONA",
      "JAIRZINHO",
      "KLOSE"
    ],
    "answer": "KLOSE",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "KLOSE scored 17 goals across their World Cup career."
  },
  {
    "id": "top-scorer-ronaldo",
    "question": "Which player scored 16 World Cup goals (1930-2014)?",
    "options": [
      "RONALDO",
      "Sandor KOCSIS",
      "LEONIDAS",
      "Just FONTAINE"
    ],
    "answer": "RONALDO",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "RONALDO scored 16 goals across their World Cup career."
  },
  {
    "id": "top-scorer-gerd-mueller",
    "question": "Which player scored 13 World Cup goals (1930-2014)?",
    "options": [
      "Diego MARADONA",
      "ADEMIR",
      "Gerd MUELLER",
      "JAIRZINHO"
    ],
    "answer": "Gerd MUELLER",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "Gerd MUELLER scored 13 goals across their World Cup career."
  },
  {
    "id": "top-scorer-just-fontaine",
    "question": "Which player scored 13 World Cup goals (1930-2014)?",
    "options": [
      "Just FONTAINE",
      "Gary LINEKER",
      "PEL� (Edson Arantes do Nascimento)",
      "Helmut RAHN"
    ],
    "answer": "Just FONTAINE",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "Just FONTAINE scored 13 goals across their World Cup career."
  },
  {
    "id": "top-scorer-pel�-(edson-arantes-do-nascimento)",
    "question": "Which player scored 12 World Cup goals (1930-2014)?",
    "options": [
      "LEONIDAS",
      "Oscar MIGUEZ",
      "Karl-Heinz RUMMENIGGE",
      "PEL� (Edson Arantes do Nascimento)"
    ],
    "answer": "PEL� (Edson Arantes do Nascimento)",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "PEL� (Edson Arantes do Nascimento) scored 12 goals across their World Cup career."
  },
  {
    "id": "top-scorer-m�ller",
    "question": "Which player scored 11 World Cup goals (1930-2014)?",
    "options": [
      "KLOSE",
      "M�LLER",
      "JAIRZINHO",
      "RONALDO"
    ],
    "answer": "M�LLER",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "M�LLER scored 11 goals across their World Cup career."
  },
  {
    "id": "top-scorer-sandor-kocsis",
    "question": "Which player scored 11 World Cup goals (1930-2014)?",
    "options": [
      "Uwe SEELER",
      "Sandor KOCSIS",
      "Grzegorz LATO",
      "Helmut RAHN"
    ],
    "answer": "Sandor KOCSIS",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "Sandor KOCSIS scored 11 goals across their World Cup career."
  },
  {
    "id": "top-scorer-grzegorz-lato",
    "question": "Which player scored 10 World Cup goals (1930-2014)?",
    "options": [
      "RONALDO",
      "Just FONTAINE",
      "Grzegorz LATO",
      "Karl-Heinz RUMMENIGGE"
    ],
    "answer": "Grzegorz LATO",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "Grzegorz LATO scored 10 goals across their World Cup career."
  },
  {
    "id": "top-scorer-helmut-rahn",
    "question": "Which player scored 10 World Cup goals (1930-2014)?",
    "options": [
      "Helmut RAHN",
      "PEL� (Edson Arantes do Nascimento)",
      "Karl-Heinz RUMMENIGGE",
      "Gerd MUELLER"
    ],
    "answer": "Helmut RAHN",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "Helmut RAHN scored 10 goals across their World Cup career."
  },
  {
    "id": "top-scorer-jairzinho",
    "question": "Which player scored 9 World Cup goals (1930-2014)?",
    "options": [
      "JAIRZINHO",
      "M�LLER",
      "PEL� (Edson Arantes do Nascimento)",
      "Sandor KOCSIS"
    ],
    "answer": "JAIRZINHO",
    "difficulty": "hard",
    "category": "Player Records",
    "fact": "JAIRZINHO scored 9 goals across their World Cup career."
  },
  {
    "id": "curated-most-titles",
    "question": "Which country has won the most FIFA World Cup titles?",
    "options": [
      "Brazil",
      "Germany",
      "Italy",
      "Argentina"
    ],
    "answer": "Brazil",
    "difficulty": "easy",
    "category": "All-Time Records",
    "fact": "Brazil has won the World Cup 5 times (1958, 1962, 1970, 1994, 2002)."
  },
  {
    "id": "curated-first-winner",
    "question": "Who won the very first FIFA World Cup in 1930?",
    "options": [
      "Uruguay",
      "Argentina",
      "Brazil",
      "Italy"
    ],
    "answer": "Uruguay",
    "difficulty": "easy",
    "category": "All-Time Records",
    "fact": "Uruguay won the inaugural World Cup in 1930, hosted on home soil in Montevideo."
  },
  {
    "id": "curated-home-advantage",
    "question": "Approximately what percentage of World Cup matches are won by the home team?",
    "options": [
      "57%",
      "45%",
      "65%",
      "38%"
    ],
    "answer": "57%",
    "difficulty": "medium",
    "category": "Analysis Insights",
    "fact": "Home teams win about 57% of World Cup matches — a significant home advantage."
  },
  {
    "id": "curated-goals-half",
    "question": "In which half of a World Cup match are more goals typically scored?",
    "options": [
      "2nd Half",
      "1st Half",
      "Equal",
      "Extra Time"
    ],
    "answer": "2nd Half",
    "difficulty": "medium",
    "category": "Analysis Insights",
    "fact": "More goals are scored in the 2nd half, likely due to fatigue and tactical changes."
  },
  {
    "id": "curated-cards-introduced",
    "question": "In which World Cup were yellow and red cards first introduced?",
    "options": [
      "1970 (Mexico)",
      "1966 (England)",
      "1974 (Germany)",
      "1978 (Argentina)"
    ],
    "answer": "1970 (Mexico)",
    "difficulty": "hard",
    "category": "Tournament History",
    "fact": "Cards were introduced at the 1970 World Cup in Mexico after controversial refereeing in 1966."
  },
  {
    "id": "curated-highest-scoring-tournament",
    "question": "Which World Cup had the highest average goals per match?",
    "options": [
      "1954 (Switzerland)",
      "1958 (Sweden)",
      "1930 (Uruguay)",
      "1970 (Mexico)"
    ],
    "answer": "1954 (Switzerland)",
    "difficulty": "hard",
    "category": "Goal Records",
    "fact": "The 1954 World Cup averaged 5.38 goals per match — a record that still stands."
  },
  {
    "id": "curated-peak-attendance",
    "question": "Which World Cup had the highest total attendance?",
    "options": [
      "1994 (USA)",
      "2014 (Brazil)",
      "2006 (Germany)",
      "2022 (Qatar)"
    ],
    "answer": "1994 (USA)",
    "difficulty": "medium",
    "category": "Tournament Facts",
    "fact": "The 1994 World Cup in the USA attracted over 3.5 million spectators — the all-time record."
  },
  {
    "id": "curated-group-vs-knockout",
    "question": "Do group stage or knockout matches typically produce more goals per game?",
    "options": [
      "Group Stage",
      "Knockout Rounds",
      "Equal",
      "Finals only"
    ],
    "answer": "Group Stage",
    "difficulty": "medium",
    "category": "Analysis Insights",
    "fact": "Group stage matches average more goals — knockout matches tend to be more cautious and tactical."
  },
  {
    "id": "curated-germany-names",
    "question": "Germany competed under a different name until reunification. What was it?",
    "options": [
      "Germany FR",
      "West Germany",
      "Deutsche",
      "German Republic"
    ],
    "answer": "Germany FR",
    "difficulty": "hard",
    "category": "Tournament History",
    "fact": "Germany competed as \"Germany FR\" (Federal Republic) until reunification in 1990."
  },
  {
    "id": "curated-2022-winner",
    "question": "Who won the 2022 FIFA World Cup in Qatar?",
    "options": [
      "Argentina",
      "France",
      "Croatia",
      "Morocco"
    ],
    "answer": "Argentina",
    "difficulty": "easy",
    "category": "Recent History",
    "fact": "Argentina beat France on penalties in one of the greatest World Cup finals ever played."
  },
  {
    "id": "popculture-trophy-name",
    "question": "What is the FIFA World Cup trophy officially called?",
    "options": [
      "The Golden Globe",
      "The FIFA World Cup Trophy",
      "The Jules Rimet Trophy",
      "The Victory Cup"
    ],
    "answer": "The FIFA World Cup Trophy",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The current trophy has been awarded since 1974. The original Jules Rimet Trophy was permanently given to Brazil in 1970 after their third win."
  },
  {
    "id": "popculture-hand-of-god",
    "question": "Which player is famous for the 'Hand of God' goal?",
    "options": [
      "Pelé",
      "Diego Maradona",
      "Zinedine Zidane",
      "Ronaldo"
    ],
    "answer": "Diego Maradona",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Maradona scored the controversial 'Hand of God' goal against England in the 1986 World Cup quarter-final, using his hand to punch the ball into the net."
  },
  {
    "id": "popculture-zidane-headbutt",
    "question": "Which player was sent off for headbutting Marco Materazzi in the 2006 World Cup Final?",
    "options": [
      "Thierry Henry",
      "Ronaldinho",
      "Zinedine Zidane",
      "David Beckham"
    ],
    "answer": "Zinedine Zidane",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Zidane's headbutt on Materazzi in the 2006 final was his last ever professional act, and it became one of the most iconic moments in football history."
  },
  {
    "id": "popculture-waka-waka",
    "question": "Who sang the official 2010 World Cup song 'Waka Waka (This Time for Africa)'?",
    "options": [
      "Rihanna",
      "Shakira",
      "Beyoncé",
      "Jennifer Lopez"
    ],
    "answer": "Shakira",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Shakira's 'Waka Waka' became the best-selling World Cup song of all time and is still widely associated with the tournament."
  },
  {
    "id": "popculture-vuvuzela",
    "question": "Which instrument became famously associated with the 2010 World Cup in South Africa?",
    "options": [
      "Didgeridoo",
      "Vuvuzela",
      "Tambourine",
      "Air horn"
    ],
    "answer": "Vuvuzela",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The vuvuzela's constant buzzing sound during the 2010 World Cup divided opinion worldwide and even led to TV broadcast complaints."
  },
  {
    "id": "popculture-pele-most-wins",
    "question": "Which player has won the most FIFA World Cups?",
    "options": [
      "Diego Maradona",
      "Zinedine Zidane",
      "Pelé",
      "Ronaldo"
    ],
    "answer": "Pelé",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Pelé is the only player to have won three World Cups — in 1958, 1962, and 1970 — earning him the title of the greatest footballer of all time."
  },
  {
    "id": "popculture-world-cup-frequency",
    "question": "How often is the FIFA World Cup held?",
    "options": [
      "Every year",
      "Every 2 years",
      "Every 4 years",
      "Every 3 years"
    ],
    "answer": "Every 4 years",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The World Cup has been held every four years since 1930, with the exception of 1942 and 1946 due to World War II."
  },
  {
    "id": "popculture-yellow-card",
    "question": "What colour card does a referee show for a caution in football?",
    "options": [
      "Red",
      "Blue",
      "Yellow",
      "Green"
    ],
    "answer": "Yellow",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Yellow and red cards were introduced at the 1970 World Cup after a communication issue between the referee and players in the 1966 tournament."
  },
  {
    "id": "popculture-offside",
    "question": "In football, what rule is a player breaking if they are closer to the opponent's goal than both the ball and the second-last defender?",
    "options": [
      "Handball",
      "Offside",
      "Obstruction",
      "Foul throw"
    ],
    "answer": "Offside",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The offside rule is one of the most debated rules in football and has been a part of the game since the 19th century."
  },
  {
    "id": "popculture-penalty-shootout",
    "question": "From how many yards (metres) is a penalty kick taken?",
    "options": [
      "10 yards",
      "12 yards",
      "15 yards",
      "8 yards"
    ],
    "answer": "12 yards",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The penalty spot is 12 yards (approximately 11 metres) from the goal line. Penalty shootouts were first used at a World Cup in 1982."
  },
  {
    "id": "popculture-var",
    "question": "What does VAR stand for in modern football?",
    "options": [
      "Video Assisted Replay",
      "Video Assistant Referee",
      "Virtual Analysis Review",
      "Visual Aid Referee"
    ],
    "answer": "Video Assistant Referee",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "VAR was used for the first time at a FIFA World Cup during the 2018 tournament in Russia."
  },
  {
    "id": "popculture-golden-boot",
    "question": "What award is given to the top scorer at a FIFA World Cup?",
    "options": [
      "Golden Ball",
      "Golden Boot",
      "Golden Glove",
      "Ballon d'Or"
    ],
    "answer": "Golden Boot",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The Golden Boot (originally the Golden Shoe) has been awarded since 1930. The Golden Ball goes to the best overall player."
  },
  {
    "id": "popculture-beckham-red-card",
    "question": "Which English player was infamously sent off against Argentina at the 1998 World Cup?",
    "options": [
      "Paul Gascoigne",
      "Wayne Rooney",
      "David Beckham",
      "Steven Gerrard"
    ],
    "answer": "David Beckham",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Beckham was sent off for kicking out at Diego Simeone, which led to widespread criticism in England but he later redeemed himself as captain."
  },
  {
    "id": "popculture-world-cup-ball",
    "question": "What is the name of the classic black-and-white football design first used at the 1970 World Cup?",
    "options": [
      "Jabulani",
      "Telstar",
      "Brazuca",
      "Tango"
    ],
    "answer": "Telstar",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The Adidas Telstar was designed with black and white panels so it could be seen more easily on black-and-white television broadcasts."
  },
  {
    "id": "popculture-mascot-first",
    "question": "What was the name of the first-ever official FIFA World Cup mascot, introduced in 1966?",
    "options": [
      "Footix",
      "World Cup Willie",
      "Naranjito",
      "Zakumi"
    ],
    "answer": "World Cup Willie",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "World Cup Willie was a lion wearing a Union Jack jersey and became the template for all future World Cup mascots."
  },
  {
    "id": "popculture-number-players",
    "question": "How many players from each team are on the pitch during a standard football match?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": "11",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Each team fields 11 players including the goalkeeper. The standard squad size for the World Cup was expanded to 26 players in 2022."
  },
  {
    "id": "popculture-match-duration",
    "question": "How long is a standard football match (excluding extra time)?",
    "options": [
      "80 minutes",
      "90 minutes",
      "100 minutes",
      "120 minutes"
    ],
    "answer": "90 minutes",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "A standard match consists of two 45-minute halves. Extra time adds two additional 15-minute periods if the match is drawn in knockout rounds."
  },
  {
    "id": "popculture-cup-of-life",
    "question": "Which singer performed 'The Cup of Life', the official song of the 1998 World Cup?",
    "options": [
      "Enrique Iglesias",
      "Ricky Martin",
      "Marc Anthony",
      "Julio Iglesias"
    ],
    "answer": "Ricky Martin",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Ricky Martin's 'The Cup of Life (La Copa de la Vida)' became a global hit and helped launch his crossover career in English-language music."
  },
  {
    "id": "popculture-paul-octopus",
    "question": "What animal famously 'predicted' World Cup match results during the 2010 tournament?",
    "options": [
      "A parrot",
      "An octopus",
      "A cat",
      "A monkey"
    ],
    "answer": "An octopus",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "Paul the Octopus, who lived in a German aquarium, correctly predicted the outcomes of all seven of Germany's matches and the final in 2010."
  },
  {
    "id": "popculture-first-world-cup",
    "question": "In which year was the first-ever FIFA World Cup held?",
    "options": [
      "1926",
      "1928",
      "1930",
      "1934"
    ],
    "answer": "1930",
    "difficulty": "easy",
    "category": "Pop Culture",
    "fact": "The first World Cup was held in Uruguay in 1930, with only 13 teams participating. Uruguay won the tournament as hosts."
  }
];

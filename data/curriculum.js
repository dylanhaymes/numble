/* =====================================================================
   Numble curriculum — 12 themed worlds, K through college.
   Auto-generated and fact-checked. Edit freely: each world is
   { id, title, subtitle, color, icon, blurb, units:[ { id, title,
   lessons:[ { id, title, icon, intro, problems:[ {id,type,prompt,
   choices?,answer,accept?,explain,hints[]} ] } ] } ] }
   ===================================================================== */
window.NUMBLE_CURRICULUM = [
  {
    "id": "counting-cove",
    "title": "Counting Cove",
    "subtitle": "Kindergarten",
    "color": "#22D3EE",
    "icon": "🐚",
    "blurb": "Splash into a sparkly seaside cove where you count shells, spot shapes, and ride waves of patterns all the way to 20!",
    "units": [
      {
        "id": "counting-cove-u1",
        "title": "Seashell Counting",
        "icon": "🐚",
        "lessons": [
          {
            "id": "counting-cove-u1-l1",
            "title": "Count the Sea Critters",
            "icon": "🐠",
            "intro": "Hi, I'm Pip! Let's count cute sea critters together, one little flipper at a time.",
            "problems": [
              {
                "id": "counting-cove-u1-l1-p1",
                "type": "mc",
                "prompt": "Count the fish: 🐠🐠🐠. How many fish are there?",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "answer": "3",
                "explain": "Great counting! One, two, three fish — that's 3! 🐠",
                "hints": [
                  "Let's point at each fish one at a time as we say a number.",
                  "Touch the first fish and say 'one', then keep going to the next.",
                  "Start: 'one' on the first fish, 'two' on the next... what comes after two?"
                ]
              },
              {
                "id": "counting-cove-u1-l1-p2",
                "type": "mc",
                "prompt": "Count the crabs: 🦀🦀🦀🦀🦀. How many crabs?",
                "choices": [
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "answer": "5",
                "explain": "You got it! Counting each crab gives us 5. High five! 🖐️",
                "hints": [
                  "Each crab gets exactly one number as you count.",
                  "Try touching each crab and counting up: one, two, three...",
                  "You've got one, two, three, four — now count the very last crab."
                ]
              },
              {
                "id": "counting-cove-u1-l1-p3",
                "type": "input",
                "prompt": "Count the starfish: ⭐⭐. Type how many.",
                "answer": "2",
                "accept": [
                  "2",
                  "two"
                ],
                "explain": "Yes! One star, two stars — that makes 2! ⭐",
                "hints": [
                  "How many stars do you see in the row?",
                  "Count them one by one, gently.",
                  "Say 'one' for the first star... what number is the second?"
                ]
              },
              {
                "id": "counting-cove-u1-l1-p4",
                "type": "mc",
                "prompt": "Count the octopuses: 🐙🐙🐙🐙. How many?",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "answer": "4",
                "explain": "Wonderful! Four wiggly octopuses — that's 4! 🐙",
                "hints": [
                  "Let's count each octopus slowly.",
                  "Point at each one and say the next number.",
                  "One, two, three... one more to go!"
                ]
              },
              {
                "id": "counting-cove-u1-l1-p5",
                "type": "input",
                "prompt": "Count the turtles: 🐢🐢🐢🐢🐢🐢. Type the number.",
                "answer": "6",
                "accept": [
                  "6",
                  "six"
                ],
                "explain": "Awesome! Counting each turtle gets us to 6! 🐢",
                "hints": [
                  "Take your time and count each turtle once.",
                  "Touch each turtle as you say a number out loud.",
                  "You reached five turtles — count the last one to finish."
                ]
              },
              {
                "id": "counting-cove-u1-l1-p6",
                "type": "mc",
                "prompt": "How many seashells? 🐚🐚🐚🐚🐚🐚🐚",
                "choices": [
                  "6",
                  "7",
                  "8",
                  "9"
                ],
                "answer": "7",
                "explain": "Perfect! Seven shiny shells — that's 7! 🐚",
                "hints": [
                  "Count each shell, one tap at a time.",
                  "Don't skip any — every shell gets one number.",
                  "You counted six... what number comes right after six?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u1-l2",
            "title": "One Shell for One Spot",
            "icon": "🪸",
            "intro": "When we count, each thing gets exactly ONE number. Let's practice matching one shell to one spot!",
            "problems": [
              {
                "id": "counting-cove-u1-l2-p1",
                "type": "truefalse",
                "prompt": "When we count, every object gets its own number. True or false?",
                "answer": "true",
                "explain": "True! One object, one number — that's the counting rule. ✅",
                "hints": [
                  "Think about how we count toys one at a time.",
                  "Do two toys ever share the same number when counting?",
                  "Each toy gets its very own number as we point to it."
                ]
              },
              {
                "id": "counting-cove-u1-l2-p2",
                "type": "mc",
                "prompt": "Each fish needs one bubble. Fish: 🐠🐠🐠. How many bubbles do we need?",
                "choices": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "answer": "3",
                "explain": "Yes! Three fish need three bubbles — one each! 🫧",
                "hints": [
                  "One bubble matches up with one fish.",
                  "If you count the fish, that's how many bubbles you need.",
                  "Count the fish: one, two... what's the last number?"
                ]
              },
              {
                "id": "counting-cove-u1-l2-p3",
                "type": "input",
                "prompt": "Each crab gets one rock. Crabs: 🦀🦀🦀🦀. How many rocks? Type the number.",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Right! Four crabs each need one rock, so 4 rocks! 🪨",
                "hints": [
                  "Match one rock to each crab.",
                  "The number of rocks equals the number of crabs.",
                  "Count the crabs one by one — one, two, three..."
                ]
              },
              {
                "id": "counting-cove-u1-l2-p4",
                "type": "mc",
                "prompt": "There are 5 seats and 5 seals. Is there one seat for each seal?",
                "choices": [
                  "Yes, they match",
                  "No, too many seats",
                  "No, too many seals",
                  "There are no seats"
                ],
                "answer": "Yes, they match",
                "explain": "Exactly! 5 seats and 5 seals match up one-to-one. 🦭",
                "hints": [
                  "Compare the number of seats to the number of seals.",
                  "If both numbers are the same, everyone gets a seat.",
                  "5 seats and 5 seals — are those numbers the same?"
                ]
              },
              {
                "id": "counting-cove-u1-l2-p5",
                "type": "mc",
                "prompt": "Count the dots: • • • • • • . How many dots?",
                "choices": [
                  "5",
                  "6",
                  "7",
                  "8"
                ],
                "answer": "6",
                "explain": "Nice! Touching each dot once gives us 6! 🔵",
                "hints": [
                  "Touch each dot as you count it.",
                  "Give every dot exactly one number.",
                  "One, two, three, four, five... one more dot!"
                ]
              },
              {
                "id": "counting-cove-u1-l2-p6",
                "type": "input",
                "prompt": "Each shell hides one pearl. Shells: 🐚🐚🐚🐚🐚🐚🐚🐚. How many pearls? Type the number.",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "Beautiful! Eight shells hide eight pearls! 🦪",
                "hints": [
                  "One pearl for each shell.",
                  "Count the shells carefully — that's your answer.",
                  "You counted seven shells... what comes after seven?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u1-l3",
            "title": "All the Way to 20",
            "icon": "🌊",
            "intro": "Big numbers are fun! Let's keep counting past ten, all the way up to twenty.",
            "problems": [
              {
                "id": "counting-cove-u1-l3-p1",
                "type": "mc",
                "prompt": "What number comes right after 9?",
                "choices": [
                  "8",
                  "10",
                  "11",
                  "19"
                ],
                "answer": "10",
                "explain": "Yes! After 9 comes 10 — your first two-digit number! 🔟",
                "hints": [
                  "Think about counting out loud: 7, 8, 9, ...",
                  "What do we say right after nine?",
                  "It's the number that looks like a 1 and a 0 together."
                ]
              },
              {
                "id": "counting-cove-u1-l3-p2",
                "type": "input",
                "prompt": "Keep counting: 11, 12, 13, ___. What number comes next? Type it.",
                "answer": "14",
                "accept": [
                  "14",
                  "fourteen"
                ],
                "explain": "Great! After 13 comes 14. You're counting like a pro! 🌟",
                "hints": [
                  "Listen to the pattern: eleven, twelve, thirteen...",
                  "Each number goes up by one.",
                  "Thirteen plus one more is...?"
                ]
              },
              {
                "id": "counting-cove-u1-l3-p3",
                "type": "mc",
                "prompt": "Which number comes right before 16?",
                "choices": [
                  "14",
                  "15",
                  "17",
                  "60"
                ],
                "answer": "15",
                "explain": "Right! Just before 16 is 15. ⭐",
                "hints": [
                  "'Before' means the number that comes first.",
                  "Count up to 16 and notice the number just before it.",
                  "...14, 15, 16 — which one is right before 16?"
                ]
              },
              {
                "id": "counting-cove-u1-l3-p4",
                "type": "input",
                "prompt": "Count by ones: 17, 18, 19, ___. Type the next number.",
                "answer": "20",
                "accept": [
                  "20",
                  "twenty"
                ],
                "explain": "You did it! After 19 comes 20 — all the way to twenty! 🎉",
                "hints": [
                  "We're almost at the top of our counting hill!",
                  "Each number is one more than the last.",
                  "Nineteen plus one more is...?"
                ]
              },
              {
                "id": "counting-cove-u1-l3-p5",
                "type": "mc",
                "prompt": "Which list counts up in the right order?",
                "choices": [
                  "1, 2, 4, 3",
                  "2, 1, 3, 4",
                  "1, 2, 3, 4",
                  "4, 3, 2, 1"
                ],
                "answer": "1, 2, 3, 4",
                "explain": "Perfect! Counting up goes 1, 2, 3, 4 — each one bigger! 📈",
                "hints": [
                  "Counting up means the numbers get bigger each step.",
                  "Look for the list that starts small and grows in order.",
                  "Which list goes one, two, three, four with no jumps or swaps?"
                ]
              },
              {
                "id": "counting-cove-u1-l3-p6",
                "type": "mc",
                "prompt": "Pip counted 10 shells, then found 1 more. How many shells now?",
                "choices": [
                  "9",
                  "10",
                  "11",
                  "20"
                ],
                "answer": "11",
                "explain": "Yes! Ten and one more makes 11. 🐚",
                "hints": [
                  "Start at the number you already counted: 10.",
                  "Finding one more means counting up by one.",
                  "What comes right after 10?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "counting-cove-u2",
        "title": "More, Fewer, Equal",
        "icon": "⚖️",
        "lessons": [
          {
            "id": "counting-cove-u2-l1",
            "title": "Which Pile Has More?",
            "icon": "🫧",
            "intro": "Sometimes one group has MORE than another. Let's count both groups and compare!",
            "problems": [
              {
                "id": "counting-cove-u2-l1-p1",
                "type": "mc",
                "prompt": "Group A: 🐠🐠🐠. Group B: 🐠. Which group has more fish?",
                "choices": [
                  "Group A",
                  "Group B",
                  "They are equal",
                  "Neither"
                ],
                "answer": "Group A",
                "explain": "Yes! Group A has 3 and Group B has 1, so Group A has more. 🐠",
                "hints": [
                  "Count how many are in each group first.",
                  "'More' means the bigger number.",
                  "Group A has 3 and Group B has 1 — which number is bigger?"
                ]
              },
              {
                "id": "counting-cove-u2-l1-p2",
                "type": "mc",
                "prompt": "Which number is more: 5 or 2?",
                "choices": [
                  "5",
                  "2",
                  "They are the same",
                  "Neither"
                ],
                "answer": "5",
                "explain": "Right! 5 is more than 2. 🖐️",
                "hints": [
                  "Bigger numbers mean more things.",
                  "Imagine 5 toys next to 2 toys — which is the bigger pile?",
                  "When you count up, does 5 come before or after 2?"
                ]
              },
              {
                "id": "counting-cove-u2-l1-p3",
                "type": "truefalse",
                "prompt": "7 shells is more than 4 shells. True or false?",
                "answer": "true",
                "explain": "True! 7 is bigger than 4, so 7 shells is more. 🐚",
                "hints": [
                  "Compare the two numbers, 7 and 4.",
                  "Which number do you reach later when counting up?",
                  "7 comes after 4, so is 7 more or fewer?"
                ]
              },
              {
                "id": "counting-cove-u2-l1-p4",
                "type": "mc",
                "prompt": "Crabs: 🦀🦀. Snails: 🐌🐌🐌🐌. Which has more?",
                "choices": [
                  "The crabs",
                  "The snails",
                  "They are equal",
                  "Neither"
                ],
                "answer": "The snails",
                "explain": "Yes! 4 snails is more than 2 crabs. 🐌",
                "hints": [
                  "Count the crabs, then count the snails.",
                  "The group with the bigger number has more.",
                  "Crabs = 2 and snails = 4 — which is bigger?"
                ]
              },
              {
                "id": "counting-cove-u2-l1-p5",
                "type": "mc",
                "prompt": "Which number is the largest?",
                "choices": [
                  "3",
                  "8",
                  "6",
                  "1"
                ],
                "answer": "8",
                "explain": "Great! 8 is the biggest number in the group. ⭐",
                "hints": [
                  "Largest means the biggest of all.",
                  "Picture each number as a pile of toys — which pile is tallest?",
                  "Counting up, 8 comes after all the others here."
                ]
              },
              {
                "id": "counting-cove-u2-l1-p6",
                "type": "input",
                "prompt": "Pip has 6 shells and Coral has 9 shells. Who has more — type the number of the bigger pile.",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "Right! 9 is more than 6, so Coral's pile is bigger. 🐚",
                "hints": [
                  "Compare 6 and 9.",
                  "The bigger number is the one you say later when counting.",
                  "Which is bigger: 6 or 9?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u2-l2",
            "title": "Fewer and Smaller",
            "icon": "🐚",
            "intro": "'Fewer' means less — the smaller group. Let's find the tiny piles!",
            "problems": [
              {
                "id": "counting-cove-u2-l2-p1",
                "type": "mc",
                "prompt": "Which number is fewer: 3 or 7?",
                "choices": [
                  "3",
                  "7",
                  "They are equal",
                  "Neither"
                ],
                "answer": "3",
                "explain": "Yes! 3 is fewer than 7 because it's the smaller number. ✨",
                "hints": [
                  "'Fewer' means less — the smaller pile.",
                  "Picture 3 toys and 7 toys — which is the smaller group?",
                  "Which number comes first when you count up, 3 or 7?"
                ]
              },
              {
                "id": "counting-cove-u2-l2-p2",
                "type": "mc",
                "prompt": "Group A: 🐙🐙🐙🐙🐙. Group B: 🐙🐙. Which group has fewer?",
                "choices": [
                  "Group A",
                  "Group B",
                  "They are equal",
                  "Neither"
                ],
                "answer": "Group B",
                "explain": "Right! Group B has 2 and Group A has 5, so B has fewer. 🐙",
                "hints": [
                  "Count both groups first.",
                  "'Fewer' is the smaller number.",
                  "Group A has 5, Group B has 2 — which is smaller?"
                ]
              },
              {
                "id": "counting-cove-u2-l2-p3",
                "type": "truefalse",
                "prompt": "2 fish is fewer than 5 fish. True or false?",
                "answer": "true",
                "explain": "True! 2 is smaller than 5, so 2 fish is fewer. 🐠",
                "hints": [
                  "Compare the numbers 2 and 5.",
                  "Fewer means the smaller amount.",
                  "Is 2 smaller or bigger than 5?"
                ]
              },
              {
                "id": "counting-cove-u2-l2-p4",
                "type": "mc",
                "prompt": "Which number is the smallest?",
                "choices": [
                  "4",
                  "9",
                  "2",
                  "6"
                ],
                "answer": "2",
                "explain": "Yes! 2 is the smallest number in the group. 🐚",
                "hints": [
                  "Smallest means the tiniest of all.",
                  "Imagine each number as a pile — which pile is shortest?",
                  "Counting up, 2 comes before all the others here."
                ]
              },
              {
                "id": "counting-cove-u2-l2-p5",
                "type": "mc",
                "prompt": "Sandy has 8 shells. Reef has 5 shells. Who has fewer shells?",
                "choices": [
                  "Sandy",
                  "Reef",
                  "They have the same",
                  "Nobody"
                ],
                "answer": "Reef",
                "explain": "Right! 5 is fewer than 8, so Reef has fewer. 🐚",
                "hints": [
                  "Compare 8 and 5.",
                  "Fewer means the smaller number.",
                  "Which number is smaller, 8 or 5?"
                ]
              },
              {
                "id": "counting-cove-u2-l2-p6",
                "type": "input",
                "prompt": "Which is fewer: 4 starfish or 6 starfish? Type the number that is fewer.",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Yes! 4 is fewer than 6. ⭐",
                "hints": [
                  "Fewer means the smaller amount.",
                  "Compare 4 and 6.",
                  "Which number do you reach first counting up?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u2-l3",
            "title": "Just the Same: Equal",
            "icon": "🟰",
            "intro": "When two groups have the SAME number, we say they are equal. Let's find matching piles!",
            "problems": [
              {
                "id": "counting-cove-u2-l3-p1",
                "type": "mc",
                "prompt": "Group A: 🐠🐠🐠. Group B: 🐠🐠🐠. Are the groups equal?",
                "choices": [
                  "Yes, equal",
                  "No, A has more",
                  "No, B has more",
                  "There are no fish"
                ],
                "answer": "Yes, equal",
                "explain": "Yes! Both groups have 3 fish, so they are equal. 🟰",
                "hints": [
                  "Count each group.",
                  "Equal means both groups have the same number.",
                  "Group A has 3 and Group B has 3 — same or different?"
                ]
              },
              {
                "id": "counting-cove-u2-l3-p2",
                "type": "truefalse",
                "prompt": "5 and 5 are equal. True or false?",
                "answer": "true",
                "explain": "True! 5 equals 5 — they're exactly the same. 🟰",
                "hints": [
                  "Look at both numbers.",
                  "Equal means exactly the same number.",
                  "Is 5 the same as 5?"
                ]
              },
              {
                "id": "counting-cove-u2-l3-p3",
                "type": "mc",
                "prompt": "Which pair is equal?",
                "choices": [
                  "4 and 6",
                  "7 and 7",
                  "2 and 3",
                  "9 and 1"
                ],
                "answer": "7 and 7",
                "explain": "Right! 7 and 7 are the same number, so they're equal. ✅",
                "hints": [
                  "Equal pairs have two numbers that match.",
                  "Look for the pair where both numbers are the same.",
                  "Which pair has the very same number twice?"
                ]
              },
              {
                "id": "counting-cove-u2-l3-p4",
                "type": "input",
                "prompt": "Pip has 4 shells. To be equal, how many shells should Coral have? Type the number.",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Yes! Coral needs 4 too, so the piles are equal. 🐚",
                "hints": [
                  "Equal means the same amount as Pip.",
                  "Pip has 4 — Coral needs to match that.",
                  "What number is the same as 4?"
                ]
              },
              {
                "id": "counting-cove-u2-l3-p5",
                "type": "mc",
                "prompt": "Crabs: 🦀🦀🦀🦀. Rocks: 🪨🪨🪨. Is there an equal number of crabs and rocks?",
                "choices": [
                  "Yes, equal",
                  "No, more crabs",
                  "No, more rocks",
                  "There are no rocks"
                ],
                "answer": "No, more crabs",
                "explain": "Right! 4 crabs but only 3 rocks — not equal, more crabs. 🦀",
                "hints": [
                  "Count the crabs, then count the rocks.",
                  "Equal would mean the same number of each.",
                  "Crabs = 4, rocks = 3 — are those the same?"
                ]
              },
              {
                "id": "counting-cove-u2-l3-p6",
                "type": "mc",
                "prompt": "Which word means 'the same amount'?",
                "choices": [
                  "More",
                  "Fewer",
                  "Equal",
                  "Bigger"
                ],
                "answer": "Equal",
                "explain": "Yes! 'Equal' means the same amount. 🟰",
                "hints": [
                  "We just learned a special word for matching groups.",
                  "It's not 'more' and not 'fewer'.",
                  "Which word means both groups are exactly the same?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "counting-cove-u3",
        "title": "Shapes & Patterns",
        "icon": "🔺",
        "lessons": [
          {
            "id": "counting-cove-u3-l1",
            "title": "Shape Detectives",
            "icon": "🔵",
            "intro": "Shapes are everywhere in the cove! Let's spot circles, squares, triangles, and rectangles.",
            "problems": [
              {
                "id": "counting-cove-u3-l1-p1",
                "type": "mc",
                "prompt": "Which shape is round with no corners, like the sun? 🔵",
                "choices": [
                  "Circle",
                  "Square",
                  "Triangle",
                  "Rectangle"
                ],
                "answer": "Circle",
                "explain": "Yes! A circle is round and has no corners. 🔵",
                "hints": [
                  "Think about a shape that rolls smoothly.",
                  "It has no straight sides and no pointy corners.",
                  "What do we call the round shape, like a ball or the sun?"
                ]
              },
              {
                "id": "counting-cove-u3-l1-p2",
                "type": "mc",
                "prompt": "How many sides does a triangle have? 🔺",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "answer": "3",
                "explain": "Right! A triangle has 3 sides and 3 corners. 🔺",
                "hints": [
                  "Look at the points (corners) of a triangle.",
                  "Try counting each straight side.",
                  "'Tri' means three — so how many sides?"
                ]
              },
              {
                "id": "counting-cove-u3-l1-p3",
                "type": "truefalse",
                "prompt": "A square has 4 sides that are all the same length. True or false?",
                "answer": "true",
                "explain": "True! All 4 sides of a square are equal. ⬜",
                "hints": [
                  "Picture a square like a window or a cracker.",
                  "Count the sides and notice their lengths.",
                  "Are all four sides of a square the same size?"
                ]
              },
              {
                "id": "counting-cove-u3-l1-p4",
                "type": "mc",
                "prompt": "Which shape has 4 sides but is long like a door? ▭",
                "choices": [
                  "Circle",
                  "Triangle",
                  "Rectangle",
                  "Square"
                ],
                "answer": "Rectangle",
                "explain": "Yes! A rectangle has 4 sides and is longer than it is tall, like a door. ▭",
                "hints": [
                  "Think of a shape that is stretched out long.",
                  "It has 4 corners, but it's not a perfect square.",
                  "A door or a phone is shaped like which one?"
                ]
              },
              {
                "id": "counting-cove-u3-l1-p5",
                "type": "mc",
                "prompt": "A wheel rolls because it is shaped like a...?",
                "choices": [
                  "Square",
                  "Triangle",
                  "Circle",
                  "Rectangle"
                ],
                "answer": "Circle",
                "explain": "Right! Round circles roll easily — that's why wheels are circles! 🔵",
                "hints": [
                  "Which shape has no corners to bump along?",
                  "Round shapes roll; pointy ones get stuck.",
                  "What round shape is smooth all the way around?"
                ]
              },
              {
                "id": "counting-cove-u3-l1-p6",
                "type": "mc",
                "prompt": "Which shape has the MOST sides: circle, triangle, or square?",
                "choices": [
                  "Circle",
                  "Triangle",
                  "Square",
                  "They all match"
                ],
                "answer": "Square",
                "explain": "Yes! A square has 4 sides, a triangle has 3, and a circle has 0 straight sides. ⬜",
                "hints": [
                  "Count the sides of each shape.",
                  "A triangle has 3 sides, a square has more.",
                  "Which one has 4 sides — the most of these three?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u3-l2",
            "title": "Wave Patterns",
            "icon": "🔁",
            "intro": "Patterns repeat over and over. Let's read the waves and guess what comes next!",
            "problems": [
              {
                "id": "counting-cove-u3-l2-p1",
                "type": "mc",
                "prompt": "What comes next? 🔴🔵🔴🔵🔴___",
                "choices": [
                  "🔴",
                  "🔵",
                  "🟢",
                  "🟡"
                ],
                "answer": "🔵",
                "explain": "Yes! The pattern is red, blue, red, blue — so blue comes next! 🔵",
                "hints": [
                  "Say the colors out loud: red, blue, red, blue...",
                  "The two colors keep taking turns.",
                  "The last one was red, so what color is its turn-partner?"
                ]
              },
              {
                "id": "counting-cove-u3-l2-p2",
                "type": "mc",
                "prompt": "What comes next? 🐠🐚🐠🐚🐠___",
                "choices": [
                  "🐠",
                  "🐚",
                  "🦀",
                  "🐙"
                ],
                "answer": "🐚",
                "explain": "Right! Fish, shell, fish, shell — a shell comes next! 🐚",
                "hints": [
                  "Read the pattern: fish, shell, fish, shell...",
                  "The two pictures keep alternating.",
                  "A fish just came, so what takes its turn next?"
                ]
              },
              {
                "id": "counting-cove-u3-l2-p3",
                "type": "mc",
                "prompt": "What comes next? ⭐🌙⭐🌙___",
                "choices": [
                  "⭐",
                  "🌙",
                  "☀️",
                  "☁️"
                ],
                "answer": "⭐",
                "explain": "Yes! Star, moon, star, moon — a star is next! ⭐",
                "hints": [
                  "Say it out loud: star, moon, star, moon...",
                  "The pattern keeps switching between two pictures.",
                  "A moon just came, so whose turn is it now?"
                ]
              },
              {
                "id": "counting-cove-u3-l2-p4",
                "type": "truefalse",
                "prompt": "This is a repeating pattern: 🟦🟦🟦🟦. True or false?",
                "answer": "false",
                "explain": "False! All the same isn't a pattern — a pattern needs a part that repeats and changes. 🟦",
                "hints": [
                  "A pattern usually has more than one thing taking turns.",
                  "Here everything is exactly the same.",
                  "If nothing ever changes, is it really a back-and-forth pattern?"
                ]
              },
              {
                "id": "counting-cove-u3-l2-p5",
                "type": "mc",
                "prompt": "Fill the gap: 🦀🐙🦀___🦀🐙",
                "choices": [
                  "🦀",
                  "🐙",
                  "🐠",
                  "🐚"
                ],
                "answer": "🐙",
                "explain": "Yes! Crab, octopus, crab, octopus — the missing one is the octopus! 🐙",
                "hints": [
                  "Read the pattern around the blank: crab, octopus, crab...",
                  "The two pictures take turns.",
                  "After a crab, which picture always comes?"
                ]
              },
              {
                "id": "counting-cove-u3-l2-p6",
                "type": "mc",
                "prompt": "What comes next? 🔺🔺🔵🔺🔺🔵🔺🔺___",
                "choices": [
                  "🔺",
                  "🔵",
                  "🟢",
                  "⬜"
                ],
                "answer": "🔵",
                "explain": "Great eye! The pattern is triangle, triangle, circle — so a circle comes next! 🔵",
                "hints": [
                  "This pattern has three parts that repeat: two triangles then a circle.",
                  "Find where the group starts over each time.",
                  "You just saw two triangles in a row — what always follows them?"
                ]
              }
            ]
          },
          {
            "id": "counting-cove-u3-l3",
            "title": "Line Up the Numbers",
            "icon": "🔢",
            "intro": "Numbers love to line up in order! Let's put them in the right spots, smallest to biggest.",
            "problems": [
              {
                "id": "counting-cove-u3-l3-p1",
                "type": "mc",
                "prompt": "Which number is missing? 1, 2, ___, 4, 5",
                "choices": [
                  "2",
                  "3",
                  "6",
                  "0"
                ],
                "answer": "3",
                "explain": "Yes! Between 2 and 4 is 3. 🔢",
                "hints": [
                  "Count out loud and listen for the gap.",
                  "Each number goes up by one.",
                  "After 2 comes... before 4?"
                ]
              },
              {
                "id": "counting-cove-u3-l3-p2",
                "type": "mc",
                "prompt": "Which list is in order from smallest to biggest?",
                "choices": [
                  "3, 1, 2",
                  "1, 2, 3",
                  "2, 3, 1",
                  "3, 2, 1"
                ],
                "answer": "1, 2, 3",
                "explain": "Right! Smallest to biggest goes 1, 2, 3. 📈",
                "hints": [
                  "Smallest to biggest means starting with the tiniest number.",
                  "Look for the list that grows step by step.",
                  "Which list starts at 1 and climbs up in order?"
                ]
              },
              {
                "id": "counting-cove-u3-l3-p3",
                "type": "input",
                "prompt": "Fill the gap: 8, 9, ___, 11. Type the missing number.",
                "answer": "10",
                "accept": [
                  "10",
                  "ten"
                ],
                "explain": "Yes! Between 9 and 11 is 10. 🔟",
                "hints": [
                  "Count up: eight, nine, ...",
                  "Each step adds one more.",
                  "What number comes right after 9?"
                ]
              },
              {
                "id": "counting-cove-u3-l3-p4",
                "type": "mc",
                "prompt": "Which number comes FIRST when we line up 5, 2, and 8 smallest to biggest?",
                "choices": [
                  "5",
                  "2",
                  "8",
                  "They tie"
                ],
                "answer": "2",
                "explain": "Right! 2 is the smallest, so it goes first. ⭐",
                "hints": [
                  "Smallest goes first in the line.",
                  "Compare 5, 2, and 8 — which is tiniest?",
                  "Counting up, which of these do you reach first?"
                ]
              },
              {
                "id": "counting-cove-u3-l3-p5",
                "type": "mc",
                "prompt": "Count backwards: 5, 4, 3, ___. What comes next?",
                "choices": [
                  "2",
                  "6",
                  "4",
                  "1"
                ],
                "answer": "2",
                "explain": "Yes! Counting backwards, after 3 comes 2. ⬇️",
                "hints": [
                  "Counting backwards means the numbers get smaller.",
                  "Each step goes down by one.",
                  "After 3, what is one less?"
                ]
              },
              {
                "id": "counting-cove-u3-l3-p6",
                "type": "input",
                "prompt": "Put in order, smallest first: 6, 4, 5. Type the smallest number.",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Yes! 4 is the smallest, so it comes first. 🐚",
                "hints": [
                  "The smallest number leads the line.",
                  "Compare 6, 4, and 5.",
                  "Which of these do you reach first when counting up?"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "addition-atoll",
    "title": "Addition Atoll",
    "subtitle": "Grades 1-2",
    "color": "#3DDC84",
    "icon": "➕",
    "blurb": "Splash into a sunny island where seashells, starfish, and sandy tens stack up into bigger and bigger sums!",
    "units": [
      {
        "id": "addition-atoll-u1",
        "title": "Shell Sums to 20",
        "lessons": [
          {
            "id": "addition-atoll-u1-l1",
            "title": "Adding On the Sand",
            "icon": "🐚",
            "intro": "Hi friend, I'm Pip! Let's start by adding little piles of seashells together. Counting on is our first beach trick!",
            "problems": [
              {
                "id": "addition-atoll-u1-l1-p1",
                "type": "mc",
                "prompt": "🐚🐚🐚 + 🐚🐚 = ? How many shells in all?",
                "choices": [
                  "4",
                  "5",
                  "6",
                  "3"
                ],
                "answer": "5",
                "explain": "Three shells and two more makes five shells. Counting on from 3: 4, 5!",
                "hints": [
                  "We have a pile of 3 shells and a pile of 2 shells. How many is that together?",
                  "Start at the bigger pile and count up. Say '3' then count the extra shells one at a time.",
                  "Begin at 3, then count: 4... now one more shell to go!"
                ]
              },
              {
                "id": "addition-atoll-u1-l1-p2",
                "type": "input",
                "prompt": "4 + 3 = ?",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "Start at 4 and count up three: 5, 6, 7. You got 7!",
                "hints": [
                  "Picture 4 crabs, then 3 more scuttle over. How many crabs now?",
                  "Hold 4 in your head and count up 3 fingers.",
                  "Begin at 4, then count 5, 6... one more!"
                ]
              },
              {
                "id": "addition-atoll-u1-l1-p3",
                "type": "mc",
                "prompt": "6 + 2 = ?",
                "choices": [
                  "7",
                  "8",
                  "9",
                  "6"
                ],
                "answer": "8",
                "explain": "Counting on from 6: seven, eight. That's 8!",
                "hints": [
                  "You already have 6, so you only need to count the 2 extra.",
                  "Keep 6 in your head and hop up two times.",
                  "From 6, the next number is 7, then one more hop."
                ]
              },
              {
                "id": "addition-atoll-u1-l1-p4",
                "type": "input",
                "prompt": "5 + 4 = ?",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "Start at 5 and count up four: 6, 7, 8, 9. Nice work!",
                "hints": [
                  "Imagine 5 starfish, then 4 more wash ashore.",
                  "Start from the bigger number, 5, and count 4 more.",
                  "From 5: 6, 7... two more hops to go!"
                ]
              },
              {
                "id": "addition-atoll-u1-l1-p5",
                "type": "mc",
                "prompt": "7 + 3 = ?",
                "choices": [
                  "9",
                  "10",
                  "11",
                  "8"
                ],
                "answer": "10",
                "explain": "7 and 3 make a perfect 10! That's a special beach pair.",
                "hints": [
                  "What number do you reach when you count 3 past 7?",
                  "Counting on from 7, take exactly three steps.",
                  "From 7: 8, 9... and one more lands you on a round number."
                ]
              },
              {
                "id": "addition-atoll-u1-l1-p6",
                "type": "input",
                "prompt": "8 + 5 = ?",
                "answer": "13",
                "accept": [
                  "13",
                  "thirteen"
                ],
                "explain": "Start at 8 and count up five: 9, 10, 11, 12, 13. You crossed past ten!",
                "hints": [
                  "This sum goes a little past 10. Start at the bigger number.",
                  "Hold 8 and count up 5 steps, crossing over the 10.",
                  "From 8: 9, 10, 11... two more steps!"
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u1-l2",
            "title": "Starfish Take-Aways",
            "icon": "⭐",
            "intro": "Sometimes shells float away! Subtracting means taking some away and counting what's left. Let's try it together.",
            "problems": [
              {
                "id": "addition-atoll-u1-l2-p1",
                "type": "mc",
                "prompt": "⭐⭐⭐⭐⭐ take away ⭐⭐ = ? How many stars are left?",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "7"
                ],
                "answer": "3",
                "explain": "Five starfish, two drift away, and three stay behind. 5 - 2 = 3!",
                "hints": [
                  "We started with 5 stars and 2 floated off. Count the ones that stayed.",
                  "Take away the 2 and count what's left on the sand.",
                  "Cross off 2 of the 5 stars, then count the rest."
                ]
              },
              {
                "id": "addition-atoll-u1-l2-p2",
                "type": "input",
                "prompt": "9 - 4 = ?",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Start at 9 and count back four: 8, 7, 6, 5. Five is left!",
                "hints": [
                  "Begin at 9 and take 4 away. What's left?",
                  "Count backward 4 steps from 9.",
                  "From 9: 8, 7... two more steps back."
                ]
              },
              {
                "id": "addition-atoll-u1-l2-p3",
                "type": "mc",
                "prompt": "10 - 6 = ?",
                "choices": [
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "answer": "4",
                "explain": "Ten minus six leaves four. Counting back from 10 six times lands on 4!",
                "hints": [
                  "Start with all 10 and remove 6.",
                  "Think: 6 plus what number makes 10?",
                  "Count back from 10: 9, 8, 7... keep going three more."
                ]
              },
              {
                "id": "addition-atoll-u1-l2-p4",
                "type": "input",
                "prompt": "8 - 3 = ?",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Eight take away three is five. Count back: 7, 6, 5!",
                "hints": [
                  "You have 8 shells and give 3 to a friend. How many remain?",
                  "Count backward 3 steps from 8.",
                  "From 8: 7, 6... one more step back."
                ]
              },
              {
                "id": "addition-atoll-u1-l2-p5",
                "type": "mc",
                "prompt": "12 - 5 = ?",
                "choices": [
                  "6",
                  "7",
                  "8",
                  "5"
                ],
                "answer": "7",
                "explain": "Twelve minus five is seven. You counted back across the ten!",
                "hints": [
                  "Start at 12 and take away 5.",
                  "Counting back 5 from 12 crosses over 10.",
                  "From 12: 11, 10, 9... two more steps back."
                ]
              },
              {
                "id": "addition-atoll-u1-l2-p6",
                "type": "input",
                "prompt": "15 - 7 = ?",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "Fifteen take away seven leaves eight. Great counting back!",
                "hints": [
                  "Begin at 15 and remove 7.",
                  "Think: 7 plus what makes 15? Or count back 7 steps.",
                  "From 15: 14, 13, 12... keep going to take away all 7."
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u1-l3",
            "title": "Two-Way Shell Trade",
            "icon": "🔁",
            "intro": "Here's a cool secret: adding and subtracting are like a tide that flows both ways. Let's see how they connect!",
            "problems": [
              {
                "id": "addition-atoll-u1-l3-p1",
                "type": "truefalse",
                "prompt": "True or false: 6 + 4 gives the same answer as 4 + 6.",
                "answer": "true",
                "explain": "Yes! Adding in any order gives the same sum. Both make 10. That's the flip-flop rule!",
                "hints": [
                  "Does the order of the piles change how many shells you have?",
                  "Try counting both ways and compare the totals.",
                  "6 + 4 makes 10. Now check what 4 + 6 makes."
                ]
              },
              {
                "id": "addition-atoll-u1-l3-p2",
                "type": "mc",
                "prompt": "If 7 + 5 = 12, what is 12 - 5?",
                "choices": [
                  "6",
                  "7",
                  "8",
                  "5"
                ],
                "answer": "7",
                "explain": "Subtraction undoes addition! Since 7 + 5 = 12, then 12 - 5 must be 7.",
                "hints": [
                  "Subtracting is the opposite of adding. What did you add to get 12?",
                  "The 5 you added is being taken back away.",
                  "Take 5 away from 12 and you land back on the other number."
                ]
              },
              {
                "id": "addition-atoll-u1-l3-p3",
                "type": "input",
                "prompt": "Fill the blank: 8 + ___ = 11",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "From 8 you need 3 more to reach 11. 8 + 3 = 11!",
                "hints": [
                  "How many steps from 8 up to 11?",
                  "Count up from 8 until you reach 11, and count the hops.",
                  "From 8: 9, 10... one more hop to 11."
                ]
              },
              {
                "id": "addition-atoll-u1-l3-p4",
                "type": "truefalse",
                "prompt": "True or false: 9 - 3 is the same as 3 - 9.",
                "answer": "false",
                "explain": "Nope! Subtraction order DOES matter. 9 - 3 is 6, but 3 - 9 can't even take that many away.",
                "hints": [
                  "With take-away, does it matter which number you start with?",
                  "You can't easily take 9 away from only 3 shells.",
                  "Figure out 9 - 3, then see if 3 - 9 could match it."
                ]
              },
              {
                "id": "addition-atoll-u1-l3-p5",
                "type": "mc",
                "prompt": "Which fact belongs to the family with 5, 8, and 13?",
                "choices": [
                  "5 + 8 = 13",
                  "5 + 8 = 12",
                  "13 + 5 = 8",
                  "8 - 13 = 5"
                ],
                "answer": "5 + 8 = 13",
                "explain": "The two small parts 5 and 8 join to make 13. That's the whole family's biggest number!",
                "hints": [
                  "In a fact family, the two small numbers add up to the big one.",
                  "Which two numbers are the parts, and which is the whole?",
                  "Try adding 5 and 8 and see if it equals the biggest number, 13."
                ]
              },
              {
                "id": "addition-atoll-u1-l3-p6",
                "type": "input",
                "prompt": "Fill the blank: 14 - ___ = 6",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "14 take away 8 leaves 6. You can check: 6 + 8 = 14!",
                "hints": [
                  "What number do you take from 14 to be left with 6?",
                  "Think of the partner: 6 plus what makes 14?",
                  "Count up from 6 to 14 and count the hops."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "addition-atoll-u2",
        "title": "Make-Ten Lagoon",
        "lessons": [
          {
            "id": "addition-atoll-u2-l1",
            "title": "Number Bond Buddies",
            "icon": "🤝",
            "intro": "Every number has secret partner pairs that hide inside it! Let's find the buddies that make up our numbers.",
            "problems": [
              {
                "id": "addition-atoll-u2-l1-p1",
                "type": "input",
                "prompt": "What number goes with 6 to make 10? 6 + ___ = 10",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "6 and 4 are ten-buddies! Together they make a full 10.",
                "hints": [
                  "How far is 6 from a full 10?",
                  "Count up from 6 to 10 on your fingers.",
                  "From 6: 7, 8... two more hops to reach 10."
                ]
              },
              {
                "id": "addition-atoll-u2-l1-p2",
                "type": "mc",
                "prompt": "Which pair makes 10?",
                "choices": [
                  "3 + 7",
                  "3 + 8",
                  "4 + 5",
                  "2 + 7"
                ],
                "answer": "3 + 7",
                "explain": "3 and 7 are ten-buddies! 3 + 7 = 10. The others fall short.",
                "hints": [
                  "Add each pair and look for the one that hits exactly 10.",
                  "Each wrong pair lands just under 10. Add carefully to spot the winner.",
                  "Try the pairs one by one and check which total equals 10."
                ]
              },
              {
                "id": "addition-atoll-u2-l1-p3",
                "type": "input",
                "prompt": "What number goes with 8 to make 10? 8 + ___ = 10",
                "answer": "2",
                "accept": [
                  "2",
                  "two"
                ],
                "explain": "8 and 2 make 10! They're a tidy ten-buddy pair.",
                "hints": [
                  "How many more shells does 8 need to reach 10?",
                  "Count up from 8 to 10.",
                  "From 8: 9... one more to 10."
                ]
              },
              {
                "id": "addition-atoll-u2-l1-p4",
                "type": "truefalse",
                "prompt": "True or false: 5 and 5 make 10.",
                "answer": "true",
                "explain": "Yes! Two equal piles of 5 join to make 10. Double buddies!",
                "hints": [
                  "Two hands with 5 fingers each... how many total?",
                  "Add 5 plus 5 and check the total.",
                  "5 plus 5 is a doubles fact you might already know."
                ]
              },
              {
                "id": "addition-atoll-u2-l1-p5",
                "type": "mc",
                "prompt": "9 needs a buddy to make 10. Who is it?",
                "choices": [
                  "1",
                  "2",
                  "0",
                  "10"
                ],
                "answer": "1",
                "explain": "9 and 1 are ten-buddies! Just one more makes a full 10.",
                "hints": [
                  "9 is super close to 10 already.",
                  "How many steps from 9 up to 10?",
                  "It's only a single hop from 9."
                ]
              },
              {
                "id": "addition-atoll-u2-l1-p6",
                "type": "input",
                "prompt": "What number goes with 7 to make 10? 7 + ___ = 10",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "7 and 3 are ten-buddies! 7 + 3 = 10.",
                "hints": [
                  "How far is 7 from 10?",
                  "Count up from 7 to 10 and count the hops.",
                  "From 7: 8, 9... one more hop to 10."
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u2-l2",
            "title": "Bridge to Ten",
            "icon": "🌉",
            "intro": "Here's my favorite trick: when adding gets tricky, build a 10 first, then add the rest. Watch how easy it gets!",
            "problems": [
              {
                "id": "addition-atoll-u2-l2-p1",
                "type": "mc",
                "prompt": "To add 9 + 5, first make 10. 9 + 1 = 10, and 1 was taken from the 5. What's the final answer?",
                "choices": [
                  "13",
                  "14",
                  "15",
                  "12"
                ],
                "answer": "14",
                "explain": "9 + 1 makes 10, then add the leftover 4: 10 + 4 = 14. The make-ten bridge works!",
                "hints": [
                  "After 9 becomes 10, how much of the 5 is left over?",
                  "You used 1 from the 5, so 4 remains. Add it to 10.",
                  "10 + 4 = ?"
                ]
              },
              {
                "id": "addition-atoll-u2-l2-p2",
                "type": "input",
                "prompt": "Use make-ten: 8 + 6 = ?",
                "answer": "14",
                "accept": [
                  "14",
                  "fourteen"
                ],
                "explain": "8 + 2 = 10, then add the leftover 4: 10 + 4 = 14!",
                "hints": [
                  "8 needs 2 more to become 10. Borrow 2 from the 6.",
                  "After borrowing 2, you have 4 left from the 6.",
                  "Now add 10 + 4."
                ]
              },
              {
                "id": "addition-atoll-u2-l2-p3",
                "type": "input",
                "prompt": "Use make-ten: 7 + 5 = ?",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve"
                ],
                "explain": "7 + 3 = 10, then add the leftover 2: 10 + 2 = 12!",
                "hints": [
                  "7 needs 3 more to reach 10. Take 3 from the 5.",
                  "After taking 3, you have 2 left from the 5.",
                  "Now add 10 + 2."
                ]
              },
              {
                "id": "addition-atoll-u2-l2-p4",
                "type": "mc",
                "prompt": "9 + 7 using make-ten equals?",
                "choices": [
                  "15",
                  "16",
                  "17",
                  "14"
                ],
                "answer": "16",
                "explain": "9 + 1 = 10, then add the leftover 6: 10 + 6 = 16!",
                "hints": [
                  "Turn 9 into 10 by borrowing 1 from the 7.",
                  "After borrowing 1, the 7 becomes 6.",
                  "Now add 10 + 6."
                ]
              },
              {
                "id": "addition-atoll-u2-l2-p5",
                "type": "input",
                "prompt": "Use make-ten: 6 + 8 = ?",
                "answer": "14",
                "accept": [
                  "14",
                  "fourteen"
                ],
                "explain": "Make the 8 into 10 by borrowing 2 from the 6: 10 + 4 = 14!",
                "hints": [
                  "You can build 10 from either number. Try 8 + 2 = 10.",
                  "Borrow 2 from the 6, leaving 4.",
                  "Now add 10 + 4."
                ]
              },
              {
                "id": "addition-atoll-u2-l2-p6",
                "type": "mc",
                "prompt": "8 + 7 using make-ten equals?",
                "choices": [
                  "14",
                  "15",
                  "16",
                  "13"
                ],
                "answer": "15",
                "explain": "8 + 2 = 10, then add the leftover 5: 10 + 5 = 15!",
                "hints": [
                  "Turn 8 into 10 by borrowing 2 from the 7.",
                  "After borrowing 2, the 7 becomes 5.",
                  "Now add 10 + 5."
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u2-l3",
            "title": "Beach Story Problems",
            "icon": "📖",
            "intro": "Math hides inside stories! Let's read carefully and find the numbers, then decide whether to add or take away.",
            "problems": [
              {
                "id": "addition-atoll-u2-l3-p1",
                "type": "input",
                "prompt": "Mia found 6 seashells, then found 7 more. How many shells does she have now?",
                "answer": "13",
                "accept": [
                  "13",
                  "thirteen"
                ],
                "explain": "She kept finding MORE, so we add: 6 + 7 = 13 shells!",
                "hints": [
                  "She found shells and then found more. Does that grow or shrink her pile?",
                  "Finding more means we add the two numbers together.",
                  "Add 6 + 7 using make-ten if it helps."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p2",
                "type": "input",
                "prompt": "There were 12 crabs on the beach. 5 scuttled into the water. How many crabs are left?",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "Some crabs left, so we subtract: 12 - 5 = 7 crabs remain!",
                "hints": [
                  "Crabs went away. Does the beach have more or fewer crabs now?",
                  "When some leave, we take away, or subtract.",
                  "Count back 5 from 12."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p3",
                "type": "mc",
                "prompt": "Leo built 8 sandcastles. The waves knocked down 3. How many still stand?",
                "choices": [
                  "4",
                  "5",
                  "6",
                  "11"
                ],
                "answer": "5",
                "explain": "Three got knocked down, so we subtract: 8 - 3 = 5 castles left!",
                "hints": [
                  "The waves destroyed some castles. Did the number go up or down?",
                  "Knocking down means take away.",
                  "Count back 3 from 8."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p4",
                "type": "input",
                "prompt": "A bucket holds 9 starfish. You add 6 more. How many starfish in the bucket?",
                "answer": "15",
                "accept": [
                  "15",
                  "fifteen"
                ],
                "explain": "Adding more means we add: 9 + 6 = 15 starfish!",
                "hints": [
                  "You put MORE starfish in. Does the bucket get fuller or emptier?",
                  "Adding more means we add the numbers.",
                  "Use make-ten: 9 + 1 = 10, then add the rest."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p5",
                "type": "mc",
                "prompt": "There are 14 birds on the dock. 6 fly away. How many birds stay?",
                "choices": [
                  "7",
                  "8",
                  "9",
                  "20"
                ],
                "answer": "8",
                "explain": "Birds flew away, so we subtract: 14 - 6 = 8 birds remain!",
                "hints": [
                  "Birds left the dock. More or fewer now?",
                  "Flying away means take away.",
                  "Count back 6 from 14, or think: 6 + what = 14?"
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p6",
                "type": "input",
                "prompt": "Sam had 7 shells. He gave 4 to Pip and 2 to a friend. How many shells does Sam have left?",
                "answer": "1",
                "accept": [
                  "1",
                  "one"
                ],
                "explain": "He gave away 4 and 2, that's 6 total gone. 7 - 6 = 1 shell left!",
                "hints": [
                  "Sam gave shells to TWO people. First add up everything he gave away.",
                  "4 given plus 2 given is 6 shells gone. Then subtract from 7.",
                  "7 - 6 = ?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "addition-atoll-u3",
        "title": "Tens & Ones Reef",
        "lessons": [
          {
            "id": "addition-atoll-u3-l1",
            "title": "Building With Tens",
            "icon": "🧱",
            "intro": "Big numbers are built from bundles of ten and loose ones, like stacking coral blocks! Let's see how they fit.",
            "problems": [
              {
                "id": "addition-atoll-u3-l1-p1",
                "type": "mc",
                "prompt": "The number 34 has how many tens?",
                "choices": [
                  "3",
                  "4",
                  "34",
                  "30"
                ],
                "answer": "3",
                "explain": "The 3 is in the tens place, so 34 has 3 tens and 4 ones!",
                "hints": [
                  "Look at the LEFT digit of 34. That one counts the tens.",
                  "34 is 30 plus 4. How many tens are in 30?",
                  "The first digit, 3, tells you the tens."
                ]
              },
              {
                "id": "addition-atoll-u3-l1-p2",
                "type": "input",
                "prompt": "How many ones are in the number 57?",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "The 7 is in the ones place, so 57 has 7 ones (and 5 tens)!",
                "hints": [
                  "Look at the RIGHT digit of 57. That one counts the ones.",
                  "57 is 50 plus how many extra?",
                  "The last digit, 7, is your answer."
                ]
              },
              {
                "id": "addition-atoll-u3-l1-p3",
                "type": "input",
                "prompt": "What number is made of 4 tens and 2 ones?",
                "answer": "42",
                "accept": [
                  "42",
                  "forty-two",
                  "forty two"
                ],
                "explain": "4 tens is 40, plus 2 ones is 42!",
                "hints": [
                  "4 tens means 40. Now add the ones.",
                  "Put the tens digit first, then the ones digit.",
                  "40 + 2 = ?"
                ]
              },
              {
                "id": "addition-atoll-u3-l1-p4",
                "type": "mc",
                "prompt": "Which number has 6 tens and 0 ones?",
                "choices": [
                  "60",
                  "6",
                  "16",
                  "66"
                ],
                "answer": "60",
                "explain": "6 tens with no extra ones is exactly 60!",
                "hints": [
                  "6 tens means six bundles of ten.",
                  "No ones means the ones place is a 0.",
                  "Six tens written out is 6 then 0."
                ]
              },
              {
                "id": "addition-atoll-u3-l1-p5",
                "type": "truefalse",
                "prompt": "True or false: The number 28 has 8 tens and 2 ones.",
                "answer": "false",
                "explain": "Flipped! 28 actually has 2 tens and 8 ones. The first digit is tens.",
                "hints": [
                  "Which digit is on the left, and which place does it count?",
                  "The 2 is in the tens place, the 8 is in the ones place.",
                  "Check if the tens and ones were swapped."
                ]
              },
              {
                "id": "addition-atoll-u3-l1-p6",
                "type": "input",
                "prompt": "What number is made of 7 tens and 5 ones?",
                "answer": "75",
                "accept": [
                  "75",
                  "seventy-five",
                  "seventy five"
                ],
                "explain": "7 tens is 70, plus 5 ones is 75!",
                "hints": [
                  "7 tens means 70.",
                  "Tens digit first, then ones digit.",
                  "70 + 5 = ?"
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u3-l2",
            "title": "Skip Across the Reef",
            "icon": "🐠",
            "intro": "Skip counting lets us hop over numbers in groups, like a fish darting along the reef! Let's count by 2s, 5s, and 10s.",
            "problems": [
              {
                "id": "addition-atoll-u3-l2-p1",
                "type": "input",
                "prompt": "Skip count by 2s: 2, 4, 6, 8, ___",
                "answer": "10",
                "accept": [
                  "10",
                  "ten"
                ],
                "explain": "Counting by 2s, after 8 comes 10. Each hop adds 2!",
                "hints": [
                  "Each step jumps up by 2.",
                  "What is 8 plus 2?",
                  "From 8, hop two more."
                ]
              },
              {
                "id": "addition-atoll-u3-l2-p2",
                "type": "mc",
                "prompt": "Skip count by 5s: 5, 10, 15, ___",
                "choices": [
                  "16",
                  "20",
                  "25",
                  "18"
                ],
                "answer": "20",
                "explain": "Counting by 5s, after 15 comes 20. Each hop adds 5!",
                "hints": [
                  "Each step jumps up by 5.",
                  "What is 15 plus 5?",
                  "Numbers counting by 5 end in 5 or 0."
                ]
              },
              {
                "id": "addition-atoll-u3-l2-p3",
                "type": "input",
                "prompt": "Skip count by 10s: 10, 20, 30, ___",
                "answer": "40",
                "accept": [
                  "40",
                  "forty"
                ],
                "explain": "Counting by 10s, after 30 comes 40. Just add another ten!",
                "hints": [
                  "Each step jumps up by a whole ten.",
                  "What is 30 plus 10?",
                  "The tens digit goes up by one each hop."
                ]
              },
              {
                "id": "addition-atoll-u3-l2-p4",
                "type": "mc",
                "prompt": "Which number is MISSING? 5, 10, ___, 20, 25",
                "choices": [
                  "12",
                  "15",
                  "11",
                  "13"
                ],
                "answer": "15",
                "explain": "Counting by 5s, the number between 10 and 20 is 15!",
                "hints": [
                  "These numbers count by 5s.",
                  "What comes 5 after 10?",
                  "10 + 5 = ?"
                ]
              },
              {
                "id": "addition-atoll-u3-l2-p5",
                "type": "input",
                "prompt": "Skip count by 2s: 10, 12, 14, ___",
                "answer": "16",
                "accept": [
                  "16",
                  "sixteen"
                ],
                "explain": "Counting by 2s, after 14 comes 16. Keep adding 2!",
                "hints": [
                  "Each step jumps up by 2.",
                  "What is 14 plus 2?",
                  "From 14, hop two more."
                ]
              },
              {
                "id": "addition-atoll-u3-l2-p6",
                "type": "mc",
                "prompt": "Pip has 4 bags with 5 shells each. Skip count by 5s to find the total.",
                "choices": [
                  "15",
                  "20",
                  "25",
                  "9"
                ],
                "answer": "20",
                "explain": "5, 10, 15, 20! Four hops of 5 gives 20 shells.",
                "hints": [
                  "Count by 5 once for each bag, and there are 4 bags.",
                  "Say: 5, 10, 15... one more bag.",
                  "After the fourth hop of 5 you land on the answer."
                ]
              }
            ]
          },
          {
            "id": "addition-atoll-u3-l3",
            "title": "Even, Odd & Big Sums",
            "icon": "🏝️",
            "intro": "Almost to the top of the atoll! Let's spot even and odd numbers and tackle bigger sums within 100. You've got this!",
            "problems": [
              {
                "id": "addition-atoll-u3-l3-p1",
                "type": "truefalse",
                "prompt": "True or false: 8 is an even number.",
                "answer": "true",
                "explain": "Yes! 8 splits into two equal groups of 4, so it's even. Even numbers end in 0, 2, 4, 6, or 8.",
                "hints": [
                  "Can you split 8 shells into two equal piles with none left over?",
                  "Even numbers pair up perfectly with no leftover.",
                  "Look at the last digit: is it 0, 2, 4, 6, or 8?"
                ]
              },
              {
                "id": "addition-atoll-u3-l3-p2",
                "type": "mc",
                "prompt": "Which number is ODD?",
                "choices": [
                  "6",
                  "10",
                  "7",
                  "4"
                ],
                "answer": "7",
                "explain": "7 can't split into two equal groups, so it's odd. Odd numbers end in 1, 3, 5, 7, or 9!",
                "hints": [
                  "An odd number always has one leftover when you pair it up.",
                  "Check the last digit of each number.",
                  "Odd numbers end in 1, 3, 5, 7, or 9."
                ]
              },
              {
                "id": "addition-atoll-u3-l3-p3",
                "type": "input",
                "prompt": "20 + 30 = ?",
                "answer": "50",
                "accept": [
                  "50",
                  "fifty"
                ],
                "explain": "2 tens plus 3 tens is 5 tens, which is 50!",
                "hints": [
                  "Think in tens: how many tens in each number?",
                  "Add the tens: 2 tens plus 3 tens.",
                  "2 + 3 = 5, so the answer is 5 tens."
                ]
              },
              {
                "id": "addition-atoll-u3-l3-p4",
                "type": "input",
                "prompt": "40 + 25 = ?",
                "answer": "65",
                "accept": [
                  "65",
                  "sixty-five",
                  "sixty five"
                ],
                "explain": "Add the tens (40 + 20 = 60), then the ones (60 + 5 = 65)!",
                "hints": [
                  "Break 25 into 20 and 5.",
                  "First add 40 + 20, then add the 5.",
                  "60 + 5 = ?"
                ]
              },
              {
                "id": "addition-atoll-u3-l3-p5",
                "type": "mc",
                "prompt": "23 + 14 = ?",
                "choices": [
                  "36",
                  "37",
                  "38",
                  "47"
                ],
                "answer": "37",
                "explain": "Add the tens (20 + 10 = 30) and the ones (3 + 4 = 7): 30 + 7 = 37!",
                "hints": [
                  "Add the tens together, then add the ones together.",
                  "Tens: 20 + 10 = 30. Ones: 3 + 4 = 7.",
                  "Now join 30 and 7."
                ]
              },
              {
                "id": "addition-atoll-u3-l3-p6",
                "type": "input",
                "prompt": "36 + 28 = ?",
                "answer": "64",
                "accept": [
                  "64",
                  "sixty-four",
                  "sixty four"
                ],
                "explain": "Tens: 30 + 20 = 50. Ones: 6 + 8 = 14. Then 50 + 14 = 64. You regrouped a new ten!",
                "hints": [
                  "Add the tens and the ones in separate piles first.",
                  "Tens make 50, and the ones (6 + 8) make 14.",
                  "Now add 50 + 14, where the 14 has a hidden extra ten."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "times-table-temple",
    "title": "Times Table Temple",
    "subtitle": "Grade 3",
    "color": "#FFC83D",
    "icon": "✖️",
    "blurb": "Climb the golden temple of times tables, where every multiplication fact you master unlocks the next sacred stair!",
    "units": [
      {
        "id": "times-table-temple-u1",
        "title": "Hall of Equal Groups",
        "lessons": [
          {
            "id": "times-table-temple-u1-l1",
            "title": "Groups of Apples",
            "icon": "🍎",
            "intro": "Hi, I'm Pip! Multiplication is just a speedy way to add equal groups. Let's count some snacks together!",
            "problems": [
              {
                "id": "times-table-temple-u1-l1-p1",
                "type": "mc",
                "prompt": "🍎🍎  🍎🍎  🍎🍎  How many apples? (3 groups of 2)",
                "choices": [
                  "5",
                  "6",
                  "8",
                  "9"
                ],
                "answer": "6",
                "explain": "3 groups of 2 is 2 + 2 + 2 = 6. That's exactly what 3 x 2 means!",
                "hints": [
                  "Each little group has 2 apples, and there are 3 groups. How many in all?",
                  "You can add the groups: 2 + 2 + 2. Multiplication is repeated adding!",
                  "Start adding: 2 + 2 = 4, now add one more 2..."
                ]
              },
              {
                "id": "times-table-temple-u1-l1-p2",
                "type": "mc",
                "prompt": "🐶🐶🐶  🐶🐶🐶  How many puppies? (2 groups of 3)",
                "choices": [
                  "4",
                  "5",
                  "6",
                  "7"
                ],
                "answer": "6",
                "explain": "2 groups of 3 means 3 + 3 = 6. So 2 x 3 = 6!",
                "hints": [
                  "There are 2 groups, and each group holds 3 puppies.",
                  "Try adding the two groups together: 3 + 3.",
                  "3 + 3 lands on a friendly number... start counting from 3."
                ]
              },
              {
                "id": "times-table-temple-u1-l1-p3",
                "type": "input",
                "prompt": "4 groups of 2 stars. How many stars in all? ⭐",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "4 groups of 2 is 2 + 2 + 2 + 2 = 8, which is the same as 4 x 2 = 8!",
                "hints": [
                  "Picture 4 little piles, each with 2 stars inside.",
                  "Add 2 four times: 2 + 2 + 2 + 2.",
                  "2 + 2 = 4, then 4 + 2 = 6, keep going one more step..."
                ]
              },
              {
                "id": "times-table-temple-u1-l1-p4",
                "type": "mc",
                "prompt": "Which addition matches 3 x 4?",
                "choices": [
                  "3 + 4",
                  "4 + 4 + 4",
                  "3 + 3",
                  "4 + 4"
                ],
                "answer": "4 + 4 + 4",
                "explain": "3 x 4 means three groups of 4, so we add 4 three times: 4 + 4 + 4!",
                "hints": [
                  "The first number tells you HOW MANY groups; the second tells you what's IN each group.",
                  "3 x 4 is 'three fours', so write 4 down three times and add.",
                  "Count the fours: you need exactly three of them added together."
                ]
              },
              {
                "id": "times-table-temple-u1-l1-p5",
                "type": "input",
                "prompt": "5 groups of 2 cookies. How many cookies? 🍪",
                "answer": "10",
                "accept": [
                  "10",
                  "ten"
                ],
                "explain": "5 groups of 2 is 2 + 2 + 2 + 2 + 2 = 10. So 5 x 2 = 10!",
                "hints": [
                  "Five little plates, and each plate has 2 cookies.",
                  "Counting by 2s is the fast trick here: 2, 4, 6...",
                  "Skip-count by 2 five times: 2, 4, 6, 8, then one more jump."
                ]
              },
              {
                "id": "times-table-temple-u1-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: 2 x 5 means the same total as 5 + 5.",
                "answer": "true",
                "explain": "2 x 5 means two groups of 5, which is 5 + 5 = 10. True!",
                "hints": [
                  "2 x 5 is read as 'two fives'. How many 5s is that?",
                  "Two groups of 5 means you write 5 twice and add them.",
                  "Compare 5 + 5 with what 2 x 5 asks for... do they match?"
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u1-l2",
            "title": "Skip-Count Stairs",
            "icon": "🪜",
            "intro": "Skip-counting is like hopping up stairs! Each hop is the same size, and it builds your times tables fast.",
            "problems": [
              {
                "id": "times-table-temple-u1-l2-p1",
                "type": "mc",
                "prompt": "Skip-count by 5s: 5, 10, 15, __. What comes next?",
                "choices": [
                  "16",
                  "18",
                  "20",
                  "25"
                ],
                "answer": "20",
                "explain": "Each hop adds 5, so after 15 we land on 20. That's 4 x 5!",
                "hints": [
                  "Look at the pattern: how much does each number jump?",
                  "Every step adds 5. Add 5 to the last number, 15.",
                  "15 + 5 = ? Count up: 16, 17, 18, 19, 20."
                ]
              },
              {
                "id": "times-table-temple-u1-l2-p2",
                "type": "input",
                "prompt": "Skip-count by 3s: 3, 6, 9, __. Type the next number.",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve"
                ],
                "explain": "Each hop adds 3, so 9 + 3 = 12. That's 4 x 3!",
                "hints": [
                  "Each number is 3 bigger than the one before it.",
                  "Add 3 to the last number, 9.",
                  "9 + 3: count up three from 9... 10, 11, 12."
                ]
              },
              {
                "id": "times-table-temple-u1-l2-p3",
                "type": "mc",
                "prompt": "Skip-count by 2s: 2, 4, 6, 8, __. What's next?",
                "choices": [
                  "9",
                  "10",
                  "11",
                  "12"
                ],
                "answer": "10",
                "explain": "Counting by 2s, after 8 comes 10. That's 5 x 2!",
                "hints": [
                  "Every even number is a stop on the by-2s stairs.",
                  "Add 2 to 8.",
                  "8 + 2 lands you on a round number ending in 0."
                ]
              },
              {
                "id": "times-table-temple-u1-l2-p4",
                "type": "input",
                "prompt": "Skip-count by 10s: 10, 20, 30, __. Type the next number.",
                "answer": "40",
                "accept": [
                  "40",
                  "forty"
                ],
                "explain": "Each hop adds 10, so 30 + 10 = 40. That's 4 x 10!",
                "hints": [
                  "By 10s, only the tens digit changes each hop.",
                  "Add 10 to 30.",
                  "30 + 10 = 40, just one bigger in the tens place."
                ]
              },
              {
                "id": "times-table-temple-u1-l2-p5",
                "type": "mc",
                "prompt": "How many 5s do you count to reach 15? (5, 10, 15)",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "answer": "3",
                "explain": "5, 10, 15 is three hops of 5, so 3 x 5 = 15!",
                "hints": [
                  "Count each hop you take to get to 15.",
                  "Say it out loud: 5 (one), 10 (two), 15 (three).",
                  "How many numbers did you land on to reach 15?"
                ]
              },
              {
                "id": "times-table-temple-u1-l2-p6",
                "type": "truefalse",
                "prompt": "True or false: Skip-counting by 4s goes 4, 8, 12, 16.",
                "answer": "true",
                "explain": "Each hop adds 4: 4, 8, 12, 16. That's perfect skip-counting!",
                "hints": [
                  "Check if each number is exactly 4 more than the last.",
                  "4 + 4 = 8, then 8 + 4 = ?, then keep going.",
                  "Test the last jump: does 12 + 4 equal 16?"
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u1-l3",
            "title": "Building Arrays",
            "icon": "🟦",
            "intro": "An array is a neat grid of rows and columns. Count the rows, count each row's items, and multiply!",
            "problems": [
              {
                "id": "times-table-temple-u1-l3-p1",
                "type": "mc",
                "prompt": "An array has 3 rows with 4 dots in each row. How many dots? (3 x 4)",
                "choices": [
                  "7",
                  "10",
                  "12",
                  "16"
                ],
                "answer": "12",
                "explain": "3 rows of 4 is 4 + 4 + 4 = 12, so 3 x 4 = 12!",
                "hints": [
                  "Rows go across. There are 3 of them, each holding 4 dots.",
                  "Multiply rows by dots-per-row: 3 x 4.",
                  "Add 4 three times: 4 + 4 = 8, then 8 + 4..."
                ]
              },
              {
                "id": "times-table-temple-u1-l3-p2",
                "type": "input",
                "prompt": "An egg carton has 2 rows of 6 eggs. How many eggs? 🥚",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve"
                ],
                "explain": "2 rows of 6 is 6 + 6 = 12, so 2 x 6 = 12!",
                "hints": [
                  "Two rows, and each row has 6 eggs.",
                  "Multiply 2 x 6, or just add 6 + 6.",
                  "6 + 6 doubles to... count up from 6."
                ]
              },
              {
                "id": "times-table-temple-u1-l3-p3",
                "type": "mc",
                "prompt": "Which multiplication matches an array of 5 rows and 2 columns?",
                "choices": [
                  "5 + 2",
                  "5 x 2",
                  "5 x 5",
                  "2 + 2"
                ],
                "answer": "5 x 2",
                "explain": "Rows times columns: 5 rows x 2 columns = 5 x 2 = 10!",
                "hints": [
                  "An array's total is rows times the number in each row.",
                  "Multiply the number of rows by the number of columns.",
                  "5 rows and 2 columns becomes 5 x 2."
                ]
              },
              {
                "id": "times-table-temple-u1-l3-p4",
                "type": "input",
                "prompt": "A chocolate bar has 4 rows of 3 squares. How many squares? 🍫",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve"
                ],
                "explain": "4 rows of 3 is 3 + 3 + 3 + 3 = 12, so 4 x 3 = 12!",
                "hints": [
                  "Count the rows (4) and how many squares each row holds (3).",
                  "Multiply 4 x 3.",
                  "Add 3 four times: 3, 6, 9, then one more 3."
                ]
              },
              {
                "id": "times-table-temple-u1-l3-p5",
                "type": "mc",
                "prompt": "How many dots in a 4 x 5 array?",
                "choices": [
                  "9",
                  "16",
                  "20",
                  "25"
                ],
                "answer": "20",
                "explain": "4 rows of 5 is 5 + 5 + 5 + 5 = 20, so 4 x 5 = 20!",
                "hints": [
                  "4 x 5 means 4 rows, each with 5 dots.",
                  "Skip-count by 5 four times.",
                  "5, 10, 15, then one more hop of 5."
                ]
              },
              {
                "id": "times-table-temple-u1-l3-p6",
                "type": "truefalse",
                "prompt": "True or false: A 3 x 3 array has 9 dots.",
                "answer": "true",
                "explain": "3 rows of 3 is 3 + 3 + 3 = 9, so 3 x 3 = 9. True!",
                "hints": [
                  "Three rows, each with three dots.",
                  "Add 3 three times, or compute 3 x 3.",
                  "3 + 3 = 6, then 6 + 3 = ?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "times-table-temple-u2",
        "title": "Chamber of Facts",
        "lessons": [
          {
            "id": "times-table-temple-u2-l1",
            "title": "Twos, Fives, and Tens",
            "icon": "🖐️",
            "intro": "The 2s, 5s, and 10s are the friendliest facts in the temple. Let's lock them into memory!",
            "problems": [
              {
                "id": "times-table-temple-u2-l1-p1",
                "type": "input",
                "prompt": "What is 7 x 2?",
                "answer": "14",
                "accept": [
                  "14",
                  "fourteen"
                ],
                "explain": "7 x 2 is double 7, which is 14!",
                "hints": [
                  "Multiplying by 2 means doubling the other number.",
                  "Double 7 means 7 + 7.",
                  "7 + 7: think 7 + 3 = 10, then 4 more..."
                ]
              },
              {
                "id": "times-table-temple-u2-l1-p2",
                "type": "input",
                "prompt": "What is 6 x 5?",
                "answer": "30",
                "accept": [
                  "30",
                  "thirty"
                ],
                "explain": "Skip-counting by 5 six times: 5, 10, 15, 20, 25, 30. So 6 x 5 = 30!",
                "hints": [
                  "Multiples of 5 always end in 0 or 5.",
                  "Skip-count by 5 six times.",
                  "5, 10, 15, 20, 25... one more hop."
                ]
              },
              {
                "id": "times-table-temple-u2-l1-p3",
                "type": "mc",
                "prompt": "What is 8 x 10?",
                "choices": [
                  "18",
                  "80",
                  "88",
                  "800"
                ],
                "answer": "80",
                "explain": "Multiplying by 10 just adds a 0, so 8 x 10 = 80!",
                "hints": [
                  "There's a neat trick when you multiply by 10.",
                  "Write the number, then put a 0 at the end.",
                  "8 becomes 8 with a 0 after it..."
                ]
              },
              {
                "id": "times-table-temple-u2-l1-p4",
                "type": "input",
                "prompt": "What is 9 x 2?",
                "answer": "18",
                "accept": [
                  "18",
                  "eighteen"
                ],
                "explain": "9 x 2 is double 9, which is 18!",
                "hints": [
                  "Times 2 means double the number.",
                  "Double 9 is 9 + 9.",
                  "9 + 9: think 9 + 1 = 10, then 8 more..."
                ]
              },
              {
                "id": "times-table-temple-u2-l1-p5",
                "type": "mc",
                "prompt": "What is 4 x 5?",
                "choices": [
                  "9",
                  "16",
                  "20",
                  "25"
                ],
                "answer": "20",
                "explain": "Skip-counting by 5 four times: 5, 10, 15, 20. So 4 x 5 = 20!",
                "hints": [
                  "Count by 5s and stop after four hops.",
                  "5, 10, 15...",
                  "After 15, one more 5 gets you to 20."
                ]
              },
              {
                "id": "times-table-temple-u2-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: 5 x 10 = 50.",
                "answer": "true",
                "explain": "Multiplying by 10 adds a 0, so 5 x 10 = 50. True!",
                "hints": [
                  "Use the times-10 trick.",
                  "Put a 0 after the 5.",
                  "5 with a 0 behind it reads as fifty."
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u2-l2",
            "title": "Threes, Fours, and Sixes",
            "icon": "🎲",
            "intro": "Time to level up with the 3s, 4s, and 6s. If you forget one, you can always add a group or two!",
            "problems": [
              {
                "id": "times-table-temple-u2-l2-p1",
                "type": "input",
                "prompt": "What is 6 x 3?",
                "answer": "18",
                "accept": [
                  "18",
                  "eighteen"
                ],
                "explain": "6 x 3 is 3 + 3 + 3 + 3 + 3 + 3 = 18!",
                "hints": [
                  "Six groups of 3.",
                  "Skip-count by 3 six times.",
                  "3, 6, 9, 12, 15... one more 3."
                ]
              },
              {
                "id": "times-table-temple-u2-l2-p2",
                "type": "mc",
                "prompt": "What is 7 x 4?",
                "choices": [
                  "24",
                  "27",
                  "28",
                  "32"
                ],
                "answer": "28",
                "explain": "7 x 4 is double-double of 7: 7 x 2 = 14, then 14 x 2 = 28!",
                "hints": [
                  "Times 4 is the same as doubling twice.",
                  "First double 7 to get 14, then double again.",
                  "14 + 14 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l2-p3",
                "type": "input",
                "prompt": "What is 5 x 6?",
                "answer": "30",
                "accept": [
                  "30",
                  "thirty"
                ],
                "explain": "5 x 6 is 6 + 6 + 6 + 6 + 6 = 30!",
                "hints": [
                  "Five groups of 6.",
                  "Skip-count by 6 five times, or by 5 six times.",
                  "6, 12, 18, 24... one more 6."
                ]
              },
              {
                "id": "times-table-temple-u2-l2-p4",
                "type": "mc",
                "prompt": "What is 8 x 3?",
                "choices": [
                  "21",
                  "24",
                  "27",
                  "32"
                ],
                "answer": "24",
                "explain": "8 x 3 is 3 added eight times: 3, 6, 9, 12, 15, 18, 21, 24!",
                "hints": [
                  "Eight groups of 3.",
                  "You can do 8 x 3 as (8 x 2) + 8 = 16 + 8.",
                  "16 + 8 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l2-p5",
                "type": "input",
                "prompt": "What is 6 x 6?",
                "answer": "36",
                "accept": [
                  "36",
                  "thirty-six",
                  "thirty six"
                ],
                "explain": "6 x 6 = 36. A classic square fact worth memorizing!",
                "hints": [
                  "Six groups of 6.",
                  "Try 6 x 5 = 30, then add one more 6.",
                  "30 + 6 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l2-p6",
                "type": "truefalse",
                "prompt": "True or false: 9 x 4 = 36.",
                "answer": "true",
                "explain": "9 x 4 = 36. You can check: 9 x 2 = 18, and 18 + 18 = 36. True!",
                "hints": [
                  "Times 4 means double twice.",
                  "Double 9 to 18, then double 18.",
                  "18 + 18 = ?"
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u2-l3",
            "title": "The Tricky Sevens to Twelves",
            "icon": "🧩",
            "intro": "These are the boss facts of the temple! With a few smart tricks, even 7s, 8s, and 12s become easy.",
            "problems": [
              {
                "id": "times-table-temple-u2-l3-p1",
                "type": "input",
                "prompt": "What is 7 x 7?",
                "answer": "49",
                "accept": [
                  "49",
                  "forty-nine",
                  "forty nine"
                ],
                "explain": "7 x 7 = 49. You can check with 7 x 6 = 42, then add 7!",
                "hints": [
                  "Seven groups of 7.",
                  "Start from 7 x 6 = 42 and add one more 7.",
                  "42 + 7 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l3-p2",
                "type": "mc",
                "prompt": "What is 8 x 7?",
                "choices": [
                  "48",
                  "54",
                  "56",
                  "63"
                ],
                "answer": "56",
                "explain": "8 x 7 = 56. Trick: 8 x 7 = (8 x 8) - 8 = 64 - 8 = 56!",
                "hints": [
                  "Eight groups of 7.",
                  "Try 7 x 7 = 49, then add one more 7.",
                  "49 + 7 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l3-p3",
                "type": "input",
                "prompt": "What is 9 x 6?",
                "answer": "54",
                "accept": [
                  "54",
                  "fifty-four",
                  "fifty four"
                ],
                "explain": "9 x 6 = 54. Trick: 10 x 6 = 60, then subtract one 6 to get 54!",
                "hints": [
                  "Nine groups of 6.",
                  "Use the 9s trick: do 10 x 6 first, then take away one 6.",
                  "60 - 6 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l3-p4",
                "type": "mc",
                "prompt": "What is 8 x 8?",
                "choices": [
                  "56",
                  "60",
                  "64",
                  "72"
                ],
                "answer": "64",
                "explain": "8 x 8 = 64. A square fact: think of an 8-by-8 chessboard!",
                "hints": [
                  "Eight groups of 8.",
                  "Start from 8 x 7 = 56 and add one more 8.",
                  "56 + 8 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l3-p5",
                "type": "input",
                "prompt": "What is 12 x 3?",
                "answer": "36",
                "accept": [
                  "36",
                  "thirty-six",
                  "thirty six"
                ],
                "explain": "12 x 3 = 36. Split it: 10 x 3 = 30 and 2 x 3 = 6, then 30 + 6 = 36!",
                "hints": [
                  "Twelve groups of 3.",
                  "Break 12 into 10 and 2: do 10 x 3 and 2 x 3 separately.",
                  "30 + 6 = ?"
                ]
              },
              {
                "id": "times-table-temple-u2-l3-p6",
                "type": "truefalse",
                "prompt": "True or false: 11 x 9 = 99.",
                "answer": "true",
                "explain": "11 x 9 = 99. Trick: 10 x 9 = 90, then add one more 9 to get 99. True!",
                "hints": [
                  "Eleven groups of 9.",
                  "Do 10 x 9 first, then add one more 9.",
                  "90 + 9 = ?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "times-table-temple-u3",
        "title": "Vault of Division and Quests",
        "lessons": [
          {
            "id": "times-table-temple-u3-l1",
            "title": "Sharing Equally",
            "icon": "➗",
            "intro": "Division is sharing into equal groups, the opposite of multiplying. Let's split things fairly!",
            "problems": [
              {
                "id": "times-table-temple-u3-l1-p1",
                "type": "input",
                "prompt": "12 cookies shared equally among 3 friends. How many each? 🍪",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "12 / 3 = 4. Each friend gets 4 because 3 x 4 = 12!",
                "hints": [
                  "You're splitting 12 into 3 equal piles.",
                  "Ask: 3 times WHAT equals 12?",
                  "3 x 4 = 12, so each pile has..."
                ]
              },
              {
                "id": "times-table-temple-u3-l1-p2",
                "type": "mc",
                "prompt": "What is 20 / 5?",
                "choices": [
                  "3",
                  "4",
                  "5",
                  "15"
                ],
                "answer": "4",
                "explain": "20 / 5 = 4 because 5 x 4 = 20!",
                "hints": [
                  "How many 5s fit inside 20?",
                  "Ask: 5 times WHAT equals 20?",
                  "Skip-count by 5: 5, 10, 15, 20... that's how many hops?"
                ]
              },
              {
                "id": "times-table-temple-u3-l1-p3",
                "type": "input",
                "prompt": "What is 18 / 2?",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "18 / 2 = 9 because 2 x 9 = 18!",
                "hints": [
                  "Splitting 18 into 2 equal halves.",
                  "Half of 18 is the answer.",
                  "2 x 9 = 18, so 18 / 2 = ?"
                ]
              },
              {
                "id": "times-table-temple-u3-l1-p4",
                "type": "mc",
                "prompt": "What is 15 / 3?",
                "choices": [
                  "3",
                  "5",
                  "6",
                  "12"
                ],
                "answer": "5",
                "explain": "15 / 3 = 5 because 3 x 5 = 15!",
                "hints": [
                  "How many 3s are inside 15?",
                  "Ask: 3 times WHAT equals 15?",
                  "Skip-count by 3: 3, 6, 9, 12, 15... count the hops."
                ]
              },
              {
                "id": "times-table-temple-u3-l1-p5",
                "type": "input",
                "prompt": "24 marbles split into 4 equal bags. How many per bag?",
                "answer": "6",
                "accept": [
                  "6",
                  "six"
                ],
                "explain": "24 / 4 = 6 because 4 x 6 = 24!",
                "hints": [
                  "Share 24 evenly across 4 bags.",
                  "Ask: 4 times WHAT equals 24?",
                  "4 x 6 = 24, so each bag holds..."
                ]
              },
              {
                "id": "times-table-temple-u3-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: 30 / 6 = 5.",
                "answer": "true",
                "explain": "30 / 6 = 5 because 6 x 5 = 30. True!",
                "hints": [
                  "How many 6s fit in 30?",
                  "Ask: 6 times WHAT equals 30?",
                  "6 x 5 = 30, so check if the answer is 5."
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u3-l2",
            "title": "Fact Family Magic",
            "icon": "👨‍👩‍👧",
            "intro": "Multiplication and division are family! The same three numbers make four facts. And remember: 3 x 4 equals 4 x 3, the order can flip!",
            "problems": [
              {
                "id": "times-table-temple-u3-l2-p1",
                "type": "mc",
                "prompt": "If 6 x 7 = 42, what is 42 / 7?",
                "choices": [
                  "5",
                  "6",
                  "7",
                  "8"
                ],
                "answer": "6",
                "explain": "They're a fact family! Since 6 x 7 = 42, dividing 42 / 7 brings back 6!",
                "hints": [
                  "Division undoes multiplication in the same family.",
                  "You know 6 x 7 = 42, so 42 / 7 returns the missing factor.",
                  "Which number times 7 made 42? That's your answer."
                ]
              },
              {
                "id": "times-table-temple-u3-l2-p2",
                "type": "truefalse",
                "prompt": "True or false: 8 x 3 gives the same answer as 3 x 8.",
                "answer": "true",
                "explain": "That's the commutative property! Order doesn't change the product: both equal 24. True!",
                "hints": [
                  "Does flipping the order of the factors change the total?",
                  "Picture an array turned sideways, it has the same dots.",
                  "8 x 3 = 24 and 3 x 8 = 24, so are they equal?"
                ]
              },
              {
                "id": "times-table-temple-u3-l2-p3",
                "type": "input",
                "prompt": "Fill in the missing number: 5 x __ = 35.",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "5 x 7 = 35, so the missing factor is 7. You can also think 35 / 5 = 7!",
                "hints": [
                  "You need a number that, times 5, makes 35.",
                  "Turn it into division: 35 / 5.",
                  "Skip-count by 5 until you reach 35, counting the hops."
                ]
              },
              {
                "id": "times-table-temple-u3-l2-p4",
                "type": "mc",
                "prompt": "Which fact is NOT in the family of 4, 6, and 24?",
                "choices": [
                  "4 x 6 = 24",
                  "6 x 4 = 24",
                  "24 / 6 = 4",
                  "24 / 3 = 8"
                ],
                "answer": "24 / 3 = 8",
                "explain": "The family of 4, 6, 24 only uses those three numbers. 24 / 3 = 8 brings in different numbers!",
                "hints": [
                  "A fact family uses the SAME three numbers in every fact.",
                  "Look for the fact that has a number other than 4, 6, or 24.",
                  "Which option mentions a 3 and an 8 instead?"
                ]
              },
              {
                "id": "times-table-temple-u3-l2-p5",
                "type": "input",
                "prompt": "Fill in the missing number: 56 / __ = 8.",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "56 / 7 = 8 because 7 x 8 = 56!",
                "hints": [
                  "You need a number that divides 56 into groups of 8.",
                  "Think of the family: what times 8 equals 56?",
                  "7 x 8 = 56, so the missing number is..."
                ]
              },
              {
                "id": "times-table-temple-u3-l2-p6",
                "type": "mc",
                "prompt": "Using 9 x 4 = 36, what is 36 / 4?",
                "choices": [
                  "4",
                  "8",
                  "9",
                  "12"
                ],
                "answer": "9",
                "explain": "Same fact family! Since 9 x 4 = 36, then 36 / 4 = 9!",
                "hints": [
                  "Division reverses the multiplication you already know.",
                  "9 x 4 = 36, so dividing by 4 gives back the other factor.",
                  "Which factor was multiplied by 4 to make 36?"
                ]
              }
            ]
          },
          {
            "id": "times-table-temple-u3-l3",
            "title": "Temple Word Quests",
            "icon": "📜",
            "intro": "The final challenge! Real-world quests use multiplying, dividing, and multiplying by 10 and 100. Read carefully and decide which operation to use.",
            "problems": [
              {
                "id": "times-table-temple-u3-l3-p1",
                "type": "input",
                "prompt": "A temple has 6 shelves. Each shelf holds 7 scrolls. How many scrolls in all?",
                "answer": "42",
                "accept": [
                  "42",
                  "forty-two",
                  "forty two"
                ],
                "explain": "Equal groups means multiply: 6 shelves x 7 scrolls = 42 scrolls!",
                "hints": [
                  "Each shelf has the SAME number, so this is equal groups.",
                  "Multiply the shelves by scrolls-per-shelf: 6 x 7.",
                  "6 x 7 is 42... try 6 x 7 = (6 x 6) + 6."
                ]
              },
              {
                "id": "times-table-temple-u3-l3-p2",
                "type": "mc",
                "prompt": "There are 100 gems shared equally among 10 chests. How many gems per chest? 💎",
                "choices": [
                  "1",
                  "10",
                  "100",
                  "1000"
                ],
                "answer": "10",
                "explain": "100 / 10 = 10. Each chest holds 10 gems!",
                "hints": [
                  "Sharing equally means division.",
                  "Split 100 into 10 equal chests: 100 / 10.",
                  "How many 10s are inside 100?"
                ]
              },
              {
                "id": "times-table-temple-u3-l3-p3",
                "type": "input",
                "prompt": "Each guard earns 100 coins. How many coins do 4 guards earn together?",
                "answer": "400",
                "accept": [
                  "400",
                  "four hundred"
                ],
                "explain": "Multiplying by 100 adds two zeros: 4 x 100 = 400 coins!",
                "hints": [
                  "Same amount each, so multiply: 4 x 100.",
                  "Times 100 means write the number, then add two 0s.",
                  "4 becomes 4 with two zeros after it..."
                ]
              },
              {
                "id": "times-table-temple-u3-l3-p4",
                "type": "mc",
                "prompt": "A box has 8 rows of 5 torches. How many torches are there? 🔥",
                "choices": [
                  "13",
                  "35",
                  "40",
                  "45"
                ],
                "answer": "40",
                "explain": "An array problem: 8 rows x 5 torches = 40 torches!",
                "hints": [
                  "Rows and equal columns mean multiply.",
                  "Multiply 8 rows by 5 torches each: 8 x 5.",
                  "Skip-count by 5 eight times, or do 8 x 5 = 40."
                ]
              },
              {
                "id": "times-table-temple-u3-l3-p5",
                "type": "input",
                "prompt": "45 explorers split into teams of 9. How many teams are there?",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Making equal teams means divide: 45 / 9 = 5 teams!",
                "hints": [
                  "Splitting into equal teams is a division problem.",
                  "Divide the explorers by team size: 45 / 9.",
                  "Ask: 9 times WHAT equals 45?"
                ]
              },
              {
                "id": "times-table-temple-u3-l3-p6",
                "type": "mc",
                "prompt": "A wizard buys 3 potions for 20 coins each. How much does he spend total?",
                "choices": [
                  "23",
                  "40",
                  "50",
                  "60"
                ],
                "answer": "60",
                "explain": "Equal groups means multiply: 3 potions x 20 coins = 60 coins!",
                "hints": [
                  "Each potion costs the SAME, so multiply.",
                  "Multiply potions by price: 3 x 20.",
                  "3 x 20 is 3 x 2 = 6, then add a 0 for the tens..."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fraction-forest",
    "title": "Fraction Forest",
    "subtitle": "Grades 4-5",
    "color": "#2ECC71",
    "icon": "🍂",
    "blurb": "Wander a leafy forest where every pie, pizza, and number line is sliced into pieces just waiting to be named, matched, and added up!",
    "units": [
      {
        "id": "fraction-forest-u1",
        "title": "Slices & Sprouts: Meeting Fractions",
        "lessons": [
          {
            "id": "fraction-forest-u1-l1",
            "title": "What Is a Fraction?",
            "icon": "🍕",
            "intro": "Hi, I'm Pip! A fraction is just a way to name equal pieces of a whole. The bottom number says how many equal pieces there are, and the top number says how many we're talking about. Let's go slicing!",
            "problems": [
              {
                "id": "fraction-forest-u1-l1-p1",
                "type": "mc",
                "prompt": "A pizza 🍕 is cut into 4 equal slices and you grab 1 slice. What fraction did you grab?",
                "choices": [
                  "1/4",
                  "4/1",
                  "1/2",
                  "4/4"
                ],
                "answer": "1/4",
                "explain": "Nice! 1 slice out of 4 equal slices is 1/4 — the 4 is the total pieces and the 1 is how many you took.",
                "hints": [
                  "Think about how many equal slices there are in total, and how many you actually grabbed.",
                  "The bottom number is the total equal pieces; the top number is how many you have.",
                  "Total slices = 4 (that's the bottom), and you took 1 (that's the top). Put them together!"
                ]
              },
              {
                "id": "fraction-forest-u1-l1-p2",
                "type": "mc",
                "prompt": "In the fraction 3/5, which number tells how many equal pieces the whole is split into?",
                "choices": [
                  "5",
                  "3",
                  "8",
                  "2"
                ],
                "answer": "5",
                "explain": "Right! The bottom number (denominator) is 5 — that's how many equal pieces make the whole.",
                "hints": [
                  "One number is on top and one is on the bottom — which job does each do?",
                  "The bottom number (the denominator) counts the total equal pieces.",
                  "Look at the bottom of 3/5. What number is sitting down there?"
                ]
              },
              {
                "id": "fraction-forest-u1-l1-p3",
                "type": "input",
                "prompt": "A chocolate bar 🍫 has 6 equal squares. You eat 2 of them. Write the fraction you ate.",
                "answer": "2/6",
                "accept": [
                  "2/6",
                  "1/3",
                  "2 / 6",
                  "1 / 3"
                ],
                "explain": "You got it! 2 squares out of 6 equal squares is 2/6 (which also simplifies to 1/3).",
                "hints": [
                  "How many squares total, and how many did you eat?",
                  "Top number = squares eaten, bottom number = squares in the whole bar.",
                  "You ate 2 squares out of 6 — stack them as top over bottom."
                ]
              },
              {
                "id": "fraction-forest-u1-l1-p4",
                "type": "truefalse",
                "prompt": "True or false: In the fraction 7/8, the number 7 is called the numerator.",
                "answer": "true",
                "explain": "True! The top number is the numerator — it counts how many pieces we have. The bottom is the denominator.",
                "hints": [
                  "Which word names the TOP number of a fraction?",
                  "Numerator is on top, denominator is on the bottom — 'd' for down can help!",
                  "7 is sitting on top of 7/8, so check if 'numerator' means the top."
                ]
              },
              {
                "id": "fraction-forest-u1-l1-p5",
                "type": "mc",
                "prompt": "Which picture shows exactly 1/2 shaded? 🟩",
                "choices": [
                  "A square split into 2 equal parts with 1 part shaded",
                  "A square split into 2 equal parts with both shaded",
                  "A square split into 4 equal parts with 1 shaded",
                  "A square split into 3 equal parts with 1 shaded"
                ],
                "answer": "A square split into 2 equal parts with 1 part shaded",
                "explain": "Perfect! 1 shaded part out of 2 equal parts is 1/2 — exactly half.",
                "hints": [
                  "Half means the whole is split into how many equal pieces?",
                  "For 1/2, you need 2 equal parts and 1 of them shaded.",
                  "Look for the choice with 2 equal parts and only 1 shaded."
                ]
              },
              {
                "id": "fraction-forest-u1-l1-p6",
                "type": "input",
                "prompt": "A pie 🥧 is split into 8 equal slices and 5 slices are left. What fraction of the pie is left? Type it like 5/8.",
                "answer": "5/8",
                "accept": [
                  "5/8",
                  "5 / 8"
                ],
                "explain": "Yes! 5 slices left out of 8 equal slices is 5/8. The whole pie always has 8 on the bottom here.",
                "hints": [
                  "How many slices in the whole pie, and how many are still there?",
                  "Bottom number = total slices (8); top number = slices left.",
                  "There are 5 left out of 8 — write the top over the bottom."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u1-l2",
            "title": "Fractions on a Number Line",
            "icon": "📏",
            "intro": "A number line isn't just for whole numbers, Pip says! We can chop the space between 0 and 1 into equal jumps and land right on a fraction. Let's hop!",
            "problems": [
              {
                "id": "fraction-forest-u1-l2-p1",
                "type": "mc",
                "prompt": "On a number line from 0 to 1 split into 4 equal jumps, where does 2/4 land?",
                "choices": [
                  "Right in the middle (same as 1/2)",
                  "Right at 1",
                  "Just past 0",
                  "Past 1"
                ],
                "answer": "Right in the middle (same as 1/2)",
                "explain": "Exactly! 2 jumps out of 4 lands halfway, and 2/4 is the same spot as 1/2.",
                "hints": [
                  "If 0 to 1 is cut into 4 equal jumps, how far is 2 jumps?",
                  "2 out of 4 jumps is half of the way from 0 to 1.",
                  "Halfway between 0 and 1 — what familiar fraction is that?"
                ]
              },
              {
                "id": "fraction-forest-u1-l2-p2",
                "type": "input",
                "prompt": "A number line from 0 to 1 is split into 5 equal parts. A point sits on the 3rd tick after 0. What fraction is it? Type like 3/5.",
                "answer": "3/5",
                "accept": [
                  "3/5",
                  "3 / 5"
                ],
                "explain": "Nice hop! 3 jumps out of 5 equal jumps is 3/5.",
                "hints": [
                  "How many equal parts is the line cut into? That's your bottom number.",
                  "The tick number you land on is the top; the total ticks to 1 is the bottom.",
                  "5 equal parts means /5, and you're on the 3rd tick — so 3 over 5."
                ]
              },
              {
                "id": "fraction-forest-u1-l2-p3",
                "type": "truefalse",
                "prompt": "True or false: On a number line, the fraction 0/3 is at the same spot as 0.",
                "answer": "true",
                "explain": "True! Zero jumps from 0 means you haven't moved — 0/3 sits right on 0.",
                "hints": [
                  "How many jumps does 0/3 tell you to take?",
                  "If the top number is 0, you take zero jumps from 0.",
                  "Take 0 jumps and you stay put — where does that leave you?"
                ]
              },
              {
                "id": "fraction-forest-u1-l2-p4",
                "type": "mc",
                "prompt": "Which fraction is the SAME spot as the whole number 1 on a number line?",
                "choices": [
                  "4/4",
                  "1/4",
                  "3/4",
                  "1/2"
                ],
                "answer": "4/4",
                "explain": "Right! When the top equals the bottom, like 4/4, you've gone the whole way — that's 1.",
                "hints": [
                  "What fraction means you've gone ALL the equal jumps?",
                  "If the numerator and denominator are equal, the fraction equals 1.",
                  "Look for the choice where the top number matches the bottom number."
                ]
              },
              {
                "id": "fraction-forest-u1-l2-p5",
                "type": "mc",
                "prompt": "On a 0-to-1 line cut into 8 equal parts, which is FARTHER from 0?",
                "choices": [
                  "6/8",
                  "2/8",
                  "They're the same",
                  "1/8"
                ],
                "answer": "6/8",
                "explain": "Yes! 6 jumps is farther along than 2 jumps, so 6/8 is closer to 1.",
                "hints": [
                  "Both have the same bottom number, so just compare the jumps.",
                  "More jumps from 0 means farther to the right.",
                  "Compare 6 jumps vs 2 jumps — which is bigger?"
                ]
              },
              {
                "id": "fraction-forest-u1-l2-p6",
                "type": "input",
                "prompt": "A number line goes from 0 to 1 in 6 equal parts. You're at 1/6 and hop forward 2 more parts. What fraction are you on now? Type like 3/6.",
                "answer": "3/6",
                "accept": [
                  "3/6",
                  "1/2",
                  "3 / 6",
                  "1 / 2"
                ],
                "explain": "Great hopping! 1/6 plus 2 more parts is 3/6 (which is also 1/2).",
                "hints": [
                  "You start on the 1st tick — count 2 more ticks forward.",
                  "The bottom stays 6; just add the jumps on top.",
                  "1 jump + 2 more jumps = 3 jumps, so 3 over 6."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u1-l3",
            "title": "Equivalent Fractions",
            "icon": "🔁",
            "intro": "Pip's secret: different-looking fractions can be twins! If you multiply (or divide) the top and bottom by the same number, you get an equivalent fraction worth the exact same amount. Let's find some twins!",
            "problems": [
              {
                "id": "fraction-forest-u1-l3-p1",
                "type": "mc",
                "prompt": "Which fraction is equivalent to 1/2?",
                "choices": [
                  "2/4",
                  "1/3",
                  "2/3",
                  "3/4"
                ],
                "answer": "2/4",
                "explain": "Right! Multiply the top and bottom of 1/2 by 2 and you get 2/4 — same amount, new outfit.",
                "hints": [
                  "Try multiplying the top AND bottom of 1/2 by the same number.",
                  "1/2 with top and bottom doubled gives a new equal fraction.",
                  "1 times 2 = 2 on top, and 2 times 2 = 4 on the bottom. What's that?"
                ]
              },
              {
                "id": "fraction-forest-u1-l3-p2",
                "type": "input",
                "prompt": "Fill in the missing number: 1/3 = ?/9. Type just the missing top number.",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "You got it! The bottom went from 3 to 9 (times 3), so the top goes from 1 to 3. That's 3/9.",
                "hints": [
                  "What did you multiply 3 by to get 9?",
                  "Whatever you multiply the bottom by, do the SAME to the top.",
                  "3 times 3 = 9, so multiply the top 1 by 3 too."
                ]
              },
              {
                "id": "fraction-forest-u1-l3-p3",
                "type": "truefalse",
                "prompt": "True or false: 3/6 and 1/2 are equivalent fractions.",
                "answer": "true",
                "explain": "True! Divide 3/6 by 3 on top and bottom and you get 1/2 — they're twins.",
                "hints": [
                  "Can you simplify 3/6 by dividing top and bottom by the same number?",
                  "Both 3 and 6 can be divided by 3.",
                  "3 divided by 3 = 1, and 6 divided by 3 = 2. Does that match 1/2?"
                ]
              },
              {
                "id": "fraction-forest-u1-l3-p4",
                "type": "mc",
                "prompt": "Which fraction is 2/3 written with a denominator of 12?",
                "choices": [
                  "8/12",
                  "6/12",
                  "4/12",
                  "2/12"
                ],
                "answer": "8/12",
                "explain": "Nice! 3 times 4 = 12, so multiply the top by 4 too: 2 times 4 = 8. That's 8/12.",
                "hints": [
                  "What times 3 gives you 12?",
                  "Multiply the top by the same number you used on the bottom.",
                  "3 times 4 = 12, so 2 times 4 = 8 on top."
                ]
              },
              {
                "id": "fraction-forest-u1-l3-p5",
                "type": "input",
                "prompt": "Simplify 4/8 to its simplest form. Type like 1/2.",
                "answer": "1/2",
                "accept": [
                  "1/2",
                  "1 / 2"
                ],
                "explain": "Perfect! Both 4 and 8 divide by 4, giving 1/2 — the simplest twin.",
                "hints": [
                  "What number divides into both 4 and 8 evenly?",
                  "Divide the top and bottom by their biggest common factor.",
                  "4 divided by 4 = 1, and 8 divided by 4 = 2."
                ]
              },
              {
                "id": "fraction-forest-u1-l3-p6",
                "type": "mc",
                "prompt": "Which of these is NOT equivalent to 1/2?",
                "choices": [
                  "3/5",
                  "5/10",
                  "4/8",
                  "6/12"
                ],
                "answer": "3/5",
                "explain": "Right! 5/10, 4/8, and 6/12 all simplify to 1/2, but 3/5 does not — it's the odd one out.",
                "hints": [
                  "Try simplifying each fraction and see which one isn't 1/2.",
                  "For a fraction to equal 1/2, the bottom must be double the top.",
                  "Check: is 5 double 3? Compare that to the others."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "fraction-forest-u2",
        "title": "Comparing & Combining: Like Pieces",
        "lessons": [
          {
            "id": "fraction-forest-u2-l1",
            "title": "Comparing Fractions",
            "icon": "⚖️",
            "intro": "Which slice is bigger? Pip will show you the tricks: same bottoms are easy, same tops flip your thinking, and benchmarks like 1/2 are your friends. Let's compare!",
            "problems": [
              {
                "id": "fraction-forest-u2-l1-p1",
                "type": "mc",
                "prompt": "Which is greater: 3/8 or 5/8?",
                "choices": [
                  "5/8",
                  "3/8",
                  "They're equal",
                  "Can't tell"
                ],
                "answer": "5/8",
                "explain": "Right! Same-size pieces (eighths), so more pieces wins — 5/8 is greater than 3/8.",
                "hints": [
                  "The bottoms are the same, so the pieces are the same size.",
                  "When denominators match, just compare the top numbers.",
                  "Is 5 more than 3? Then 5/8 is bigger."
                ]
              },
              {
                "id": "fraction-forest-u2-l1-p2",
                "type": "mc",
                "prompt": "Which is greater: 1/3 or 1/5?",
                "choices": [
                  "1/3",
                  "1/5",
                  "They're equal",
                  "Can't tell"
                ],
                "answer": "1/3",
                "explain": "Yes! When the tops match, fewer pieces means BIGGER pieces. Thirds are bigger than fifths, so 1/3 wins.",
                "hints": [
                  "Imagine sharing a pizza with 3 people vs 5 people — which gives bigger slices?",
                  "Same top number, so smaller bottom means bigger pieces.",
                  "3 is a smaller bottom than 5, so 1/3 is the bigger piece."
                ]
              },
              {
                "id": "fraction-forest-u2-l1-p3",
                "type": "truefalse",
                "prompt": "True or false: 2/5 is less than 1/2.",
                "answer": "true",
                "explain": "True! Half of 5 is 2.5, so 2/5 is just under 1/2. The benchmark 1/2 saves the day.",
                "hints": [
                  "Compare each to the benchmark 1/2.",
                  "For 2/5 to equal 1/2, the top would need to be half of 5.",
                  "Half of 5 is 2.5, and 2 is less than that — so is 2/5 under or over 1/2?"
                ]
              },
              {
                "id": "fraction-forest-u2-l1-p4",
                "type": "mc",
                "prompt": "Use < or > : which symbol makes this true? 4/6 ___ 3/6",
                "choices": [
                  ">",
                  "<",
                  "=",
                  "none"
                ],
                "answer": ">",
                "explain": "Correct! Same bottoms, and 4 pieces beat 3 pieces, so 4/6 > 3/6.",
                "hints": [
                  "The denominators are the same, so look at the tops.",
                  "The '>' symbol means the left side is bigger.",
                  "4 is more than 3, so the left fraction is greater — which way does the symbol point?"
                ]
              },
              {
                "id": "fraction-forest-u2-l1-p5",
                "type": "mc",
                "prompt": "Which is greater: 2/3 or 3/4? (Hint: common denominator 12)",
                "choices": [
                  "3/4",
                  "2/3",
                  "They're equal",
                  "Can't tell"
                ],
                "answer": "3/4",
                "explain": "Nice work! 2/3 = 8/12 and 3/4 = 9/12, so 3/4 is greater.",
                "hints": [
                  "Rewrite both fractions with a denominator of 12.",
                  "2/3 becomes ?/12 and 3/4 becomes ?/12 — then compare tops.",
                  "2/3 = 8/12 and 3/4 = 9/12. Which top is bigger?"
                ]
              },
              {
                "id": "fraction-forest-u2-l1-p6",
                "type": "input",
                "prompt": "Order these from smallest to largest, separated by commas: 1/4, 3/4, 1/2",
                "answer": "1/4, 1/2, 3/4",
                "accept": [
                  "1/4, 1/2, 3/4",
                  "1/4,1/2,3/4",
                  "1/4 1/2 3/4"
                ],
                "explain": "Perfect ordering! In fourths, 1/4 is smallest, 1/2 is the same as 2/4, and 3/4 is largest.",
                "hints": [
                  "Try writing 1/2 as fourths so all three share a bottom.",
                  "1/2 is the same as 2/4 — now you have 1/4, 2/4, 3/4.",
                  "Order the tops 1, 2, 3 and write the matching fractions smallest first."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u2-l2",
            "title": "Adding & Subtracting Like Denominators",
            "icon": "➕",
            "intro": "Good news from Pip: when the bottoms already match, you just add or subtract the tops and keep the bottom the same. The pieces are already the same size!",
            "problems": [
              {
                "id": "fraction-forest-u2-l2-p1",
                "type": "input",
                "prompt": "2/5 + 1/5 = ? Type like 3/5.",
                "answer": "3/5",
                "accept": [
                  "3/5",
                  "3 / 5"
                ],
                "explain": "Yes! Same bottoms, so 2 + 1 = 3 on top, keep the 5: that's 3/5.",
                "hints": [
                  "The bottoms match, so what do you do with the tops?",
                  "Add the top numbers and keep the denominator the same.",
                  "2 + 1 = 3, and the bottom stays 5."
                ]
              },
              {
                "id": "fraction-forest-u2-l2-p2",
                "type": "input",
                "prompt": "7/8 - 3/8 = ? Type like 4/8.",
                "answer": "4/8",
                "accept": [
                  "4/8",
                  "1/2",
                  "4 / 8",
                  "1 / 2"
                ],
                "explain": "Right! 7 - 3 = 4 on top, keep the 8: that's 4/8 (which is also 1/2).",
                "hints": [
                  "Same bottoms means you only work with the tops.",
                  "Subtract the top numbers and keep the denominator.",
                  "7 - 3 = 4, and the bottom stays 8."
                ]
              },
              {
                "id": "fraction-forest-u2-l2-p3",
                "type": "mc",
                "prompt": "1/6 + 4/6 = ?",
                "choices": [
                  "5/6",
                  "5/12",
                  "3/6",
                  "5/0"
                ],
                "answer": "5/6",
                "explain": "Correct! 1 + 4 = 5 on top, the 6 stays put: 5/6. We never add the bottoms!",
                "hints": [
                  "Keep the bottom the same — only the tops get added.",
                  "Watch out: the denominator does NOT change to 12.",
                  "1 + 4 = 5 over 6."
                ]
              },
              {
                "id": "fraction-forest-u2-l2-p4",
                "type": "truefalse",
                "prompt": "True or false: 3/4 + 1/4 = 1.",
                "answer": "true",
                "explain": "True! 3 + 1 = 4, so 4/4, and 4/4 equals one whole. The pie is complete!",
                "hints": [
                  "Add the tops and keep the bottom.",
                  "3 + 1 = 4, so you get 4/4 — what does that equal?",
                  "When the top equals the bottom, the fraction equals 1 whole."
                ]
              },
              {
                "id": "fraction-forest-u2-l2-p5",
                "type": "input",
                "prompt": "Maya ate 2/8 of a pie and her brother ate 3/8. How much did they eat together? Type like 5/8.",
                "answer": "5/8",
                "accept": [
                  "5/8",
                  "5 / 8"
                ],
                "explain": "Yum! 2/8 + 3/8 = 5/8 since the eighths are the same size.",
                "hints": [
                  "Both amounts are in eighths, so the pieces match.",
                  "Add the tops, keep the bottom of 8.",
                  "2 + 3 = 5, over 8."
                ]
              },
              {
                "id": "fraction-forest-u2-l2-p6",
                "type": "input",
                "prompt": "9/10 - 5/10 = ? Write your answer in simplest form, like 2/5.",
                "answer": "2/5",
                "accept": [
                  "2/5",
                  "4/10",
                  "2 / 5",
                  "4 / 10"
                ],
                "explain": "Great! 9 - 5 = 4, giving 4/10, and 4/10 simplifies to 2/5.",
                "hints": [
                  "First subtract the tops, keeping the bottom of 10.",
                  "9 - 5 = 4, so you have 4/10 — now can you simplify?",
                  "Divide 4/10 top and bottom by 2 to get 2/5."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u2-l3",
            "title": "Mixed Numbers & Improper Fractions",
            "icon": "🥄",
            "intro": "Sometimes you have more than one whole! A mixed number like 1 1/2 is a whole plus a fraction, and an improper fraction like 3/2 says the same thing. Pip will help you flip between them.",
            "problems": [
              {
                "id": "fraction-forest-u2-l3-p1",
                "type": "mc",
                "prompt": "Which mixed number equals the improper fraction 5/2?",
                "choices": [
                  "2 1/2",
                  "1 1/2",
                  "2 1/5",
                  "5 1/2"
                ],
                "answer": "2 1/2",
                "explain": "Right! 5 divided by 2 is 2 with 1 left over, so 5/2 = 2 1/2.",
                "hints": [
                  "How many times does 2 fit into 5, and what's left over?",
                  "Divide the top by the bottom: the quotient is the whole, the remainder is the new top.",
                  "5 divided by 2 = 2 remainder 1, so 2 wholes and 1/2."
                ]
              },
              {
                "id": "fraction-forest-u2-l3-p2",
                "type": "input",
                "prompt": "Write the mixed number 1 3/4 as an improper fraction. Type like 7/4.",
                "answer": "7/4",
                "accept": [
                  "7/4",
                  "7 / 4"
                ],
                "explain": "Nice! 1 whole is 4/4, plus 3/4 makes 7/4.",
                "hints": [
                  "How many fourths are in 1 whole?",
                  "Multiply the whole number by the bottom, then add the top.",
                  "1 times 4 = 4, plus 3 = 7, over 4."
                ]
              },
              {
                "id": "fraction-forest-u2-l3-p3",
                "type": "truefalse",
                "prompt": "True or false: 8/4 is equal to 2 whole units.",
                "answer": "true",
                "explain": "True! 8 divided by 4 is exactly 2, with nothing left over — so 8/4 = 2.",
                "hints": [
                  "Does 4 fit into 8 evenly?",
                  "Divide the top by the bottom and see if there's a remainder.",
                  "8 divided by 4 = 2 with no leftovers."
                ]
              },
              {
                "id": "fraction-forest-u2-l3-p4",
                "type": "mc",
                "prompt": "Which improper fraction equals 2 2/3?",
                "choices": [
                  "8/3",
                  "6/3",
                  "4/3",
                  "2/3"
                ],
                "answer": "8/3",
                "explain": "Correct! 2 times 3 = 6, plus 2 = 8, so 2 2/3 = 8/3.",
                "hints": [
                  "Turn the 2 wholes into thirds first.",
                  "Multiply the whole by the bottom, then add the top: keep the bottom.",
                  "2 times 3 = 6, plus 2 = 8, over 3."
                ]
              },
              {
                "id": "fraction-forest-u2-l3-p5",
                "type": "input",
                "prompt": "Convert 11/3 to a mixed number. Type like 3 2/3.",
                "answer": "3 2/3",
                "accept": [
                  "3 2/3",
                  "3 2 / 3"
                ],
                "explain": "You got it! 11 divided by 3 is 3 with 2 left over, so 11/3 = 3 2/3.",
                "hints": [
                  "How many times does 3 go into 11, and what's the remainder?",
                  "The quotient is your whole number; the remainder is the new top.",
                  "11 divided by 3 = 3 remainder 2, so 3 and 2/3."
                ]
              },
              {
                "id": "fraction-forest-u2-l3-p6",
                "type": "mc",
                "prompt": "Which is larger: 7/2 or 3 1/4?",
                "choices": [
                  "7/2",
                  "3 1/4",
                  "They're equal",
                  "Can't tell"
                ],
                "answer": "7/2",
                "explain": "Nice! 7/2 = 3 1/2, and 3 1/2 is more than 3 1/4. So 7/2 wins.",
                "hints": [
                  "Turn 7/2 into a mixed number so they're easy to compare.",
                  "7/2 equals 3 and a half — now compare to 3 and a quarter.",
                  "3 1/2 vs 3 1/4: same wholes, so compare 1/2 and 1/4."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "fraction-forest-u3",
        "title": "Deep Woods: Unlike Pieces & Beyond",
        "lessons": [
          {
            "id": "fraction-forest-u3-l1",
            "title": "Adding & Subtracting Unlike Denominators",
            "icon": "🧩",
            "intro": "Pip's challenge: when the bottoms are different, the pieces are different sizes — so we make them match first with a common denominator. Then it's easy!",
            "problems": [
              {
                "id": "fraction-forest-u3-l1-p1",
                "type": "input",
                "prompt": "1/2 + 1/4 = ? Type like 3/4.",
                "answer": "3/4",
                "accept": [
                  "3/4",
                  "3 / 4"
                ],
                "explain": "Yes! Rewrite 1/2 as 2/4, then 2/4 + 1/4 = 3/4.",
                "hints": [
                  "The bottoms don't match — can you rewrite 1/2 as fourths?",
                  "1/2 is the same as 2/4, so now both are in fourths.",
                  "2/4 + 1/4: add the tops, keep the 4."
                ]
              },
              {
                "id": "fraction-forest-u3-l1-p2",
                "type": "mc",
                "prompt": "What common denominator should you use for 1/3 + 1/4?",
                "choices": [
                  "12",
                  "7",
                  "3",
                  "4"
                ],
                "answer": "12",
                "explain": "Right! 12 is the smallest number both 3 and 4 divide into, so it's the common denominator.",
                "hints": [
                  "You need a number that BOTH 3 and 4 divide into evenly.",
                  "Try multiplying the two denominators together as one option.",
                  "3 times 4 = 12, and both 3 and 4 go into 12."
                ]
              },
              {
                "id": "fraction-forest-u3-l1-p3",
                "type": "input",
                "prompt": "1/3 + 1/6 = ? Type your answer in simplest form, like 1/2.",
                "answer": "1/2",
                "accept": [
                  "1/2",
                  "3/6",
                  "1 / 2",
                  "3 / 6"
                ],
                "explain": "Great! Rewrite 1/3 as 2/6, then 2/6 + 1/6 = 3/6, which simplifies to 1/2.",
                "hints": [
                  "Make the bottoms match — sixths work since 3 divides into 6.",
                  "1/3 becomes 2/6, so add 2/6 + 1/6.",
                  "2/6 + 1/6 = 3/6, and 3/6 simplifies to what?"
                ]
              },
              {
                "id": "fraction-forest-u3-l1-p4",
                "type": "input",
                "prompt": "3/4 - 1/2 = ? Type like 1/4.",
                "answer": "1/4",
                "accept": [
                  "1/4",
                  "1 / 4"
                ],
                "explain": "Correct! Rewrite 1/2 as 2/4, then 3/4 - 2/4 = 1/4.",
                "hints": [
                  "Make the bottoms the same first.",
                  "1/2 is the same as 2/4, so subtract 3/4 - 2/4.",
                  "3 - 2 = 1 on top, keep the 4."
                ]
              },
              {
                "id": "fraction-forest-u3-l1-p5",
                "type": "mc",
                "prompt": "2/3 + 1/6 = ?",
                "choices": [
                  "5/6",
                  "3/9",
                  "3/6",
                  "5/9"
                ],
                "answer": "5/6",
                "explain": "Nice! 2/3 = 4/6, then 4/6 + 1/6 = 5/6.",
                "hints": [
                  "Rewrite 2/3 with a denominator of 6.",
                  "2/3 equals 4/6, so add 4/6 + 1/6.",
                  "4 + 1 = 5 on top, keep the 6."
                ]
              },
              {
                "id": "fraction-forest-u3-l1-p6",
                "type": "input",
                "prompt": "A recipe needs 1/2 cup of flour and 1/3 cup of sugar. How many cups of dry stuff total? Type like 5/6.",
                "answer": "5/6",
                "accept": [
                  "5/6",
                  "5 / 6"
                ],
                "explain": "Yum! Common denominator 6: 1/2 = 3/6 and 1/3 = 2/6, so 3/6 + 2/6 = 5/6 cup.",
                "hints": [
                  "Find a common denominator for halves and thirds.",
                  "Use sixths: 1/2 = 3/6 and 1/3 = 2/6.",
                  "3/6 + 2/6 = 5/6."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u3-l2",
            "title": "Multiplying Fractions by Whole Numbers",
            "icon": "✖️",
            "intro": "Pip says multiplying a fraction by a whole number is just repeated adding! 3 times 1/4 means 1/4 + 1/4 + 1/4. Multiply the top by the whole number and keep the bottom.",
            "problems": [
              {
                "id": "fraction-forest-u3-l2-p1",
                "type": "input",
                "prompt": "3 x 1/4 = ? Type like 3/4.",
                "answer": "3/4",
                "accept": [
                  "3/4",
                  "3 / 4"
                ],
                "explain": "Yes! 1/4 three times is 3/4 — multiply the top (1) by 3, keep the bottom.",
                "hints": [
                  "Think of it as 1/4 + 1/4 + 1/4.",
                  "Multiply the top number by the whole number; keep the bottom.",
                  "1 times 3 = 3 on top, over 4."
                ]
              },
              {
                "id": "fraction-forest-u3-l2-p2",
                "type": "mc",
                "prompt": "4 x 2/5 = ?",
                "choices": [
                  "8/5",
                  "8/20",
                  "6/5",
                  "2/20"
                ],
                "answer": "8/5",
                "explain": "Right! 2 times 4 = 8 on top, keep the 5: that's 8/5 (or 1 3/5).",
                "hints": [
                  "Multiply the top by the whole number, keep the bottom.",
                  "Don't multiply the bottom — only the top changes.",
                  "2 times 4 = 8, over 5."
                ]
              },
              {
                "id": "fraction-forest-u3-l2-p3",
                "type": "input",
                "prompt": "2 x 3/8 = ? Write in simplest form, like 3/4.",
                "answer": "3/4",
                "accept": [
                  "3/4",
                  "6/8",
                  "3 / 4",
                  "6 / 8"
                ],
                "explain": "Nice! 3 times 2 = 6, giving 6/8, which simplifies to 3/4.",
                "hints": [
                  "Multiply the top by 2, keep the bottom of 8.",
                  "3 times 2 = 6, so you have 6/8 — now simplify.",
                  "Divide 6/8 top and bottom by 2 to get 3/4."
                ]
              },
              {
                "id": "fraction-forest-u3-l2-p4",
                "type": "truefalse",
                "prompt": "True or false: 5 x 1/5 = 1.",
                "answer": "true",
                "explain": "True! Five copies of 1/5 make 5/5, and 5/5 is one whole.",
                "hints": [
                  "Multiply the top by 5, keep the bottom.",
                  "1 times 5 = 5, so you get 5/5 — what does that equal?",
                  "5/5 has a top equal to the bottom, so it's 1 whole."
                ]
              },
              {
                "id": "fraction-forest-u3-l2-p5",
                "type": "mc",
                "prompt": "Each cup holds 2/3 liter. How much do 3 cups hold?",
                "choices": [
                  "2 liters",
                  "6/3 of a liter only",
                  "5/3 liter",
                  "2/9 liter"
                ],
                "answer": "2 liters",
                "explain": "Correct! 3 x 2/3 = 6/3, and 6/3 = 2 whole liters.",
                "hints": [
                  "Multiply 3 by the fraction 2/3.",
                  "2 times 3 = 6 on top, keep the 3: that's 6/3.",
                  "6/3 means 6 divided by 3 — what whole number is that?"
                ]
              },
              {
                "id": "fraction-forest-u3-l2-p6",
                "type": "input",
                "prompt": "6 x 1/3 = ? Type the answer as a whole number, like 2.",
                "answer": "2",
                "accept": [
                  "2",
                  "6/3",
                  "two",
                  "2/1"
                ],
                "explain": "Great! 6 times 1/3 = 6/3, and 6/3 equals 2.",
                "hints": [
                  "Multiply the top by 6, keep the bottom of 3.",
                  "1 times 6 = 6, so you have 6/3.",
                  "6 divided by 3 = 2."
                ]
              }
            ]
          },
          {
            "id": "fraction-forest-u3-l3",
            "title": "Fraction Forest Challenge",
            "icon": "🏆",
            "intro": "Final stretch, explorer! Pip is mixing everything together — comparing, adding, mixed numbers, and multiplying. Take your time and think it through. You've got this!",
            "problems": [
              {
                "id": "fraction-forest-u3-l3-p1",
                "type": "input",
                "prompt": "2/3 + 1/4 = ? Use common denominator 12 and type like 11/12.",
                "answer": "11/12",
                "accept": [
                  "11/12",
                  "11 / 12"
                ],
                "explain": "Excellent! 2/3 = 8/12 and 1/4 = 3/12, so 8/12 + 3/12 = 11/12.",
                "hints": [
                  "Rewrite both fractions with a denominator of 12.",
                  "2/3 = 8/12 and 1/4 = 3/12.",
                  "8/12 + 3/12: add the tops, keep the 12."
                ]
              },
              {
                "id": "fraction-forest-u3-l3-p2",
                "type": "mc",
                "prompt": "Which is greater: 5/6 or 7/8? (common denominator 24)",
                "choices": [
                  "7/8",
                  "5/6",
                  "They're equal",
                  "Can't tell"
                ],
                "answer": "7/8",
                "explain": "Right! 5/6 = 20/24 and 7/8 = 21/24, so 7/8 is just a hair bigger.",
                "hints": [
                  "Rewrite both with a denominator of 24.",
                  "5/6 = 20/24 and 7/8 = 21/24.",
                  "Compare 20/24 and 21/24 — which top is bigger?"
                ]
              },
              {
                "id": "fraction-forest-u3-l3-p3",
                "type": "input",
                "prompt": "4 x 3/8 = ? Write in simplest form, like 3/2 or 1 1/2.",
                "answer": "3/2",
                "accept": [
                  "3/2",
                  "1 1/2",
                  "12/8",
                  "1.5",
                  "3 / 2",
                  "1 1 / 2"
                ],
                "explain": "Nice! 3 times 4 = 12, giving 12/8, which simplifies to 3/2 (or 1 1/2).",
                "hints": [
                  "Multiply the top by 4, keep the bottom of 8.",
                  "3 times 4 = 12, so you have 12/8 — now simplify.",
                  "Divide 12/8 top and bottom by 4 to get 3/2."
                ]
              },
              {
                "id": "fraction-forest-u3-l3-p4",
                "type": "truefalse",
                "prompt": "True or false: 5/4 is greater than 1.",
                "answer": "true",
                "explain": "True! 5/4 is an improper fraction — the top is bigger than the bottom, so it's more than 1 (it's 1 1/4).",
                "hints": [
                  "Compare the top number to the bottom number.",
                  "When the top is bigger than the bottom, the fraction is more than 1 whole.",
                  "5 is bigger than 4, so 5/4 is past 1."
                ]
              },
              {
                "id": "fraction-forest-u3-l3-p5",
                "type": "input",
                "prompt": "Leo ran 7/8 mile and walked 1/4 mile. How far did he go in all? Type in simplest form, like 9/8 or 1 1/8.",
                "answer": "9/8",
                "accept": [
                  "9/8",
                  "1 1/8",
                  "9 / 8",
                  "1 1 / 8"
                ],
                "explain": "Way to go! 1/4 = 2/8, so 7/8 + 2/8 = 9/8, which is 1 1/8 miles.",
                "hints": [
                  "Make the bottoms match — rewrite 1/4 as eighths.",
                  "1/4 = 2/8, so add 7/8 + 2/8.",
                  "7 + 2 = 9 on top, over 8 — that's 9/8 (or 1 1/8)."
                ]
              },
              {
                "id": "fraction-forest-u3-l3-p6",
                "type": "mc",
                "prompt": "A number line from 0 to 2 is split into eighths. Where is 11/8?",
                "choices": [
                  "Between 1 and 2 (at 1 3/8)",
                  "Between 0 and 1",
                  "Exactly at 1",
                  "Exactly at 2"
                ],
                "answer": "Between 1 and 2 (at 1 3/8)",
                "explain": "Perfect finish! 11/8 = 1 3/8, which lands between 1 and 2. You conquered Fraction Forest!",
                "hints": [
                  "Turn 11/8 into a mixed number to see where it sits.",
                  "11 divided by 8 = 1 remainder 3, so 1 3/8.",
                  "1 3/8 is more than 1 but less than 2 — which choice says that?"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "decimal-delta",
    "title": "Decimal Delta",
    "subtitle": "Grades 5-6",
    "color": "#38BDF8",
    "icon": "💧",
    "blurb": "Dive into a rushing river of tiny digits where every drop after the dot makes a big splash!",
    "units": [
      {
        "id": "decimal-delta-u1",
        "title": "Drops & Places",
        "lessons": [
          {
            "id": "decimal-delta-u1-l1",
            "title": "Meet the Decimal Point",
            "icon": "🔹",
            "intro": "Hi, I'm Pip! That little dot is the decimal point, and it splits the whole numbers from the pieces. Let's get to know it!",
            "problems": [
              {
                "id": "decimal-delta-u1-l1-p1",
                "type": "mc",
                "prompt": "Which digit is in the tenths place in 4.7?",
                "choices": [
                  "4",
                  "7",
                  "0",
                  "47"
                ],
                "answer": "7",
                "explain": "The tenths place is the first spot right after the decimal point, and that's the 7. Nice!",
                "hints": [
                  "Look at the digit just to the right of the dot.",
                  "The places after the dot go: tenths, then hundredths.",
                  "Start at the decimal point and step right one place to land on the tenths."
                ]
              },
              {
                "id": "decimal-delta-u1-l1-p2",
                "type": "truefalse",
                "prompt": "In the number 3.2, the digit 3 is the whole number part.",
                "answer": "true",
                "explain": "Everything to the LEFT of the dot is the whole part, so the 3 is indeed whole. You've got it!",
                "hints": [
                  "Which side of the dot is the 3 on?",
                  "Whole numbers live to the left of the decimal point.",
                  "The 3 sits before the dot, so ask: is the left side the whole part?"
                ]
              },
              {
                "id": "decimal-delta-u1-l1-p3",
                "type": "mc",
                "prompt": "Which of these numbers has a decimal part?",
                "choices": [
                  "12",
                  "5.6",
                  "100",
                  "9"
                ],
                "answer": "5.6",
                "explain": "Only 5.6 has a dot followed by a piece, so it's the one with a decimal part. Splash!",
                "hints": [
                  "A decimal part means there's a dot with digits after it.",
                  "Scan each number for a decimal point.",
                  "Three of these are plain whole numbers, one has a dot, find the dot."
                ]
              },
              {
                "id": "decimal-delta-u1-l1-p4",
                "type": "input",
                "prompt": "What digit is in the ones place in 8.3? Type the digit.",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "The ones place is the first spot to the LEFT of the dot, and that's the 8. Wonderful!",
                "hints": [
                  "The ones place is a whole-number place.",
                  "Look just to the left of the decimal point.",
                  "Step from the dot one place left to find the ones digit."
                ]
              },
              {
                "id": "decimal-delta-u1-l1-p5",
                "type": "mc",
                "prompt": "Which digit is in the hundredths place in 0.59?",
                "choices": [
                  "5",
                  "9",
                  "0",
                  "59"
                ],
                "answer": "9",
                "explain": "The hundredths place is the SECOND spot after the dot, so it's the 9. You're flowing now!",
                "hints": [
                  "Count the places after the dot: first is tenths, second is hundredths.",
                  "You want the second digit past the decimal point.",
                  "Skip past the tenths digit and land on the next one."
                ]
              },
              {
                "id": "decimal-delta-u1-l1-p6",
                "type": "truefalse",
                "prompt": "In 6.04, the digit 0 is in the tenths place.",
                "answer": "true",
                "explain": "The first place after the dot is tenths, and here that's the 0. The 4 is in hundredths. Correct!",
                "hints": [
                  "Find the first digit right after the decimal point.",
                  "That first spot is always the tenths place.",
                  "Right after the dot comes 0, so check if tenths is where 0 sits."
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u1-l2",
            "title": "Place Value Power",
            "icon": "🏗️",
            "intro": "Every place has a value, Pip-promise! Tenths, hundredths, thousandths, each one ten times smaller. Let's measure their worth.",
            "problems": [
              {
                "id": "decimal-delta-u1-l2-p1",
                "type": "mc",
                "prompt": "What is the VALUE of the 6 in 0.6?",
                "choices": [
                  "6 tenths",
                  "6 ones",
                  "6 hundredths",
                  "6 wholes"
                ],
                "answer": "6 tenths",
                "explain": "The 6 sits in the tenths place, so its value is 6 tenths. That's 6/10!",
                "hints": [
                  "The 6 is the first digit after the dot.",
                  "The first place after the dot names the value.",
                  "First place after the dot is tenths, so the 6 is worth 6 of those."
                ]
              },
              {
                "id": "decimal-delta-u1-l2-p2",
                "type": "input",
                "prompt": "Write 0.07 as a fraction. Type it like a/b.",
                "answer": "7/100",
                "accept": [
                  "7/100",
                  "7 / 100"
                ],
                "explain": "The 7 is in the hundredths place, so 0.07 means 7 out of 100, or 7/100. Sweet!",
                "hints": [
                  "Which place is the 7 in?",
                  "Hundredths means a denominator of 100.",
                  "The 7 is two places after the dot, so the bottom of the fraction is 100."
                ]
              },
              {
                "id": "decimal-delta-u1-l2-p3",
                "type": "mc",
                "prompt": "Which place is 10 times SMALLER than the tenths place?",
                "choices": [
                  "hundredths",
                  "ones",
                  "tens",
                  "thousands"
                ],
                "answer": "hundredths",
                "explain": "Each step to the right is 10 times smaller, so right after tenths comes hundredths. Smaller drops!",
                "hints": [
                  "Moving right past the dot makes places smaller.",
                  "What comes right after tenths?",
                  "Tenths, then... the next place to the right is the answer."
                ]
              },
              {
                "id": "decimal-delta-u1-l2-p4",
                "type": "input",
                "prompt": "In 0.358, what digit is in the thousandths place? Type the digit.",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "Thousandths is the THIRD place after the dot, and that's the 8. Deep in the delta!",
                "hints": [
                  "Count places after the dot: tenths, hundredths, thousandths.",
                  "You want the third digit past the decimal point.",
                  "Pass the first two digits, then grab the next one."
                ]
              },
              {
                "id": "decimal-delta-u1-l2-p5",
                "type": "mc",
                "prompt": "What is the value of the 4 in 2.45?",
                "choices": [
                  "4 tenths",
                  "4 hundredths",
                  "4 ones",
                  "4 tens"
                ],
                "answer": "4 tenths",
                "explain": "The 4 is the first digit after the dot, so it's in tenths, worth 4 tenths. The 5 is hundredths!",
                "hints": [
                  "Find where the 4 sits relative to the dot.",
                  "First place after the dot is tenths.",
                  "The 4 comes right after the decimal point, so name that place."
                ]
              },
              {
                "id": "decimal-delta-u1-l2-p6",
                "type": "truefalse",
                "prompt": "The 5 in 0.5 has the same value as the 5 in 0.05.",
                "answer": "false",
                "explain": "Nope! 0.5 is 5 tenths but 0.05 is only 5 hundredths, which is much smaller. Place matters!",
                "hints": [
                  "Where is each 5 sitting?",
                  "One is in tenths, one is in hundredths.",
                  "Compare 5 tenths to 5 hundredths, are those the same size?"
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u1-l3",
            "title": "Reading & Writing Decimals",
            "icon": "✍️",
            "intro": "Time to say decimals out loud and write them down, Pip-style. We read the dot as 'and' and use place names. Let's go!",
            "problems": [
              {
                "id": "decimal-delta-u1-l3-p1",
                "type": "mc",
                "prompt": "How do you read 0.3?",
                "choices": [
                  "three tenths",
                  "three",
                  "three hundredths",
                  "thirty"
                ],
                "answer": "three tenths",
                "explain": "The 3 is in the tenths place, so 0.3 is 'three tenths.' Perfectly read!",
                "hints": [
                  "The last digit's place name is the unit you say.",
                  "The 3 is in the tenths place.",
                  "Say the digit, then its place: three... tenths."
                ]
              },
              {
                "id": "decimal-delta-u1-l3-p2",
                "type": "input",
                "prompt": "Write 'fifty-six hundredths' as a decimal.",
                "answer": "0.56",
                "accept": [
                  "0.56",
                  ".56"
                ],
                "explain": "Hundredths means two places after the dot, so fifty-six hundredths is 0.56. Nicely written!",
                "hints": [
                  "Hundredths means two digits after the decimal point.",
                  "The number fifty-six fills those two places.",
                  "Put 56 right after the dot."
                ]
              },
              {
                "id": "decimal-delta-u1-l3-p3",
                "type": "mc",
                "prompt": "How do you read 4.2?",
                "choices": [
                  "four and two tenths",
                  "four two",
                  "forty-two",
                  "four and two"
                ],
                "answer": "four and two tenths",
                "explain": "The dot is read as 'and,' so 4.2 is 'four and two tenths.' You said it right!",
                "hints": [
                  "The dot is read as the word 'and'.",
                  "Say the whole part, then 'and', then the decimal part.",
                  "Four ... and ... two of which place? The 2 is in tenths."
                ]
              },
              {
                "id": "decimal-delta-u1-l3-p4",
                "type": "input",
                "prompt": "Write 'seven and five tenths' as a decimal.",
                "answer": "7.5",
                "accept": [
                  "7.5"
                ],
                "explain": "Seven is the whole part and five tenths goes after the dot, giving 7.5. Splashing success!",
                "hints": [
                  "The word 'and' is where the decimal point goes.",
                  "Seven is whole, five tenths comes after.",
                  "Write 7, a dot, then the tenths digit."
                ]
              },
              {
                "id": "decimal-delta-u1-l3-p5",
                "type": "mc",
                "prompt": "Which decimal means 'nine hundredths'?",
                "choices": [
                  "0.09",
                  "0.9",
                  "0.90",
                  "9.00"
                ],
                "answer": "0.09",
                "explain": "Nine hundredths needs the 9 in the second place after the dot, so it's 0.09. Tiny but mighty!",
                "hints": [
                  "Hundredths is the second place after the dot.",
                  "The 9 must land in that second spot.",
                  "Fill the tenths place with 0 first, then put 9 in hundredths."
                ]
              },
              {
                "id": "decimal-delta-u1-l3-p6",
                "type": "truefalse",
                "prompt": "The number 0.40 is read as 'forty hundredths.'",
                "answer": "true",
                "explain": "The last digit is in hundredths and the number is 40, so 0.40 is 'forty hundredths.' True!",
                "hints": [
                  "Look at the place of the very last digit.",
                  "The final 0 ends in the hundredths place.",
                  "Read the digits as a number then add the place name."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "decimal-delta-u2",
        "title": "Compare, Order & Round",
        "lessons": [
          {
            "id": "decimal-delta-u2-l1",
            "title": "Bigger or Smaller?",
            "icon": "⚖️",
            "intro": "Which drop is heavier? To compare decimals we line up the dots and check place by place. Let's weigh them, Pip-style!",
            "problems": [
              {
                "id": "decimal-delta-u2-l1-p1",
                "type": "mc",
                "prompt": "Which symbol makes this true: 0.7 ? 0.5",
                "choices": [
                  ">",
                  "<",
                  "=",
                  "+"
                ],
                "answer": ">",
                "explain": "7 tenths is more than 5 tenths, so 0.7 > 0.5. Greater than wins!",
                "hints": [
                  "Compare the tenths digits first.",
                  "Is 7 tenths more or less than 5 tenths?",
                  "The bigger number is on the left, so the open side of the symbol faces it."
                ]
              },
              {
                "id": "decimal-delta-u2-l1-p2",
                "type": "truefalse",
                "prompt": "0.30 is equal to 0.3.",
                "answer": "true",
                "explain": "Adding a zero at the end doesn't change the value, so 0.30 = 0.3. Equal drops!",
                "hints": [
                  "A zero on the far right of a decimal is a trailing zero.",
                  "Does a trailing zero add any value?",
                  "0.3 is 3 tenths and 0.30 is 30 hundredths, are those the same amount?"
                ]
              },
              {
                "id": "decimal-delta-u2-l1-p3",
                "type": "mc",
                "prompt": "Which symbol makes this true: 0.25 ? 0.3",
                "choices": [
                  "<",
                  ">",
                  "=",
                  "x"
                ],
                "answer": "<",
                "explain": "Compare tenths first: 2 tenths is less than 3 tenths, so 0.25 < 0.3. Less than!",
                "hints": [
                  "Line up the decimals and look at the tenths place first.",
                  "One has 2 tenths, the other has 3 tenths.",
                  "The smaller tenths makes the smaller number, even with more digits."
                ]
              },
              {
                "id": "decimal-delta-u2-l1-p4",
                "type": "mc",
                "prompt": "Which decimal is the LARGEST?",
                "choices": [
                  "0.8",
                  "0.79",
                  "0.6",
                  "0.75"
                ],
                "answer": "0.8",
                "explain": "Comparing tenths, 0.8 has 8 tenths which beats them all. Biggest splash!",
                "hints": [
                  "Compare the tenths digit of each number first.",
                  "Which one has the most tenths?",
                  "One has 8 tenths while the others have 7, 6, and 7, so which wins?"
                ]
              },
              {
                "id": "decimal-delta-u2-l1-p5",
                "type": "input",
                "prompt": "Fill in the blank with > or <:  1.2 ___ 1.15",
                "answer": ">",
                "accept": [
                  ">",
                  "greater than",
                  "greater"
                ],
                "explain": "The wholes tie at 1, then tenths: 2 tenths beats 1 tenth, so 1.2 > 1.15. Greater!",
                "hints": [
                  "Compare the whole-number parts first; they're both 1.",
                  "Now compare the tenths digit of each.",
                  "One has 2 tenths and the other has 1 tenth, so which is bigger?"
                ]
              },
              {
                "id": "decimal-delta-u2-l1-p6",
                "type": "truefalse",
                "prompt": "0.09 is greater than 0.1.",
                "answer": "false",
                "explain": "0.1 is one tenth (the same as 0.10), and 9 hundredths is less than 10 hundredths, so 0.09 < 0.1. False!",
                "hints": [
                  "Give them the same number of decimal places to compare fairly.",
                  "Think of 0.1 as 0.10 to match the hundredths.",
                  "Compare 9 hundredths to 10 hundredths, which is bigger?"
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u2-l2",
            "title": "Line Them Up",
            "icon": "📊",
            "intro": "Let's put decimals in order from small to big, like ducks in a row! Compare place by place and they'll fall in line. Ready, Pip-pal?",
            "problems": [
              {
                "id": "decimal-delta-u2-l2-p1",
                "type": "mc",
                "prompt": "Order from SMALLEST to largest: 0.4, 0.1, 0.7",
                "choices": [
                  "0.1, 0.4, 0.7",
                  "0.7, 0.4, 0.1",
                  "0.4, 0.1, 0.7",
                  "0.1, 0.7, 0.4"
                ],
                "answer": "0.1, 0.4, 0.7",
                "explain": "Comparing tenths, 1 < 4 < 7, so the order is 0.1, 0.4, 0.7. Lined up perfectly!",
                "hints": [
                  "These all have just tenths, so compare the tenths digits.",
                  "Find the smallest tenths digit to go first.",
                  "Order the digits 1, 4, 7 from small to big and match the decimals."
                ]
              },
              {
                "id": "decimal-delta-u2-l2-p2",
                "type": "mc",
                "prompt": "Which list is in order from LARGEST to smallest?",
                "choices": [
                  "0.9, 0.5, 0.2",
                  "0.2, 0.5, 0.9",
                  "0.5, 0.9, 0.2",
                  "0.9, 0.2, 0.5"
                ],
                "answer": "0.9, 0.5, 0.2",
                "explain": "Largest first means biggest tenths first: 9, then 5, then 2. That's 0.9, 0.5, 0.2!",
                "hints": [
                  "Largest to smallest means start big and go down.",
                  "Compare the tenths digits.",
                  "Which list starts with the biggest tenths and keeps shrinking?"
                ]
              },
              {
                "id": "decimal-delta-u2-l2-p3",
                "type": "input",
                "prompt": "Which is smallest: 0.33, 0.3, or 0.30? Type your answer.",
                "answer": "0.3",
                "accept": [
                  "0.3",
                  "0.30",
                  ".3",
                  ".30",
                  "they are equal",
                  "tie",
                  "0.3 and 0.30",
                  "0.30 and 0.3"
                ],
                "explain": "Here 0.3 and 0.30 are equal (both 3 tenths) and both are smaller than 0.33. Sneaky tie!",
                "hints": [
                  "Compare them as hundredths: 0.30, 0.30, and 0.33.",
                  "Two of these are actually the same value.",
                  "The two equal ones are both less than 0.33, so either equal one is smallest."
                ]
              },
              {
                "id": "decimal-delta-u2-l2-p4",
                "type": "mc",
                "prompt": "Order from smallest to largest: 1.5, 0.9, 1.2",
                "choices": [
                  "0.9, 1.2, 1.5",
                  "1.5, 1.2, 0.9",
                  "0.9, 1.5, 1.2",
                  "1.2, 0.9, 1.5"
                ],
                "answer": "0.9, 1.2, 1.5",
                "explain": "Compare wholes first: 0.9 is less than 1, then 1.2 < 1.5. So 0.9, 1.2, 1.5!",
                "hints": [
                  "Start by comparing the whole-number parts.",
                  "One number has a whole part of 0, the others have 1.",
                  "Put the 0-whole number first, then order the two 1-point numbers by tenths."
                ]
              },
              {
                "id": "decimal-delta-u2-l2-p5",
                "type": "mc",
                "prompt": "Which decimal goes BETWEEN 0.4 and 0.6 on a number line?",
                "choices": [
                  "0.5",
                  "0.3",
                  "0.7",
                  "0.9"
                ],
                "answer": "0.5",
                "explain": "0.5 is right in the middle of 0.4 and 0.6, so it fits between them. Perfect spot!",
                "hints": [
                  "You need a number bigger than 0.4 but smaller than 0.6.",
                  "What's right in the middle of 4 tenths and 6 tenths?",
                  "Count up one tenth from 0.4 to find the answer."
                ]
              },
              {
                "id": "decimal-delta-u2-l2-p6",
                "type": "truefalse",
                "prompt": "In order from smallest to largest, 0.08 comes before 0.1.",
                "answer": "true",
                "explain": "0.08 is 8 hundredths and 0.1 is 10 hundredths, so 0.08 is smaller and comes first. True!",
                "hints": [
                  "Rewrite 0.1 as 0.10 to compare hundredths.",
                  "Compare 8 hundredths to 10 hundredths.",
                  "The smaller one comes first, so decide which that is."
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u2-l3",
            "title": "Rounding the Rapids",
            "icon": "🎯",
            "intro": "Rounding helps us estimate fast! Find the rounding place, then peek at the digit to its right. 5 or more rounds up, less stays put. Let's ride the rapids!",
            "problems": [
              {
                "id": "decimal-delta-u2-l3-p1",
                "type": "mc",
                "prompt": "Round 3.6 to the nearest whole number.",
                "choices": [
                  "4",
                  "3",
                  "3.5",
                  "6"
                ],
                "answer": "4",
                "explain": "The tenths digit is 6, which is 5 or more, so we round 3 UP to 4. Nice catch!",
                "hints": [
                  "Look at the tenths digit to decide.",
                  "Is the tenths digit 5 or more?",
                  "Since the tenths digit is 5 or more, round the whole number up."
                ]
              },
              {
                "id": "decimal-delta-u2-l3-p2",
                "type": "mc",
                "prompt": "Round 7.2 to the nearest whole number.",
                "choices": [
                  "7",
                  "8",
                  "7.5",
                  "2"
                ],
                "answer": "7",
                "explain": "The tenths digit is 2, which is less than 5, so 7 stays as 7. It rounds down!",
                "hints": [
                  "Check the tenths digit.",
                  "Is the tenths digit less than 5 or 5 and up?",
                  "Since the tenths digit is less than 5, the whole number stays the same."
                ]
              },
              {
                "id": "decimal-delta-u2-l3-p3",
                "type": "input",
                "prompt": "Round 0.47 to the nearest tenth. Type your answer.",
                "answer": "0.5",
                "accept": [
                  "0.5",
                  ".5"
                ],
                "explain": "Look at the hundredths digit, 7, which is 5 or more, so the tenths 4 rounds up to 5. That's 0.5!",
                "hints": [
                  "The rounding place is tenths; look one spot to the right.",
                  "The hundredths digit decides, is it 5 or more?",
                  "Since it rounds up, change the 4 tenths to 5 tenths."
                ]
              },
              {
                "id": "decimal-delta-u2-l3-p4",
                "type": "mc",
                "prompt": "Round 5.83 to the nearest tenth.",
                "choices": [
                  "5.8",
                  "5.9",
                  "6.0",
                  "5.0"
                ],
                "answer": "5.8",
                "explain": "The hundredths digit is 3, less than 5, so the tenths stays at 8. The answer is 5.8!",
                "hints": [
                  "Look at the digit just right of the tenths place.",
                  "Check the hundredths digit.",
                  "Since it's less than 5, keep the 8 tenths as it is."
                ]
              },
              {
                "id": "decimal-delta-u2-l3-p5",
                "type": "input",
                "prompt": "Round 12.5 to the nearest whole number. Type your answer.",
                "answer": "13",
                "accept": [
                  "13",
                  "thirteen"
                ],
                "explain": "The tenths digit is exactly 5, and 5 rounds up, so 12 becomes 13. Up we go!",
                "hints": [
                  "Look at the tenths digit to decide.",
                  "The tenths digit is exactly 5; what's the rule for that?",
                  "An exact 5 rounds up, so add one to the whole number."
                ]
              },
              {
                "id": "decimal-delta-u2-l3-p6",
                "type": "truefalse",
                "prompt": "Rounded to the nearest whole number, 0.49 rounds to 0.",
                "answer": "true",
                "explain": "The tenths digit is 4, which is less than 5, so it rounds down to 0. Even though it looks close, it's true!",
                "hints": [
                  "The rounding place is the ones (whole) place.",
                  "Look at the tenths digit.",
                  "Since the tenths digit is less than 5, the whole-number part stays the same."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "decimal-delta-u3",
        "title": "Decimal Operations & Money",
        "lessons": [
          {
            "id": "decimal-delta-u3-l1",
            "title": "Add & Subtract Decimals",
            "icon": "➕",
            "intro": "When we add or subtract decimals, the secret is lining up the dots! Keep the place values stacked and you can't go wrong. Let's flow, Pip-pal!",
            "problems": [
              {
                "id": "decimal-delta-u3-l1-p1",
                "type": "input",
                "prompt": "What is 0.5 + 0.3?",
                "answer": "0.8",
                "accept": [
                  "0.8",
                  ".8"
                ],
                "explain": "5 tenths plus 3 tenths is 8 tenths, which is 0.8. Easy flowing!",
                "hints": [
                  "Add the tenths digits together.",
                  "Think of it as 5 tenths plus 3 tenths.",
                  "Add the two digits, then keep them in tenths."
                ]
              },
              {
                "id": "decimal-delta-u3-l1-p2",
                "type": "input",
                "prompt": "What is 1.2 + 0.6?",
                "answer": "1.8",
                "accept": [
                  "1.8"
                ],
                "explain": "Line up the dots: 1.2 + 0.6 gives 1.8. The wholes stay 1 and 2 tenths plus 6 tenths is 8 tenths!",
                "hints": [
                  "Line up the decimal points and add place by place.",
                  "Add the tenths: 2 tenths plus 6 tenths.",
                  "Wholes give 1, tenths give 8, so put them together."
                ]
              },
              {
                "id": "decimal-delta-u3-l1-p3",
                "type": "input",
                "prompt": "What is 0.9 - 0.4?",
                "answer": "0.5",
                "accept": [
                  "0.5",
                  ".5"
                ],
                "explain": "9 tenths minus 4 tenths is 5 tenths, which is 0.5. Subtraction sorted!",
                "hints": [
                  "Subtract the tenths digits.",
                  "Think 9 tenths take away 4 tenths.",
                  "Subtract the digits and keep the result in tenths."
                ]
              },
              {
                "id": "decimal-delta-u3-l1-p4",
                "type": "mc",
                "prompt": "What is 2.5 + 1.7?",
                "choices": [
                  "4.2",
                  "3.2",
                  "4.12",
                  "3.12"
                ],
                "answer": "4.2",
                "explain": "Tenths: 5 + 7 = 12 tenths, that's 1 whole and 2 tenths. Carry the 1: 2 + 1 + 1 = 4, so 4.2!",
                "hints": [
                  "Line up the dots and add the tenths first.",
                  "5 tenths plus 7 tenths is more than 10, so you carry.",
                  "12 tenths is 1 whole and 2 tenths; add that extra whole to the ones."
                ]
              },
              {
                "id": "decimal-delta-u3-l1-p5",
                "type": "input",
                "prompt": "What is 3.75 - 1.25?",
                "answer": "2.5",
                "accept": [
                  "2.5",
                  "2.50"
                ],
                "explain": "Subtract place by place: hundredths 5-5=0, tenths 7-2=5, wholes 3-1=2, giving 2.50 = 2.5!",
                "hints": [
                  "Line up the decimal points and subtract each column.",
                  "Start from the right: hundredths, then tenths, then wholes.",
                  "Subtract each column, then build the number from those results."
                ]
              },
              {
                "id": "decimal-delta-u3-l1-p6",
                "type": "truefalse",
                "prompt": "0.6 + 0.4 = 1.0",
                "answer": "true",
                "explain": "6 tenths plus 4 tenths is 10 tenths, which makes one whole, so it equals 1.0. True!",
                "hints": [
                  "Add the tenths: 6 tenths plus 4 tenths.",
                  "What does 10 tenths equal?",
                  "The tenths add to 10, and 10 tenths is exactly 1 whole."
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u3-l2",
            "title": "Multiply & Divide Decimals",
            "icon": "✖️",
            "intro": "Multiplying and dividing decimals is just like whole numbers, then we place the dot. Count those decimal places! Let's dive deeper, Pip-style.",
            "problems": [
              {
                "id": "decimal-delta-u3-l2-p1",
                "type": "input",
                "prompt": "What is 0.2 x 3?",
                "answer": "0.6",
                "accept": [
                  "0.6",
                  ".6"
                ],
                "explain": "2 tenths taken 3 times is 6 tenths, which is 0.6. Multiplying made easy!",
                "hints": [
                  "Think of 0.2 as 2 tenths.",
                  "Add 2 tenths three times, or multiply 2 x 3.",
                  "Multiply the digits, and it's still tenths."
                ]
              },
              {
                "id": "decimal-delta-u3-l2-p2",
                "type": "mc",
                "prompt": "What is 0.5 x 0.5?",
                "choices": [
                  "0.25",
                  "2.5",
                  "0.10",
                  "1.0"
                ],
                "answer": "0.25",
                "explain": "5 x 5 = 25, and there are two decimal places total (one in each), so the answer is 0.25!",
                "hints": [
                  "First multiply as whole numbers: 5 x 5.",
                  "Count the decimal places in BOTH numbers: one plus one.",
                  "With 2 decimal places, the product lands in the hundredths."
                ]
              },
              {
                "id": "decimal-delta-u3-l2-p3",
                "type": "input",
                "prompt": "What is 0.8 / 2?",
                "answer": "0.4",
                "accept": [
                  "0.4",
                  ".4"
                ],
                "explain": "8 tenths split into 2 equal groups is 4 tenths each, which is 0.4. Divided fairly!",
                "hints": [
                  "Think of 0.8 as 8 tenths.",
                  "Split 8 tenths into 2 equal parts.",
                  "Divide the digits and keep the result in tenths."
                ]
              },
              {
                "id": "decimal-delta-u3-l2-p4",
                "type": "mc",
                "prompt": "What is 1.5 x 4?",
                "choices": [
                  "6.0",
                  "4.5",
                  "5.4",
                  "6.5"
                ],
                "answer": "6.0",
                "explain": "1.5 four times: 1.5 + 1.5 + 1.5 + 1.5 = 6.0. Or 15 x 4 = 60 with one decimal place = 6.0!",
                "hints": [
                  "You can add 1.5 four times.",
                  "Or multiply 15 x 4 then place one decimal.",
                  "With one decimal place, 60 becomes 6.0."
                ]
              },
              {
                "id": "decimal-delta-u3-l2-p5",
                "type": "input",
                "prompt": "What is 2.4 / 4?",
                "answer": "0.6",
                "accept": [
                  "0.6",
                  ".6"
                ],
                "explain": "Think 24 tenths divided by 4 is 6 tenths, which is 0.6. Smooth division!",
                "hints": [
                  "Rewrite 2.4 as 24 tenths.",
                  "Divide 24 by 4 first.",
                  "The result is in tenths, so place the dot accordingly."
                ]
              },
              {
                "id": "decimal-delta-u3-l2-p6",
                "type": "truefalse",
                "prompt": "0.1 x 0.1 = 0.01",
                "answer": "true",
                "explain": "1 x 1 = 1, and there are two decimal places total, so the answer is 0.01. True!",
                "hints": [
                  "Multiply the digits: 1 x 1.",
                  "Count the decimal places in both factors: one and one.",
                  "With 2 decimal places, the product lands in the hundredths."
                ]
              }
            ]
          },
          {
            "id": "decimal-delta-u3-l3",
            "title": "Fractions, Decimals & Money",
            "icon": "💰",
            "intro": "Decimals and fractions are two ways to say the same thing, and money is decimals in action! Let's convert and count coins, Pip-pal!",
            "problems": [
              {
                "id": "decimal-delta-u3-l3-p1",
                "type": "mc",
                "prompt": "What is 1/2 written as a decimal?",
                "choices": [
                  "0.5",
                  "0.2",
                  "0.12",
                  "1.2"
                ],
                "answer": "0.5",
                "explain": "1 divided by 2 is 0.5, which is five tenths or half. Half a drop!",
                "hints": [
                  "A fraction means top divided by bottom.",
                  "Divide 1 by 2.",
                  "Half of one whole is the same as 5 tenths."
                ]
              },
              {
                "id": "decimal-delta-u3-l3-p2",
                "type": "input",
                "prompt": "Write 3/10 as a decimal.",
                "answer": "0.3",
                "accept": [
                  "0.3",
                  ".3"
                ],
                "explain": "Tenths go right after the dot, so 3/10 is 0.3. Quick conversion!",
                "hints": [
                  "The denominator 10 means tenths.",
                  "Put the 3 in the tenths place.",
                  "3 over 10 is just 3 in the first place after the dot."
                ]
              },
              {
                "id": "decimal-delta-u3-l3-p3",
                "type": "mc",
                "prompt": "What is 1/4 written as a decimal?",
                "choices": [
                  "0.25",
                  "0.14",
                  "0.4",
                  "0.5"
                ],
                "answer": "0.25",
                "explain": "1 divided by 4 is 0.25, which is twenty-five hundredths, like a quarter dollar!",
                "hints": [
                  "Divide 1 by 4, or think of a quarter of a dollar.",
                  "A quarter coin is worth 25 cents out of 100.",
                  "25 cents out of 100 is written as a decimal in the hundredths."
                ]
              },
              {
                "id": "decimal-delta-u3-l3-p4",
                "type": "input",
                "prompt": "You buy a snack for $1.25 and pay with $2.00. How much change do you get? (Type like 0.75)",
                "answer": "0.75",
                "accept": [
                  "0.75",
                  "$0.75",
                  ".75"
                ],
                "explain": "2.00 minus 1.25 is 0.75, so you get 75 cents back. Count those coins!",
                "hints": [
                  "Subtract the cost from what you paid.",
                  "Line up the dots: 2.00 - 1.25.",
                  "Subtracting leaves 75 cents, written as a decimal."
                ]
              },
              {
                "id": "decimal-delta-u3-l3-p5",
                "type": "mc",
                "prompt": "Three friends split a $4.50 bill equally. How much does each pay?",
                "choices": [
                  "$1.50",
                  "$1.35",
                  "$2.25",
                  "$0.45"
                ],
                "answer": "$1.50",
                "explain": "4.50 divided by 3 is 1.50, so each friend pays $1.50. Shared fairly!",
                "hints": [
                  "Splitting equally means dividing the total.",
                  "Divide 4.50 by 3.",
                  "45 tenths split 3 ways gives 15 tenths, so think dollars and a half."
                ]
              },
              {
                "id": "decimal-delta-u3-l3-p6",
                "type": "truefalse",
                "prompt": "$0.75 is the same as 3/4 of a dollar.",
                "answer": "true",
                "explain": "3/4 equals 0.75, and 75 cents is three quarters of a dollar. Spot on, true!",
                "hints": [
                  "Convert 3/4 to a decimal by dividing 3 by 4.",
                  "Three quarters means three 25-cent coins.",
                  "Three quarters at 25 cents each totals 75 cents."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ratio-ridge",
    "title": "Ratio Ridge",
    "subtitle": "Grades 6-7",
    "color": "#F59E0B",
    "icon": "⛰️",
    "blurb": "Climb the slopes where ratios, rates, and percents lead the way to the summit!",
    "units": [
      {
        "id": "ratio-ridge-u1",
        "title": "Ratio Basecamp",
        "icon": "🧗",
        "lessons": [
          {
            "id": "ratio-ridge-u1-l1",
            "title": "What's a Ratio?",
            "icon": "🍎",
            "intro": "Hi, I'm Pip! A ratio is just a way to compare two amounts. Let's start counting and comparing together!",
            "problems": [
              {
                "id": "ratio-ridge-u1-l1-p1",
                "type": "mc",
                "prompt": "There are 3 🍎 and 5 🍊. What is the ratio of apples to oranges?",
                "choices": [
                  "3 to 5",
                  "5 to 3",
                  "3 to 8",
                  "8 to 3"
                ],
                "answer": "3 to 5",
                "explain": "Ratios list the items in the order asked: apples first (3), then oranges (5). So it's 3 to 5!",
                "hints": [
                  "Which fruit was asked about first? That number goes first.",
                  "A ratio compares two groups by listing their counts in order.",
                  "Start by writing the number of apples, then the number of oranges."
                ]
              },
              {
                "id": "ratio-ridge-u1-l1-p2",
                "type": "input",
                "prompt": "A team has 4 dogs 🐶 and 2 cats 🐱. Write the ratio of cats to dogs as a:b (like 2:4).",
                "answer": "2:4",
                "accept": [
                  "2:4",
                  "2 to 4",
                  "2/4"
                ],
                "explain": "Cats come first because the question said 'cats to dogs': 2 cats, then 4 dogs gives 2:4.",
                "hints": [
                  "Read the order carefully: cats are named first this time.",
                  "Count the cats, then count the dogs, and keep that order.",
                  "Put the 2 cats before the colon and the 4 dogs after it."
                ]
              },
              {
                "id": "ratio-ridge-u1-l1-p3",
                "type": "mc",
                "prompt": "In a box there are 6 red and 4 blue marbles. What is the ratio of blue to total marbles?",
                "choices": [
                  "4:10",
                  "6:10",
                  "4:6",
                  "10:4"
                ],
                "answer": "4:10",
                "explain": "There are 4 blue and 6+4 = 10 marbles in all, so blue to total is 4:10.",
                "hints": [
                  "First figure out how many marbles there are altogether.",
                  "Add red and blue to get the total, then compare blue to that total.",
                  "Total is 6 + 4 = 10, and blue is 4."
                ]
              },
              {
                "id": "ratio-ridge-u1-l1-p4",
                "type": "truefalse",
                "prompt": "True or False: The ratio 2 to 3 is the same as the ratio 3 to 2.",
                "answer": "false",
                "explain": "Order matters in ratios! 2 to 3 compares them differently than 3 to 2, so they are NOT the same.",
                "hints": [
                  "Think about whether the order of the numbers changes the meaning.",
                  "A ratio compares amounts in a specific order, like apples-to-oranges.",
                  "Imagine 2 cookies to 3 kids versus 3 cookies to 2 kids... different deal!"
                ]
              },
              {
                "id": "ratio-ridge-u1-l1-p5",
                "type": "input",
                "prompt": "A recipe uses 5 cups of flour for every 1 cup of sugar. What is the ratio of flour to sugar? Write as a:b.",
                "answer": "5:1",
                "accept": [
                  "5:1",
                  "5 to 1",
                  "5/1"
                ],
                "explain": "Flour to sugar means flour first: 5 cups flour to 1 cup sugar is 5:1.",
                "hints": [
                  "Which ingredient is named first in 'flour to sugar'?",
                  "List the flour amount, then the sugar amount.",
                  "Flour is 5 and sugar is 1, so write 5 before the colon."
                ]
              },
              {
                "id": "ratio-ridge-u1-l1-p6",
                "type": "mc",
                "prompt": "A class has 12 boys and 8 girls. What is the ratio of girls to boys?",
                "choices": [
                  "8:12",
                  "12:8",
                  "8:20",
                  "20:8"
                ],
                "answer": "8:12",
                "explain": "Girls first (8), then boys (12), so the ratio of girls to boys is 8:12.",
                "hints": [
                  "The word order tells you which number comes first.",
                  "Girls are mentioned first, so their count leads.",
                  "Write the 8 girls before the 12 boys."
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u1-l2",
            "title": "Equivalent Ratios",
            "icon": "⚖️",
            "intro": "Just like fractions, ratios can be equal even when the numbers look different. Let's find ratio twins!",
            "problems": [
              {
                "id": "ratio-ridge-u1-l2-p1",
                "type": "mc",
                "prompt": "Which ratio is equivalent to 1:2?",
                "choices": [
                  "2:4",
                  "2:1",
                  "1:3",
                  "3:4"
                ],
                "answer": "2:4",
                "explain": "Multiply both parts of 1:2 by 2 to get 2:4. Same comparison, bigger numbers!",
                "hints": [
                  "Try multiplying both numbers of 1:2 by the same value.",
                  "Equivalent ratios scale both parts by the same factor.",
                  "Multiply 1 by 2 and 2 by 2 to see what you get."
                ]
              },
              {
                "id": "ratio-ridge-u1-l2-p2",
                "type": "input",
                "prompt": "Fill in the blank: 3:4 = 6:___",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "3 was multiplied by 2 to get 6, so multiply 4 by 2 as well, giving 8.",
                "hints": [
                  "What did you multiply 3 by to get 6?",
                  "Whatever you do to the first number, do to the second.",
                  "3 times 2 is 6, so 4 times 2 is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l2-p3",
                "type": "truefalse",
                "prompt": "True or False: 4:6 is equivalent to 2:3.",
                "answer": "true",
                "explain": "Divide both parts of 4:6 by 2 and you get 2:3, so they are equivalent!",
                "hints": [
                  "Can you divide both numbers of 4:6 by the same value?",
                  "Simplify 4:6 by finding a common factor.",
                  "Both 4 and 6 can be divided by 2."
                ]
              },
              {
                "id": "ratio-ridge-u1-l2-p4",
                "type": "mc",
                "prompt": "Simplify the ratio 10:15 to its simplest form.",
                "choices": [
                  "2:3",
                  "5:3",
                  "10:15",
                  "3:2"
                ],
                "answer": "2:3",
                "explain": "Both 10 and 15 share the factor 5. Divide each by 5 to get 2:3.",
                "hints": [
                  "Find the biggest number that divides both 10 and 15.",
                  "The greatest common factor of 10 and 15 is 5.",
                  "10 divided by 5 is 2, and 15 divided by 5 is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l2-p5",
                "type": "input",
                "prompt": "Fill in the blank: 5:2 = ___:10",
                "answer": "25",
                "accept": [
                  "25",
                  "twenty-five",
                  "twenty five"
                ],
                "explain": "2 was multiplied by 5 to get 10, so multiply 5 by 5 as well, giving 25.",
                "hints": [
                  "What times 2 gives you 10?",
                  "Scale both parts by the same factor.",
                  "2 times 5 is 10, so 5 times 5 is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l2-p6",
                "type": "mc",
                "prompt": "Which ratio is NOT equivalent to 6:9?",
                "choices": [
                  "3:4",
                  "2:3",
                  "12:18",
                  "4:6"
                ],
                "answer": "3:4",
                "explain": "6:9 simplifies to 2:3. The pairs 2:3, 12:18, and 4:6 all equal 2:3, but 3:4 does not.",
                "hints": [
                  "First simplify 6:9 to its lowest terms.",
                  "Check each choice to see if it reduces to the same simplest ratio.",
                  "6:9 reduces to 2:3 — which choice does NOT reduce to 2:3?"
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u1-l3",
            "title": "Ratio Tables",
            "icon": "📋",
            "intro": "Ratio tables let us scale up step by step. Let's fill in the rungs of the ladder together!",
            "problems": [
              {
                "id": "ratio-ridge-u1-l3-p1",
                "type": "input",
                "prompt": "A table shows 2 tickets cost $6. How much do 4 tickets cost? (just the number)",
                "answer": "12",
                "accept": [
                  "12",
                  "$12",
                  "twelve"
                ],
                "explain": "Doubling the tickets from 2 to 4 means doubling the cost from $6 to $12.",
                "hints": [
                  "How many times bigger is 4 than 2?",
                  "Whatever you multiply tickets by, multiply the cost by too.",
                  "2 doubled is 4, so $6 doubled is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p2",
                "type": "mc",
                "prompt": "If 3 apples cost $1.50, how much do 9 apples cost?",
                "choices": [
                  "$4.50",
                  "$3.00",
                  "$6.00",
                  "$1.50"
                ],
                "answer": "$4.50",
                "explain": "9 apples is 3 times as many as 3 apples, so the cost is 3 times $1.50, which is $4.50.",
                "hints": [
                  "How many groups of 3 apples are in 9 apples?",
                  "Multiply the cost by the same factor you used for the apples.",
                  "9 is 3 times 3, so multiply $1.50 by 3."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p3",
                "type": "input",
                "prompt": "A ratio table has 4 cups water : 1 scoop mix. How many scoops for 12 cups of water?",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "12 cups is 3 times 4 cups, so you need 3 times 1 scoop, which is 3 scoops.",
                "hints": [
                  "How many times does 4 go into 12?",
                  "Scale the scoops by the same factor as the water.",
                  "12 divided by 4 is 3, so scoops = 1 times 3."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p4",
                "type": "mc",
                "prompt": "A car goes 50 miles on 2 gallons. How far on 6 gallons?",
                "choices": [
                  "150 miles",
                  "100 miles",
                  "300 miles",
                  "50 miles"
                ],
                "answer": "150 miles",
                "explain": "6 gallons is 3 times 2 gallons, so the distance is 3 times 50 miles, which is 150 miles.",
                "hints": [
                  "How many times bigger is 6 gallons than 2 gallons?",
                  "Multiply the miles by that same factor.",
                  "6 is 3 times 2, so multiply 50 by 3."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p5",
                "type": "input",
                "prompt": "Pencils come 5 for $2. How many dollars for 15 pencils? (just the number)",
                "answer": "6",
                "accept": [
                  "6",
                  "$6",
                  "six"
                ],
                "explain": "15 pencils is 3 times 5 pencils, so the cost is 3 times $2, which is $6.",
                "hints": [
                  "How many groups of 5 pencils make 15?",
                  "Scale the price up by the same factor as the pencils.",
                  "15 divided by 5 is 3, so $2 times 3 is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p6",
                "type": "mc",
                "prompt": "A table shows 6 students : 1 teacher. How many teachers are needed for 24 students?",
                "choices": [
                  "4",
                  "6",
                  "3",
                  "24"
                ],
                "answer": "4",
                "explain": "24 students is 4 times 6 students, so you need 4 times 1 teacher, which is 4 teachers.",
                "hints": [
                  "How many groups of 6 students are in 24?",
                  "Scale the teachers by the same factor as the students.",
                  "24 divided by 6 is 4, so teachers = 1 times 4."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ratio-ridge-u2",
        "title": "Rate Ravine",
        "icon": "🏞️",
        "lessons": [
          {
            "id": "ratio-ridge-u2-l1",
            "title": "Unit Rates",
            "icon": "🏃",
            "intro": "A unit rate tells us the amount for just ONE of something. It's the secret to comparing deals! Let's go.",
            "problems": [
              {
                "id": "ratio-ridge-u2-l1-p1",
                "type": "input",
                "prompt": "A runner goes 12 miles in 3 hours. What is the unit rate in miles per hour? (just the number)",
                "answer": "4",
                "accept": [
                  "4",
                  "four",
                  "4 mph"
                ],
                "explain": "Divide miles by hours: 12 / 3 = 4 miles per hour.",
                "hints": [
                  "A unit rate is the amount for exactly 1 hour.",
                  "Divide the total miles by the total hours.",
                  "12 divided by 3 gives the miles in one hour."
                ]
              },
              {
                "id": "ratio-ridge-u2-l1-p2",
                "type": "mc",
                "prompt": "8 oranges cost $4. What is the price per orange?",
                "choices": [
                  "$0.50",
                  "$2.00",
                  "$4.00",
                  "$8.00"
                ],
                "answer": "$0.50",
                "explain": "Divide cost by oranges: $4 / 8 = $0.50 per orange.",
                "hints": [
                  "You want the cost of just ONE orange.",
                  "Divide the total cost by the number of oranges.",
                  "4 divided by 8 equals 0.5."
                ]
              },
              {
                "id": "ratio-ridge-u2-l1-p3",
                "type": "input",
                "prompt": "A printer makes 90 pages in 5 minutes. How many pages per minute? (just the number)",
                "answer": "18",
                "accept": [
                  "18",
                  "eighteen"
                ],
                "explain": "Divide pages by minutes: 90 / 5 = 18 pages per minute.",
                "hints": [
                  "You want the pages printed in 1 minute.",
                  "Divide total pages by total minutes.",
                  "90 divided by 5 is..."
                ]
              },
              {
                "id": "ratio-ridge-u2-l1-p4",
                "type": "mc",
                "prompt": "Which is the better buy: 6 sodas for $3 or 10 sodas for $4?",
                "choices": [
                  "10 for $4",
                  "6 for $3",
                  "They cost the same per soda",
                  "Cannot tell"
                ],
                "answer": "10 for $4",
                "explain": "6 for $3 is $0.50 each; 10 for $4 is $0.40 each. The lower price per soda wins, so 10 for $4!",
                "hints": [
                  "Find the price of ONE soda for each deal.",
                  "Divide each price by its number of sodas, then compare.",
                  "3/6 = $0.50 each, and 4/10 = $0.40 each — which is cheaper?"
                ]
              },
              {
                "id": "ratio-ridge-u2-l1-p5",
                "type": "input",
                "prompt": "A faucet fills 20 liters in 4 minutes. What is the unit rate in liters per minute? (just the number)",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Divide liters by minutes: 20 / 4 = 5 liters per minute.",
                "hints": [
                  "You want the liters that fill in 1 minute.",
                  "Divide the total liters by the total minutes.",
                  "20 divided by 4 is..."
                ]
              },
              {
                "id": "ratio-ridge-u2-l1-p6",
                "type": "truefalse",
                "prompt": "True or False: A car driving 120 miles in 2 hours has a unit rate of 60 miles per hour.",
                "answer": "true",
                "explain": "120 miles / 2 hours = 60 miles per hour, so the statement is true!",
                "hints": [
                  "Find the miles driven in exactly 1 hour.",
                  "Divide the total miles by the total hours and compare to 60.",
                  "120 divided by 2 equals 60."
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u2-l2",
            "title": "Setting Up Proportions",
            "icon": "🟰",
            "intro": "A proportion says two ratios are equal. Once you can set one up, you can solve all kinds of puzzles!",
            "problems": [
              {
                "id": "ratio-ridge-u2-l2-p1",
                "type": "truefalse",
                "prompt": "True or False: 2/3 = 4/6 is a true proportion.",
                "answer": "true",
                "explain": "Cross-multiply: 2 x 6 = 12 and 3 x 4 = 12. Equal products mean it's a true proportion!",
                "hints": [
                  "Check if both fractions represent the same value.",
                  "Try cross-multiplying: top-left times bottom-right, and the other pair.",
                  "2 times 6 is 12, and 3 times 4 is also 12."
                ]
              },
              {
                "id": "ratio-ridge-u2-l2-p2",
                "type": "mc",
                "prompt": "Which equation correctly sets up 'If 3 pens cost $2, how much do 9 pens cost (c)?'",
                "choices": [
                  "3/2 = 9/c",
                  "3/2 = c/9",
                  "2/3 = 9/c",
                  "9/3 = 2/c"
                ],
                "answer": "3/2 = 9/c",
                "explain": "Keep pens over cost on both sides: 3 pens / $2 = 9 pens / c. The units line up correctly!",
                "hints": [
                  "Make sure pens match pens and cost matches cost across the equals sign.",
                  "Each ratio should have the same quantity on top and the same on bottom.",
                  "Put pens on top and dollars on the bottom for both ratios."
                ]
              },
              {
                "id": "ratio-ridge-u2-l2-p3",
                "type": "truefalse",
                "prompt": "True or False: 5/8 = 10/15 is a true proportion.",
                "answer": "false",
                "explain": "Cross-multiply: 5 x 15 = 75 but 8 x 10 = 80. Since 75 is not 80, it is NOT a true proportion.",
                "hints": [
                  "Cross-multiply and compare the two products.",
                  "Multiply 5 by 15 and 8 by 10 — are they equal?",
                  "5 times 15 is 75, but 8 times 10 is 80."
                ]
              },
              {
                "id": "ratio-ridge-u2-l2-p4",
                "type": "mc",
                "prompt": "Which pair of ratios forms a proportion?",
                "choices": [
                  "4/6 and 6/9",
                  "4/6 and 5/9",
                  "4/6 and 6/8",
                  "4/6 and 3/5"
                ],
                "answer": "4/6 and 6/9",
                "explain": "4/6 simplifies to 2/3 and 6/9 also simplifies to 2/3, so they form a proportion.",
                "hints": [
                  "Simplify each fraction and look for a match with 4/6.",
                  "4/6 reduces to 2/3 — which other ratio reduces to 2/3?",
                  "Try cross-multiplying 4/6 with each option to find equal products."
                ]
              },
              {
                "id": "ratio-ridge-u2-l2-p5",
                "type": "mc",
                "prompt": "To find x in 6/x = 2/5, what should you do first?",
                "choices": [
                  "Cross-multiply: 6 x 5 = 2 x x",
                  "Add 6 + 5",
                  "Subtract 2 from 6",
                  "Divide 6 by 2"
                ],
                "answer": "Cross-multiply: 6 x 5 = 2 x x",
                "explain": "Cross-multiplication turns a proportion into a simple equation: 6 x 5 = 2 times x.",
                "hints": [
                  "What technique turns two equal fractions into one equation?",
                  "Multiply across the diagonal of the proportion.",
                  "Multiply 6 by 5, and 2 by x, then set them equal."
                ]
              },
              {
                "id": "ratio-ridge-u2-l2-p6",
                "type": "truefalse",
                "prompt": "True or False: In a proportion a/b = c/d, the cross products a*d and b*c are always equal.",
                "answer": "true",
                "explain": "That's exactly what makes it a proportion! In any true proportion, a*d = b*c.",
                "hints": [
                  "Think about what 'cross-multiplying' a proportion gives you.",
                  "A proportion means the two ratios are truly equal.",
                  "Try it with 1/2 = 2/4: does 1*4 equal 2*2?"
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u2-l3",
            "title": "Solving Proportions",
            "icon": "🔑",
            "intro": "Now we solve for the missing piece! Cross-multiply, then divide, and the unknown reveals itself.",
            "problems": [
              {
                "id": "ratio-ridge-u2-l3-p1",
                "type": "input",
                "prompt": "Solve for x: x/4 = 6/8. (just the number)",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "Cross-multiply: 8x = 24, so x = 24/8 = 3.",
                "hints": [
                  "Cross-multiply to clear the fractions first.",
                  "8 times x equals 4 times 6.",
                  "8x = 24, so divide 24 by 8."
                ]
              },
              {
                "id": "ratio-ridge-u2-l3-p2",
                "type": "input",
                "prompt": "Solve for n: 3/5 = n/20. (just the number)",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve"
                ],
                "explain": "5 was multiplied by 4 to get 20, so n = 3 x 4 = 12. (Or cross-multiply: 5n = 60, n = 12.)",
                "hints": [
                  "What times 5 gives you 20?",
                  "Cross-multiply: 5 times n equals 3 times 20.",
                  "5n = 60, so n = 60 / 5."
                ]
              },
              {
                "id": "ratio-ridge-u2-l3-p3",
                "type": "mc",
                "prompt": "Solve for y: 7/y = 14/10.",
                "choices": [
                  "5",
                  "20",
                  "7",
                  "2"
                ],
                "answer": "5",
                "explain": "Cross-multiply: 14y = 70, so y = 70/14 = 5.",
                "hints": [
                  "Cross-multiply to make an equation.",
                  "14 times y equals 7 times 10.",
                  "14y = 70, so y = 70 / 14."
                ]
              },
              {
                "id": "ratio-ridge-u2-l3-p4",
                "type": "input",
                "prompt": "If 4 notebooks cost $10, how much do 10 notebooks cost? Set up 4/10 = 10/c and solve for c. (just the number)",
                "answer": "25",
                "accept": [
                  "25",
                  "$25",
                  "twenty-five",
                  "twenty five"
                ],
                "explain": "Cross-multiply: 4c = 100, so c = 100/4 = $25.",
                "hints": [
                  "Cross-multiply the proportion to get an equation.",
                  "4 times c equals 10 times 10.",
                  "4c = 100, so c = 100 / 4."
                ]
              },
              {
                "id": "ratio-ridge-u2-l3-p5",
                "type": "input",
                "prompt": "A map scale is 2 cm = 50 km. How many km is 6 cm? Solve 2/50 = 6/d. (just the number)",
                "answer": "150",
                "accept": [
                  "150",
                  "150 km",
                  "one hundred fifty"
                ],
                "explain": "Cross-multiply: 2d = 300, so d = 300/2 = 150 km.",
                "hints": [
                  "Set the cm-to-km ratios equal and cross-multiply.",
                  "2 times d equals 50 times 6.",
                  "2d = 300, so d = 300 / 2."
                ]
              },
              {
                "id": "ratio-ridge-u2-l3-p6",
                "type": "mc",
                "prompt": "Solve for x: 9/12 = x/4.",
                "choices": [
                  "3",
                  "4",
                  "6",
                  "9"
                ],
                "answer": "3",
                "explain": "Cross-multiply: 12x = 36, so x = 36/12 = 3.",
                "hints": [
                  "Cross-multiply to set up a simple equation.",
                  "12 times x equals 9 times 4.",
                  "12x = 36, so x = 36 / 12."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ratio-ridge-u3",
        "title": "Percent Peak",
        "icon": "🏔️",
        "lessons": [
          {
            "id": "ratio-ridge-u3-l1",
            "title": "Fractions, Decimals & Percents",
            "icon": "🔄",
            "intro": "Percents, decimals, and fractions are three costumes for the same number. Let's learn to switch between them!",
            "problems": [
              {
                "id": "ratio-ridge-u3-l1-p1",
                "type": "mc",
                "prompt": "What is 50% written as a decimal?",
                "choices": [
                  "0.5",
                  "5.0",
                  "0.05",
                  "50.0"
                ],
                "answer": "0.5",
                "explain": "Percent means 'out of 100,' so divide by 100: 50 / 100 = 0.5.",
                "hints": [
                  "To go from percent to decimal, divide by 100.",
                  "Dividing by 100 moves the decimal point two places left.",
                  "50 with the point moved two places left becomes 0.50."
                ]
              },
              {
                "id": "ratio-ridge-u3-l1-p2",
                "type": "input",
                "prompt": "Write 1/4 as a percent. (include the % sign or just the number)",
                "answer": "25%",
                "accept": [
                  "25%",
                  "25",
                  "25 percent",
                  "25 %"
                ],
                "explain": "1/4 = 0.25, and 0.25 x 100 = 25%, so one quarter is 25%.",
                "hints": [
                  "First turn the fraction into a decimal by dividing.",
                  "1 divided by 4 gives a decimal — then multiply by 100.",
                  "1/4 = 0.25, and 0.25 times 100 is..."
                ]
              },
              {
                "id": "ratio-ridge-u3-l1-p3",
                "type": "mc",
                "prompt": "What is 0.7 written as a percent?",
                "choices": [
                  "70%",
                  "7%",
                  "0.7%",
                  "700%"
                ],
                "answer": "70%",
                "explain": "To turn a decimal into a percent, multiply by 100: 0.7 x 100 = 70%.",
                "hints": [
                  "To go from decimal to percent, multiply by 100.",
                  "Multiplying by 100 moves the decimal two places right.",
                  "0.7 with the point moved two places right is 70."
                ]
              },
              {
                "id": "ratio-ridge-u3-l1-p4",
                "type": "input",
                "prompt": "Write 3/5 as a decimal.",
                "answer": "0.6",
                "accept": [
                  "0.6",
                  ".6",
                  "0.60",
                  ".60"
                ],
                "explain": "Divide 3 by 5 to get 0.6. (Or scale 3/5 to 6/10 = 0.6.)",
                "hints": [
                  "A fraction is a division: top divided by bottom.",
                  "Divide 3 by 5, or rewrite the fraction with a denominator of 10.",
                  "3/5 is the same as 6/10, which is..."
                ]
              },
              {
                "id": "ratio-ridge-u3-l1-p5",
                "type": "truefalse",
                "prompt": "True or False: 0.25, 1/4, and 25% all represent the same value.",
                "answer": "true",
                "explain": "They're three costumes for the same amount: 1/4 = 0.25 = 25%. All equal!",
                "hints": [
                  "Convert them all into the same form and compare.",
                  "Turn the fraction into a decimal and the percent into a decimal.",
                  "1/4 = 0.25, and 25% = 0.25 too."
                ]
              },
              {
                "id": "ratio-ridge-u3-l1-p6",
                "type": "mc",
                "prompt": "Which is the largest value?",
                "choices": [
                  "0.8",
                  "3/4",
                  "70%",
                  "0.65"
                ],
                "answer": "0.8",
                "explain": "Convert all to decimals: 0.8, 0.75, 0.70, 0.65. The biggest is 0.8!",
                "hints": [
                  "Put every value into the same form, like decimals.",
                  "3/4 = 0.75 and 70% = 0.70 — now compare with the decimals.",
                  "Line them up: 0.8, 0.75, 0.70, 0.65 and pick the highest."
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u3-l2",
            "title": "Percent of a Number",
            "icon": "🧮",
            "intro": "Finding a percent of a number is a superpower for tips, sales, and scores. Let's practice the magic!",
            "problems": [
              {
                "id": "ratio-ridge-u3-l2-p1",
                "type": "input",
                "prompt": "What is 10% of 80? (just the number)",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "10% means 0.1, and 0.1 x 80 = 8. (A quick trick: 10% is just moving the decimal one place left!)",
                "hints": [
                  "10% is the same as one tenth.",
                  "Multiply 80 by 0.1, or just find one tenth of 80.",
                  "One tenth of 80 means dividing 80 by 10."
                ]
              },
              {
                "id": "ratio-ridge-u3-l2-p2",
                "type": "mc",
                "prompt": "What is 25% of 40?",
                "choices": [
                  "10",
                  "15",
                  "25",
                  "100"
                ],
                "answer": "10",
                "explain": "25% is 1/4, and 1/4 of 40 = 40 / 4 = 10.",
                "hints": [
                  "25% is the same as one quarter.",
                  "Finding a quarter means dividing by 4.",
                  "40 divided by 4 is..."
                ]
              },
              {
                "id": "ratio-ridge-u3-l2-p3",
                "type": "input",
                "prompt": "What is 50% of 60? (just the number)",
                "answer": "30",
                "accept": [
                  "30",
                  "thirty"
                ],
                "explain": "50% is one half, and half of 60 is 30.",
                "hints": [
                  "50% means half of the number.",
                  "To find half, divide by 2.",
                  "60 divided by 2 is..."
                ]
              },
              {
                "id": "ratio-ridge-u3-l2-p4",
                "type": "mc",
                "prompt": "What is 20% of 150?",
                "choices": [
                  "30",
                  "20",
                  "75",
                  "300"
                ],
                "answer": "30",
                "explain": "20% is 0.2, and 0.2 x 150 = 30. (Or: 10% of 150 is 15, so 20% is double that, 30.)",
                "hints": [
                  "Find 10% first, then double it for 20%.",
                  "10% of 150 is 15 — what's twice that?",
                  "0.2 times 150 equals 30."
                ]
              },
              {
                "id": "ratio-ridge-u3-l2-p5",
                "type": "input",
                "prompt": "A $50 jacket has 30% off. How many dollars do you SAVE? (just the number)",
                "answer": "15",
                "accept": [
                  "15",
                  "$15",
                  "fifteen"
                ],
                "explain": "30% of $50 = 0.3 x 50 = $15 saved.",
                "hints": [
                  "You need 30% of the $50 price.",
                  "Multiply 50 by 0.3, or find 10% then triple it.",
                  "10% of 50 is 5, so 30% is 5 times 3."
                ]
              },
              {
                "id": "ratio-ridge-u3-l2-p6",
                "type": "mc",
                "prompt": "What is 15% of 200?",
                "choices": [
                  "30",
                  "15",
                  "20",
                  "35"
                ],
                "answer": "30",
                "explain": "10% of 200 is 20 and 5% is 10, so 15% = 20 + 10 = 30.",
                "hints": [
                  "Break 15% into 10% plus 5%.",
                  "10% of 200 is 20, and 5% is half of that.",
                  "20 + 10 gives the answer."
                ]
              }
            ]
          },
          {
            "id": "ratio-ridge-u3-l3",
            "title": "Percent Increase & Decrease",
            "icon": "📈",
            "intro": "Prices rise, prices fall — let's master how much things change as a percent. This is the summit, you've got this!",
            "problems": [
              {
                "id": "ratio-ridge-u3-l3-p1",
                "type": "input",
                "prompt": "A $20 shirt is now $25. What is the dollar amount of the increase? (just the number)",
                "answer": "5",
                "accept": [
                  "5",
                  "$5",
                  "five"
                ],
                "explain": "The increase is the new price minus the old price: 25 - 20 = $5.",
                "hints": [
                  "Increase means how much the price went UP.",
                  "Subtract the old price from the new price.",
                  "25 minus 20 equals..."
                ]
              },
              {
                "id": "ratio-ridge-u3-l3-p2",
                "type": "mc",
                "prompt": "A price rises from $20 to $25. What is the percent increase?",
                "choices": [
                  "25%",
                  "5%",
                  "20%",
                  "125%"
                ],
                "answer": "25%",
                "explain": "The change is $5. Percent increase = change / original = 5 / 20 = 0.25 = 25%.",
                "hints": [
                  "First find the dollar change, then compare it to the ORIGINAL price.",
                  "Percent change = (change) / (original amount) x 100.",
                  "The change is $5 and the original is $20, so 5/20 = ?"
                ]
              },
              {
                "id": "ratio-ridge-u3-l3-p3",
                "type": "mc",
                "prompt": "A $40 item is marked down to $30. What is the percent decrease?",
                "choices": [
                  "25%",
                  "10%",
                  "30%",
                  "75%"
                ],
                "answer": "25%",
                "explain": "The decrease is $10. Percent decrease = 10 / 40 = 0.25 = 25%.",
                "hints": [
                  "Find how many dollars the price dropped, then compare to the original.",
                  "Percent decrease = (drop) / (original price) x 100.",
                  "The drop is $10 and the original is $40, so 10/40 = ?"
                ]
              },
              {
                "id": "ratio-ridge-u3-l3-p4",
                "type": "input",
                "prompt": "A plant grows from 10 cm to 13 cm. What is the percent increase? (include % or just the number)",
                "answer": "30%",
                "accept": [
                  "30%",
                  "30",
                  "30 percent",
                  "30 %"
                ],
                "explain": "The growth is 3 cm. Percent increase = 3 / 10 = 0.3 = 30%.",
                "hints": [
                  "First find how many cm it grew.",
                  "Divide the growth by the original height, then make it a percent.",
                  "It grew 3 cm from 10 cm, so 3/10 = 0.3 = ?"
                ]
              },
              {
                "id": "ratio-ridge-u3-l3-p5",
                "type": "mc",
                "prompt": "A $60 game is 20% off. What is the SALE price?",
                "choices": [
                  "$48",
                  "$12",
                  "$40",
                  "$72"
                ],
                "answer": "$48",
                "explain": "20% of $60 is $12 off, so the sale price is 60 - 12 = $48.",
                "hints": [
                  "First find the discount amount, then subtract it from the price.",
                  "20% of $60 is the amount you save — take it off the original.",
                  "Save $12, so $60 - $12 = ?"
                ]
              },
              {
                "id": "ratio-ridge-u3-l3-p6",
                "type": "input",
                "prompt": "A $80 jacket is increased by 25%. What is the new price in dollars? (just the number)",
                "answer": "100",
                "accept": [
                  "100",
                  "$100",
                  "one hundred"
                ],
                "explain": "25% of $80 is $20 added on, so the new price is 80 + 20 = $100.",
                "hints": [
                  "Find the increase amount first, then add it to the original.",
                  "25% of $80 is the amount added — find it, then add.",
                  "25% of 80 is 20, so 80 + 20 = ?"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "integer-islands",
    "title": "Integer Islands",
    "subtitle": "Grades 6-7",
    "color": "#14B8A6",
    "icon": "🏝️",
    "blurb": "Sail a sea of positives and negatives where the tide pulls below zero and treasure hides on both sides of the map!",
    "units": [
      {
        "id": "integer-islands-u1",
        "title": "Below-Zero Bay",
        "lessons": [
          {
            "id": "integer-islands-u1-l1",
            "title": "Meet the Negatives",
            "icon": "🌡️",
            "intro": "Ahoy! Below zero is a whole hidden world. Numbers can dive beneath the waterline, and today we learn to read them. Let's wade in!",
            "problems": [
              {
                "id": "integer-islands-u1-l1-p1",
                "type": "mc",
                "prompt": "The temperature is 3 degrees below zero. Which number shows that? 🌡️",
                "choices": [
                  "3",
                  "-3",
                  "0",
                  "30"
                ],
                "answer": "-3",
                "explain": "Below zero means a negative number, so 3 below zero is written -3. The little dash tells us we dove under the waterline!",
                "hints": [
                  "The word 'below' is doing a lot of work here. What direction is that on the number line?",
                  "A number to the left of zero gets a minus sign in front of it.",
                  "Start with the 3, then add the sign that means 'below zero'..."
                ]
              },
              {
                "id": "integer-islands-u1-l1-p2",
                "type": "input",
                "prompt": "A submarine sits 5 meters below sea level. Write its height as an integer (sea level = 0).",
                "answer": "-5",
                "accept": [
                  "-5",
                  "−5",
                  "negative 5",
                  "neg 5",
                  "negative five"
                ],
                "explain": "Below sea level is negative, so 5 meters down is -5. You're thinking like a number-line navigator now!",
                "hints": [
                  "Sea level is our zero. Is the sub above it or below it?",
                  "Below zero always wears a minus sign.",
                  "Take the 5 and place the 'below' sign in front of it..."
                ]
              },
              {
                "id": "integer-islands-u1-l1-p3",
                "type": "truefalse",
                "prompt": "True or false: -7 is a negative number.",
                "answer": "true",
                "explain": "Yep! The minus sign in front of the 7 makes it negative. Any number to the left of zero is negative.",
                "hints": [
                  "Look at the sign sitting in front of the 7.",
                  "A minus sign in front means the number lives left of zero.",
                  "Negative numbers are exactly the ones with that little dash, so..."
                ]
              },
              {
                "id": "integer-islands-u1-l1-p4",
                "type": "mc",
                "prompt": "Which of these is NOT a negative number?",
                "choices": [
                  "-1",
                  "-100",
                  "8",
                  "-12"
                ],
                "answer": "8",
                "explain": "8 has no minus sign, so it's positive! All the others dove below zero, but 8 stayed up on dry land.",
                "hints": [
                  "Three of these share something in front. One doesn't.",
                  "Negative numbers always carry a minus sign. Which one is missing it?",
                  "Scan each number for the dash... which one is bare?"
                ]
              },
              {
                "id": "integer-islands-u1-l1-p5",
                "type": "input",
                "prompt": "You owe a friend 8 dollars. Write your money balance as an integer.",
                "answer": "-8",
                "accept": [
                  "-8",
                  "−8",
                  "negative 8",
                  "neg 8",
                  "negative eight"
                ],
                "explain": "Owing money is like being below zero, so a debt of 8 dollars is -8. Money you owe pulls your balance under!",
                "hints": [
                  "Owing is the money version of 'below zero'. Which direction is that?",
                  "A debt makes your balance negative.",
                  "Take the 8 you owe and give it the 'below' sign..."
                ]
              },
              {
                "id": "integer-islands-u1-l1-p6",
                "type": "mc",
                "prompt": "On a number line, which number is farthest to the LEFT?",
                "choices": [
                  "-2",
                  "-9",
                  "0",
                  "4"
                ],
                "answer": "-9",
                "explain": "The more negative a number is, the farther left it sits. -9 is deeper than -2, so it's the leftmost!",
                "hints": [
                  "Left on the number line means smaller. Which feels 'lowest'?",
                  "Among negatives, the bigger the number after the minus, the farther left it goes.",
                  "Compare -2 and -9... which one is deeper below zero?"
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u1-l2",
            "title": "Bigger or Smaller?",
            "icon": "⚖️",
            "intro": "On the number line, left is small and right is big. Negatives can be tricky: -1 is actually bigger than -10! Let's compare like pros.",
            "problems": [
              {
                "id": "integer-islands-u1-l2-p1",
                "type": "mc",
                "prompt": "Which symbol makes this true?   -3 __ 2",
                "choices": [
                  "<",
                  ">",
                  "=",
                  "none"
                ],
                "answer": "<",
                "explain": "-3 is to the left of 2 on the number line, so it's smaller: -3 < 2. Negatives are always less than positives!",
                "hints": [
                  "Picture both on a number line. Which one sits farther left?",
                  "Farther left means smaller, and smaller uses the < symbol.",
                  "-3 is left of 2, so -3 is the smaller one..."
                ]
              },
              {
                "id": "integer-islands-u1-l2-p2",
                "type": "mc",
                "prompt": "Which symbol makes this true?   -1 __ -8",
                "choices": [
                  "<",
                  ">",
                  "=",
                  "none"
                ],
                "answer": ">",
                "explain": "-1 sits to the RIGHT of -8 on the number line, so -1 is bigger: -1 > -8. Closer to zero means greater!",
                "hints": [
                  "Both are negative. The one closer to zero is the bigger one.",
                  "-1 is just one step below zero; -8 is way down deep. Which is greater?",
                  "Closer to zero wins, so -1 is greater than -8..."
                ]
              },
              {
                "id": "integer-islands-u1-l2-p3",
                "type": "truefalse",
                "prompt": "True or false:  -5 is greater than -2.",
                "answer": "false",
                "explain": "Nope! -2 is closer to zero, so -2 is the bigger one. -5 is actually smaller, so the statement is false.",
                "hints": [
                  "Closer to zero is greater. Which of these is closer to zero?",
                  "-2 is only two below zero; -5 is five below. Which is bigger?",
                  "Since -2 beats -5 in size, the claim that -5 is greater must be..."
                ]
              },
              {
                "id": "integer-islands-u1-l2-p4",
                "type": "mc",
                "prompt": "Which number is the SMALLEST?",
                "choices": [
                  "-4",
                  "-6",
                  "1",
                  "0"
                ],
                "answer": "-6",
                "explain": "-6 is farthest to the left on the number line, making it the smallest. The deepest negative always wins for 'smallest'!",
                "hints": [
                  "Smallest means farthest left. Which is the deepest negative?",
                  "Compare the two negatives first: -4 vs -6.",
                  "-6 is deeper below zero than -4, so among all four it's the..."
                ]
              },
              {
                "id": "integer-islands-u1-l2-p5",
                "type": "input",
                "prompt": "Order these from least to greatest, separated by commas:  3, -2, 0",
                "answer": "-2, 0, 3",
                "accept": [
                  "-2, 0, 3",
                  "-2,0,3",
                  "-2 0 3",
                  "−2, 0, 3"
                ],
                "explain": "Reading left to right on the number line: -2 (left of zero), then 0, then 3. Least to greatest, perfectly lined up!",
                "hints": [
                  "Think of walking along the number line from left to right.",
                  "The most negative goes first, then zero, then the positive.",
                  "Start with -2 since it's farthest left, then keep moving right..."
                ]
              },
              {
                "id": "integer-islands-u1-l2-p6",
                "type": "mc",
                "prompt": "On Monday it was -5 degrees, on Tuesday -1 degree. Which day was COLDER?",
                "choices": [
                  "Monday",
                  "Tuesday",
                  "Same",
                  "Can't tell"
                ],
                "answer": "Monday",
                "explain": "-5 is lower (more negative) than -1, so Monday was colder. The deeper below zero, the chillier it gets!",
                "hints": [
                  "Colder means a lower temperature. Which number is lower?",
                  "-5 is farther below zero than -1. Which feels colder?",
                  "Lower on the number line wins for 'colder', and -5 is lower..."
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u1-l3",
            "title": "Absolute Value Lagoon",
            "icon": "📏",
            "intro": "Absolute value asks: how far from zero are you, no matter the direction? It's all about distance, so the answer is never negative. Dive in!",
            "problems": [
              {
                "id": "integer-islands-u1-l3-p1",
                "type": "input",
                "prompt": "What is |6| ?",
                "answer": "6",
                "accept": [
                  "6",
                  "six"
                ],
                "explain": "6 is already 6 steps from zero, so |6| = 6. Absolute value just measures the distance!",
                "hints": [
                  "The bars ask: how far from zero is this number?",
                  "6 is six steps to the right of zero. How far is that?",
                  "Since 6 is already positive, its distance from zero is simply..."
                ]
              },
              {
                "id": "integer-islands-u1-l3-p2",
                "type": "input",
                "prompt": "What is |-9| ?",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "-9 is 9 steps from zero, so |-9| = 9. Distance is always positive, even for a negative number!",
                "hints": [
                  "Absolute value measures distance from zero, and distance is never negative.",
                  "Count the steps from -9 back to zero.",
                  "-9 is nine steps away, so the absolute value drops the sign and gives..."
                ]
              },
              {
                "id": "integer-islands-u1-l3-p3",
                "type": "truefalse",
                "prompt": "True or false:  |-4| = 4.",
                "answer": "true",
                "explain": "Correct! -4 is 4 steps from zero, so its absolute value is 4. The bars erase the minus sign.",
                "hints": [
                  "How far is -4 from zero?",
                  "Absolute value turns distance into a positive number.",
                  "-4 sits four steps from zero, so its absolute value is indeed..."
                ]
              },
              {
                "id": "integer-islands-u1-l3-p4",
                "type": "mc",
                "prompt": "Which has the GREATER absolute value:  -7 or 3 ?",
                "choices": [
                  "-7",
                  "3",
                  "Equal",
                  "Neither"
                ],
                "answer": "-7",
                "explain": "|-7| = 7 and |3| = 3. Since 7 > 3, -7 has the greater absolute value. It's farther from zero!",
                "hints": [
                  "Find the distance from zero for each, ignoring the signs.",
                  "|-7| is 7 and |3| is 3. Which distance is bigger?",
                  "7 beats 3, so the number that was 7 away from zero wins..."
                ]
              },
              {
                "id": "integer-islands-u1-l3-p5",
                "type": "mc",
                "prompt": "Which two numbers BOTH have an absolute value of 5?",
                "choices": [
                  "5 and 0",
                  "-5 and 5",
                  "5 and 10",
                  "-5 and -10"
                ],
                "answer": "-5 and 5",
                "explain": "Both -5 and 5 are exactly 5 steps from zero, so |-5| = |5| = 5. They're mirror images across zero!",
                "hints": [
                  "Two different numbers can be the same distance from zero, one on each side.",
                  "Think about which numbers are exactly 5 steps away from zero.",
                  "One is 5 steps right and one is 5 steps left of zero..."
                ]
              },
              {
                "id": "integer-islands-u1-l3-p6",
                "type": "input",
                "prompt": "A diver is at -12 meters. How far is she from sea level (0)? Give a positive number.",
                "answer": "12",
                "accept": [
                  "12",
                  "12 meters",
                  "12m",
                  "twelve"
                ],
                "explain": "Distance from zero is the absolute value: |-12| = 12 meters. She's 12 meters from the surface, no minus needed!",
                "hints": [
                  "Distance doesn't care about direction. How far is -12 from 0?",
                  "This is just |-12| in disguise.",
                  "-12 is twelve meters below the surface, so the distance is..."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "integer-islands-u2",
        "title": "Operation Atoll",
        "lessons": [
          {
            "id": "integer-islands-u2-l1",
            "title": "Adding & Subtracting",
            "icon": "➕",
            "intro": "Time to combine integers! Adding a negative is like sailing left; subtracting is like turning around. Let's chart the moves.",
            "problems": [
              {
                "id": "integer-islands-u2-l1-p1",
                "type": "input",
                "prompt": "What is  -3 + 5 ?",
                "answer": "2",
                "accept": [
                  "2",
                  "+2",
                  "two"
                ],
                "explain": "Start at -3 and move 5 steps right: you land on 2. The bigger positive pull won!",
                "hints": [
                  "Picture starting at -3 and walking 5 steps to the right.",
                  "Adding a positive moves you right on the number line.",
                  "From -3, step to -2, -1, 0, 1... where do you finish?"
                ]
              },
              {
                "id": "integer-islands-u2-l1-p2",
                "type": "input",
                "prompt": "What is  -4 + (-6) ?",
                "answer": "-10",
                "accept": [
                  "-10",
                  "−10",
                  "negative 10",
                  "neg 10",
                  "negative ten"
                ],
                "explain": "Two negatives stack up: -4 and -6 combine to -10. Both pull left, so you go deeper down!",
                "hints": [
                  "Adding a negative means moving further left.",
                  "Both numbers are negative, so their distances pile up. Add 4 and 6, then keep the sign.",
                  "4 + 6 is 10, and since both were below zero the answer is..."
                ]
              },
              {
                "id": "integer-islands-u2-l1-p3",
                "type": "input",
                "prompt": "What is  2 - 7 ?",
                "answer": "-5",
                "accept": [
                  "-5",
                  "−5",
                  "negative 5",
                  "neg 5",
                  "negative five"
                ],
                "explain": "Start at 2 and move 7 steps left: you pass zero and land on -5. Subtracting more than you have dips you below zero!",
                "hints": [
                  "Subtracting means moving left. Start at 2 and step back 7.",
                  "You'll cross zero, so the answer will be negative.",
                  "From 2, two steps reach 0, then five more steps left land on..."
                ]
              },
              {
                "id": "integer-islands-u2-l1-p4",
                "type": "mc",
                "prompt": "What is  -5 - 3 ?",
                "choices": [
                  "-2",
                  "-8",
                  "2",
                  "8"
                ],
                "answer": "-8",
                "explain": "Subtracting 3 from -5 moves you 3 more steps left, landing on -8. Going down from down means deeper down!",
                "hints": [
                  "You're already at -5. Subtracting moves you further left.",
                  "Both moves push you below zero, so think -5 then 3 more steps down.",
                  "5 below zero plus 3 more steps down equals..."
                ]
              },
              {
                "id": "integer-islands-u2-l1-p5",
                "type": "input",
                "prompt": "What is  8 + (-3) ?",
                "answer": "5",
                "accept": [
                  "5",
                  "+5",
                  "five"
                ],
                "explain": "Adding -3 is the same as subtracting 3: 8 - 3 = 5. A negative add pulls you back to the left a bit.",
                "hints": [
                  "Adding a negative is just like subtracting. What does 8 + (-3) become?",
                  "Rewrite it as 8 - 3.",
                  "Start at 8 and step back 3 to reach..."
                ]
              },
              {
                "id": "integer-islands-u2-l1-p6",
                "type": "input",
                "prompt": "What is  -6 - (-9) ?",
                "answer": "3",
                "accept": [
                  "3",
                  "+3",
                  "three"
                ],
                "explain": "Subtracting a negative flips to adding: -6 + 9 = 3. Two minuses in a row turn into a plus!",
                "hints": [
                  "Watch the double negative. Subtracting a negative does something surprising.",
                  "Minus a negative becomes plus, so -6 - (-9) turns into -6 + 9.",
                  "Now compute -6 + 9 by stepping 9 to the right from -6..."
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u2-l2",
            "title": "Multiply & Divide",
            "icon": "✖️",
            "intro": "Signs play a game now: same signs make a positive, different signs make a negative. Memorize that rule and you'll fly through these!",
            "problems": [
              {
                "id": "integer-islands-u2-l2-p1",
                "type": "input",
                "prompt": "What is  -4 * 3 ?",
                "answer": "-12",
                "accept": [
                  "-12",
                  "−12",
                  "negative 12",
                  "neg 12",
                  "negative twelve"
                ],
                "explain": "Different signs make a negative: 4 * 3 = 12, so -4 * 3 = -12. One negative flips the answer below zero!",
                "hints": [
                  "First multiply the numbers, then decide the sign.",
                  "Different signs (one negative, one positive) give a negative result.",
                  "4 times 3 is 12, and with mixed signs the answer is..."
                ]
              },
              {
                "id": "integer-islands-u2-l2-p2",
                "type": "input",
                "prompt": "What is  -5 * -2 ?",
                "answer": "10",
                "accept": [
                  "10",
                  "+10",
                  "ten"
                ],
                "explain": "Same signs make a positive: -5 * -2 = 10. Two negatives multiplied cancel into a positive!",
                "hints": [
                  "Multiply 5 and 2 first, then look at the signs.",
                  "Two negatives together make a positive product.",
                  "5 times 2 is 10, and same signs keep it..."
                ]
              },
              {
                "id": "integer-islands-u2-l2-p3",
                "type": "input",
                "prompt": "What is  -12 / 4 ?",
                "answer": "-3",
                "accept": [
                  "-3",
                  "−3",
                  "negative 3",
                  "neg 3",
                  "negative three"
                ],
                "explain": "Different signs make a negative: 12 / 4 = 3, so -12 / 4 = -3. The sign rule works for division too!",
                "hints": [
                  "Divide the numbers, then apply the sign rule.",
                  "A negative divided by a positive gives a negative.",
                  "12 divided by 4 is 3, and mixed signs make it..."
                ]
              },
              {
                "id": "integer-islands-u2-l2-p4",
                "type": "mc",
                "prompt": "What is  -20 / -5 ?",
                "choices": [
                  "-4",
                  "4",
                  "-100",
                  "100"
                ],
                "answer": "4",
                "explain": "Same signs make a positive: -20 / -5 = 4. Two negatives divide into a happy positive!",
                "hints": [
                  "Divide 20 by 5 first, then check the signs.",
                  "Negative divided by negative gives a positive.",
                  "20 divided by 5 is 4, and same signs keep it..."
                ]
              },
              {
                "id": "integer-islands-u2-l2-p5",
                "type": "truefalse",
                "prompt": "True or false:  A negative times a negative is always positive.",
                "answer": "true",
                "explain": "True! Same signs always make a positive product, and two negatives are the same sign. Sign rule confirmed!",
                "hints": [
                  "Recall the sign rule for multiplying.",
                  "Same signs make positive; two negatives are the same sign.",
                  "Since both factors share the negative sign, the product turns out..."
                ]
              },
              {
                "id": "integer-islands-u2-l2-p6",
                "type": "input",
                "prompt": "What is  -2 * -3 * -1 ?",
                "answer": "-6",
                "accept": [
                  "-6",
                  "−6",
                  "negative 6",
                  "neg 6",
                  "negative six"
                ],
                "explain": "Multiply step by step: -2 * -3 = 6, then 6 * -1 = -6. An odd number of negatives makes the answer negative!",
                "hints": [
                  "Multiply two at a time and track the sign as you go.",
                  "First -2 * -3 gives a positive 6. Now multiply that by -1.",
                  "6 times -1 flips the sign once more, landing on..."
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u2-l3",
            "title": "Mixed Integer Voyage",
            "icon": "🧭",
            "intro": "Now we mix every operation together! Read carefully, watch the signs, and take it one step at a time. You've got this, sailor!",
            "problems": [
              {
                "id": "integer-islands-u2-l3-p1",
                "type": "input",
                "prompt": "What is  -7 + 3 - 2 ?",
                "answer": "-6",
                "accept": [
                  "-6",
                  "−6",
                  "negative 6",
                  "neg 6",
                  "negative six"
                ],
                "explain": "Left to right: -7 + 3 = -4, then -4 - 2 = -6. Step through one operation at a time and you stay on course!",
                "hints": [
                  "Work left to right, one operation at a time.",
                  "First do -7 + 3, then subtract 2 from that result.",
                  "-7 + 3 is -4, and -4 - 2 lands you at..."
                ]
              },
              {
                "id": "integer-islands-u2-l3-p2",
                "type": "input",
                "prompt": "What is  -3 * 4 + 5 ?",
                "answer": "-7",
                "accept": [
                  "-7",
                  "−7",
                  "negative 7",
                  "neg 7",
                  "negative seven"
                ],
                "explain": "Multiply first: -3 * 4 = -12, then -12 + 5 = -7. Multiplication comes before addition!",
                "hints": [
                  "One of these operations gets done before the other. Which comes first?",
                  "Multiplication beats addition, so handle -3 * 4 first.",
                  "-3 * 4 is -12, and -12 + 5 gives..."
                ]
              },
              {
                "id": "integer-islands-u2-l3-p3",
                "type": "input",
                "prompt": "What is  10 / -2 + 1 ?",
                "answer": "-4",
                "accept": [
                  "-4",
                  "−4",
                  "negative 4",
                  "neg 4",
                  "negative four"
                ],
                "explain": "Divide first: 10 / -2 = -5, then -5 + 1 = -4. Division happens before addition!",
                "hints": [
                  "Division comes before addition here. Do the divide first.",
                  "10 / -2 has different signs, so it's negative. What is it?",
                  "10 / -2 is -5, and -5 + 1 brings you to..."
                ]
              },
              {
                "id": "integer-islands-u2-l3-p4",
                "type": "mc",
                "prompt": "What is  -8 - (-3) + (-2) ?",
                "choices": [
                  "-7",
                  "-3",
                  "-13",
                  "3"
                ],
                "answer": "-7",
                "explain": "Rewrite the double negatives: -8 + 3 - 2 = -7. Subtracting -3 adds 3, and adding -2 subtracts 2!",
                "hints": [
                  "Clean up the signs first: subtracting a negative and adding a negative.",
                  "-8 - (-3) becomes -8 + 3, and + (-2) becomes - 2.",
                  "So you have -8 + 3 - 2... work it left to right."
                ]
              },
              {
                "id": "integer-islands-u2-l3-p5",
                "type": "input",
                "prompt": "What is  -6 * 2 / -4 ?",
                "answer": "3",
                "accept": [
                  "3",
                  "+3",
                  "three"
                ],
                "explain": "Left to right: -6 * 2 = -12, then -12 / -4 = 3. The two negatives in the division make it positive!",
                "hints": [
                  "Multiply and divide left to right, tracking the sign.",
                  "First -6 * 2 gives -12. Now divide by -4.",
                  "-12 / -4 has same signs, so the answer is positive..."
                ]
              },
              {
                "id": "integer-islands-u2-l3-p6",
                "type": "truefalse",
                "prompt": "True or false:  -4 + 4 = 0.",
                "answer": "true",
                "explain": "True! -4 and 4 are opposites, so they cancel out to zero. Opposite integers always add to zero!",
                "hints": [
                  "What happens when you add a number and its opposite?",
                  "-4 pulls left 4, and +4 pulls right 4. Do they cancel?",
                  "Starting at -4 and moving 4 steps right lands you exactly on..."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "integer-islands-u3",
        "title": "Grid & Order Reef",
        "lessons": [
          {
            "id": "integer-islands-u3-l1",
            "title": "Plotting the Coordinate Plane",
            "icon": "🗺️",
            "intro": "The coordinate plane is a treasure map! Points are written (x, y): x is how far right or left, y is how far up or down. Let's map the reef!",
            "problems": [
              {
                "id": "integer-islands-u3-l1-p1",
                "type": "mc",
                "prompt": "In the point (4, 3), which number is the x-coordinate?",
                "choices": [
                  "4",
                  "3",
                  "7",
                  "0"
                ],
                "answer": "4",
                "explain": "The x-coordinate always comes first in (x, y), so it's 4. X tells you how far to move left or right!",
                "hints": [
                  "Coordinates are written in a set order: (x, y).",
                  "The very first number in the pair is the x-coordinate.",
                  "Reading (4, 3) left to right, the first number is..."
                ]
              },
              {
                "id": "integer-islands-u3-l1-p2",
                "type": "mc",
                "prompt": "To plot (-2, 5), which way do you move from the origin first?",
                "choices": [
                  "Right 2",
                  "Left 2",
                  "Up 2",
                  "Down 2"
                ],
                "answer": "Left 2",
                "explain": "The x-coordinate is -2, and negative x means move LEFT 2 steps. Then you'd go up 5 for the y-part!",
                "hints": [
                  "Start with the x-coordinate, which controls left/right.",
                  "A negative x means moving in which direction?",
                  "x is -2, and negatives go left, so you move..."
                ]
              },
              {
                "id": "integer-islands-u3-l1-p3",
                "type": "mc",
                "prompt": "Which quadrant has points where BOTH x and y are negative, like (-3, -4)?",
                "choices": [
                  "Quadrant I",
                  "Quadrant II",
                  "Quadrant III",
                  "Quadrant IV"
                ],
                "answer": "Quadrant III",
                "explain": "Both-negative points live in Quadrant III (bottom-left). Quadrants count counterclockwise starting from top-right!",
                "hints": [
                  "Negative x is to the left, negative y is downward. Picture that corner.",
                  "Both negative puts the point in the bottom-left region of the grid.",
                  "The bottom-left quadrant, counting counterclockwise from top-right, is the third one..."
                ]
              },
              {
                "id": "integer-islands-u3-l1-p4",
                "type": "truefalse",
                "prompt": "True or false:  The point (0, 0) is called the origin.",
                "answer": "true",
                "explain": "True! (0, 0) is the origin, the center where the x-axis and y-axis cross. Every journey on the grid starts here!",
                "hints": [
                  "Think about the special point where both axes meet.",
                  "It's the starting point at the very center of the grid.",
                  "The spot where x and y are both zero has a famous name..."
                ]
              },
              {
                "id": "integer-islands-u3-l1-p5",
                "type": "mc",
                "prompt": "A point on the x-axis, like (6, 0), always has what y-coordinate?",
                "choices": [
                  "6",
                  "0",
                  "1",
                  "-6"
                ],
                "answer": "0",
                "explain": "Any point on the x-axis has y = 0, because it hasn't moved up or down at all. It sits right on the line!",
                "hints": [
                  "Points on the x-axis don't go up or down at all.",
                  "No vertical movement means the y-coordinate is...?",
                  "If you never move up or down, your y value stays at..."
                ]
              },
              {
                "id": "integer-islands-u3-l1-p6",
                "type": "input",
                "prompt": "Start at the origin. Move right 3, then down 2. Write the point as (x, y).",
                "answer": "(3, -2)",
                "accept": [
                  "(3, -2)",
                  "(3,-2)",
                  "3, -2",
                  "3,-2",
                  "(3, −2)"
                ],
                "explain": "Right 3 gives x = 3, and down 2 gives y = -2 (down is negative), so the point is (3, -2). Nice navigating!",
                "hints": [
                  "Right/left sets your x, up/down sets your y.",
                  "Right 3 makes x = 3. Down 2 makes y negative.",
                  "x is 3 and down means y is -2, so write the pair..."
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u3-l2",
            "title": "Order of Operations (PEMDAS)",
            "icon": "🔢",
            "intro": "PEMDAS is the captain's rulebook: Parentheses, Exponents, Multiply/Divide, Add/Subtract. Follow the order and every answer falls into place!",
            "problems": [
              {
                "id": "integer-islands-u3-l2-p1",
                "type": "input",
                "prompt": "What is  2 + 3 * 4 ?",
                "answer": "14",
                "accept": [
                  "14",
                  "fourteen"
                ],
                "explain": "Multiply before adding: 3 * 4 = 12, then 2 + 12 = 14. PEMDAS puts multiplication ahead of addition!",
                "hints": [
                  "PEMDAS decides what to do first. Is it the adding or the multiplying?",
                  "Handle 3 * 4 before touching the + 2.",
                  "3 * 4 is 12, and 2 + 12 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l2-p2",
                "type": "input",
                "prompt": "What is  (5 - 8) * 2 ?",
                "answer": "-6",
                "accept": [
                  "-6",
                  "−6",
                  "negative 6",
                  "neg 6",
                  "negative six"
                ],
                "explain": "Parentheses first: 5 - 8 = -3, then -3 * 2 = -6. The parentheses always get priority!",
                "hints": [
                  "The P in PEMDAS comes first. What's inside the parentheses?",
                  "Solve 5 - 8 before multiplying by 2.",
                  "5 - 8 is -3, and -3 * 2 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l2-p3",
                "type": "input",
                "prompt": "What is  3^2 - 4 ?",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Exponent first: 3^2 = 9, then 9 - 4 = 5. The E in PEMDAS means exponents come before subtraction!",
                "hints": [
                  "Exponents come before subtraction in PEMDAS.",
                  "3^2 means 3 times 3. Compute that first.",
                  "3^2 is 9, and 9 - 4 leaves you with..."
                ]
              },
              {
                "id": "integer-islands-u3-l2-p4",
                "type": "mc",
                "prompt": "What is  10 - 2 * (1 + 2) ?",
                "choices": [
                  "4",
                  "24",
                  "-6",
                  "8"
                ],
                "answer": "4",
                "explain": "Parentheses: 1 + 2 = 3. Then multiply: 2 * 3 = 6. Then subtract: 10 - 6 = 4. PEMDAS, step by step!",
                "hints": [
                  "Start inside the parentheses, then handle the multiplication.",
                  "1 + 2 is 3, so it becomes 10 - 2 * 3.",
                  "2 * 3 is 6, and 10 - 6 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l2-p5",
                "type": "input",
                "prompt": "What is  -2 + 6 / 3 ?",
                "answer": "0",
                "accept": [
                  "0",
                  "zero"
                ],
                "explain": "Divide first: 6 / 3 = 2, then -2 + 2 = 0. Division comes before addition, and -2 and 2 cancel out!",
                "hints": [
                  "Division outranks addition in PEMDAS. Divide first.",
                  "6 / 3 is 2, so the problem becomes -2 + 2.",
                  "-2 and 2 are opposites, so adding them gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l2-p6",
                "type": "truefalse",
                "prompt": "True or false:  In PEMDAS, you always add before you multiply.",
                "answer": "false",
                "explain": "False! Multiplication comes BEFORE addition in PEMDAS. The M is ahead of the A in the order of operations.",
                "hints": [
                  "Recall the order: P, E, M/D, then A/S. Which comes first, M or A?",
                  "Multiplication sits ahead of addition in the rulebook.",
                  "Since multiply comes before add, the claim that you add first must be..."
                ]
              }
            ]
          },
          {
            "id": "integer-islands-u3-l3",
            "title": "The Captain's Final Challenge",
            "icon": "🏆",
            "intro": "Everything you've learned, all in one voyage! Negatives, absolute value, the grid, and PEMDAS. Show me your skills, Captain!",
            "problems": [
              {
                "id": "integer-islands-u3-l3-p1",
                "type": "input",
                "prompt": "What is  -3 * (2 - 5) ?",
                "answer": "9",
                "accept": [
                  "9",
                  "+9",
                  "nine"
                ],
                "explain": "Parentheses first: 2 - 5 = -3, then -3 * -3 = 9. Same signs make a positive, so the answer climbs above zero!",
                "hints": [
                  "Tackle the parentheses before multiplying.",
                  "2 - 5 is -3, so you now have -3 * -3.",
                  "Two negatives multiplied make a positive, and 3 * 3 is..."
                ]
              },
              {
                "id": "integer-islands-u3-l3-p2",
                "type": "input",
                "prompt": "What is  |-8| + (-3) ?",
                "answer": "5",
                "accept": [
                  "5",
                  "+5",
                  "five"
                ],
                "explain": "Absolute value first: |-8| = 8, then 8 + (-3) = 5. The bars make it positive 8, then we add negative 3!",
                "hints": [
                  "Resolve the absolute value before adding.",
                  "|-8| turns into 8. Now add -3 to it.",
                  "Adding -3 is like subtracting 3, so 8 - 3 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l3-p3",
                "type": "mc",
                "prompt": "What is  2^3 - 4 * 2 ?",
                "choices": [
                  "0",
                  "8",
                  "-8",
                  "12"
                ],
                "answer": "0",
                "explain": "Exponent first: 2^3 = 8. Then multiply: 4 * 2 = 8. Then subtract: 8 - 8 = 0. PEMDAS to the rescue!",
                "hints": [
                  "Do the exponent and the multiplication before subtracting.",
                  "2^3 is 8 and 4 * 2 is 8. Now what's left to do?",
                  "8 - 8 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l3-p4",
                "type": "input",
                "prompt": "A point is at (-5, 2). How far is it from the y-axis (use absolute value of x)?",
                "answer": "5",
                "accept": [
                  "5",
                  "5 units",
                  "five"
                ],
                "explain": "Distance from the y-axis is |x| = |-5| = 5. The point is 5 units to the left of the y-axis!",
                "hints": [
                  "Distance from the y-axis depends only on the x-coordinate.",
                  "Take the absolute value of the x-coordinate, which is -5.",
                  "|-5| measures how far left the point is, giving..."
                ]
              },
              {
                "id": "integer-islands-u3-l3-p5",
                "type": "mc",
                "prompt": "What is  -10 + 4 * (-2)^2 ?",
                "choices": [
                  "6",
                  "-26",
                  "-6",
                  "26"
                ],
                "answer": "6",
                "explain": "Exponent first: (-2)^2 = 4. Then multiply: 4 * 4 = 16. Then add: -10 + 16 = 6. Same-sign squaring makes 4 positive!",
                "hints": [
                  "Start with the exponent. Remember a negative squared becomes positive.",
                  "(-2)^2 is 4, so it becomes -10 + 4 * 4.",
                  "4 * 4 is 16, and -10 + 16 gives..."
                ]
              },
              {
                "id": "integer-islands-u3-l3-p6",
                "type": "input",
                "prompt": "What is  (6 - 9) * 2 + |-4| ?",
                "answer": "-2",
                "accept": [
                  "-2",
                  "−2",
                  "negative 2",
                  "neg 2",
                  "negative two"
                ],
                "explain": "Parentheses: 6 - 9 = -3. Multiply: -3 * 2 = -6. Absolute value: |-4| = 4. Add: -6 + 4 = -2. A full-voyage finish!",
                "hints": [
                  "Handle the parentheses and the absolute value, then combine.",
                  "6 - 9 is -3, and -3 * 2 is -6. Also |-4| is 4.",
                  "Now add -6 + 4 to reach your final answer..."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "algebra-archipelago",
    "title": "Algebra Archipelago",
    "subtitle": "Pre-Algebra & Algebra 1",
    "color": "#7C5CFC",
    "icon": "🧭",
    "blurb": "Set sail across mysterious islands where letters hide secret numbers and every equation is a treasure waiting to be unlocked!",
    "units": [
      {
        "id": "algebra-archipelago-u1",
        "title": "Expression Isle",
        "lessons": [
          {
            "id": "algebra-archipelago-u1-l1",
            "title": "Meet the Mystery Letters",
            "icon": "🔤",
            "intro": "Ahoy! On this island, letters like x and n are just sneaky stand-ins for numbers we don't know yet. Let's get to know these little mystery-keepers!",
            "problems": [
              {
                "id": "algebra-archipelago-u1-l1-p1",
                "type": "mc",
                "prompt": "In the expression x + 5, what is the variable (the mystery letter)?",
                "choices": [
                  "x",
                  "5",
                  "+",
                  "10"
                ],
                "answer": "x",
                "explain": "Nice eye! The variable is x — it's the letter standing in for a number we don't know yet.",
                "hints": [
                  "A variable is the part that's a letter, not a number.",
                  "Look for the symbol that isn't a plain number or a math sign.",
                  "Scan the expression: 5 is a number, + is an operation... so what's left?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l1-p2",
                "type": "truefalse",
                "prompt": "True or false: a variable always stands for the same single number every time you see it in math.",
                "answer": "false",
                "explain": "A variable can stand for different numbers in different problems — that's what makes it a flexible little mystery-keeper!",
                "hints": [
                  "Think about whether x always means one fixed number, or can change.",
                  "Could x be 3 in one problem and 100 in another?",
                  "Since a variable can take many values, the statement claiming it's always the same is..."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l1-p3",
                "type": "mc",
                "prompt": "Which of these is a 'constant' (a value that never changes)?",
                "choices": [
                  "7",
                  "y",
                  "n",
                  "a"
                ],
                "answer": "7",
                "explain": "Right! 7 is a constant — it's locked in and always equals 7. Letters can change, but 7 stays 7.",
                "hints": [
                  "A constant is a fixed number, not a changeable letter.",
                  "Three of these are letters that could be anything.",
                  "Which choice is a plain number you can count on to stay the same?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l1-p4",
                "type": "mc",
                "prompt": "In the term 3x, what number is the 'coefficient' (the number multiplying the variable)?",
                "choices": [
                  "3",
                  "x",
                  "3x",
                  "1"
                ],
                "answer": "3",
                "explain": "You got it! 3 is the coefficient — it tells us we have 3 of the variable x.",
                "hints": [
                  "The coefficient is the number sitting right in front of the variable.",
                  "In 3x, the 3 and the x are multiplied together.",
                  "Which part is the number doing the multiplying?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l1-p5",
                "type": "input",
                "prompt": "Write an expression for 'a number n increased by 8'. (Type it like n+8)",
                "answer": "n+8",
                "accept": [
                  "n+8",
                  "8+n",
                  "n + 8",
                  "8 + n"
                ],
                "explain": "Perfect! 'Increased by 8' means we add 8, so n + 8 captures it exactly.",
                "hints": [
                  "'Increased by' is a clue about which operation to use.",
                  "Increasing something means adding to it.",
                  "Start with the number n, then add 8 to it."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l1-p6",
                "type": "mc",
                "prompt": "How many TERMS are in the expression 4x + 7?",
                "choices": [
                  "2",
                  "1",
                  "3",
                  "4"
                ],
                "answer": "2",
                "explain": "Exactly! Terms are separated by + or - signs. Here 4x is one term and 7 is another — that's 2 terms.",
                "hints": [
                  "Terms are the chunks separated by + and - signs.",
                  "The + sign splits this expression into pieces — count the pieces.",
                  "One piece is 4x, and on the other side of the + is 7."
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u1-l2",
            "title": "Plug It In",
            "icon": "🔌",
            "intro": "Time to be a number detective! When we know what the mystery letter equals, we 'plug it in' and find the value of the whole expression.",
            "problems": [
              {
                "id": "algebra-archipelago-u1-l2-p1",
                "type": "input",
                "prompt": "Evaluate x + 6 when x = 4.",
                "answer": "10",
                "accept": [
                  "10",
                  "ten"
                ],
                "explain": "Spot on! Replace x with 4 to get 4 + 6, which is 10.",
                "hints": [
                  "Swap the letter x for the number it equals.",
                  "The expression becomes 4 + 6 once you plug in.",
                  "Now just add: 4 + 6 = ?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l2-p2",
                "type": "input",
                "prompt": "Evaluate 3n when n = 5.",
                "answer": "15",
                "accept": [
                  "15",
                  "fifteen"
                ],
                "explain": "Yes! 3n means 3 times n, so 3 * 5 = 15.",
                "hints": [
                  "Remember, 3n is a sneaky way of writing 3 times n.",
                  "Replace n with 5 to get 3 * 5.",
                  "Multiply: 3 groups of 5 makes...?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l2-p3",
                "type": "mc",
                "prompt": "Evaluate 2x + 1 when x = 3.",
                "choices": [
                  "7",
                  "6",
                  "9",
                  "5"
                ],
                "answer": "7",
                "explain": "Nice work! 2 * 3 = 6, then 6 + 1 = 7.",
                "hints": [
                  "Do the multiplication part (2x) before you add the 1.",
                  "Plug in x = 3 to get 2 * 3 + 1.",
                  "First find 2 * 3, then add 1 to that result."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l2-p4",
                "type": "input",
                "prompt": "Evaluate 10 - a when a = 7.",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "Correct! Plug in a = 7 to get 10 - 7 = 3.",
                "hints": [
                  "Replace the letter a with 7.",
                  "The expression turns into 10 - 7.",
                  "Subtract 7 from 10."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l2-p5",
                "type": "input",
                "prompt": "Evaluate x^2 when x = 4. (x^2 means x times x)",
                "answer": "16",
                "accept": [
                  "16",
                  "sixteen"
                ],
                "explain": "Boom! x^2 means 4 * 4, and that equals 16.",
                "hints": [
                  "The little 2 means multiply the number by itself.",
                  "Plug in 4 to get 4 * 4.",
                  "Four fours... think 4 * 4."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l2-p6",
                "type": "mc",
                "prompt": "Evaluate 4(b + 2) when b = 1.",
                "choices": [
                  "12",
                  "8",
                  "6",
                  "9"
                ],
                "answer": "12",
                "explain": "Great! Inside the parentheses first: 1 + 2 = 3, then 4 * 3 = 12.",
                "hints": [
                  "Tackle whatever is inside the parentheses first.",
                  "With b = 1, the inside becomes 1 + 2 = 3.",
                  "Now multiply that 3 by the 4 outside."
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u1-l3",
            "title": "Gather Your Like Terms",
            "icon": "🧺",
            "intro": "On this beach we sort our treasure! Terms that share the same letter are 'like terms' and can be combined — but x's and y's stay in separate piles.",
            "problems": [
              {
                "id": "algebra-archipelago-u1-l3-p1",
                "type": "input",
                "prompt": "Combine like terms: 2x + 3x",
                "answer": "5x",
                "accept": [
                  "5x",
                  "5*x",
                  "5 x"
                ],
                "explain": "Yes! 2 x's plus 3 x's makes 5 x's, so 2x + 3x = 5x.",
                "hints": [
                  "Both terms have the same letter, so they can join up.",
                  "Add the coefficients: 2 + 3, and keep the x.",
                  "2 + 3 = 5, so the answer is 5 of the x."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l3-p2",
                "type": "mc",
                "prompt": "Which two terms are 'like terms'?",
                "choices": [
                  "5y and 2y",
                  "5y and 2x",
                  "5 and 2x",
                  "5x and 2"
                ],
                "answer": "5y and 2y",
                "explain": "Right! Like terms share the exact same variable. 5y and 2y both have y, so they match.",
                "hints": [
                  "Like terms must have the same letter part.",
                  "Look for the pair where both terms use the very same variable.",
                  "Which choice has y in both terms?"
                ]
              },
              {
                "id": "algebra-archipelago-u1-l3-p3",
                "type": "input",
                "prompt": "Combine like terms: 7a - 4a",
                "answer": "3a",
                "accept": [
                  "3a",
                  "3*a",
                  "3 a"
                ],
                "explain": "Nice! 7 a's minus 4 a's leaves 3 a's, so 7a - 4a = 3a.",
                "hints": [
                  "These are like terms, so subtract their coefficients.",
                  "Compute 7 - 4 and keep the a.",
                  "7 - 4 = 3, so you have 3 of the a."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l3-p4",
                "type": "mc",
                "prompt": "Simplify: 3x + 2 + 5x",
                "choices": [
                  "8x + 2",
                  "10x",
                  "8x",
                  "5x + 2"
                ],
                "answer": "8x + 2",
                "explain": "Great sorting! Combine the x's: 3x + 5x = 8x. The 2 has no x to join, so it stays: 8x + 2.",
                "hints": [
                  "Put the x-terms in one pile and the plain numbers in another.",
                  "Add 3x and 5x together; leave the lonely 2 alone.",
                  "3x + 5x = 8x, then bring along the + 2."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l3-p5",
                "type": "input",
                "prompt": "Combine like terms: 6n + n",
                "answer": "7n",
                "accept": [
                  "7n",
                  "7*n",
                  "7 n"
                ],
                "explain": "Exactly! A lone n counts as 1n, so 6n + 1n = 7n.",
                "hints": [
                  "A single n by itself secretly means 1n.",
                  "Add the coefficients: 6 + 1.",
                  "6 + 1 = 7, so the answer is 7 of the n."
                ]
              },
              {
                "id": "algebra-archipelago-u1-l3-p6",
                "type": "mc",
                "prompt": "Simplify: 4y + 3 - y + 5",
                "choices": [
                  "3y + 8",
                  "5y + 8",
                  "3y + 2",
                  "7y"
                ],
                "answer": "3y + 8",
                "explain": "Well done! The y's: 4y - y = 3y. The numbers: 3 + 5 = 8. Together that's 3y + 8.",
                "hints": [
                  "Sort into two piles: the y-terms and the plain numbers.",
                  "y-terms: 4y - y. Numbers: 3 + 5.",
                  "4y - 1y = 3y, and 3 + 5 = 8 — now combine them."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "algebra-archipelago-u2",
        "title": "Equation Cove",
        "lessons": [
          {
            "id": "algebra-archipelago-u2-l1",
            "title": "Spread It Around",
            "icon": "🎁",
            "intro": "The distributive property is like handing out gifts: the number outside the parentheses gets multiplied with EVERY term inside. Nobody gets left out!",
            "problems": [
              {
                "id": "algebra-archipelago-u2-l1-p1",
                "type": "mc",
                "prompt": "Distribute: 2(x + 3)",
                "choices": [
                  "2x + 6",
                  "2x + 3",
                  "x + 6",
                  "2x + 5"
                ],
                "answer": "2x + 6",
                "explain": "Perfect! 2 times x is 2x, and 2 times 3 is 6. So 2(x + 3) = 2x + 6.",
                "hints": [
                  "The 2 outside must multiply BOTH things inside the parentheses.",
                  "Multiply 2 by x, then multiply 2 by 3.",
                  "2 * x = 2x and 2 * 3 = 6 — put them together."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l1-p2",
                "type": "mc",
                "prompt": "Distribute: 5(a - 2)",
                "choices": [
                  "5a - 10",
                  "5a - 2",
                  "5a - 7",
                  "a - 10"
                ],
                "answer": "5a - 10",
                "explain": "Yes! 5 times a is 5a, and 5 times 2 is 10. Keep the minus sign: 5a - 10.",
                "hints": [
                  "Hand the 5 to both the a and the 2.",
                  "Multiply 5 * a and 5 * 2, keeping the subtraction.",
                  "5 * a = 5a and 5 * 2 = 10, so it's 5a - 10."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l1-p3",
                "type": "input",
                "prompt": "Distribute and simplify: 3(2x). Type your answer like 6x.",
                "answer": "6x",
                "accept": [
                  "6x",
                  "6*x",
                  "6 x"
                ],
                "explain": "Nice! 3 times 2x means multiply the numbers: 3 * 2 = 6, giving 6x.",
                "hints": [
                  "Multiply the outside number by the coefficient inside.",
                  "3 times 2 gives the new coefficient; the x stays.",
                  "3 * 2 = 6, so the result is 6x."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l1-p4",
                "type": "mc",
                "prompt": "Distribute: 4(x + 2y)",
                "choices": [
                  "4x + 8y",
                  "4x + 2y",
                  "4x + 8",
                  "8xy"
                ],
                "answer": "4x + 8y",
                "explain": "Great! 4 * x = 4x and 4 * 2y = 8y. Each term inside gets multiplied: 4x + 8y.",
                "hints": [
                  "There are two terms inside — both get multiplied by 4.",
                  "Find 4 * x and 4 * 2y separately.",
                  "4 * x = 4x and 4 * 2y = 8y."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l1-p5",
                "type": "mc",
                "prompt": "Distribute the negative: -(x + 4)",
                "choices": [
                  "-x - 4",
                  "-x + 4",
                  "x - 4",
                  "-x + 4y"
                ],
                "answer": "-x - 4",
                "explain": "Sharp! A minus in front is like multiplying by -1, flipping both signs: -x - 4.",
                "hints": [
                  "The minus sign out front acts like multiplying by -1.",
                  "Multiplying by -1 flips the sign of every term inside.",
                  "x becomes -x, and +4 becomes -4."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l1-p6",
                "type": "mc",
                "prompt": "Distribute then combine: 2(x + 1) + 3x",
                "choices": [
                  "5x + 2",
                  "5x + 1",
                  "6x + 2",
                  "2x + 5"
                ],
                "answer": "5x + 2",
                "explain": "Excellent! First 2(x + 1) = 2x + 2. Then add 3x: 2x + 3x = 5x, leaving 5x + 2.",
                "hints": [
                  "Distribute the 2 first, then look for like terms.",
                  "2(x + 1) becomes 2x + 2; now you also have a +3x.",
                  "Combine 2x + 3x = 5x, and keep the +2."
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u2-l2",
            "title": "One Move to Solve",
            "icon": "🗝️",
            "intro": "An equation is a balance scale. To free the variable, do ONE opposite move to both sides — and keep it balanced!",
            "problems": [
              {
                "id": "algebra-archipelago-u2-l2-p1",
                "type": "input",
                "prompt": "Solve for x: x + 5 = 12",
                "answer": "7",
                "accept": [
                  "7",
                  "x=7",
                  "x = 7",
                  "seven"
                ],
                "explain": "Got it! To undo + 5, subtract 5 from both sides: 12 - 5 = 7.",
                "hints": [
                  "Something is being added to x — do the opposite to undo it.",
                  "Subtract 5 from both sides to get x alone.",
                  "12 - 5 leaves x equal to...?"
                ]
              },
              {
                "id": "algebra-archipelago-u2-l2-p2",
                "type": "input",
                "prompt": "Solve for x: x - 3 = 8",
                "answer": "11",
                "accept": [
                  "11",
                  "x=11",
                  "x = 11",
                  "eleven"
                ],
                "explain": "Yes! The opposite of subtracting 3 is adding 3: 8 + 3 = 11.",
                "hints": [
                  "3 is being subtracted from x — undo it with the opposite operation.",
                  "Add 3 to both sides.",
                  "8 + 3 gives x."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l2-p3",
                "type": "input",
                "prompt": "Solve for x: 4x = 20",
                "answer": "5",
                "accept": [
                  "5",
                  "x=5",
                  "x = 5",
                  "five"
                ],
                "explain": "Nice! x is multiplied by 4, so divide both sides by 4: 20 / 4 = 5.",
                "hints": [
                  "x is being multiplied by 4 — the opposite of multiply is divide.",
                  "Divide both sides by 4.",
                  "20 / 4 = ?"
                ]
              },
              {
                "id": "algebra-archipelago-u2-l2-p4",
                "type": "input",
                "prompt": "Solve for x: x / 2 = 6",
                "answer": "12",
                "accept": [
                  "12",
                  "x=12",
                  "x = 12",
                  "twelve"
                ],
                "explain": "Correct! x is divided by 2, so multiply both sides by 2: 6 * 2 = 12.",
                "hints": [
                  "x is being divided by 2 — undo division with multiplication.",
                  "Multiply both sides by 2.",
                  "6 * 2 = ?"
                ]
              },
              {
                "id": "algebra-archipelago-u2-l2-p5",
                "type": "mc",
                "prompt": "Solve for n: n + 9 = 9",
                "choices": [
                  "0",
                  "9",
                  "18",
                  "1"
                ],
                "answer": "0",
                "explain": "Tricky one! Subtract 9 from both sides: 9 - 9 = 0. So n = 0.",
                "hints": [
                  "Undo the + 9 by subtracting 9 from both sides.",
                  "The right side becomes 9 - 9.",
                  "9 - 9 equals what number?"
                ]
              },
              {
                "id": "algebra-archipelago-u2-l2-p6",
                "type": "input",
                "prompt": "Solve for x: 7x = 0",
                "answer": "0",
                "accept": [
                  "0",
                  "x=0",
                  "x = 0",
                  "zero"
                ],
                "explain": "You nailed it! Divide both sides by 7: 0 / 7 = 0. Any number times 0 is 0.",
                "hints": [
                  "Divide both sides by 7 to free x.",
                  "The right side is 0 divided by 7.",
                  "0 divided by any number is still 0."
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u2-l3",
            "title": "Two-Step Treasure Hunt",
            "icon": "🪜",
            "intro": "Some equations need two moves. Undo the adding/subtracting first, THEN the multiplying/dividing — like climbing down a ladder in order.",
            "problems": [
              {
                "id": "algebra-archipelago-u2-l3-p1",
                "type": "input",
                "prompt": "Solve for x: 2x + 3 = 11",
                "answer": "4",
                "accept": [
                  "4",
                  "x=4",
                  "x = 4",
                  "four"
                ],
                "explain": "Great climb! Subtract 3: 2x = 8. Then divide by 2: x = 4.",
                "hints": [
                  "Deal with the + 3 first, then the 2 that's multiplying x.",
                  "Subtract 3 from both sides to get 2x = 8.",
                  "Now divide 8 by 2 to find x."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l3-p2",
                "type": "input",
                "prompt": "Solve for x: 3x - 4 = 11",
                "answer": "5",
                "accept": [
                  "5",
                  "x=5",
                  "x = 5",
                  "five"
                ],
                "explain": "Yes! Add 4: 3x = 15. Then divide by 3: x = 5.",
                "hints": [
                  "Undo the - 4 first, then handle the 3.",
                  "Add 4 to both sides to get 3x = 15.",
                  "Divide 15 by 3."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l3-p3",
                "type": "input",
                "prompt": "Solve for x: 5x + 2 = 17",
                "answer": "3",
                "accept": [
                  "3",
                  "x=3",
                  "x = 3",
                  "three"
                ],
                "explain": "Perfect! Subtract 2: 5x = 15. Then divide by 5: x = 3.",
                "hints": [
                  "Get rid of the + 2 before touching the 5.",
                  "Subtract 2 from both sides: 5x = 15.",
                  "Now 15 / 5 gives x."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l3-p4",
                "type": "mc",
                "prompt": "Solve for x: x/3 + 1 = 4",
                "choices": [
                  "9",
                  "3",
                  "12",
                  "15"
                ],
                "answer": "9",
                "explain": "Sharp! Subtract 1: x/3 = 3. Then multiply by 3: x = 9.",
                "hints": [
                  "Subtract the + 1 first, then undo the divide-by-3.",
                  "Subtracting 1 gives x/3 = 3.",
                  "Multiply both sides by 3: 3 * 3 = ?"
                ]
              },
              {
                "id": "algebra-archipelago-u2-l3-p5",
                "type": "input",
                "prompt": "Solve for x: 2x - 7 = 1",
                "answer": "4",
                "accept": [
                  "4",
                  "x=4",
                  "x = 4",
                  "four"
                ],
                "explain": "Nice work! Add 7: 2x = 8. Then divide by 2: x = 4.",
                "hints": [
                  "Add 7 to both sides first.",
                  "That gives 2x = 8.",
                  "Divide 8 by 2 to finish."
                ]
              },
              {
                "id": "algebra-archipelago-u2-l3-p6",
                "type": "input",
                "prompt": "Solve for x: 4(x + 1) = 16",
                "answer": "3",
                "accept": [
                  "3",
                  "x=3",
                  "x = 3",
                  "three"
                ],
                "explain": "Treasure found! Divide by 4: x + 1 = 4. Then subtract 1: x = 3. (Or distribute first — same answer!)",
                "hints": [
                  "You can divide both sides by 4 to undo the outside multiply first.",
                  "Dividing by 4 gives x + 1 = 4.",
                  "Now subtract 1 from both sides."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "algebra-archipelago-u3",
        "title": "Linear Lagoon",
        "lessons": [
          {
            "id": "algebra-archipelago-u3-l1",
            "title": "Words Into Math",
            "icon": "📜",
            "intro": "Every word problem is a secret message! Let's learn to translate phrases like 'more than' and 'product of' into clean math equations.",
            "problems": [
              {
                "id": "algebra-archipelago-u3-l1-p1",
                "type": "input",
                "prompt": "Translate: 'a number x plus 7'. Type it like x+7.",
                "answer": "x+7",
                "accept": [
                  "x+7",
                  "7+x",
                  "x + 7",
                  "7 + x"
                ],
                "explain": "Yes! 'Plus' signals addition, so it's simply x + 7.",
                "hints": [
                  "The word 'plus' points to one specific operation.",
                  "Plus means add.",
                  "Take x and add 7 to it."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l1-p2",
                "type": "mc",
                "prompt": "Translate: 'three times a number n'.",
                "choices": [
                  "3n",
                  "n + 3",
                  "n - 3",
                  "n/3"
                ],
                "answer": "3n",
                "explain": "Right! 'Times' means multiply, and 3 times n is written 3n.",
                "hints": [
                  "The word 'times' tells you the operation.",
                  "Times means multiply.",
                  "3 multiplied by n is written without a sign: 3n."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l1-p3",
                "type": "mc",
                "prompt": "Translate: '5 less than a number x'.",
                "choices": [
                  "x - 5",
                  "5 - x",
                  "x + 5",
                  "5x"
                ],
                "answer": "x - 5",
                "explain": "Careful one! '5 less than x' means start with x and take away 5: x - 5 (not 5 - x).",
                "hints": [
                  "'Less than' means subtraction, but the order matters!",
                  "'5 less than x' means you begin with x and remove 5.",
                  "Write the x first, then subtract 5."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l1-p4",
                "type": "mc",
                "prompt": "Translate into an equation: 'A number x doubled equals 14.'",
                "choices": [
                  "2x = 14",
                  "x + 2 = 14",
                  "x/2 = 14",
                  "x - 2 = 14"
                ],
                "answer": "2x = 14",
                "explain": "Great! 'Doubled' means times 2, and 'equals 14' gives us 2x = 14.",
                "hints": [
                  "'Doubled' is a clue about multiplying.",
                  "Doubling a number means multiplying it by 2.",
                  "Write 2 times x, then set it equal to 14."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l1-p5",
                "type": "mc",
                "prompt": "Translate: 'the sum of a number n and 4, then multiplied by 2'.",
                "choices": [
                  "2(n + 4)",
                  "2n + 4",
                  "n + 4 * 2",
                  "2n + 8 only"
                ],
                "answer": "2(n + 4)",
                "explain": "Excellent! 'Sum of n and 4' is (n + 4), and multiplying that whole sum by 2 needs parentheses: 2(n + 4).",
                "hints": [
                  "Find the 'sum' part first, then see what happens to the WHOLE sum.",
                  "The sum of n and 4 is (n + 4) — keep it grouped.",
                  "Multiplying the entire group by 2 means putting it in parentheses."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l1-p6",
                "type": "input",
                "prompt": "A number x increased by 6 equals 15. Solve for x.",
                "answer": "9",
                "accept": [
                  "9",
                  "x=9",
                  "x = 9",
                  "nine"
                ],
                "explain": "Two skills at once! The equation is x + 6 = 15, so subtract 6: x = 9.",
                "hints": [
                  "First translate the words into an equation with x.",
                  "'Increased by 6 equals 15' becomes x + 6 = 15.",
                  "Subtract 6 from both sides: 15 - 6 = ?"
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u3-l2",
            "title": "Greater, Lesser, Solved",
            "icon": "⚖️",
            "intro": "Inequalities are like equations with attitude — instead of 'equals', they say 'bigger than' or 'smaller than'. Solve them almost the same way!",
            "problems": [
              {
                "id": "algebra-archipelago-u3-l2-p1",
                "type": "mc",
                "prompt": "Which symbol means 'greater than'?",
                "choices": [
                  ">",
                  "<",
                  "=",
                  "+"
                ],
                "answer": ">",
                "explain": "Yes! The > symbol opens toward the bigger value, so it means 'greater than'.",
                "hints": [
                  "Think about which way the symbol's open side faces.",
                  "The wide-open end points at the larger number.",
                  "Greater than uses the symbol whose open mouth faces left, toward the bigger value."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l2-p2",
                "type": "truefalse",
                "prompt": "True or false: the inequality 5 > 3 is correct.",
                "answer": "true",
                "explain": "True! 5 really is greater than 3, so 5 > 3 is a correct statement.",
                "hints": [
                  "Read it as '5 is greater than 3'.",
                  "Ask yourself: is 5 actually bigger than 3?",
                  "Since 5 is indeed larger than 3, the statement is..."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l2-p3",
                "type": "mc",
                "prompt": "Solve the inequality: x + 2 > 5",
                "choices": [
                  "x > 3",
                  "x > 7",
                  "x < 3",
                  "x > 5"
                ],
                "answer": "x > 3",
                "explain": "Nice! Subtract 2 from both sides, keeping the > sign: x > 3.",
                "hints": [
                  "Solve it like an equation — subtract 2 from both sides.",
                  "Adding nothing tricky here, so the > sign stays the same.",
                  "5 - 2 = 3, so x > 3."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l2-p4",
                "type": "mc",
                "prompt": "Solve the inequality: 3x < 12",
                "choices": [
                  "x < 4",
                  "x < 9",
                  "x < 36",
                  "x > 4"
                ],
                "answer": "x < 4",
                "explain": "Great! Divide both sides by positive 3, sign stays the same: x < 4.",
                "hints": [
                  "Divide both sides by 3 to isolate x.",
                  "Dividing by a positive number keeps the < sign facing the same way.",
                  "12 / 3 = 4, so x < 4."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l2-p5",
                "type": "truefalse",
                "prompt": "True or false: x = 6 is a solution to the inequality x > 4.",
                "answer": "true",
                "explain": "True! 6 is greater than 4, so x = 6 makes x > 4 a true statement.",
                "hints": [
                  "Plug x = 6 into the inequality and check if it holds.",
                  "The question becomes: is 6 > 4?",
                  "Since 6 really is greater than 4, the statement is..."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l2-p6",
                "type": "mc",
                "prompt": "Solve: 2x - 1 > 9",
                "choices": [
                  "x > 5",
                  "x > 4",
                  "x > 10",
                  "x < 5"
                ],
                "answer": "x > 5",
                "explain": "Two-step inequality! Add 1: 2x > 10. Divide by 2: x > 5.",
                "hints": [
                  "Handle it like a two-step equation: undo the - 1 first.",
                  "Add 1 to both sides to get 2x > 10.",
                  "Divide both sides by 2: 10 / 2 = 5."
                ]
              }
            ]
          },
          {
            "id": "algebra-archipelago-u3-l3",
            "title": "Riding the Line y=mx+b",
            "icon": "📈",
            "intro": "Welcome to the lagoon's grand finale! Every straight line follows the recipe y = mx + b, where m is the slope (steepness) and b is the y-intercept (where it crosses).",
            "problems": [
              {
                "id": "algebra-archipelago-u3-l3-p1",
                "type": "mc",
                "prompt": "In y = mx + b, which letter stands for the slope?",
                "choices": [
                  "m",
                  "b",
                  "y",
                  "x"
                ],
                "answer": "m",
                "explain": "Right! m is the slope — it tells you how steep the line is and which way it tilts.",
                "hints": [
                  "In the recipe, slope sits right in front of the x.",
                  "One of these letters is famous for meaning 'steepness'.",
                  "It's the letter multiplied by x."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l3-p2",
                "type": "mc",
                "prompt": "In y = mx + b, what does b represent?",
                "choices": [
                  "the y-intercept",
                  "the slope",
                  "the x-value",
                  "the steepness"
                ],
                "answer": "the y-intercept",
                "explain": "Yes! b is the y-intercept — the spot where the line crosses the y-axis (where x = 0).",
                "hints": [
                  "b is the part with no x attached to it.",
                  "It tells you where the line meets the vertical axis.",
                  "That crossing point on the y-axis is the y-intercept."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l3-p3",
                "type": "mc",
                "prompt": "For the line y = 3x + 2, what is the slope?",
                "choices": [
                  "3",
                  "2",
                  "5",
                  "1"
                ],
                "answer": "3",
                "explain": "Great! The slope is the number in front of x, which is 3.",
                "hints": [
                  "Match this to y = mx + b — the slope is m.",
                  "Slope is the coefficient sitting in front of x.",
                  "The number multiplying x here is the one you want."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l3-p4",
                "type": "input",
                "prompt": "For the line y = 4x - 5, what is the y-intercept (the value of b)?",
                "answer": "-5",
                "accept": [
                  "-5",
                  "negative 5",
                  "minus 5",
                  "-5.0"
                ],
                "explain": "Sharp eye! The b value is -5, since the equation is y = 4x + (-5).",
                "hints": [
                  "The y-intercept is the constant term, the b in y = mx + b.",
                  "Look at the number with no x — and watch its sign.",
                  "The equation has a - 5, so b is negative."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l3-p5",
                "type": "input",
                "prompt": "Find y when x = 2 for the line y = 2x + 1.",
                "answer": "5",
                "accept": [
                  "5",
                  "y=5",
                  "y = 5",
                  "five"
                ],
                "explain": "Nice! Plug in x = 2: y = 2(2) + 1 = 4 + 1 = 5.",
                "hints": [
                  "Substitute x = 2 into the equation.",
                  "It becomes y = 2 * 2 + 1.",
                  "First 2 * 2 = 4, then add 1."
                ]
              },
              {
                "id": "algebra-archipelago-u3-l3-p6",
                "type": "mc",
                "prompt": "A line crosses the y-axis at 3 and has a slope of 2. What is its equation?",
                "choices": [
                  "y = 2x + 3",
                  "y = 3x + 2",
                  "y = 2x - 3",
                  "y = 3x - 2"
                ],
                "answer": "y = 2x + 3",
                "explain": "Treasure unlocked! Slope (m) = 2 and y-intercept (b) = 3, so y = mx + b becomes y = 2x + 3.",
                "hints": [
                  "Slot the values into y = mx + b: m is slope, b is the y-intercept.",
                  "Slope 2 goes in the m spot, and 3 is the b.",
                  "Build it: y = (2)x + (3)."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "geometry-gorge",
    "title": "Geometry Gorge",
    "subtitle": "Geometry",
    "color": "#FB7185",
    "icon": "📐",
    "blurb": "Rappel down a canyon of angles, shapes, and solids where every ledge hides a new geometry puzzle!",
    "units": [
      {
        "id": "geometry-gorge-u1",
        "title": "Angle Avalanche",
        "icon": "📐",
        "lessons": [
          {
            "id": "geometry-gorge-u1-l1",
            "title": "Meet the Angles",
            "icon": "🔺",
            "intro": "Hi, I'm Pip! Angles are everywhere in the gorge. Let's learn to spot acute, right, obtuse, and straight angles by how wide they open.",
            "problems": [
              {
                "id": "geometry-gorge-u1-l1-p1",
                "type": "mc",
                "prompt": "An angle that measures exactly 90 degrees is called a what?",
                "choices": [
                  "Acute angle",
                  "Right angle",
                  "Obtuse angle",
                  "Straight angle"
                ],
                "answer": "Right angle",
                "explain": "Nice! A 90-degree angle is a right angle, the perfect square corner.",
                "hints": [
                  "Think about the corner of a book or a window frame.",
                  "Match the degree measure to its special name.",
                  "90 degrees makes a clean square corner. What do we call that corner?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l1-p2",
                "type": "mc",
                "prompt": "An angle measuring 45 degrees is which type?",
                "choices": [
                  "Acute",
                  "Right",
                  "Obtuse",
                  "Straight"
                ],
                "answer": "Acute",
                "explain": "You got it! Less than 90 degrees means the angle is acute, a small sharp opening.",
                "hints": [
                  "Compare 45 to the special value 90.",
                  "Angles smaller than a right angle have their own name.",
                  "45 is less than 90, so the angle is narrow. What's the name for a narrow angle?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l1-p3",
                "type": "mc",
                "prompt": "An angle measuring 120 degrees is which type?",
                "choices": [
                  "Acute",
                  "Right",
                  "Obtuse",
                  "Straight"
                ],
                "answer": "Obtuse",
                "explain": "Exactly! Between 90 and 180 degrees, an angle is obtuse, a wide open angle.",
                "hints": [
                  "Compare 120 to 90 and to 180.",
                  "An angle bigger than a right angle but not yet flat has its own name.",
                  "120 is more than 90 but less than 180. That wide angle is called what?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l1-p4",
                "type": "truefalse",
                "prompt": "True or false: a straight angle measures 180 degrees.",
                "answer": "true",
                "explain": "True! A straight angle opens all the way into a flat line, exactly 180 degrees.",
                "hints": [
                  "Picture an angle that flattens out into a straight line.",
                  "How many degrees does a perfectly flat line span?",
                  "A straight line is half of a full 360-degree turn. Half of 360 is..."
                ]
              },
              {
                "id": "geometry-gorge-u1-l1-p5",
                "type": "input",
                "prompt": "How many degrees are in a right angle?",
                "answer": "90",
                "accept": [
                  "90",
                  "90 degrees",
                  "90 deg",
                  "ninety",
                  "ninety degrees"
                ],
                "explain": "Perfect! A right angle is always 90 degrees, the square corner.",
                "hints": [
                  "This is the angle in a square corner.",
                  "It's exactly half of a straight angle.",
                  "Half of 180 degrees is your answer."
                ]
              },
              {
                "id": "geometry-gorge-u1-l1-p6",
                "type": "mc",
                "prompt": "Which angle measure is acute?",
                "choices": [
                  "30 degrees",
                  "90 degrees",
                  "150 degrees",
                  "180 degrees"
                ],
                "answer": "30 degrees",
                "explain": "Yes! 30 degrees is less than 90, so it's acute and nice and sharp.",
                "hints": [
                  "Acute means smaller than a right angle.",
                  "Which of these is below 90 degrees?",
                  "Scan for the only value under 90. That one is acute."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u1-l2",
            "title": "Complementary & Supplementary",
            "icon": "🤝",
            "intro": "Some angles are best friends! Complementary pairs add to 90, and supplementary pairs add to 180. Let's find the missing partner.",
            "problems": [
              {
                "id": "geometry-gorge-u1-l2-p1",
                "type": "input",
                "prompt": "Two complementary angles add up to 90 degrees. If one is 30 degrees, what is the other?",
                "answer": "60",
                "accept": [
                  "60",
                  "60 degrees",
                  "60 deg",
                  "sixty"
                ],
                "explain": "Great! 30 + 60 = 90, so the complement of 30 is 60.",
                "hints": [
                  "Complementary angles always total 90 degrees.",
                  "Subtract the known angle from the total.",
                  "Compute 90 - 30 to find the partner."
                ]
              },
              {
                "id": "geometry-gorge-u1-l2-p2",
                "type": "input",
                "prompt": "Two supplementary angles add up to 180 degrees. If one is 110 degrees, what is the other?",
                "answer": "70",
                "accept": [
                  "70",
                  "70 degrees",
                  "70 deg",
                  "seventy"
                ],
                "explain": "Nice work! 110 + 70 = 180, so the supplement of 110 is 70.",
                "hints": [
                  "Supplementary angles always total 180 degrees.",
                  "Subtract the known angle from 180.",
                  "Compute 180 - 110 to find the partner."
                ]
              },
              {
                "id": "geometry-gorge-u1-l2-p3",
                "type": "truefalse",
                "prompt": "True or false: angles of 50 degrees and 40 degrees are complementary.",
                "answer": "true",
                "explain": "True! 50 + 40 = 90, and complementary angles add to 90.",
                "hints": [
                  "Complementary means they add to 90.",
                  "Add the two angles together.",
                  "Check whether 50 + 40 equals 90."
                ]
              },
              {
                "id": "geometry-gorge-u1-l2-p4",
                "type": "mc",
                "prompt": "What is the supplement of a 90-degree angle?",
                "choices": [
                  "0 degrees",
                  "45 degrees",
                  "90 degrees",
                  "180 degrees"
                ],
                "answer": "90 degrees",
                "explain": "Right! 180 - 90 = 90, so a right angle's supplement is another right angle.",
                "hints": [
                  "Supplementary angles add to 180.",
                  "Subtract 90 from 180.",
                  "180 - 90 leaves how many degrees?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l2-p5",
                "type": "input",
                "prompt": "Find the complement of a 25-degree angle.",
                "answer": "65",
                "accept": [
                  "65",
                  "65 degrees",
                  "65 deg",
                  "sixty-five",
                  "sixty five"
                ],
                "explain": "You nailed it! 90 - 25 = 65, the complement of 25.",
                "hints": [
                  "Complements add to 90.",
                  "Subtract 25 from 90.",
                  "Work out 90 - 25."
                ]
              },
              {
                "id": "geometry-gorge-u1-l2-p6",
                "type": "mc",
                "prompt": "Two angles are supplementary. One is 135 degrees. What is the other?",
                "choices": [
                  "35 degrees",
                  "45 degrees",
                  "55 degrees",
                  "65 degrees"
                ],
                "answer": "45 degrees",
                "explain": "Yes! 180 - 135 = 45, so the missing supplementary angle is 45 degrees.",
                "hints": [
                  "Supplementary angles total 180.",
                  "Subtract 135 from 180.",
                  "Compute 180 - 135 and pick that choice."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u1-l3",
            "title": "Vertical & Transversal Angles",
            "icon": "✖️",
            "intro": "When lines cross, special angle pairs appear! Vertical angles are equal, and parallel lines cut by a transversal make matching angles. Let's investigate.",
            "problems": [
              {
                "id": "geometry-gorge-u1-l3-p1",
                "type": "truefalse",
                "prompt": "True or false: vertical angles are always equal to each other.",
                "answer": "true",
                "explain": "True! When two lines cross, the angles across from each other are always equal.",
                "hints": [
                  "Vertical angles sit directly across the crossing point.",
                  "Think about the matching 'X' shape two lines make.",
                  "Opposite angles in that X share the same measure. Equal or not?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l3-p2",
                "type": "input",
                "prompt": "Two lines cross. One angle is 70 degrees. What is the measure of its vertical (opposite) angle?",
                "answer": "70",
                "accept": [
                  "70",
                  "70 degrees",
                  "70 deg",
                  "seventy"
                ],
                "explain": "Exactly! Vertical angles are equal, so the opposite angle is also 70 degrees.",
                "hints": [
                  "Vertical angles are the pair directly across from each other.",
                  "Those opposite angles are always equal.",
                  "If one is 70, its vertical partner is the same value."
                ]
              },
              {
                "id": "geometry-gorge-u1-l3-p3",
                "type": "input",
                "prompt": "Two lines cross making an angle of 70 degrees. What is the measure of the angle right next to it on the straight line?",
                "answer": "110",
                "accept": [
                  "110",
                  "110 degrees",
                  "110 deg",
                  "one hundred ten"
                ],
                "explain": "Great! Angles on a straight line are supplementary, so 180 - 70 = 110.",
                "hints": [
                  "Two angles along a straight line add to 180 degrees.",
                  "The neighbor angle is the supplement of 70.",
                  "Compute 180 - 70."
                ]
              },
              {
                "id": "geometry-gorge-u1-l3-p4",
                "type": "mc",
                "prompt": "When a transversal crosses two parallel lines, corresponding angles are...",
                "choices": [
                  "Always equal",
                  "Always supplementary",
                  "Always 90 degrees",
                  "Never related"
                ],
                "answer": "Always equal",
                "explain": "Right! Corresponding angles on parallel lines match exactly, they're equal.",
                "hints": [
                  "Corresponding angles sit in the same position at each crossing.",
                  "On parallel lines these matching positions behave the same way.",
                  "Same position on parallel lines means same measure: equal or not?"
                ]
              },
              {
                "id": "geometry-gorge-u1-l3-p5",
                "type": "input",
                "prompt": "A transversal crosses two parallel lines. One corresponding angle is 65 degrees. What is the matching corresponding angle on the other line?",
                "answer": "65",
                "accept": [
                  "65",
                  "65 degrees",
                  "65 deg",
                  "sixty-five",
                  "sixty five"
                ],
                "explain": "You got it! Corresponding angles on parallel lines are equal, so it's also 65.",
                "hints": [
                  "Corresponding angles are in the same spot at each intersection.",
                  "On parallel lines they are equal.",
                  "Copy the 65 to its matching corresponding angle."
                ]
              },
              {
                "id": "geometry-gorge-u1-l3-p6",
                "type": "mc",
                "prompt": "Co-interior (same-side interior) angles on parallel lines add up to what?",
                "choices": [
                  "90 degrees",
                  "180 degrees",
                  "360 degrees",
                  "They are equal"
                ],
                "answer": "180 degrees",
                "explain": "Yes! Same-side interior angles are supplementary, adding to 180 degrees.",
                "hints": [
                  "These are the two interior angles on the same side of the transversal.",
                  "They form a supplementary pair.",
                  "Supplementary pairs add to which total?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "geometry-gorge-u2",
        "title": "Perimeter & Area Pass",
        "icon": "📏",
        "lessons": [
          {
            "id": "geometry-gorge-u2-l1",
            "title": "Rectangle Roundup",
            "icon": "🟥",
            "intro": "Time to measure shapes! Perimeter is the distance around, and area is the space inside. Let's start with friendly rectangles.",
            "problems": [
              {
                "id": "geometry-gorge-u2-l1-p1",
                "type": "input",
                "prompt": "A rectangle is 5 units long and 3 units wide. What is its area? (length x width)",
                "answer": "15",
                "accept": [
                  "15",
                  "15 square units",
                  "15 units^2",
                  "15 sq units"
                ],
                "explain": "Great! Area = length x width = 5 x 3 = 15 square units.",
                "hints": [
                  "Area of a rectangle multiplies the two side lengths.",
                  "Multiply length by width.",
                  "Compute 5 x 3."
                ]
              },
              {
                "id": "geometry-gorge-u2-l1-p2",
                "type": "input",
                "prompt": "A rectangle is 5 units long and 3 units wide. What is its perimeter? (add up all four sides)",
                "answer": "16",
                "accept": [
                  "16",
                  "16 units"
                ],
                "explain": "Nice! Perimeter = 2 x (5 + 3) = 2 x 8 = 16 units.",
                "hints": [
                  "Perimeter is the total of all four sides.",
                  "A rectangle has two lengths and two widths.",
                  "Add 5 + 3 = 8, then double it."
                ]
              },
              {
                "id": "geometry-gorge-u2-l1-p3",
                "type": "input",
                "prompt": "A square has sides of 6 units. What is its area?",
                "answer": "36",
                "accept": [
                  "36",
                  "36 square units",
                  "36 units^2",
                  "36 sq units"
                ],
                "explain": "Perfect! A square's area is side x side = 6 x 6 = 36.",
                "hints": [
                  "All sides of a square are equal.",
                  "Area = side x side.",
                  "Compute 6 x 6."
                ]
              },
              {
                "id": "geometry-gorge-u2-l1-p4",
                "type": "input",
                "prompt": "A square has sides of 6 units. What is its perimeter?",
                "answer": "24",
                "accept": [
                  "24",
                  "24 units"
                ],
                "explain": "Yes! A square has 4 equal sides, so 4 x 6 = 24.",
                "hints": [
                  "Perimeter adds all the sides.",
                  "A square has 4 equal sides.",
                  "Compute 4 x 6."
                ]
              },
              {
                "id": "geometry-gorge-u2-l1-p5",
                "type": "mc",
                "prompt": "A rectangle has area 24 square units and a length of 8 units. What is its width?",
                "choices": [
                  "2 units",
                  "3 units",
                  "4 units",
                  "6 units"
                ],
                "answer": "3 units",
                "explain": "Right! Width = area / length = 24 / 8 = 3 units.",
                "hints": [
                  "Area = length x width, so width = area / length.",
                  "Divide the area by the known length.",
                  "Compute 24 / 8."
                ]
              },
              {
                "id": "geometry-gorge-u2-l1-p6",
                "type": "input",
                "prompt": "A rectangular garden is 10 m by 4 m. How many square meters of soil cover it?",
                "answer": "40",
                "accept": [
                  "40",
                  "40 square meters",
                  "40 m^2",
                  "40 sq m",
                  "40 square metres"
                ],
                "explain": "Great! Area = 10 x 4 = 40 square meters of soil.",
                "hints": [
                  "Soil covers the inside, so you need area.",
                  "Multiply the two dimensions.",
                  "Compute 10 x 4."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u2-l2",
            "title": "Triangle Trail",
            "icon": "🔻",
            "intro": "Triangles are sneaky but simple! Their area is half of a rectangle: one-half times base times height. Let's climb the triangle trail.",
            "problems": [
              {
                "id": "geometry-gorge-u2-l2-p1",
                "type": "input",
                "prompt": "A triangle has base 6 and height 4. What is its area? (use 1/2 x base x height)",
                "answer": "12",
                "accept": [
                  "12",
                  "12 square units",
                  "12 units^2",
                  "12 sq units"
                ],
                "explain": "Great! Area = 1/2 x 6 x 4 = 1/2 x 24 = 12.",
                "hints": [
                  "Triangle area is half of base times height.",
                  "First multiply base x height, then take half.",
                  "6 x 4 = 24, and half of 24 is..."
                ]
              },
              {
                "id": "geometry-gorge-u2-l2-p2",
                "type": "input",
                "prompt": "A triangle has base 10 and height 5. What is its area?",
                "answer": "25",
                "accept": [
                  "25",
                  "25 square units",
                  "25 units^2",
                  "25 sq units"
                ],
                "explain": "Nice! Area = 1/2 x 10 x 5 = 1/2 x 50 = 25.",
                "hints": [
                  "Use 1/2 x base x height.",
                  "Multiply 10 x 5 first.",
                  "Half of 50 is your answer."
                ]
              },
              {
                "id": "geometry-gorge-u2-l2-p3",
                "type": "truefalse",
                "prompt": "True or false: the area of a triangle is the same as a rectangle with the same base and height.",
                "answer": "false",
                "explain": "False! A triangle is exactly HALF of that rectangle, not the same.",
                "hints": [
                  "Compare the triangle formula to the rectangle formula.",
                  "Rectangle is base x height; triangle has an extra factor.",
                  "The triangle uses a 1/2. Does that make it equal or half?"
                ]
              },
              {
                "id": "geometry-gorge-u2-l2-p4",
                "type": "mc",
                "prompt": "A triangle has base 8 and area 20 square units. What is its height?",
                "choices": [
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "answer": "5",
                "explain": "Right! Area = 1/2 x base x height, so 20 = 1/2 x 8 x h means h = 5.",
                "hints": [
                  "Start from 20 = 1/2 x 8 x h.",
                  "1/2 x 8 = 4, so 20 = 4 x h.",
                  "Divide 20 by 4 to find the height."
                ]
              },
              {
                "id": "geometry-gorge-u2-l2-p5",
                "type": "input",
                "prompt": "A right triangle has legs 3 and 4 forming the right angle. What is its area?",
                "answer": "6",
                "accept": [
                  "6",
                  "6 square units",
                  "6 units^2",
                  "6 sq units"
                ],
                "explain": "Great! The legs are base and height: 1/2 x 3 x 4 = 6.",
                "hints": [
                  "In a right triangle the two legs act as base and height.",
                  "Use 1/2 x 3 x 4.",
                  "3 x 4 = 12, and half of 12 is..."
                ]
              },
              {
                "id": "geometry-gorge-u2-l2-p6",
                "type": "input",
                "prompt": "A triangle has base 7 and height 6. What is its area?",
                "answer": "21",
                "accept": [
                  "21",
                  "21 square units",
                  "21 units^2",
                  "21 sq units"
                ],
                "explain": "Yes! Area = 1/2 x 7 x 6 = 1/2 x 42 = 21.",
                "hints": [
                  "Apply 1/2 x base x height.",
                  "Multiply 7 x 6 first.",
                  "Half of 42 is your answer."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u2-l3",
            "title": "Circle Canyon",
            "icon": "⭕",
            "intro": "Circles bring a new friend: pi (about 3.14). Circumference is the distance around, and area is pi times radius squared. Let's roll!",
            "problems": [
              {
                "id": "geometry-gorge-u2-l3-p1",
                "type": "input",
                "prompt": "A circle has radius 5. What is its diameter?",
                "answer": "10",
                "accept": [
                  "10",
                  "10 units"
                ],
                "explain": "Great! The diameter is twice the radius: 2 x 5 = 10.",
                "hints": [
                  "The diameter stretches all the way across the circle.",
                  "Diameter = 2 x radius.",
                  "Compute 2 x 5."
                ]
              },
              {
                "id": "geometry-gorge-u2-l3-p2",
                "type": "mc",
                "prompt": "Which formula gives the circumference of a circle?",
                "choices": [
                  "pi x r^2",
                  "2 x pi x r",
                  "1/2 x b x h",
                  "l x w"
                ],
                "answer": "2 x pi x r",
                "explain": "Right! Circumference is the distance around: C = 2 x pi x r.",
                "hints": [
                  "Circumference is the distance around the circle.",
                  "One formula uses radius squared (that's area), one is linear in r.",
                  "Pick the one that is linear in r, not squared."
                ]
              },
              {
                "id": "geometry-gorge-u2-l3-p3",
                "type": "input",
                "prompt": "A circle has radius 3. What is its area? Use pi = 3.14. (Area = pi x r^2)",
                "answer": "28.26",
                "accept": [
                  "28.26",
                  "28.26 square units",
                  "28.26 units^2",
                  "9pi",
                  "9 pi"
                ],
                "explain": "Great! Area = 3.14 x 3^2 = 3.14 x 9 = 28.26 square units.",
                "hints": [
                  "Area of a circle is pi x r^2.",
                  "First square the radius: 3^2 = 9.",
                  "Then multiply 3.14 x 9."
                ]
              },
              {
                "id": "geometry-gorge-u2-l3-p4",
                "type": "input",
                "prompt": "A circle has radius 10. What is its circumference? Use pi = 3.14.",
                "answer": "62.8",
                "accept": [
                  "62.8",
                  "62.80",
                  "62.8 units",
                  "20pi",
                  "20 pi"
                ],
                "explain": "Nice! C = 2 x 3.14 x 10 = 62.8.",
                "hints": [
                  "Circumference is 2 x pi x r.",
                  "2 x 10 = 20, then multiply by pi.",
                  "Compute 3.14 x 20."
                ]
              },
              {
                "id": "geometry-gorge-u2-l3-p5",
                "type": "truefalse",
                "prompt": "True or false: if you double a circle's radius, the area uses radius squared, so it grows more than the circumference.",
                "answer": "true",
                "explain": "True! Area depends on r^2, so doubling r makes area 4 times bigger, while circumference only doubles.",
                "hints": [
                  "Compare the area formula (r^2) to the circumference formula (r).",
                  "Squaring magnifies changes more than a plain multiply.",
                  "Doubling r: area x4 vs circumference x2. Does area grow more?"
                ]
              },
              {
                "id": "geometry-gorge-u2-l3-p6",
                "type": "input",
                "prompt": "A circle has diameter 8. What is its radius?",
                "answer": "4",
                "accept": [
                  "4",
                  "4 units"
                ],
                "explain": "Yes! Radius is half the diameter: 8 / 2 = 4.",
                "hints": [
                  "Radius reaches from the center to the edge, half the way across.",
                  "Radius = diameter / 2.",
                  "Compute 8 / 2."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "geometry-gorge-u3",
        "title": "Pythagoras Peak & Solids Summit",
        "icon": "🏔️",
        "lessons": [
          {
            "id": "geometry-gorge-u3-l1",
            "title": "The Pythagorean Theorem",
            "icon": "📐",
            "intro": "On right triangles, a^2 + b^2 = c^2, where c is the longest side (the hypotenuse). This ancient rule unlocks the gorge's tallest cliffs!",
            "problems": [
              {
                "id": "geometry-gorge-u3-l1-p1",
                "type": "input",
                "prompt": "A right triangle has legs 3 and 4. What is the length of the hypotenuse? (a^2 + b^2 = c^2)",
                "answer": "5",
                "accept": [
                  "5",
                  "5 units"
                ],
                "explain": "Classic! 3^2 + 4^2 = 9 + 16 = 25, and sqrt(25) = 5.",
                "hints": [
                  "Square each leg, then add them.",
                  "9 + 16 gives c^2.",
                  "Take the square root of 25."
                ]
              },
              {
                "id": "geometry-gorge-u3-l1-p2",
                "type": "input",
                "prompt": "A right triangle has legs 6 and 8. What is the hypotenuse?",
                "answer": "10",
                "accept": [
                  "10",
                  "10 units"
                ],
                "explain": "Great! 6^2 + 8^2 = 36 + 64 = 100, and sqrt(100) = 10.",
                "hints": [
                  "Use a^2 + b^2 = c^2.",
                  "36 + 64 gives c^2.",
                  "Take the square root of 100."
                ]
              },
              {
                "id": "geometry-gorge-u3-l1-p3",
                "type": "mc",
                "prompt": "In a right triangle, which side is the hypotenuse?",
                "choices": [
                  "The shortest side",
                  "The longest side, opposite the right angle",
                  "Any of the legs",
                  "The side touching the right angle"
                ],
                "answer": "The longest side, opposite the right angle",
                "explain": "Right! The hypotenuse is always the longest side, sitting opposite the 90-degree angle.",
                "hints": [
                  "The hypotenuse is special in a right triangle.",
                  "It sits across from the right angle.",
                  "Opposite the 90-degree angle, and it's the longest. Which choice?"
                ]
              },
              {
                "id": "geometry-gorge-u3-l1-p4",
                "type": "input",
                "prompt": "A right triangle has hypotenuse 13 and one leg 5. What is the other leg? (c^2 - a^2 = b^2)",
                "answer": "12",
                "accept": [
                  "12",
                  "12 units"
                ],
                "explain": "Excellent! 13^2 - 5^2 = 169 - 25 = 144, and sqrt(144) = 12.",
                "hints": [
                  "Rearrange to b^2 = c^2 - a^2.",
                  "169 - 25 gives b^2.",
                  "Take the square root of 144."
                ]
              },
              {
                "id": "geometry-gorge-u3-l1-p5",
                "type": "truefalse",
                "prompt": "True or false: a triangle with sides 5, 12, and 13 is a right triangle.",
                "answer": "true",
                "explain": "True! 5^2 + 12^2 = 25 + 144 = 169 = 13^2, so it satisfies the theorem.",
                "hints": [
                  "Check whether a^2 + b^2 = c^2 with c = 13.",
                  "Compute 5^2 + 12^2 and compare to 13^2.",
                  "25 + 144 = 169 and 13^2 = 169. Do they match?"
                ]
              },
              {
                "id": "geometry-gorge-u3-l1-p6",
                "type": "input",
                "prompt": "A right triangle has legs 8 and 15. What is the hypotenuse?",
                "answer": "17",
                "accept": [
                  "17",
                  "17 units"
                ],
                "explain": "Great! 8^2 + 15^2 = 64 + 225 = 289, and sqrt(289) = 17.",
                "hints": [
                  "Square both legs and add.",
                  "64 + 225 gives c^2.",
                  "Take the square root of 289."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u3-l2",
            "title": "Surface Area Summit",
            "icon": "📦",
            "intro": "Solids have an outside skin! Surface area adds up every face. Let's wrap boxes and cubes and count their faces.",
            "problems": [
              {
                "id": "geometry-gorge-u3-l2-p1",
                "type": "input",
                "prompt": "A cube has edges of length 2. What is the area of one face?",
                "answer": "4",
                "accept": [
                  "4",
                  "4 square units",
                  "4 units^2",
                  "4 sq units"
                ],
                "explain": "Great! Each face is a square: 2 x 2 = 4.",
                "hints": [
                  "Each face of a cube is a square.",
                  "Area of a square is side x side.",
                  "Compute 2 x 2."
                ]
              },
              {
                "id": "geometry-gorge-u3-l2-p2",
                "type": "input",
                "prompt": "A cube has edges of length 2. It has 6 faces. What is its total surface area?",
                "answer": "24",
                "accept": [
                  "24",
                  "24 square units",
                  "24 units^2",
                  "24 sq units"
                ],
                "explain": "Nice! One face is 4, and 6 faces give 6 x 4 = 24.",
                "hints": [
                  "Surface area adds up all 6 faces.",
                  "Each face has area 4.",
                  "Compute 6 x 4."
                ]
              },
              {
                "id": "geometry-gorge-u3-l2-p3",
                "type": "mc",
                "prompt": "How many faces does a rectangular box (rectangular prism) have?",
                "choices": [
                  "4",
                  "6",
                  "8",
                  "12"
                ],
                "answer": "6",
                "explain": "Right! A box has 6 faces: top, bottom, and four sides.",
                "hints": [
                  "Picture a cereal box or a shoebox.",
                  "Count top and bottom, then the four walls.",
                  "2 + 4 equals how many faces?"
                ]
              },
              {
                "id": "geometry-gorge-u3-l2-p4",
                "type": "input",
                "prompt": "A rectangular box is 2 by 3 by 4. The two faces that are 2 by 3 each have what area?",
                "answer": "6",
                "accept": [
                  "6",
                  "6 square units",
                  "6 units^2",
                  "6 sq units"
                ],
                "explain": "Great! A 2 by 3 face has area 2 x 3 = 6.",
                "hints": [
                  "A face is a rectangle, so area is length x width.",
                  "Use the 2 and the 3.",
                  "Compute 2 x 3."
                ]
              },
              {
                "id": "geometry-gorge-u3-l2-p5",
                "type": "mc",
                "prompt": "A rectangular box is 2 by 3 by 4. What is its total surface area? (faces come in 3 matching pairs)",
                "choices": [
                  "26",
                  "36",
                  "52",
                  "24"
                ],
                "answer": "52",
                "explain": "Right! 2(2x3 + 2x4 + 3x4) = 2(6 + 8 + 12) = 2 x 26 = 52.",
                "hints": [
                  "Find the area of each different face: 2x3, 2x4, and 3x4.",
                  "Those areas are 6, 8, and 12, and each appears twice.",
                  "Add 6 + 8 + 12 = 26, then double it."
                ]
              },
              {
                "id": "geometry-gorge-u3-l2-p6",
                "type": "input",
                "prompt": "A cube has edges of length 3. What is its total surface area? (6 faces)",
                "answer": "54",
                "accept": [
                  "54",
                  "54 square units",
                  "54 units^2",
                  "54 sq units"
                ],
                "explain": "Yes! One face is 3 x 3 = 9, and 6 x 9 = 54.",
                "hints": [
                  "Find one face area first: 3 x 3.",
                  "One face is 9, and there are 6 of them.",
                  "Compute 6 x 9."
                ]
              }
            ]
          },
          {
            "id": "geometry-gorge-u3-l3",
            "title": "Volume Vista",
            "icon": "🧊",
            "intro": "Volume measures how much space fills a solid. For boxes it's length x width x height, and for cylinders it's pi times radius squared times height. Final climb!",
            "problems": [
              {
                "id": "geometry-gorge-u3-l3-p1",
                "type": "input",
                "prompt": "A box is 2 by 3 by 4. What is its volume? (length x width x height)",
                "answer": "24",
                "accept": [
                  "24",
                  "24 cubic units",
                  "24 units^3",
                  "24 cu units"
                ],
                "explain": "Great! Volume = 2 x 3 x 4 = 24 cubic units.",
                "hints": [
                  "Volume multiplies all three dimensions.",
                  "Multiply 2 x 3 first.",
                  "6 x 4 gives the volume."
                ]
              },
              {
                "id": "geometry-gorge-u3-l3-p2",
                "type": "input",
                "prompt": "A cube has edges of length 3. What is its volume?",
                "answer": "27",
                "accept": [
                  "27",
                  "27 cubic units",
                  "27 units^3",
                  "27 cu units"
                ],
                "explain": "Nice! Volume = 3 x 3 x 3 = 27.",
                "hints": [
                  "A cube's volume is side x side x side.",
                  "That's 3^3.",
                  "Compute 3 x 3 x 3."
                ]
              },
              {
                "id": "geometry-gorge-u3-l3-p3",
                "type": "mc",
                "prompt": "Which units are used to measure volume?",
                "choices": [
                  "Linear units (like cm)",
                  "Square units (like cm^2)",
                  "Cubic units (like cm^3)",
                  "Degrees"
                ],
                "answer": "Cubic units (like cm^3)",
                "explain": "Right! Volume fills 3D space, so we measure it in cubic units.",
                "hints": [
                  "Volume measures 3D space, not a flat area or a line.",
                  "Each dimension contributes one factor of length.",
                  "Three dimensions means the unit is raised to which power?"
                ]
              },
              {
                "id": "geometry-gorge-u3-l3-p4",
                "type": "input",
                "prompt": "A cylinder has radius 2 and height 5. What is its volume? Use pi = 3.14. (V = pi x r^2 x h)",
                "answer": "62.8",
                "accept": [
                  "62.8",
                  "62.80",
                  "62.8 cubic units",
                  "20pi",
                  "20 pi"
                ],
                "explain": "Excellent! V = 3.14 x 2^2 x 5 = 3.14 x 4 x 5 = 3.14 x 20 = 62.8.",
                "hints": [
                  "Cylinder volume is pi x r^2 x h.",
                  "First find r^2 = 4, then multiply by the height 5.",
                  "4 x 5 = 20, then multiply by 3.14."
                ]
              },
              {
                "id": "geometry-gorge-u3-l3-p5",
                "type": "truefalse",
                "prompt": "True or false: a box that is 1 by 1 by 1 has a volume of 1 cubic unit.",
                "answer": "true",
                "explain": "True! 1 x 1 x 1 = 1, the volume of a single unit cube.",
                "hints": [
                  "Multiply all three dimensions.",
                  "Each side is 1.",
                  "1 x 1 x 1 equals what?"
                ]
              },
              {
                "id": "geometry-gorge-u3-l3-p6",
                "type": "mc",
                "prompt": "A box has volume 60 cubic units, with length 5 and width 3. What is its height?",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "6"
                ],
                "answer": "4",
                "explain": "Right! Volume = l x w x h, so 60 = 5 x 3 x h = 15 x h, giving h = 4.",
                "hints": [
                  "Start from 60 = 5 x 3 x h.",
                  "5 x 3 = 15, so 60 = 15 x h.",
                  "Divide 60 by 15 to find the height."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "quadratic-quarry",
    "title": "Quadratic Quarry",
    "subtitle": "Algebra 2",
    "color": "#A78BFA",
    "icon": "⛏️",
    "blurb": "Grab your pickaxe and chip through powers, polynomials, and parabolas to strike algebra gold!",
    "units": [
      {
        "id": "quadratic-quarry-u1",
        "title": "Powers & Polynomial Pebbles",
        "lessons": [
          {
            "id": "quadratic-quarry-u1-l1",
            "title": "Exponent Rules",
            "icon": "⚡",
            "intro": "Welcome to the Quarry! Exponents are just shorthand for repeated multiplication, and a few power rules make them easy to dig through. Let's chip away!",
            "problems": [
              {
                "id": "quadratic-quarry-u1-l1-p1",
                "type": "mc",
                "prompt": "Simplify: x^3 * x^4",
                "choices": [
                  "x^7",
                  "x^12",
                  "x^1",
                  "x^34"
                ],
                "answer": "x^7",
                "explain": "When you multiply like bases, you ADD the exponents: 3 + 4 = 7, so x^7.",
                "hints": [
                  "Same base, and the powers are stacking up by multiplication.",
                  "There's a rule for multiplying matching bases: you combine the exponents with one operation.",
                  "Add the exponents: 3 + 4 = ... then keep the base x."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l1-p2",
                "type": "input",
                "prompt": "Simplify and give the exponent: y^10 / y^6 = y^?",
                "answer": "4",
                "accept": [
                  "4",
                  "y^4"
                ],
                "explain": "Dividing like bases means SUBTRACTING exponents: 10 - 6 = 4, so y^4.",
                "hints": [
                  "Division of the same base undoes multiplication.",
                  "Multiplying adds exponents, so dividing does the opposite.",
                  "Subtract: 10 - 6 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l1-p3",
                "type": "mc",
                "prompt": "Simplify: (a^2)^5",
                "choices": [
                  "a^10",
                  "a^7",
                  "a^25",
                  "a^3"
                ],
                "answer": "a^10",
                "explain": "A power raised to a power means you MULTIPLY the exponents: 2 * 5 = 10, so a^10.",
                "hints": [
                  "This is an exponent sitting on top of another exponent.",
                  "Don't add here, a different operation handles power-of-a-power.",
                  "Multiply: 2 * 5 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l1-p4",
                "type": "input",
                "prompt": "What is the value of 7^0?",
                "answer": "1",
                "accept": [
                  "1",
                  "one"
                ],
                "explain": "Any nonzero number raised to the 0 power equals 1. It's a handy quarry rule!",
                "hints": [
                  "This is a special zero-power case, not regular multiplication.",
                  "Think about x^3 / x^3, which equals 1 and also equals x^0.",
                  "Any nonzero base to the 0 power lands on a single number."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l1-p5",
                "type": "mc",
                "prompt": "Write with a positive exponent: x^-3",
                "choices": [
                  "1/x^3",
                  "x^3",
                  "-x^3",
                  "3/x"
                ],
                "answer": "1/x^3",
                "explain": "A negative exponent means 'reciprocal': x^-3 = 1/x^3.",
                "hints": [
                  "A negative exponent isn't a negative number, it's a location.",
                  "Negative exponents tell you to flip the base to the other side of a fraction.",
                  "Move x^3 to the denominator: 1/x^3."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l1-p6",
                "type": "input",
                "prompt": "Simplify the coefficient and give the full result: (3x^2)^3",
                "answer": "27x^6",
                "accept": [
                  "27x^6",
                  "27 x^6",
                  "27*x^6"
                ],
                "explain": "Cube everything inside: 3^3 = 27 and (x^2)^3 = x^6, giving 27x^6.",
                "hints": [
                  "The exponent 3 applies to BOTH the 3 and the x^2.",
                  "Cube the coefficient AND multiply the inside exponents.",
                  "3^3 = 27 and x^(2*3) = x^6, so put them together."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u1-l2",
            "title": "Meet the Polynomials",
            "icon": "🪨",
            "intro": "A polynomial is just a sum of terms like 3x^2, -5x, and 7. Knowing the parts makes adding and subtracting them a breeze. Let's sort our rocks!",
            "problems": [
              {
                "id": "quadratic-quarry-u1-l2-p1",
                "type": "mc",
                "prompt": "What is the degree of the polynomial 4x^3 - 2x + 9?",
                "choices": [
                  "3",
                  "4",
                  "9",
                  "1"
                ],
                "answer": "3",
                "explain": "The degree is the highest exponent on the variable, which is 3 here.",
                "hints": [
                  "Degree is about exponents, not the coefficients out front.",
                  "Scan each term and find the biggest power of x.",
                  "Compare exponents 3, 1, and 0 (on the 9) and pick the largest."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l2-p2",
                "type": "input",
                "prompt": "Combine like terms: 5x + 3x",
                "answer": "8x",
                "accept": [
                  "8x",
                  "8 x",
                  "8*x"
                ],
                "explain": "Both are x-terms, so add the coefficients: 5 + 3 = 8, giving 8x.",
                "hints": [
                  "These two terms share the same variable part.",
                  "Add the numbers in front and keep the x along for the ride.",
                  "5 + 3 = ... then attach x."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l2-p3",
                "type": "mc",
                "prompt": "Which terms are 'like terms'?",
                "choices": [
                  "2x^2 and -7x^2",
                  "2x^2 and 5x",
                  "3x and 4",
                  "x^2 and x^3"
                ],
                "answer": "2x^2 and -7x^2",
                "explain": "Like terms have the SAME variable raised to the SAME power, like both being x^2.",
                "hints": [
                  "Like terms must match in their variable AND its exponent.",
                  "The coefficients can differ, but the x-part has to be identical.",
                  "Look for the pair where both terms are x^2."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l2-p4",
                "type": "input",
                "prompt": "Add: (2x^2 + 3x) + (4x^2 + x). Give the x^2 coefficient.",
                "answer": "6",
                "accept": [
                  "6",
                  "6x^2"
                ],
                "explain": "Combine the x^2 terms: 2 + 4 = 6, so the result has 6x^2.",
                "hints": [
                  "Group the x^2 terms together first.",
                  "Only the x^2 pieces matter for this question.",
                  "Add 2 + 4 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l2-p5",
                "type": "mc",
                "prompt": "Subtract: (5x^2 - 2x) - (3x^2 + x)",
                "choices": [
                  "2x^2 - 3x",
                  "2x^2 - x",
                  "8x^2 - 3x",
                  "2x^2 + 3x"
                ],
                "answer": "2x^2 - 3x",
                "explain": "Distribute the minus: 5x^2 - 3x^2 = 2x^2 and -2x - x = -3x, giving 2x^2 - 3x.",
                "hints": [
                  "The subtraction flips the sign of EVERY term in the second group.",
                  "Rewrite as 5x^2 - 2x - 3x^2 - x first.",
                  "Combine: (5-3)x^2 and (-2-1)x."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l2-p6",
                "type": "input",
                "prompt": "Add: (x^2 + 4x - 3) + (2x^2 - 4x + 7). Give the constant term.",
                "answer": "4",
                "accept": [
                  "4",
                  "+4"
                ],
                "explain": "The constants are -3 and 7: -3 + 7 = 4. (The x-terms cancel too!)",
                "hints": [
                  "Focus only on the plain numbers without an x.",
                  "Find -3 and 7 and combine them.",
                  "Add: -3 + 7 = ..."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u1-l3",
            "title": "Multiplying & FOIL",
            "icon": "✖️",
            "intro": "Time to multiply! Distribute carefully and the famous FOIL pattern handles two binomials. Each term meets every other term. Let's blast!",
            "problems": [
              {
                "id": "quadratic-quarry-u1-l3-p1",
                "type": "mc",
                "prompt": "Multiply: 3x(x + 4)",
                "choices": [
                  "3x^2 + 12x",
                  "3x^2 + 4",
                  "3x + 12x",
                  "x^2 + 12x"
                ],
                "answer": "3x^2 + 12x",
                "explain": "Distribute 3x to each term: 3x*x = 3x^2 and 3x*4 = 12x.",
                "hints": [
                  "The 3x out front must reach BOTH terms inside.",
                  "Multiply 3x by x, then 3x by 4 separately.",
                  "3x*x = 3x^2 and 3x*4 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l3-p2",
                "type": "mc",
                "prompt": "Use FOIL: (x + 2)(x + 3)",
                "choices": [
                  "x^2 + 5x + 6",
                  "x^2 + 6x + 5",
                  "x^2 + 6",
                  "x^2 + 5x + 5"
                ],
                "answer": "x^2 + 5x + 6",
                "explain": "First x*x = x^2, Outer/Inner give 3x + 2x = 5x, Last 2*3 = 6.",
                "hints": [
                  "FOIL = First, Outer, Inner, Last, four products in all.",
                  "The two middle products combine into one x-term.",
                  "x^2, then (3x + 2x) = 5x, then 2*3 = 6."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l3-p3",
                "type": "input",
                "prompt": "Multiply: (x - 5)(x + 5). Give the constant term.",
                "answer": "-25",
                "accept": [
                  "-25"
                ],
                "explain": "The middle terms cancel and you get x^2 - 25; the constant is -25.",
                "hints": [
                  "This is a difference of squares in disguise.",
                  "The outer and inner terms cancel out, leaving two pieces.",
                  "Multiply -5 * +5 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l3-p4",
                "type": "mc",
                "prompt": "Expand: (x + 4)^2",
                "choices": [
                  "x^2 + 8x + 16",
                  "x^2 + 16",
                  "x^2 + 4x + 16",
                  "x^2 + 8x + 8"
                ],
                "answer": "x^2 + 8x + 16",
                "explain": "(x+4)^2 = (x+4)(x+4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16.",
                "hints": [
                  "A square means multiply the binomial by itself.",
                  "Don't just square each piece, the middle term matters.",
                  "FOIL (x+4)(x+4): the middle is 4x + 4x = 8x."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l3-p5",
                "type": "mc",
                "prompt": "Multiply: (2x + 1)(x + 3)",
                "choices": [
                  "2x^2 + 7x + 3",
                  "2x^2 + 4x + 3",
                  "2x^2 + 7x + 4",
                  "2x^2 + 3x + 3"
                ],
                "answer": "2x^2 + 7x + 3",
                "explain": "First 2x*x = 2x^2, Outer 6x + Inner x = 7x, Last 1*3 = 3.",
                "hints": [
                  "FOIL still works even when a coefficient isn't 1.",
                  "Outer is 2x*3 and inner is 1*x; add those.",
                  "2x^2, then (6x + x) = 7x, then 1*3 = 3."
                ]
              },
              {
                "id": "quadratic-quarry-u1-l3-p6",
                "type": "input",
                "prompt": "Multiply (x + 2)(x^2 + 3x + 1) and give the coefficient of x^2.",
                "answer": "5",
                "accept": [
                  "5",
                  "5x^2"
                ],
                "explain": "x*3x = 3x^2 and 2*x^2 = 2x^2, so the x^2 terms total 3 + 2 = 5.",
                "hints": [
                  "Distribute x and then 2 across all three terms.",
                  "Find every product that lands as an x^2 term.",
                  "x*(3x) gives 3x^2 and 2*(x^2) gives 2x^2; add them."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "quadratic-quarry-u2",
        "title": "The Factoring Mines",
        "lessons": [
          {
            "id": "quadratic-quarry-u2-l1",
            "title": "Greatest Common Factor",
            "icon": "🔑",
            "intro": "Factoring is multiplying in reverse! The first tool to grab is the GCF, the biggest chunk every term shares. Pull it out front and watch terms simplify.",
            "problems": [
              {
                "id": "quadratic-quarry-u2-l1-p1",
                "type": "mc",
                "prompt": "What is the GCF of 6x and 9x?",
                "choices": [
                  "3x",
                  "3",
                  "x",
                  "18x"
                ],
                "answer": "3x",
                "explain": "Both share a factor of 3 and an x, so the GCF is 3x.",
                "hints": [
                  "Look at the numbers and the variable separately.",
                  "The biggest number dividing 6 and 9, plus any shared x.",
                  "3 divides both 6 and 9, and both have an x."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l1-p2",
                "type": "mc",
                "prompt": "Factor: 2x + 8",
                "choices": [
                  "2(x + 4)",
                  "2(x + 8)",
                  "x(2 + 8)",
                  "2x(1 + 4)"
                ],
                "answer": "2(x + 4)",
                "explain": "The GCF is 2: pull it out to get 2(x + 4). Check: 2*x + 2*4 = 2x + 8.",
                "hints": [
                  "Find the largest number dividing both 2x and 8.",
                  "Pull a 2 out and ask what's left inside.",
                  "2(__ + __): divide each term by 2."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l1-p3",
                "type": "input",
                "prompt": "Factor 5x^2 + 15x as 5x(x + ?). What goes in the blank?",
                "answer": "3",
                "accept": [
                  "3",
                  "+3"
                ],
                "explain": "Dividing 15x by 5x gives 3, so the factored form is 5x(x + 3).",
                "hints": [
                  "The GCF 5x is already pulled out; focus on the second term.",
                  "Divide 15x by the GCF 5x.",
                  "15x / 5x = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l1-p4",
                "type": "mc",
                "prompt": "Factor out the GCF: 12x^2 - 8x",
                "choices": [
                  "4x(3x - 2)",
                  "4(3x^2 - 2x)",
                  "2x(6x - 4)",
                  "4x(3x - 8)"
                ],
                "answer": "4x(3x - 2)",
                "explain": "GCF is 4x: 12x^2/4x = 3x and 8x/4x = 2, giving 4x(3x - 2).",
                "hints": [
                  "Find the biggest number dividing 12 and 8, and the shared variable.",
                  "The GCF should be the LARGEST common factor, so fully simplify.",
                  "Pull out 4x, then divide each term by 4x."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l1-p5",
                "type": "input",
                "prompt": "What is the GCF of 10x^3, 15x^2, and 25x? (give just the coefficient)",
                "answer": "5",
                "accept": [
                  "5",
                  "5x"
                ],
                "explain": "The largest number dividing 10, 15, and 25 is 5 (and they share an x), so 5x is the GCF.",
                "hints": [
                  "Find the biggest number that divides all three coefficients.",
                  "List factors of 10, 15, and 25 and find the largest shared one.",
                  "5 divides 10, 15, and 25 evenly."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: 3(x + 2) is the fully factored form of 3x + 6.",
                "answer": "true",
                "explain": "True! The GCF is 3, and 3(x + 2) multiplies back to 3x + 6.",
                "hints": [
                  "Check by distributing the 3 back in.",
                  "Multiply 3 * x and 3 * 2 and see if you recover the original.",
                  "3*x + 3*2 = 3x + 6, so the statement holds."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u2-l2",
            "title": "Cracking Trinomials",
            "icon": "💎",
            "intro": "For x^2 + bx + c, find two numbers that MULTIPLY to c and ADD to b. They become the binomial pair. This is the gem of factoring!",
            "problems": [
              {
                "id": "quadratic-quarry-u2-l2-p1",
                "type": "mc",
                "prompt": "Factor: x^2 + 5x + 6",
                "choices": [
                  "(x + 2)(x + 3)",
                  "(x + 1)(x + 6)",
                  "(x + 2)(x + 4)",
                  "(x - 2)(x - 3)"
                ],
                "answer": "(x + 2)(x + 3)",
                "explain": "2 and 3 multiply to 6 and add to 5, so (x + 2)(x + 3).",
                "hints": [
                  "You need two numbers with a product of 6 and a sum of 5.",
                  "List factor pairs of 6: 1&6, 2&3. Which pair sums to 5?",
                  "2 * 3 = 6 and 2 + 3 = 5, so use those numbers."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l2-p2",
                "type": "mc",
                "prompt": "Factor: x^2 + 7x + 12",
                "choices": [
                  "(x + 3)(x + 4)",
                  "(x + 2)(x + 6)",
                  "(x + 1)(x + 12)",
                  "(x + 3)(x + 5)"
                ],
                "answer": "(x + 3)(x + 4)",
                "explain": "3 and 4 multiply to 12 and add to 7, giving (x + 3)(x + 4).",
                "hints": [
                  "Find two numbers multiplying to 12 and adding to 7.",
                  "Factor pairs of 12: 1&12, 2&6, 3&4. Which sums to 7?",
                  "3 * 4 = 12 and 3 + 4 = 7."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l2-p3",
                "type": "input",
                "prompt": "Factor x^2 - 2x - 8 as (x - 4)(x + ?). What number goes in the blank?",
                "answer": "2",
                "accept": [
                  "2",
                  "+2"
                ],
                "explain": "-4 and +2 multiply to -8 and add to -2, so the second factor is (x + 2).",
                "hints": [
                  "You need two numbers that multiply to -8 and add to -2.",
                  "One factor is -4; what pairs with it to multiply to -8?",
                  "-4 * (?) = -8, so the missing number is +2."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l2-p4",
                "type": "mc",
                "prompt": "Factor: x^2 - 7x + 10",
                "choices": [
                  "(x - 2)(x - 5)",
                  "(x + 2)(x + 5)",
                  "(x - 1)(x - 10)",
                  "(x - 2)(x + 5)"
                ],
                "answer": "(x - 2)(x - 5)",
                "explain": "-2 and -5 multiply to +10 and add to -7, giving (x - 2)(x - 5).",
                "hints": [
                  "Product is +10 (positive) but sum is -7 (negative), so both numbers are negative.",
                  "Negative factor pairs of 10: -1&-10, -2&-5. Which sums to -7?",
                  "-2 * -5 = 10 and -2 + -5 = -7."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l2-p5",
                "type": "mc",
                "prompt": "Factor: x^2 + 2x - 15",
                "choices": [
                  "(x + 5)(x - 3)",
                  "(x - 5)(x + 3)",
                  "(x + 5)(x + 3)",
                  "(x + 15)(x - 1)"
                ],
                "answer": "(x + 5)(x - 3)",
                "explain": "+5 and -3 multiply to -15 and add to +2, giving (x + 5)(x - 3).",
                "hints": [
                  "Product is -15 (so signs differ) and sum is +2.",
                  "The bigger number should be positive since the sum is positive.",
                  "+5 * -3 = -15 and +5 + (-3) = +2."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l2-p6",
                "type": "input",
                "prompt": "For x^2 + 9x + 20, the two numbers that multiply to 20 and add to 9 are 4 and ?",
                "answer": "5",
                "accept": [
                  "5",
                  "+5"
                ],
                "explain": "4 and 5 multiply to 20 and add to 9, so it factors as (x + 4)(x + 5).",
                "hints": [
                  "The two numbers must multiply to 20 and add to 9.",
                  "One number is 4; what adds to 9 with it?",
                  "4 + (?) = 9, so the partner is 5 (and 4*5 = 20)."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u2-l3",
            "title": "Difference of Squares",
            "icon": "🔱",
            "intro": "A special sparkly pattern: a^2 - b^2 always factors into (a + b)(a - b). Spot two perfect squares with a minus between them and you're golden!",
            "problems": [
              {
                "id": "quadratic-quarry-u2-l3-p1",
                "type": "mc",
                "prompt": "Factor: x^2 - 9",
                "choices": [
                  "(x + 3)(x - 3)",
                  "(x - 3)(x - 3)",
                  "(x + 9)(x - 1)",
                  "(x + 3)(x + 3)"
                ],
                "answer": "(x + 3)(x - 3)",
                "explain": "9 = 3^2, so x^2 - 9 = (x + 3)(x - 3) by the difference of squares.",
                "hints": [
                  "Both x^2 and 9 are perfect squares with a minus between them.",
                  "The pattern is a^2 - b^2 = (a + b)(a - b).",
                  "Here a = x and b = 3, so write (x + 3)(x - 3)."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l3-p2",
                "type": "mc",
                "prompt": "Factor: x^2 - 25",
                "choices": [
                  "(x + 5)(x - 5)",
                  "(x - 5)(x - 5)",
                  "(x + 25)(x - 1)",
                  "(x + 5)(x + 5)"
                ],
                "answer": "(x + 5)(x - 5)",
                "explain": "25 = 5^2, so x^2 - 25 = (x + 5)(x - 5).",
                "hints": [
                  "25 is a perfect square; what number squared gives 25?",
                  "Use a^2 - b^2 = (a + b)(a - b).",
                  "a = x, b = 5, so (x + 5)(x - 5)."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l3-p3",
                "type": "truefalse",
                "prompt": "True or false: x^2 + 16 can be factored as a difference of squares.",
                "answer": "false",
                "explain": "False! Difference of squares needs a MINUS sign. x^2 + 16 is a SUM, so it doesn't factor this way.",
                "hints": [
                  "Check the sign between the two terms.",
                  "The pattern requires subtraction, not addition.",
                  "x^2 + 16 has a plus, so the difference-of-squares pattern fails."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l3-p4",
                "type": "mc",
                "prompt": "Factor: 4x^2 - 1",
                "choices": [
                  "(2x + 1)(2x - 1)",
                  "(4x + 1)(x - 1)",
                  "(2x - 1)(2x - 1)",
                  "(2x + 1)(2x + 1)"
                ],
                "answer": "(2x + 1)(2x - 1)",
                "explain": "4x^2 = (2x)^2 and 1 = 1^2, so it's (2x + 1)(2x - 1).",
                "hints": [
                  "Both 4x^2 and 1 are perfect squares.",
                  "The square root of 4x^2 is 2x, and the square root of 1 is 1.",
                  "Use a = 2x, b = 1: (2x + 1)(2x - 1)."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l3-p5",
                "type": "input",
                "prompt": "Factor x^2 - 49 as (x + 7)(x - ?). What number goes in the blank?",
                "answer": "7",
                "accept": [
                  "7",
                  "+7"
                ],
                "explain": "49 = 7^2, so x^2 - 49 = (x + 7)(x - 7).",
                "hints": [
                  "49 is a perfect square; find its square root.",
                  "Difference of squares gives matching numbers with opposite signs.",
                  "Since 7^2 = 49, the missing number is 7."
                ]
              },
              {
                "id": "quadratic-quarry-u2-l3-p6",
                "type": "mc",
                "prompt": "First take out the GCF, then factor: 2x^2 - 18",
                "choices": [
                  "2(x + 3)(x - 3)",
                  "(2x + 6)(x - 3)",
                  "2(x - 3)(x - 3)",
                  "(x + 3)(2x - 6)"
                ],
                "answer": "2(x + 3)(x - 3)",
                "explain": "Factor out 2 to get 2(x^2 - 9), then x^2 - 9 = (x + 3)(x - 3): 2(x + 3)(x - 3).",
                "hints": [
                  "Both terms share a common factor before any squares appear.",
                  "Pull out the GCF of 2 first: 2(x^2 - 9).",
                  "Now factor x^2 - 9 as a difference of squares."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "quadratic-quarry-u3",
        "title": "Solving the Bedrock",
        "lessons": [
          {
            "id": "quadratic-quarry-u3-l1",
            "title": "Solve by Factoring",
            "icon": "🧩",
            "intro": "To solve a quadratic, get it equal to 0, factor, then use the Zero Product Property: if A*B = 0, then A = 0 or B = 0. Each factor hands you a root!",
            "problems": [
              {
                "id": "quadratic-quarry-u3-l1-p1",
                "type": "mc",
                "prompt": "Solve: (x - 2)(x + 3) = 0",
                "choices": [
                  "x = 2 or x = -3",
                  "x = -2 or x = 3",
                  "x = 2 or x = 3",
                  "x = -2 or x = -3"
                ],
                "answer": "x = 2 or x = -3",
                "explain": "Set each factor to 0: x - 2 = 0 gives x = 2, and x + 3 = 0 gives x = -3.",
                "hints": [
                  "A product equals 0 only when one of the factors is 0.",
                  "Set each parenthesis equal to 0 separately.",
                  "x - 2 = 0 means x = 2; x + 3 = 0 means x = -3."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l1-p2",
                "type": "mc",
                "prompt": "Solve: x^2 - 5x + 6 = 0",
                "choices": [
                  "x = 2 or x = 3",
                  "x = -2 or x = -3",
                  "x = 1 or x = 6",
                  "x = 5 or x = 6"
                ],
                "answer": "x = 2 or x = 3",
                "explain": "Factor to (x - 2)(x - 3) = 0, so x = 2 or x = 3.",
                "hints": [
                  "First factor the trinomial: two numbers multiply to 6 and add to -5.",
                  "It factors to (x - 2)(x - 3).",
                  "Set each factor to 0: x = 2 and x = 3."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l1-p3",
                "type": "input",
                "prompt": "Solve x^2 - 16 = 0. Give the positive solution.",
                "answer": "4",
                "accept": [
                  "4",
                  "x=4",
                  "+4"
                ],
                "explain": "x^2 - 16 = (x + 4)(x - 4) = 0, so x = 4 or x = -4. The positive root is 4.",
                "hints": [
                  "This is a difference of squares set equal to 0.",
                  "Factor into (x + 4)(x - 4) = 0.",
                  "The two roots are 4 and -4; pick the positive one."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l1-p4",
                "type": "mc",
                "prompt": "Solve: x^2 + 2x - 8 = 0",
                "choices": [
                  "x = 2 or x = -4",
                  "x = -2 or x = 4",
                  "x = 2 or x = 4",
                  "x = -2 or x = -4"
                ],
                "answer": "x = 2 or x = -4",
                "explain": "Factor to (x - 2)(x + 4) = 0, so x = 2 or x = -4.",
                "hints": [
                  "Find two numbers that multiply to -8 and add to +2.",
                  "It factors to (x - 2)(x + 4).",
                  "Set each to 0: x = 2 and x = -4."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l1-p5",
                "type": "input",
                "prompt": "Solve x^2 - 6x = 0 by factoring. Give the nonzero solution.",
                "answer": "6",
                "accept": [
                  "6",
                  "x=6",
                  "+6"
                ],
                "explain": "Factor out x: x(x - 6) = 0, so x = 0 or x = 6. The nonzero root is 6.",
                "hints": [
                  "There's no constant term, so a GCF will factor this fast.",
                  "Pull out the common x: x(x - 6) = 0.",
                  "One root is 0; the other comes from x - 6 = 0."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l1-p6",
                "type": "mc",
                "prompt": "Solve: 2x^2 + 5x - 3 = 0",
                "choices": [
                  "x = 1/2 or x = -3",
                  "x = -1/2 or x = 3",
                  "x = 1 or x = -3",
                  "x = 2 or x = -3"
                ],
                "answer": "x = 1/2 or x = -3",
                "explain": "It factors to (2x - 1)(x + 3) = 0, giving x = 1/2 or x = -3.",
                "hints": [
                  "A leading coefficient of 2 means try factors like (2x ...)(x ...).",
                  "It factors to (2x - 1)(x + 3).",
                  "2x - 1 = 0 gives x = 1/2; x + 3 = 0 gives x = -3."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u3-l2",
            "title": "Quadratic Formula & Discriminant",
            "icon": "🧪",
            "intro": "When factoring won't budge, the quadratic formula x = (-b ± sqrt(b^2 - 4ac)) / (2a) always works. The discriminant b^2 - 4ac tells you how many real roots to expect!",
            "problems": [
              {
                "id": "quadratic-quarry-u3-l2-p1",
                "type": "input",
                "prompt": "For x^2 - 5x + 6 = 0, identify the value of b.",
                "answer": "-5",
                "accept": [
                  "-5"
                ],
                "explain": "In ax^2 + bx + c, the b is the coefficient of x, which is -5 here.",
                "hints": [
                  "Match the equation to ax^2 + bx + c.",
                  "b is the number attached to the single x term, sign included.",
                  "The x-term is -5x, so b = -5."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l2-p2",
                "type": "mc",
                "prompt": "Compute the discriminant b^2 - 4ac for x^2 + 2x - 8 = 0 (a=1, b=2, c=-8).",
                "choices": [
                  "36",
                  "4",
                  "-30",
                  "-28"
                ],
                "answer": "36",
                "explain": "b^2 - 4ac = 2^2 - 4(1)(-8) = 4 + 32 = 36.",
                "hints": [
                  "Plug a=1, b=2, c=-8 into b^2 - 4ac carefully.",
                  "Watch the signs: -4 * 1 * (-8) becomes +32.",
                  "4 + 32 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l2-p3",
                "type": "mc",
                "prompt": "The discriminant of a quadratic is 0. How many real solutions does it have?",
                "choices": [
                  "Exactly one (a repeated root)",
                  "Two different real solutions",
                  "No real solutions",
                  "Infinitely many"
                ],
                "answer": "Exactly one (a repeated root)",
                "explain": "When b^2 - 4ac = 0, the ± part vanishes, giving one repeated real root.",
                "hints": [
                  "The discriminant sits under the square root in the formula.",
                  "If that value is 0, the ± adds and subtracts nothing.",
                  "Zero under the root means both formula branches give the same answer."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l2-p4",
                "type": "truefalse",
                "prompt": "True or false: if the discriminant is negative, the quadratic has no real solutions.",
                "answer": "true",
                "explain": "True! A negative under the square root means no real roots (the solutions are complex).",
                "hints": [
                  "Think about what sqrt of a negative number does in the real numbers.",
                  "You can't take a real square root of a negative value.",
                  "Negative discriminant means no real roots."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l2-p5",
                "type": "mc",
                "prompt": "How many real solutions does x^2 + x + 1 = 0 have? (a=1, b=1, c=1)",
                "choices": [
                  "None",
                  "One",
                  "Two",
                  "Three"
                ],
                "answer": "None",
                "explain": "Discriminant = 1^2 - 4(1)(1) = 1 - 4 = -3, which is negative, so there are no real solutions.",
                "hints": [
                  "Find b^2 - 4ac first, then judge by its sign.",
                  "1 - 4 gives a negative number.",
                  "A negative discriminant means zero real solutions."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l2-p6",
                "type": "mc",
                "prompt": "Solve with the quadratic formula: x^2 - 2x - 1 = 0",
                "choices": [
                  "x = 1 ± sqrt(2)",
                  "x = 2 ± sqrt(2)",
                  "x = -1 ± sqrt(2)",
                  "x = 1 ± sqrt(8)"
                ],
                "answer": "x = 1 ± sqrt(2)",
                "explain": "x = (2 ± sqrt(4 + 4)) / 2 = (2 ± sqrt(8)) / 2 = (2 ± 2sqrt(2)) / 2 = 1 ± sqrt(2).",
                "hints": [
                  "Use a=1, b=-2, c=-1 in x = (-b ± sqrt(b^2-4ac))/(2a).",
                  "The discriminant is 4 + 4 = 8, and sqrt(8) = 2sqrt(2).",
                  "(2 ± 2sqrt(2))/2 simplifies by dividing each part by 2."
                ]
              }
            ]
          },
          {
            "id": "quadratic-quarry-u3-l3",
            "title": "Radicals & Function Notation",
            "icon": "📐",
            "intro": "Final stretch! Simplify radicals by pulling out perfect-square factors, and read function notation like f(x) as 'plug a value in for x.' Let's polish those gems!",
            "problems": [
              {
                "id": "quadratic-quarry-u3-l3-p1",
                "type": "mc",
                "prompt": "Simplify: sqrt(50)",
                "choices": [
                  "5sqrt(2)",
                  "2sqrt(5)",
                  "25sqrt(2)",
                  "10sqrt(5)"
                ],
                "answer": "5sqrt(2)",
                "explain": "50 = 25 * 2, and sqrt(25) = 5, so sqrt(50) = 5sqrt(2).",
                "hints": [
                  "Look for a perfect-square factor hiding inside 50.",
                  "50 = 25 * 2, and 25 is a perfect square.",
                  "sqrt(25)*sqrt(2) = 5sqrt(2)."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l3-p2",
                "type": "input",
                "prompt": "Simplify sqrt(72) to the form a*sqrt(2). What is a?",
                "answer": "6",
                "accept": [
                  "6",
                  "6sqrt(2)",
                  "6sqrt2"
                ],
                "explain": "72 = 36 * 2 and sqrt(36) = 6, so sqrt(72) = 6sqrt(2).",
                "hints": [
                  "Find the largest perfect square that divides 72.",
                  "72 = 36 * 2, and 36 is a perfect square.",
                  "sqrt(36) = 6, so a = 6."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l3-p3",
                "type": "mc",
                "prompt": "Simplify: sqrt(48)",
                "choices": [
                  "4sqrt(3)",
                  "3sqrt(4)",
                  "2sqrt(12)",
                  "16sqrt(3)"
                ],
                "answer": "4sqrt(3)",
                "explain": "48 = 16 * 3 and sqrt(16) = 4, so sqrt(48) = 4sqrt(3).",
                "hints": [
                  "Search for the biggest perfect square that divides 48.",
                  "48 = 16 * 3, and 16 is a perfect square.",
                  "sqrt(16)*sqrt(3) = 4sqrt(3)."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l3-p4",
                "type": "input",
                "prompt": "If f(x) = 2x + 3, find f(4).",
                "answer": "11",
                "accept": [
                  "11",
                  "f(4)=11"
                ],
                "explain": "Substitute 4 for x: 2(4) + 3 = 8 + 3 = 11.",
                "hints": [
                  "f(4) means replace every x with 4.",
                  "Compute 2 times 4, then add 3.",
                  "2(4) + 3 = 8 + 3 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l3-p5",
                "type": "mc",
                "prompt": "If g(x) = x^2 - 1, what is g(3)?",
                "choices": [
                  "8",
                  "5",
                  "9",
                  "6"
                ],
                "answer": "8",
                "explain": "Substitute 3 for x: 3^2 - 1 = 9 - 1 = 8.",
                "hints": [
                  "g(3) means plug 3 in wherever you see x.",
                  "Square the 3 first, then subtract 1.",
                  "3^2 = 9, then 9 - 1 = ..."
                ]
              },
              {
                "id": "quadratic-quarry-u3-l3-p6",
                "type": "input",
                "prompt": "If f(x) = x^2 - 2x, find f(-3).",
                "answer": "15",
                "accept": [
                  "15",
                  "f(-3)=15"
                ],
                "explain": "Substitute -3: (-3)^2 - 2(-3) = 9 + 6 = 15. Watch those negative signs!",
                "hints": [
                  "Replace every x with -3, keeping the parentheses.",
                  "Remember (-3)^2 is positive 9, and -2(-3) is +6.",
                  "9 + 6 = ..."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "trig-tower",
    "title": "Trig Tower",
    "subtitle": "Trig & Precalculus",
    "color": "#F472B6",
    "icon": "🗼",
    "blurb": "Climb a glittering tower of triangles, spinning circles, and shape-shifting functions until you reach the precalculus penthouse!",
    "units": [
      {
        "id": "trig-tower-u1",
        "title": "Triangle Base Camp",
        "lessons": [
          {
            "id": "trig-tower-u1-l1",
            "title": "Meet the Right Triangle",
            "icon": "📐",
            "intro": "Welcome to the Tower! Every step up starts with a right triangle. Let's learn to spot its parts so nothing trips us later.",
            "problems": [
              {
                "id": "trig-tower-u1-l1-p1",
                "type": "mc",
                "prompt": "In a right triangle, the side opposite the right angle (the longest side) is called the...?",
                "choices": [
                  "hypotenuse",
                  "opposite",
                  "adjacent",
                  "altitude"
                ],
                "answer": "hypotenuse",
                "explain": "Nice! The hypotenuse always sits across from the 90 degree angle and is the longest side.",
                "hints": [
                  "Look for the side that never touches the right angle's corner.",
                  "It's the longest side, and it has a special name we use all the time in trig.",
                  "Picture a ramp: the slanted long side leaning across from the square corner is the hypo..."
                ]
              },
              {
                "id": "trig-tower-u1-l1-p2",
                "type": "truefalse",
                "prompt": "True or false: a right triangle always has exactly one 90 degree angle.",
                "answer": "true",
                "explain": "Right you are! 'Right triangle' means one right angle of 90 degrees, and a triangle can only fit one.",
                "hints": [
                  "Think about what the word 'right' is describing here.",
                  "A triangle's three angles add to 180 degrees, so could it hold two 90s?",
                  "Two 90s would already use up 180 degrees, leaving nothing for the third angle."
                ]
              },
              {
                "id": "trig-tower-u1-l1-p3",
                "type": "mc",
                "prompt": "For the angle marked A, the side touching A (but not the hypotenuse) is the...?",
                "choices": [
                  "adjacent side",
                  "opposite side",
                  "hypotenuse",
                  "median"
                ],
                "answer": "adjacent side",
                "explain": "Exactly! 'Adjacent' means next to. It's the leg that touches angle A and isn't the hypotenuse.",
                "hints": [
                  "The word 'adjacent' just means 'next to'.",
                  "Which leg actually touches angle A's corner without being the long slanted side?",
                  "Find the two sides meeting at A, then rule out the hypotenuse."
                ]
              },
              {
                "id": "trig-tower-u1-l1-p4",
                "type": "mc",
                "prompt": "For angle A, the side that is across from A (not touching it) is the...?",
                "choices": [
                  "opposite side",
                  "adjacent side",
                  "hypotenuse",
                  "base"
                ],
                "answer": "opposite side",
                "explain": "You got it! The opposite side faces angle A from across the triangle.",
                "hints": [
                  "Which side does NOT touch angle A at all?",
                  "If a side shares a corner with A, it can't be the opposite one.",
                  "Trace away from A across the triangle to the side it stares at."
                ]
              },
              {
                "id": "trig-tower-u1-l1-p5",
                "type": "input",
                "prompt": "The two shorter sides of a right triangle (not the hypotenuse) are each called a what? (one word)",
                "answer": "leg",
                "accept": [
                  "leg",
                  "legs",
                  "a leg",
                  "Leg",
                  "Legs"
                ],
                "explain": "Perfect! The two shorter sides are the legs, and the long one is the hypotenuse.",
                "hints": [
                  "It's a body-part word we also use for tables.",
                  "There are two of them and they form the right angle's corner.",
                  "Think of what a table stands on... each short side is a ___."
                ]
              },
              {
                "id": "trig-tower-u1-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: which leg is 'opposite' and which is 'adjacent' depends on which angle you are looking from.",
                "answer": "true",
                "explain": "Yes! Switch your focus to the other angle and the opposite and adjacent legs swap. Labels follow your angle.",
                "hints": [
                  "Try imagining the same triangle but staring from a different corner.",
                  "Opposite and adjacent are described relative to one chosen angle.",
                  "Pick angle A, name the sides; now pick the other angle and see if they change."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u1-l2",
            "title": "SOH-CAH-TOA",
            "icon": "🔺",
            "intro": "Time for trig's magic words: SOH-CAH-TOA. They tell us how to build sine, cosine, and tangent from a triangle's sides.",
            "problems": [
              {
                "id": "trig-tower-u1-l2-p1",
                "type": "mc",
                "prompt": "SOH means: sine = ? / hypotenuse",
                "choices": [
                  "opposite",
                  "adjacent",
                  "hypotenuse",
                  "tangent"
                ],
                "answer": "opposite",
                "explain": "Yes! SOH: Sine = Opposite / Hypotenuse. The S, O, H line up in order.",
                "hints": [
                  "Spell out S-O-H and match each letter to a side name.",
                  "The middle letter O stands for the top of the fraction.",
                  "Sine = O... / Hypotenuse, and O is short for one of our side words."
                ]
              },
              {
                "id": "trig-tower-u1-l2-p2",
                "type": "mc",
                "prompt": "CAH means: cosine = adjacent / ?",
                "choices": [
                  "hypotenuse",
                  "opposite",
                  "adjacent",
                  "leg"
                ],
                "answer": "hypotenuse",
                "explain": "Correct! CAH: Cosine = Adjacent / Hypotenuse.",
                "hints": [
                  "Read C-A-H left to right as cosine, top, bottom.",
                  "The last letter H is the denominator.",
                  "Cosine = Adjacent / H..., and H is our longest side."
                ]
              },
              {
                "id": "trig-tower-u1-l2-p3",
                "type": "mc",
                "prompt": "TOA means: tangent = opposite / ?",
                "choices": [
                  "adjacent",
                  "hypotenuse",
                  "opposite",
                  "sine"
                ],
                "answer": "adjacent",
                "explain": "Nice! TOA: Tangent = Opposite / Adjacent. Tangent skips the hypotenuse entirely.",
                "hints": [
                  "Spell T-O-A: tangent, top, bottom.",
                  "The last letter A is the denominator here.",
                  "Tangent = Opposite / A..., and A is the leg touching the angle."
                ]
              },
              {
                "id": "trig-tower-u1-l2-p4",
                "type": "input",
                "prompt": "A right triangle has opposite = 3, hypotenuse = 5 for angle A. What is sin(A) as a decimal?",
                "answer": "0.6",
                "accept": [
                  "0.6",
                  ".6",
                  "3/5",
                  "0.60",
                  "0,6"
                ],
                "explain": "Sine = opposite / hypotenuse = 3/5 = 0.6. The famous 3-4-5 triangle strikes again!",
                "hints": [
                  "Which formula uses opposite over hypotenuse?",
                  "SOH tells you sin = opposite / hypotenuse.",
                  "Plug in 3 over 5, then divide it out."
                ]
              },
              {
                "id": "trig-tower-u1-l2-p5",
                "type": "input",
                "prompt": "Same triangle: adjacent = 4, hypotenuse = 5. What is cos(A) as a decimal?",
                "answer": "0.8",
                "accept": [
                  "0.8",
                  ".8",
                  "4/5",
                  "0.80",
                  "0,8"
                ],
                "explain": "Cosine = adjacent / hypotenuse = 4/5 = 0.8. You're reading triangles like a pro!",
                "hints": [
                  "CAH is the one you need here.",
                  "Cosine = adjacent / hypotenuse.",
                  "Set up 4 over 5, then divide."
                ]
              },
              {
                "id": "trig-tower-u1-l2-p6",
                "type": "input",
                "prompt": "With opposite = 3 and adjacent = 4, what is tan(A) as a fraction or decimal?",
                "answer": "0.75",
                "accept": [
                  "0.75",
                  ".75",
                  "3/4",
                  "0.750",
                  "0,75"
                ],
                "explain": "Tangent = opposite / adjacent = 3/4 = 0.75. TOA delivers again!",
                "hints": [
                  "Tangent doesn't use the hypotenuse at all.",
                  "TOA: tan = opposite / adjacent.",
                  "Put 3 over 4 and you can leave it as 3/4 or divide to 0.75."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u1-l3",
            "title": "The Pythagorean Climb",
            "icon": "🧗",
            "intro": "Before we trust our triangle sides, let's lock them in with a^2 + b^2 = c^2. It's the Tower's safety rope.",
            "problems": [
              {
                "id": "trig-tower-u1-l3-p1",
                "type": "input",
                "prompt": "Legs are 3 and 4. Find the hypotenuse c. (a^2 + b^2 = c^2)",
                "answer": "5",
                "accept": [
                  "5",
                  "5.0",
                  "five"
                ],
                "explain": "3^2 + 4^2 = 9 + 16 = 25, and sqrt(25) = 5. The classic 3-4-5!",
                "hints": [
                  "Square each leg first, then think about what to do with the sum.",
                  "Compute 3^2 + 4^2, then take the square root of the total.",
                  "9 + 16 = 25, so c = sqrt(25)."
                ]
              },
              {
                "id": "trig-tower-u1-l3-p2",
                "type": "input",
                "prompt": "Legs are 6 and 8. Find the hypotenuse c.",
                "answer": "10",
                "accept": [
                  "10",
                  "10.0",
                  "ten"
                ],
                "explain": "6^2 + 8^2 = 36 + 64 = 100, and sqrt(100) = 10. That's a scaled-up 3-4-5!",
                "hints": [
                  "Same recipe: square the legs and add.",
                  "Find 6^2 + 8^2, then square-root the result.",
                  "36 + 64 = 100, so c = sqrt(100)."
                ]
              },
              {
                "id": "trig-tower-u1-l3-p3",
                "type": "input",
                "prompt": "The hypotenuse is 13 and one leg is 5. Find the other leg b.",
                "answer": "12",
                "accept": [
                  "12",
                  "12.0",
                  "twelve"
                ],
                "explain": "13^2 - 5^2 = 169 - 25 = 144, and sqrt(144) = 12. The 5-12-13 triangle!",
                "hints": [
                  "Here you know c, so rearrange to b^2 = c^2 - a^2.",
                  "Compute 13^2 - 5^2, then take the square root.",
                  "169 - 25 = 144, so b = sqrt(144)."
                ]
              },
              {
                "id": "trig-tower-u1-l3-p4",
                "type": "truefalse",
                "prompt": "True or false: a triangle with sides 5, 12, 13 is a right triangle.",
                "answer": "true",
                "explain": "Check it: 5^2 + 12^2 = 25 + 144 = 169 = 13^2. The Pythagorean theorem holds, so it's right!",
                "hints": [
                  "Test whether the two shorter sides squared add to the longest squared.",
                  "Compute 5^2 + 12^2 and compare to 13^2.",
                  "25 + 144 = 169; does that equal 13^2?"
                ]
              },
              {
                "id": "trig-tower-u1-l3-p5",
                "type": "mc",
                "prompt": "An isosceles right triangle has legs of 1 each. What is its hypotenuse?",
                "choices": [
                  "sqrt(2)",
                  "2",
                  "1",
                  "sqrt(3)"
                ],
                "answer": "sqrt(2)",
                "explain": "1^2 + 1^2 = 2, so c = sqrt(2). This 45-45-90 triangle shows up everywhere in the unit circle!",
                "hints": [
                  "Add the squares of the two equal legs.",
                  "1^2 + 1^2 gives you c^2.",
                  "c^2 = 2, so c = the square root of 2."
                ]
              },
              {
                "id": "trig-tower-u1-l3-p6",
                "type": "input",
                "prompt": "A 30-60-90 triangle has its short leg = 1 and hypotenuse = 2. Find the long leg. (Answer like sqrt(3).)",
                "answer": "sqrt(3)",
                "accept": [
                  "sqrt(3)",
                  "sqrt3",
                  "root 3",
                  "1.732",
                  "√3",
                  "sqrt 3",
                  "1.73"
                ],
                "explain": "2^2 - 1^2 = 4 - 1 = 3, so the long leg is sqrt(3). The 30-60-90 sides are 1, sqrt(3), 2.",
                "hints": [
                  "You know the hypotenuse and short leg, so solve for the missing leg.",
                  "Use b^2 = c^2 - a^2 = 2^2 - 1^2.",
                  "4 - 1 = 3, so b = sqrt(3)."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "trig-tower-u2",
        "title": "The Spinning Unit Circle",
        "lessons": [
          {
            "id": "trig-tower-u2-l1",
            "title": "Degrees Meet Radians",
            "icon": "🔄",
            "intro": "The Tower spins on a circle of radius 1. To measure that spin we use degrees AND radians. Let's translate between them!",
            "problems": [
              {
                "id": "trig-tower-u2-l1-p1",
                "type": "input",
                "prompt": "How many degrees are in a full circle?",
                "answer": "360",
                "accept": [
                  "360",
                  "360 degrees",
                  "360°",
                  "360 degree"
                ],
                "explain": "A full trip around is 360 degrees. That's our home base for every angle.",
                "hints": [
                  "Think of a clock hand sweeping all the way around once.",
                  "It's the number of degrees in one complete rotation.",
                  "It ends in two zeros and starts with a 3..."
                ]
              },
              {
                "id": "trig-tower-u2-l1-p2",
                "type": "mc",
                "prompt": "A full circle in radians is...?",
                "choices": [
                  "2pi",
                  "pi",
                  "pi/2",
                  "4pi"
                ],
                "answer": "2pi",
                "explain": "One full circle is 2pi radians, the same spin as 360 degrees.",
                "hints": [
                  "Radians measure the arc length around a radius-1 circle.",
                  "The whole circumference of a unit circle is 2 times pi.",
                  "It's pi multiplied by 2."
                ]
              },
              {
                "id": "trig-tower-u2-l1-p3",
                "type": "mc",
                "prompt": "What is 180 degrees in radians?",
                "choices": [
                  "pi",
                  "2pi",
                  "pi/2",
                  "pi/3"
                ],
                "answer": "pi",
                "explain": "Half a circle is 180 degrees = pi radians. So pi radians equals a straight line of rotation.",
                "hints": [
                  "180 degrees is half of a full circle.",
                  "If 360 degrees = 2pi, what's half of 2pi?",
                  "Half of 2pi is just pi."
                ]
              },
              {
                "id": "trig-tower-u2-l1-p4",
                "type": "mc",
                "prompt": "What is 90 degrees in radians?",
                "choices": [
                  "pi/2",
                  "pi",
                  "pi/4",
                  "2pi"
                ],
                "answer": "pi/2",
                "explain": "90 degrees is a quarter circle, which is 2pi/4 = pi/2 radians.",
                "hints": [
                  "90 degrees is a quarter of a full turn.",
                  "A quarter of 2pi radians is 2pi divided by 4.",
                  "2pi/4 simplifies to pi/2."
                ]
              },
              {
                "id": "trig-tower-u2-l1-p5",
                "type": "input",
                "prompt": "To convert degrees to radians, multiply by pi/180. Convert 45 degrees to radians (answer like pi/4).",
                "answer": "pi/4",
                "accept": [
                  "pi/4",
                  "pi / 4",
                  "π/4",
                  "0.785",
                  "0.7854",
                  "π / 4"
                ],
                "explain": "45 * pi/180 = 45pi/180 = pi/4. That's the 45-45-90 angle in radians!",
                "hints": [
                  "Set up 45 times pi/180.",
                  "That gives 45pi/180; now simplify the fraction 45/180.",
                  "45/180 reduces to 1/4, so you get pi/4."
                ]
              },
              {
                "id": "trig-tower-u2-l1-p6",
                "type": "input",
                "prompt": "To convert radians to degrees, multiply by 180/pi. Convert pi/3 radians to degrees.",
                "answer": "60",
                "accept": [
                  "60",
                  "60 degrees",
                  "60°",
                  "60 degree"
                ],
                "explain": "(pi/3)(180/pi) = 180/3 = 60 degrees. The pi cancels, leaving easy arithmetic.",
                "hints": [
                  "Multiply pi/3 by 180/pi and watch the pi's cancel.",
                  "After cancelling pi you're left with 180/3.",
                  "180 divided by 3 is..."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u2-l2",
            "title": "Special Angle Values",
            "icon": "✨",
            "intro": "A few angles show up constantly: 0, 30, 45, 60, 90 degrees. Memorize their sine and cosine and the whole circle opens up.",
            "problems": [
              {
                "id": "trig-tower-u2-l2-p1",
                "type": "input",
                "prompt": "What is sin(0 degrees)?",
                "answer": "0",
                "accept": [
                  "0",
                  "zero",
                  "0.0"
                ],
                "explain": "At 0 degrees the point sits at (1, 0). Sine is the y-coordinate, which is 0.",
                "hints": [
                  "On the unit circle, sine reads off the y-coordinate.",
                  "At 0 degrees the point is all the way to the right at (1, 0).",
                  "The height (y) of that point is 0."
                ]
              },
              {
                "id": "trig-tower-u2-l2-p2",
                "type": "input",
                "prompt": "What is cos(0 degrees)?",
                "answer": "1",
                "accept": [
                  "1",
                  "one",
                  "1.0"
                ],
                "explain": "At 0 degrees the point is (1, 0). Cosine is the x-coordinate, which is 1.",
                "hints": [
                  "Cosine reads off the x-coordinate on the unit circle.",
                  "At 0 degrees the point sits at the far right (1, 0).",
                  "The x-value there is 1."
                ]
              },
              {
                "id": "trig-tower-u2-l2-p3",
                "type": "mc",
                "prompt": "What is sin(30 degrees)?",
                "choices": [
                  "1/2",
                  "sqrt(2)/2",
                  "sqrt(3)/2",
                  "1"
                ],
                "answer": "1/2",
                "explain": "sin(30 degrees) = 1/2. It's the small one of the special trio (1/2, sqrt(2)/2, sqrt(3)/2).",
                "hints": [
                  "The special sines climb: 1/2, then sqrt(2)/2, then sqrt(3)/2 as the angle grows.",
                  "30 degrees is the smallest of 30/45/60, so it gets the smallest sine.",
                  "The smallest value in that list is one half."
                ]
              },
              {
                "id": "trig-tower-u2-l2-p4",
                "type": "mc",
                "prompt": "What is cos(60 degrees)?",
                "choices": [
                  "1/2",
                  "sqrt(3)/2",
                  "sqrt(2)/2",
                  "0"
                ],
                "answer": "1/2",
                "explain": "cos(60 degrees) = 1/2. Notice it equals sin(30 degrees) because 30 and 60 are complementary!",
                "hints": [
                  "Cosine shrinks as the angle grows from 0 to 90.",
                  "Try the identity cos(60) = sin(30).",
                  "sin(30) is 1/2, so cos(60) matches it."
                ]
              },
              {
                "id": "trig-tower-u2-l2-p5",
                "type": "mc",
                "prompt": "What is sin(45 degrees)?",
                "choices": [
                  "sqrt(2)/2",
                  "1/2",
                  "sqrt(3)/2",
                  "1"
                ],
                "answer": "sqrt(2)/2",
                "explain": "sin(45 degrees) = sqrt(2)/2 (about 0.707). At 45 degrees sine and cosine are equal.",
                "hints": [
                  "45 degrees is right in the middle of the special trio.",
                  "It comes from the 45-45-90 triangle with legs 1 and hypotenuse sqrt(2).",
                  "Opposite/hypotenuse = 1/sqrt(2) = sqrt(2)/2."
                ]
              },
              {
                "id": "trig-tower-u2-l2-p6",
                "type": "mc",
                "prompt": "What is tan(45 degrees)?",
                "choices": [
                  "1",
                  "0",
                  "sqrt(3)",
                  "1/2"
                ],
                "answer": "1",
                "explain": "tan(45) = sin(45)/cos(45) = (sqrt(2)/2)/(sqrt(2)/2) = 1. Equal sine and cosine make tangent 1.",
                "hints": [
                  "Tangent equals sine divided by cosine.",
                  "At 45 degrees, sine and cosine are the same value.",
                  "Any number divided by itself is 1."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u2-l3",
            "title": "The Pythagorean Identity",
            "icon": "⭕",
            "intro": "Here's the unit circle's secret heartbeat: sin^2 + cos^2 = 1 for every angle. Let's put it to work.",
            "problems": [
              {
                "id": "trig-tower-u2-l3-p1",
                "type": "mc",
                "prompt": "Which equation is the Pythagorean identity?",
                "choices": [
                  "sin^2(x) + cos^2(x) = 1",
                  "sin(x) + cos(x) = 1",
                  "sin^2(x) - cos^2(x) = 1",
                  "sin(x) * cos(x) = 1"
                ],
                "answer": "sin^2(x) + cos^2(x) = 1",
                "explain": "Yes! sin^2(x) + cos^2(x) = 1 comes straight from a^2 + b^2 = c^2 on the unit circle (c = 1).",
                "hints": [
                  "It mirrors a^2 + b^2 = c^2 with c = 1.",
                  "Both terms are squared and they ADD to something simple.",
                  "The squares of sine and cosine add up to 1."
                ]
              },
              {
                "id": "trig-tower-u2-l3-p2",
                "type": "truefalse",
                "prompt": "True or false: sin^2(x) + cos^2(x) = 1 is true for every angle x.",
                "answer": "true",
                "explain": "True! That's why it's called an identity. It holds for all angles, no exceptions.",
                "hints": [
                  "An 'identity' is an equation that's always true.",
                  "It comes from the unit circle, which works at every angle.",
                  "Every point on the radius-1 circle satisfies x^2 + y^2 = 1."
                ]
              },
              {
                "id": "trig-tower-u2-l3-p3",
                "type": "input",
                "prompt": "If sin(x) = 3/5, what is cos^2(x)? (use sin^2 + cos^2 = 1)",
                "answer": "16/25",
                "accept": [
                  "16/25",
                  "0.64",
                  ".64"
                ],
                "explain": "cos^2(x) = 1 - sin^2(x) = 1 - 9/25 = 16/25. Just subtract the sine squared from 1.",
                "hints": [
                  "Rearrange the identity to cos^2 = 1 - sin^2.",
                  "Square the sine: (3/5)^2 = 9/25.",
                  "1 - 9/25 = 25/25 - 9/25 = 16/25."
                ]
              },
              {
                "id": "trig-tower-u2-l3-p4",
                "type": "input",
                "prompt": "If sin(x) = 3/5 and cos(x) is positive, what is cos(x)?",
                "answer": "4/5",
                "accept": [
                  "4/5",
                  "0.8",
                  ".8",
                  "0.80"
                ],
                "explain": "cos^2(x) = 16/25, so cos(x) = sqrt(16/25) = 4/5 (positive). It's the 3-4-5 triangle on the circle!",
                "hints": [
                  "You already found cos^2(x) = 16/25; now take the square root.",
                  "sqrt(16/25) = sqrt(16)/sqrt(25).",
                  "sqrt(16) = 4 and sqrt(25) = 5."
                ]
              },
              {
                "id": "trig-tower-u2-l3-p5",
                "type": "input",
                "prompt": "If cos(x) = 0, what is sin^2(x)?",
                "answer": "1",
                "accept": [
                  "1",
                  "one",
                  "1.0"
                ],
                "explain": "sin^2(x) = 1 - cos^2(x) = 1 - 0 = 1. When cosine is 0 (like at 90 degrees), sine is at full strength.",
                "hints": [
                  "Use sin^2 = 1 - cos^2.",
                  "Plug in cos(x) = 0, so cos^2(x) = 0.",
                  "1 - 0 = 1."
                ]
              },
              {
                "id": "trig-tower-u2-l3-p6",
                "type": "truefalse",
                "prompt": "True or false: it is possible for sin(x) = 0.9 and cos(x) = 0.9 at the same angle.",
                "answer": "false",
                "explain": "False! 0.9^2 + 0.9^2 = 0.81 + 0.81 = 1.62, not 1. The identity forbids it.",
                "hints": [
                  "Test the pair against sin^2 + cos^2 = 1.",
                  "Square 0.9 twice and add: does it land on 1?",
                  "0.81 + 0.81 = 1.62, which is too big."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "trig-tower-u3",
        "title": "Penthouse of Functions",
        "lessons": [
          {
            "id": "trig-tower-u3-l1",
            "title": "Exponential Power-Ups",
            "icon": "🚀",
            "intro": "We've reached the top floors! Up here numbers grow by repeated multiplying. Welcome to exponential functions.",
            "problems": [
              {
                "id": "trig-tower-u3-l1-p1",
                "type": "input",
                "prompt": "What is 2^3?",
                "answer": "8",
                "accept": [
                  "8",
                  "eight",
                  "8.0"
                ],
                "explain": "2^3 means 2 * 2 * 2 = 8. The exponent counts how many times you multiply.",
                "hints": [
                  "The exponent 3 tells you how many 2's to multiply together.",
                  "Write it out: 2 * 2 * 2.",
                  "2 * 2 = 4, and 4 * 2 = ..."
                ]
              },
              {
                "id": "trig-tower-u3-l1-p2",
                "type": "input",
                "prompt": "What is 5^0?",
                "answer": "1",
                "accept": [
                  "1",
                  "one",
                  "1.0"
                ],
                "explain": "Any nonzero number to the 0 power is 1. It's a handy rule worth memorizing!",
                "hints": [
                  "There's a special rule for the exponent 0.",
                  "It doesn't matter what the base is (as long as it's nonzero).",
                  "Anything to the zero power equals 1."
                ]
              },
              {
                "id": "trig-tower-u3-l1-p3",
                "type": "mc",
                "prompt": "What is 2^(-1)?",
                "choices": [
                  "1/2",
                  "-2",
                  "2",
                  "-1/2"
                ],
                "answer": "1/2",
                "explain": "A negative exponent flips to a reciprocal: 2^(-1) = 1/2^1 = 1/2.",
                "hints": [
                  "A negative exponent means 'take the reciprocal'.",
                  "2^(-1) = 1 / 2^1.",
                  "1 divided by 2 is one half."
                ]
              },
              {
                "id": "trig-tower-u3-l1-p4",
                "type": "input",
                "prompt": "A population doubles each hour starting at 3. After 2 hours: 3 * 2^2 = ?",
                "answer": "12",
                "accept": [
                  "12",
                  "twelve",
                  "12.0"
                ],
                "explain": "3 * 2^2 = 3 * 4 = 12. Exponential growth makes things take off fast!",
                "hints": [
                  "First handle the exponent part, 2^2.",
                  "2^2 = 4, then multiply by the starting 3.",
                  "3 * 4 = ..."
                ]
              },
              {
                "id": "trig-tower-u3-l1-p5",
                "type": "truefalse",
                "prompt": "True or false: the function y = 2^x grows faster and faster as x increases.",
                "answer": "true",
                "explain": "True! Each step up in x multiplies y by 2 again, so the curve gets steeper and steeper.",
                "hints": [
                  "Try listing 2^1, 2^2, 2^3 and look at the gaps between them.",
                  "The values are 2, 4, 8, 16... are the jumps getting bigger?",
                  "Each step doubles the previous value, so growth keeps accelerating."
                ]
              },
              {
                "id": "trig-tower-u3-l1-p6",
                "type": "mc",
                "prompt": "Which describes the graph of y = 3^x for x getting more negative?",
                "choices": [
                  "approaches 0 but never reaches it",
                  "becomes negative",
                  "stays at 1",
                  "grows large"
                ],
                "answer": "approaches 0 but never reaches it",
                "explain": "As x goes very negative, 3^x = 1/3^|x| shrinks toward 0 without ever hitting it. That's a horizontal asymptote!",
                "hints": [
                  "Think about 3^(-1), 3^(-2), 3^(-3)... what happens to the size?",
                  "Those equal 1/3, 1/9, 1/27 — getting tiny but always positive.",
                  "They keep shrinking toward zero but never actually become 0."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u3-l2",
            "title": "Logarithm Lookout",
            "icon": "🔭",
            "intro": "Logarithms are exponentials in reverse: they answer 'what power do I need?' Let's read the view from the lookout.",
            "problems": [
              {
                "id": "trig-tower-u3-l2-p1",
                "type": "input",
                "prompt": "log base 2 of 8 = ? (what power of 2 gives 8?)",
                "answer": "3",
                "accept": [
                  "3",
                  "three",
                  "3.0"
                ],
                "explain": "2^3 = 8, so log base 2 of 8 = 3. A log just asks for the exponent.",
                "hints": [
                  "The log is asking: 2 to what power equals 8?",
                  "Try powers of 2: 2^1=2, 2^2=4, 2^3=...",
                  "2^3 = 8, so the answer is 3."
                ]
              },
              {
                "id": "trig-tower-u3-l2-p2",
                "type": "input",
                "prompt": "log base 10 of 1000 = ?",
                "answer": "3",
                "accept": [
                  "3",
                  "three",
                  "3.0"
                ],
                "explain": "10^3 = 1000, so log base 10 of 1000 = 3. Base-10 logs just count the zeros!",
                "hints": [
                  "Ask: 10 to what power makes 1000?",
                  "Count the zeros in 1000.",
                  "10^3 = 1000, so the answer is 3."
                ]
              },
              {
                "id": "trig-tower-u3-l2-p3",
                "type": "mc",
                "prompt": "log base 5 of 1 = ?",
                "choices": [
                  "0",
                  "1",
                  "5",
                  "undefined"
                ],
                "answer": "0",
                "explain": "5^0 = 1, so log base 5 of 1 = 0. The log of 1 in any base is always 0.",
                "hints": [
                  "What power of 5 gives exactly 1?",
                  "Remember any base to the 0 power equals 1.",
                  "Since 5^0 = 1, the log is 0."
                ]
              },
              {
                "id": "trig-tower-u3-l2-p4",
                "type": "truefalse",
                "prompt": "True or false: log base b of x is the inverse of b^x (it undoes the exponential).",
                "answer": "true",
                "explain": "True! Logs and exponentials are inverse operations, like multiplication and division.",
                "hints": [
                  "Inverse means one operation undoes the other.",
                  "If b^3 = something, the log brings you back to the 3.",
                  "Logs answer the exponent question, so they reverse exponentials."
                ]
              },
              {
                "id": "trig-tower-u3-l2-p5",
                "type": "input",
                "prompt": "log base 3 of 9 = ?",
                "answer": "2",
                "accept": [
                  "2",
                  "two",
                  "2.0"
                ],
                "explain": "3^2 = 9, so log base 3 of 9 = 2.",
                "hints": [
                  "Ask: 3 to what power equals 9?",
                  "Try 3^1 = 3, then 3^2 = ...",
                  "3^2 = 9, so the answer is 2."
                ]
              },
              {
                "id": "trig-tower-u3-l2-p6",
                "type": "mc",
                "prompt": "Using log(a*b) = log(a) + log(b), if log(2) = 0.30 and log(3) = 0.48, then log(6) = ?",
                "choices": [
                  "0.78",
                  "0.18",
                  "1.44",
                  "0.30"
                ],
                "answer": "0.78",
                "explain": "log(6) = log(2*3) = log(2) + log(3) = 0.30 + 0.48 = 0.78. The product rule turns multiplying into adding!",
                "hints": [
                  "Notice that 6 = 2 * 3.",
                  "The product rule says log(2*3) = log(2) + log(3).",
                  "Add 0.30 + 0.48."
                ]
              }
            ]
          },
          {
            "id": "trig-tower-u3-l3",
            "title": "Shape-Shifting Functions",
            "icon": "🪞",
            "intro": "Top of the Tower! Here we slide, flip, and stretch graphs. Master transformations and you can reshape any function.",
            "problems": [
              {
                "id": "trig-tower-u3-l3-p1",
                "type": "mc",
                "prompt": "Compared to y = f(x), the graph of y = f(x) + 3 is shifted...?",
                "choices": [
                  "up 3",
                  "down 3",
                  "right 3",
                  "left 3"
                ],
                "answer": "up 3",
                "explain": "Adding 3 outside the function raises every output, shifting the graph up 3.",
                "hints": [
                  "The +3 is added to the whole output, not inside with x.",
                  "Changes outside f move the graph vertically.",
                  "Adding to the output lifts the graph upward."
                ]
              },
              {
                "id": "trig-tower-u3-l3-p2",
                "type": "mc",
                "prompt": "The graph of y = f(x - 2) is shifted...?",
                "choices": [
                  "right 2",
                  "left 2",
                  "up 2",
                  "down 2"
                ],
                "answer": "right 2",
                "explain": "Inside changes act oppositely: x - 2 shifts the graph right by 2. Sneaky but true!",
                "hints": [
                  "The -2 is inside, attached to x, so it moves things horizontally.",
                  "Inside shifts do the OPPOSITE of what the sign suggests.",
                  "x minus 2 (a subtraction) pushes the graph to the right."
                ]
              },
              {
                "id": "trig-tower-u3-l3-p3",
                "type": "mc",
                "prompt": "The graph of y = -f(x) is the graph of f...?",
                "choices": [
                  "flipped over the x-axis",
                  "flipped over the y-axis",
                  "shifted up",
                  "stretched"
                ],
                "answer": "flipped over the x-axis",
                "explain": "A negative outside the function flips outputs to their opposites, reflecting across the x-axis.",
                "hints": [
                  "The negative is outside, multiplying the whole output.",
                  "Outside negatives flip up-down (over the horizontal axis).",
                  "Every y becomes -y, which is a reflection over the x-axis."
                ]
              },
              {
                "id": "trig-tower-u3-l3-p4",
                "type": "mc",
                "prompt": "The graph of y = 2*f(x) is...?",
                "choices": [
                  "stretched vertically by 2",
                  "shifted up 2",
                  "compressed by 2",
                  "flipped"
                ],
                "answer": "stretched vertically by 2",
                "explain": "Multiplying the output by 2 doubles every height, stretching the graph vertically.",
                "hints": [
                  "The 2 multiplies the entire output of f.",
                  "Multiplying outputs changes their height, not their position left/right.",
                  "Doubling each y stretches the graph taller."
                ]
              },
              {
                "id": "trig-tower-u3-l3-p5",
                "type": "input",
                "prompt": "If f(x) = x^2 and g(x) = f(x) + 1, what is g(2)?",
                "answer": "5",
                "accept": [
                  "5",
                  "five",
                  "5.0"
                ],
                "explain": "g(2) = f(2) + 1 = 2^2 + 1 = 4 + 1 = 5. Compute f first, then apply the shift.",
                "hints": [
                  "First find f(2) using f(x) = x^2.",
                  "f(2) = 2^2 = 4; now add the +1.",
                  "4 + 1 = ..."
                ]
              },
              {
                "id": "trig-tower-u3-l3-p6",
                "type": "truefalse",
                "prompt": "True or false: the graph of y = f(-x) reflects f over the y-axis.",
                "answer": "true",
                "explain": "True! Replacing x with -x flips inputs left-to-right, a reflection across the y-axis.",
                "hints": [
                  "The negative is INSIDE, attached to x.",
                  "Inside changes affect the horizontal direction.",
                  "Swapping x for -x mirrors the graph left-right over the y-axis."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "calculus-canyon",
    "title": "Calculus Canyon",
    "subtitle": "College Calculus",
    "color": "#60A5FA",
    "icon": "🏔️",
    "blurb": "Rappel down the cliffs of limits, ride the rivers of slope, and pan for the gold of area under the curve!",
    "units": [
      {
        "id": "calculus-canyon-u1",
        "title": "Limit Ledge",
        "lessons": [
          {
            "id": "calculus-canyon-u1-l1",
            "title": "Approaching the Edge",
            "icon": "🧗",
            "intro": "Hi, I'm Pip! A limit just asks: where is a function HEADED as x sneaks up on a number? Let's peek over the edge together.",
            "problems": [
              {
                "id": "calculus-canyon-u1-l1-p1",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 2 of (x + 3).",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Since x + 3 is smooth here, we just plug in: 2 + 3 = 5. Nice and tidy!",
                "hints": [
                  "We're asking what x + 3 gets close to as x slides toward 2.",
                  "This function has no gaps or breaks at x = 2, so you can substitute directly.",
                  "Replace x with 2: 2 + 3 = ... finish it off!"
                ]
              },
              {
                "id": "calculus-canyon-u1-l1-p2",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 3 of (x^2).",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "x^2 is continuous everywhere, so the limit is just 3^2 = 9. Smooth landing!",
                "hints": [
                  "What value is x^2 heading toward as x nears 3?",
                  "No breaks here, so direct substitution works.",
                  "Square 3: 3^2 = ... you've got it."
                ]
              },
              {
                "id": "calculus-canyon-u1-l1-p3",
                "type": "mc",
                "prompt": "What is the limit as x approaches 0 of (2x + 7)?",
                "choices": [
                  "0",
                  "2",
                  "7",
                  "9"
                ],
                "answer": "7",
                "explain": "Plug in x = 0: 2(0) + 7 = 7. The 2x term simply vanishes!",
                "hints": [
                  "Picture the line 2x + 7 as x creeps to 0.",
                  "It's continuous, so substitute x = 0 right in.",
                  "2(0) + 7 leaves just the 7."
                ]
              },
              {
                "id": "calculus-canyon-u1-l1-p4",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 4 of (x - 1)/(x).",
                "answer": "3/4",
                "accept": [
                  "3/4",
                  "0.75",
                  ".75",
                  "0.750"
                ],
                "explain": "Both top and bottom are fine at x = 4, so plug in: (4 - 1)/4 = 3/4.",
                "hints": [
                  "Check: does anything blow up at x = 4? Nope, the bottom isn't zero.",
                  "When the denominator isn't zero, substitute directly.",
                  "Top becomes 4 - 1 = 3, bottom is 4. Now write the fraction."
                ]
              },
              {
                "id": "calculus-canyon-u1-l1-p5",
                "type": "truefalse",
                "prompt": "True or false: the limit as x approaches 5 of a continuous function equals the function's value at x = 5.",
                "answer": "true",
                "explain": "Exactly! 'Continuous' means no jumps or holes, so the limit and the actual value match perfectly.",
                "hints": [
                  "Think about what the word 'continuous' promises about a graph.",
                  "A continuous curve has no gaps, so where it's headed = where it actually is.",
                  "If there's no hole at x = 5, the limit just equals f(5)."
                ]
              },
              {
                "id": "calculus-canyon-u1-l1-p6",
                "type": "mc",
                "prompt": "Evaluate the limit as x approaches 1 of (3x^2 - 1).",
                "choices": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "answer": "2",
                "explain": "Substitute x = 1: 3(1)^2 - 1 = 3 - 1 = 2. This polynomial is continuous, so it's that easy!",
                "hints": [
                  "Polynomials never have breaks, so where is 3x^2 - 1 headed at x = 1?",
                  "You can substitute x = 1 straight in.",
                  "Compute 3(1)^2 = 3, then subtract 1."
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u1-l2",
            "title": "Holes and Cancellations",
            "icon": "🕳️",
            "intro": "Sometimes plugging in gives 0/0 — a tiny hole in the path! But don't panic: we can often factor and cancel to see where the function truly heads.",
            "problems": [
              {
                "id": "calculus-canyon-u1-l2-p1",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 2 of (x^2 - 4)/(x - 2).",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Factor the top: (x-2)(x+2)/(x-2) cancels to x+2. Then plug in 2: 2 + 2 = 4.",
                "hints": [
                  "Direct substitution gives 0/0 — that's a signal to factor, not a dead end.",
                  "x^2 - 4 is a difference of squares: (x-2)(x+2).",
                  "Cancel the (x-2), leaving x+2, then set x = 2."
                ]
              },
              {
                "id": "calculus-canyon-u1-l2-p2",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 3 of (x^2 - 9)/(x - 3).",
                "answer": "6",
                "accept": [
                  "6",
                  "six"
                ],
                "explain": "Factor: (x-3)(x+3)/(x-3) = x+3. Plug in 3: 3 + 3 = 6.",
                "hints": [
                  "Substituting gives 0/0, so try factoring the numerator.",
                  "x^2 - 9 = (x-3)(x+3).",
                  "Cancel (x-3) to get x+3, then substitute x = 3."
                ]
              },
              {
                "id": "calculus-canyon-u1-l2-p3",
                "type": "mc",
                "prompt": "Evaluate the limit as x approaches -1 of (x^2 - 1)/(x + 1).",
                "choices": [
                  "-2",
                  "-1",
                  "0",
                  "2"
                ],
                "answer": "-2",
                "explain": "Factor the top: (x-1)(x+1)/(x+1) = x-1. Plug in -1: -1 - 1 = -2.",
                "hints": [
                  "Plugging in -1 gives 0/0, so we factor.",
                  "x^2 - 1 = (x-1)(x+1) — a difference of squares.",
                  "Cancel (x+1), leaving x-1, then substitute x = -1."
                ]
              },
              {
                "id": "calculus-canyon-u1-l2-p4",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches 0 of (x^2 + 5x)/(x).",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "Factor an x from the top: x(x+5)/x = x+5. Plug in 0: 0 + 5 = 5.",
                "hints": [
                  "Substituting 0 gives 0/0 — let's simplify first.",
                  "Every term up top has an x: factor it out as x(x+5).",
                  "Cancel the x, leaving x+5, then set x = 0."
                ]
              },
              {
                "id": "calculus-canyon-u1-l2-p5",
                "type": "truefalse",
                "prompt": "True or false: getting 0/0 when you substitute means the limit does not exist.",
                "answer": "false",
                "explain": "Nope! 0/0 is an 'indeterminate form' — a clue to factor or simplify. The limit often still exists.",
                "hints": [
                  "Think about what 0/0 actually tells you — is it really a final answer?",
                  "0/0 isn't an answer — it's a signal that more work is needed.",
                  "If factoring can turn 0/0 into a real value, can 0/0 always mean 'no limit'?"
                ]
              },
              {
                "id": "calculus-canyon-u1-l2-p6",
                "type": "mc",
                "prompt": "Evaluate the limit as x approaches 4 of (x^2 - 16)/(x - 4).",
                "choices": [
                  "4",
                  "6",
                  "8",
                  "16"
                ],
                "answer": "8",
                "explain": "Factor: (x-4)(x+4)/(x-4) = x+4. Plug in 4: 4 + 4 = 8.",
                "hints": [
                  "Direct plug-in gives 0/0, so factor the numerator.",
                  "x^2 - 16 = (x-4)(x+4).",
                  "Cancel (x-4) to get x+4, then substitute x = 4."
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u1-l3",
            "title": "Limits at Infinity",
            "icon": "♾️",
            "intro": "What happens way out where x grows forever? For rational functions, the highest powers run the show. Let's race them to infinity!",
            "problems": [
              {
                "id": "calculus-canyon-u1-l3-p1",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches infinity of (1/x).",
                "answer": "0",
                "accept": [
                  "0",
                  "zero"
                ],
                "explain": "As x gets huge, 1 divided by a giant number shrinks toward 0. The path flattens to zero!",
                "hints": [
                  "Imagine x = 100, then 1,000, then a million — what does 1/x do?",
                  "A fixed top over a growing bottom keeps getting smaller.",
                  "It heads toward 0 (never negative, just tinier and tinier)."
                ]
              },
              {
                "id": "calculus-canyon-u1-l3-p2",
                "type": "mc",
                "prompt": "What is the limit as x approaches infinity of (5/x^2)?",
                "choices": [
                  "0",
                  "1",
                  "5",
                  "infinity"
                ],
                "answer": "0",
                "explain": "x^2 explodes to infinity, so 5 over a giant number drives the whole thing to 0.",
                "hints": [
                  "The bottom, x^2, grows even faster than x.",
                  "A constant 5 divided by something enormous shrinks fast.",
                  "Where does a fixed number over a huge denominator land?"
                ]
              },
              {
                "id": "calculus-canyon-u1-l3-p3",
                "type": "mc",
                "prompt": "Evaluate the limit as x approaches infinity of (3x^2 + 1)/(x^2 + 5).",
                "choices": [
                  "0",
                  "1",
                  "3",
                  "infinity"
                ],
                "answer": "3",
                "explain": "Top and bottom have the same highest power (x^2), so the limit is the ratio of leading coefficients: 3/1 = 3.",
                "hints": [
                  "Compare the highest powers on top and bottom — both are x^2.",
                  "When the top and bottom degrees match, only the leading coefficients matter.",
                  "Take 3 (from 3x^2) over 1 (from x^2)."
                ]
              },
              {
                "id": "calculus-canyon-u1-l3-p4",
                "type": "input",
                "prompt": "Evaluate the limit as x approaches infinity of (4x + 2)/(x).",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "Same degree on top and bottom (x^1), so divide leading coefficients: 4/1 = 4. The +2 fades away.",
                "hints": [
                  "Both top and bottom are degree 1 in x.",
                  "With matching degrees, focus on the leading coefficients.",
                  "That's 4 over 1 — the small +2 becomes negligible."
                ]
              },
              {
                "id": "calculus-canyon-u1-l3-p5",
                "type": "truefalse",
                "prompt": "True or false: the limit as x approaches infinity of (x^2)/(x + 1) is infinity.",
                "answer": "true",
                "explain": "The top's degree (2) beats the bottom's degree (1), so the function grows without bound — off to infinity!",
                "hints": [
                  "Compare degrees: the top is x^2, the bottom is x^1.",
                  "When the top grows faster than the bottom, the fraction doesn't settle to a number.",
                  "A bigger top degree means it keeps climbing — toward what?"
                ]
              },
              {
                "id": "calculus-canyon-u1-l3-p6",
                "type": "mc",
                "prompt": "Evaluate the limit as x approaches infinity of (7)/(2x^2 + 3).",
                "choices": [
                  "0",
                  "7/2",
                  "7",
                  "infinity"
                ],
                "answer": "0",
                "explain": "The bottom grows to infinity while the top stays at 7, so the fraction collapses to 0.",
                "hints": [
                  "The denominator's degree (2) is bigger than the numerator's (0).",
                  "A fixed top over a forever-growing bottom shrinks.",
                  "Where does 7 over an enormous number go?"
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "calculus-canyon-u2",
        "title": "Derivative Drop",
        "lessons": [
          {
            "id": "calculus-canyon-u2-l1",
            "title": "Slope of the Trail",
            "icon": "📐",
            "intro": "A derivative measures the slope — how steep the trail is at one exact spot. It's the instantaneous rate of change. Let's read the steepness!",
            "problems": [
              {
                "id": "calculus-canyon-u2-l1-p1",
                "type": "input",
                "prompt": "The derivative of f(x) = 5x is f'(x) = ?",
                "answer": "5",
                "accept": [
                  "5",
                  "five"
                ],
                "explain": "A straight line y = 5x has constant slope 5, so its derivative is just 5 everywhere.",
                "hints": [
                  "The derivative is the slope of the line.",
                  "For a line y = mx, the slope is m.",
                  "Here m = 5, so the derivative is..."
                ]
              },
              {
                "id": "calculus-canyon-u2-l1-p2",
                "type": "input",
                "prompt": "The derivative of the constant function f(x) = 7 is f'(x) = ?",
                "answer": "0",
                "accept": [
                  "0",
                  "zero"
                ],
                "explain": "A constant never changes, so its slope is flat — zero everywhere!",
                "hints": [
                  "Picture the graph of y = 7 — a flat horizontal line.",
                  "How steep is a perfectly flat line?",
                  "No change means a slope of..."
                ]
              },
              {
                "id": "calculus-canyon-u2-l1-p3",
                "type": "mc",
                "prompt": "What does the derivative f'(x) represent?",
                "choices": [
                  "The area under the curve",
                  "The slope at a point",
                  "The y-intercept",
                  "The maximum value"
                ],
                "answer": "The slope at a point",
                "explain": "Right! The derivative gives the instantaneous slope — the steepness of the curve at any single point.",
                "hints": [
                  "Think about what we measure when we zoom way in on a curve.",
                  "It tells us the instantaneous rate of change.",
                  "Rate of change at one spot = the ... at that point."
                ]
              },
              {
                "id": "calculus-canyon-u2-l1-p4",
                "type": "truefalse",
                "prompt": "True or false: the derivative of a horizontal line is always 0.",
                "answer": "true",
                "explain": "Yes! A horizontal line has no steepness at all, so its slope — and derivative — is 0.",
                "hints": [
                  "A horizontal line doesn't rise as it runs.",
                  "Slope = rise over run; the rise here is zero.",
                  "Zero rise means a slope of..."
                ]
              },
              {
                "id": "calculus-canyon-u2-l1-p5",
                "type": "input",
                "prompt": "The derivative of f(x) = -3x is f'(x) = ?",
                "answer": "-3",
                "accept": [
                  "-3",
                  "negative 3",
                  "negative three",
                  "minus 3"
                ],
                "explain": "The line y = -3x slopes downward with constant slope -3, so the derivative is -3.",
                "hints": [
                  "This is a line, so the derivative is its constant slope.",
                  "For y = mx, the slope is m.",
                  "Here m = -3 (the line goes downhill)."
                ]
              },
              {
                "id": "calculus-canyon-u2-l1-p6",
                "type": "mc",
                "prompt": "If a curve's derivative at a point is positive, the curve at that point is...",
                "choices": [
                  "going downhill",
                  "flat",
                  "going uphill",
                  "undefined"
                ],
                "answer": "going uphill",
                "explain": "A positive slope means the curve rises as x increases — it's climbing uphill!",
                "hints": [
                  "The derivative is the slope. What does a positive slope look like?",
                  "Positive slope means y increases as x increases.",
                  "Rising as you move right = heading ..."
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u2-l2",
            "title": "Power Rule Plunge",
            "icon": "⚡",
            "intro": "The power rule is your fastest tool: for x^n, bring the exponent down front and drop it by one. n*x^(n-1). Let's plunge in!",
            "problems": [
              {
                "id": "calculus-canyon-u2-l2-p1",
                "type": "input",
                "prompt": "Using the power rule, the derivative of x^2 is?",
                "answer": "2x",
                "accept": [
                  "2x",
                  "2*x",
                  "2 x",
                  "2·x"
                ],
                "explain": "Bring the 2 down front and lower the exponent by 1: 2*x^1 = 2x. Classic!",
                "hints": [
                  "Power rule: for x^n, the derivative is n*x^(n-1).",
                  "Here n = 2, so bring the 2 to the front.",
                  "Then drop the exponent to 1: 2*x^1."
                ]
              },
              {
                "id": "calculus-canyon-u2-l2-p2",
                "type": "input",
                "prompt": "The derivative of x^3 is?",
                "answer": "3x^2",
                "accept": [
                  "3x^2",
                  "3x2",
                  "3*x^2",
                  "3 x^2",
                  "3x**2"
                ],
                "explain": "Pull the 3 down and reduce the exponent: 3*x^(3-1) = 3x^2.",
                "hints": [
                  "Apply n*x^(n-1) with n = 3.",
                  "The 3 comes down to the front.",
                  "Subtract 1 from the exponent: 3 - 1 = 2, giving 3x^2."
                ]
              },
              {
                "id": "calculus-canyon-u2-l2-p3",
                "type": "mc",
                "prompt": "What is the derivative of x^5?",
                "choices": [
                  "5x^4",
                  "5x^6",
                  "x^4",
                  "4x^5"
                ],
                "answer": "5x^4",
                "explain": "Bring down the 5 and lower the exponent by one: 5*x^(5-1) = 5x^4.",
                "hints": [
                  "Use the power rule: n*x^(n-1).",
                  "n = 5, so the 5 jumps to the front.",
                  "New exponent is 5 - 1 = 4."
                ]
              },
              {
                "id": "calculus-canyon-u2-l2-p4",
                "type": "input",
                "prompt": "The derivative of 4x^2 is?",
                "answer": "8x",
                "accept": [
                  "8x",
                  "8*x",
                  "8 x",
                  "8·x"
                ],
                "explain": "Power rule on x^2 gives 2x, and the coefficient 4 multiplies through: 4*2x = 8x.",
                "hints": [
                  "First handle x^2 with the power rule, then keep the 4 along for the ride.",
                  "The derivative of x^2 is 2x.",
                  "Multiply by the coefficient: 4 * 2x."
                ]
              },
              {
                "id": "calculus-canyon-u2-l2-p5",
                "type": "input",
                "prompt": "The derivative of x (that is, x^1) is?",
                "answer": "1",
                "accept": [
                  "1",
                  "one"
                ],
                "explain": "x^1 has derivative 1*x^0 = 1*1 = 1. The line y = x always has slope 1!",
                "hints": [
                  "Write x as x^1 and apply the power rule.",
                  "Bring down the 1 and drop the exponent to 0: 1*x^0.",
                  "Remember x^0 = 1, so it simplifies to..."
                ]
              },
              {
                "id": "calculus-canyon-u2-l2-p6",
                "type": "mc",
                "prompt": "What is the derivative of 6x^4?",
                "choices": [
                  "24x^3",
                  "6x^3",
                  "10x^3",
                  "24x^4"
                ],
                "answer": "24x^3",
                "explain": "Power rule on x^4 gives 4x^3, then multiply by 6: 6*4x^3 = 24x^3.",
                "hints": [
                  "Apply the power rule to x^4 first, keeping the 6 out front.",
                  "Derivative of x^4 is 4x^3.",
                  "Multiply the coefficients: 6 * 4 = 24."
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u2-l3",
            "title": "Polynomial Rapids",
            "icon": "🌊",
            "intro": "Polynomials are just sums of power terms, so we differentiate each piece and add the results. Constants wash away to zero. Ride the rapids!",
            "problems": [
              {
                "id": "calculus-canyon-u2-l3-p1",
                "type": "input",
                "prompt": "The derivative of f(x) = x^2 + 3x is?",
                "answer": "2x+3",
                "accept": [
                  "2x+3",
                  "2x + 3",
                  "3+2x",
                  "2*x+3",
                  "2x+3 ",
                  "3 + 2x"
                ],
                "explain": "Differentiate term by term: x^2 gives 2x, and 3x gives 3. Add them: 2x + 3.",
                "hints": [
                  "Take the derivative of each term separately, then add.",
                  "x^2 becomes 2x; 3x becomes 3.",
                  "Combine: 2x + ?"
                ]
              },
              {
                "id": "calculus-canyon-u2-l3-p2",
                "type": "input",
                "prompt": "The derivative of f(x) = x^2 + 5x + 2 is?",
                "answer": "2x+5",
                "accept": [
                  "2x+5",
                  "2x + 5",
                  "5+2x",
                  "2*x+5",
                  "5 + 2x"
                ],
                "explain": "x^2 gives 2x, 5x gives 5, and the constant 2 gives 0. So f'(x) = 2x + 5.",
                "hints": [
                  "Differentiate each piece; remember what happens to a lone constant.",
                  "x^2 to 2x, 5x to 5, and the +2 disappears.",
                  "Add the surviving pieces: 2x + ?"
                ]
              },
              {
                "id": "calculus-canyon-u2-l3-p3",
                "type": "mc",
                "prompt": "What is the derivative of f(x) = 3x^2 - 4x + 7?",
                "choices": [
                  "6x - 4",
                  "6x + 7",
                  "3x - 4",
                  "6x - 4 + 7"
                ],
                "answer": "6x - 4",
                "explain": "3x^2 gives 6x, -4x gives -4, and +7 (a constant) gives 0. So f'(x) = 6x - 4.",
                "hints": [
                  "Differentiate term by term and drop the constant.",
                  "3x^2 to 6x, -4x to -4, +7 to 0.",
                  "Combine the nonzero results."
                ]
              },
              {
                "id": "calculus-canyon-u2-l3-p4",
                "type": "input",
                "prompt": "The derivative of f(x) = x^3 + x^2 is?",
                "answer": "3x^2+2x",
                "accept": [
                  "3x^2+2x",
                  "3x^2 + 2x",
                  "2x+3x^2",
                  "3*x^2+2*x",
                  "2x + 3x^2"
                ],
                "explain": "x^3 gives 3x^2 and x^2 gives 2x, so f'(x) = 3x^2 + 2x.",
                "hints": [
                  "Apply the power rule to each term.",
                  "x^3 becomes 3x^2; x^2 becomes 2x.",
                  "Add them together."
                ]
              },
              {
                "id": "calculus-canyon-u2-l3-p5",
                "type": "truefalse",
                "prompt": "True or false: when differentiating a polynomial, every constant term becomes 0.",
                "answer": "true",
                "explain": "Yes! A constant doesn't change, so its slope is 0 — it simply drops out of the derivative.",
                "hints": [
                  "Recall what the derivative of a plain number like 7 is.",
                  "Constants have no steepness — they're flat.",
                  "A flat term contributes a slope of..."
                ]
              },
              {
                "id": "calculus-canyon-u2-l3-p6",
                "type": "mc",
                "prompt": "Evaluate f'(1) if f(x) = x^2 + 2x.",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "answer": "4",
                "explain": "f'(x) = 2x + 2. Plug in x = 1: 2(1) + 2 = 4.",
                "hints": [
                  "First find f'(x), then substitute x = 1.",
                  "The derivative is 2x + 2.",
                  "Now evaluate: 2(1) + 2."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "calculus-canyon-u3",
        "title": "Integral Overlook",
        "lessons": [
          {
            "id": "calculus-canyon-u3-l1",
            "title": "Chains, Products, and Tangents",
            "icon": "🔗",
            "intro": "Before we integrate, let's master a few derivative power tools — the product, quotient, and chain rules — plus reading a tangent line's slope.",
            "problems": [
              {
                "id": "calculus-canyon-u3-l1-p1",
                "type": "mc",
                "prompt": "The slope of the tangent line to f(x) = x^2 at x = 3 is found by evaluating which expression?",
                "choices": [
                  "f(3)",
                  "f'(3)",
                  "f''(3)",
                  "f(3)/3"
                ],
                "answer": "f'(3)",
                "explain": "The tangent line's slope at a point IS the derivative evaluated there: f'(3).",
                "hints": [
                  "Tangent-line slope and derivative are the same idea.",
                  "We need the slope AT x = 3, not the function's value.",
                  "That's the derivative evaluated at 3."
                ]
              },
              {
                "id": "calculus-canyon-u3-l1-p2",
                "type": "input",
                "prompt": "For f(x) = x^2, the slope of the tangent line at x = 3 is? (Compute f'(3).)",
                "answer": "6",
                "accept": [
                  "6",
                  "six"
                ],
                "explain": "f'(x) = 2x, so f'(3) = 2(3) = 6. That's the tangent's steepness at x = 3.",
                "hints": [
                  "First find f'(x) using the power rule.",
                  "f'(x) = 2x.",
                  "Now plug in 3: 2(3) = ?"
                ]
              },
              {
                "id": "calculus-canyon-u3-l1-p3",
                "type": "mc",
                "prompt": "Using the chain rule, the derivative of (x^2 + 1)^3 is?",
                "choices": [
                  "3(x^2 + 1)^2",
                  "3(x^2 + 1)^2 * 2x",
                  "2x",
                  "6x^2"
                ],
                "answer": "3(x^2 + 1)^2 * 2x",
                "explain": "Chain rule: derivative of the outside times derivative of the inside. Outside gives 3(x^2+1)^2, inside (x^2+1) gives 2x.",
                "hints": [
                  "Chain rule: differentiate the outer power, then multiply by the inner derivative.",
                  "Treat (x^2 + 1) as a blob: the outside power^3 gives 3*blob^2.",
                  "Now multiply by the derivative of the inside, which is 2x."
                ]
              },
              {
                "id": "calculus-canyon-u3-l1-p4",
                "type": "mc",
                "prompt": "By the product rule, the derivative of f(x)g(x) is?",
                "choices": [
                  "f'(x)g'(x)",
                  "f'(x)g(x) + f(x)g'(x)",
                  "f'(x) + g'(x)",
                  "f(x)g'(x) - f'(x)g(x)"
                ],
                "answer": "f'(x)g(x) + f(x)g'(x)",
                "explain": "The product rule: derivative of the first times the second, plus the first times derivative of the second.",
                "hints": [
                  "The product rule is NOT just multiplying the two derivatives.",
                  "Differentiate one factor at a time, keeping the other fixed, then add.",
                  "First: f'*g. Second: f*g'. Add them."
                ]
              },
              {
                "id": "calculus-canyon-u3-l1-p5",
                "type": "input",
                "prompt": "Using the product rule, the derivative of x * x (i.e. x^2) is? Give a simplified single-term answer.",
                "answer": "2x",
                "accept": [
                  "2x",
                  "2*x",
                  "2 x",
                  "2·x"
                ],
                "explain": "Product rule: (1)(x) + (x)(1) = x + x = 2x. It matches the power rule — nice cross-check!",
                "hints": [
                  "Let f = x and g = x; each has derivative 1.",
                  "Product rule gives f'g + fg' = (1)(x) + (x)(1).",
                  "Add x + x to get..."
                ]
              },
              {
                "id": "calculus-canyon-u3-l1-p6",
                "type": "truefalse",
                "prompt": "True or false: the quotient rule for (f/g)' is (f'g - fg')/g^2.",
                "answer": "true",
                "explain": "Correct! 'Low d-high minus high d-low, over low squared' — that's the quotient rule.",
                "hints": [
                  "Recall the 'low d-high minus high d-low' mnemonic.",
                  "The denominator gets squared in the result.",
                  "Check the order: is it f'g MINUS fg' on top?"
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u3-l2",
            "title": "Antiderivative Ascent",
            "icon": "🪜",
            "intro": "Integration runs the derivative backward! For x^n, add one to the exponent and divide by the new power. Don't forget +C. Let's climb back up!",
            "problems": [
              {
                "id": "calculus-canyon-u3-l2-p1",
                "type": "mc",
                "prompt": "The antiderivative (integral) of x is?",
                "choices": [
                  "x^2",
                  "x^2/2 + C",
                  "2x + C",
                  "1 + C"
                ],
                "answer": "x^2/2 + C",
                "explain": "Add 1 to the exponent (x^1 to x^2) and divide by 2: x^2/2, plus the constant C.",
                "hints": [
                  "Integration of x^n: raise the power by 1, then divide by the new power.",
                  "x is x^1, so the new exponent is 2.",
                  "Divide x^2 by 2 — and never forget the + C."
                ]
              },
              {
                "id": "calculus-canyon-u3-l2-p2",
                "type": "mc",
                "prompt": "The integral of x^2 is?",
                "choices": [
                  "x^3/3 + C",
                  "2x + C",
                  "x^3 + C",
                  "3x^2 + C"
                ],
                "answer": "x^3/3 + C",
                "explain": "Raise the exponent to 3 and divide by 3: x^3/3 + C.",
                "hints": [
                  "Use the reverse power rule: bump the exponent up by 1.",
                  "x^2 becomes x^3, and you divide by the new exponent.",
                  "Divide by 3 and add C."
                ]
              },
              {
                "id": "calculus-canyon-u3-l2-p3",
                "type": "mc",
                "prompt": "The integral of the constant 5 (with respect to x) is?",
                "choices": [
                  "5 + C",
                  "5x + C",
                  "0 + C",
                  "x/5 + C"
                ],
                "answer": "5x + C",
                "explain": "The integral of a constant k is kx + C, so 5 integrates to 5x + C.",
                "hints": [
                  "What function has a derivative of 5?",
                  "Think backward: derivative of 5x is 5.",
                  "So the antiderivative of 5 is 5x, plus C."
                ]
              },
              {
                "id": "calculus-canyon-u3-l2-p4",
                "type": "truefalse",
                "prompt": "True or false: an indefinite integral needs a '+ C' because many functions share the same derivative.",
                "answer": "true",
                "explain": "Exactly! Any constant disappears when differentiating, so we add +C to capture all those possibilities.",
                "hints": [
                  "Remember that the derivative of any constant is 0.",
                  "So x^2 + 1 and x^2 + 9 have the SAME derivative.",
                  "We write +C to represent every possible constant."
                ]
              },
              {
                "id": "calculus-canyon-u3-l2-p5",
                "type": "mc",
                "prompt": "The integral of 6x is?",
                "choices": [
                  "3x^2 + C",
                  "6x^2 + C",
                  "6 + C",
                  "3x + C"
                ],
                "answer": "3x^2 + C",
                "explain": "Integrate x to get x^2/2, then multiply by 6: 6 * x^2/2 = 3x^2, plus C.",
                "hints": [
                  "Keep the coefficient and integrate the x part.",
                  "The integral of x is x^2/2.",
                  "Multiply by 6: 6 * x^2/2 = ?, then add C."
                ]
              },
              {
                "id": "calculus-canyon-u3-l2-p6",
                "type": "mc",
                "prompt": "The integral of (2x + 3) is?",
                "choices": [
                  "x^2 + 3x + C",
                  "2x^2 + 3x + C",
                  "x^2 + 3 + C",
                  "2 + C"
                ],
                "answer": "x^2 + 3x + C",
                "explain": "Integrate each term: 2x gives x^2, and 3 gives 3x. Together: x^2 + 3x + C.",
                "hints": [
                  "Integrate term by term, then add one +C at the end.",
                  "2x integrates to x^2; the constant 3 integrates to 3x.",
                  "Combine: x^2 + 3x + C."
                ]
              }
            ]
          },
          {
            "id": "calculus-canyon-u3-l3",
            "title": "Area Under the Curve",
            "icon": "📊",
            "intro": "A definite integral measures the exact area between a curve and the x-axis. Use the Fundamental Theorem: evaluate the antiderivative at the top, subtract at the bottom. Let's find some area!",
            "problems": [
              {
                "id": "calculus-canyon-u3-l3-p1",
                "type": "mc",
                "prompt": "A definite integral from a to b represents...",
                "choices": [
                  "the slope at b",
                  "the area under the curve from a to b",
                  "the value of f at a",
                  "the maximum of f"
                ],
                "answer": "the area under the curve from a to b",
                "explain": "Right! A definite integral accumulates the signed area between the curve and the x-axis over [a, b].",
                "hints": [
                  "Think about what integration accumulates, the opposite of slope.",
                  "It's a total amount built up across an interval.",
                  "Geometrically, that total is the ... under the curve."
                ]
              },
              {
                "id": "calculus-canyon-u3-l3-p2",
                "type": "input",
                "prompt": "Evaluate the definite integral from 0 to 2 of (1) dx. (This is the area of a 2-by-1 rectangle.)",
                "answer": "2",
                "accept": [
                  "2",
                  "two"
                ],
                "explain": "The antiderivative of 1 is x. Evaluate: 2 - 0 = 2. It's just a rectangle of width 2 and height 1!",
                "hints": [
                  "The region is a rectangle from x = 0 to x = 2 with height 1.",
                  "Antiderivative of 1 is x; plug in the top minus the bottom.",
                  "Compute 2 - 0."
                ]
              },
              {
                "id": "calculus-canyon-u3-l3-p3",
                "type": "input",
                "prompt": "Evaluate the definite integral from 0 to 3 of (2x) dx.",
                "answer": "9",
                "accept": [
                  "9",
                  "nine"
                ],
                "explain": "The antiderivative of 2x is x^2. Evaluate: 3^2 - 0^2 = 9 - 0 = 9.",
                "hints": [
                  "First find the antiderivative of 2x.",
                  "The antiderivative is x^2.",
                  "Compute 3^2 - 0^2 = 9 - 0."
                ]
              },
              {
                "id": "calculus-canyon-u3-l3-p4",
                "type": "input",
                "prompt": "Evaluate the definite integral from 1 to 2 of (2x) dx.",
                "answer": "3",
                "accept": [
                  "3",
                  "three"
                ],
                "explain": "Antiderivative of 2x is x^2. Evaluate: 2^2 - 1^2 = 4 - 1 = 3.",
                "hints": [
                  "Use the antiderivative x^2 for 2x.",
                  "Plug in the top limit then subtract the bottom: 2^2 - 1^2.",
                  "Compute 4 - 1."
                ]
              },
              {
                "id": "calculus-canyon-u3-l3-p5",
                "type": "mc",
                "prompt": "Evaluate the definite integral from 0 to 3 of (x^2) dx.",
                "choices": [
                  "3",
                  "6",
                  "9",
                  "27"
                ],
                "answer": "9",
                "explain": "Antiderivative of x^2 is x^3/3. Evaluate: 3^3/3 - 0 = 27/3 = 9.",
                "hints": [
                  "The antiderivative of x^2 is x^3/3.",
                  "Plug in 3 then 0: (3^3)/3 - (0^3)/3.",
                  "27/3 = ?"
                ]
              },
              {
                "id": "calculus-canyon-u3-l3-p6",
                "type": "input",
                "prompt": "Evaluate the definite integral from 0 to 2 of (3x^2) dx.",
                "answer": "8",
                "accept": [
                  "8",
                  "eight"
                ],
                "explain": "Antiderivative of 3x^2 is x^3. Evaluate: 2^3 - 0^3 = 8 - 0 = 8.",
                "hints": [
                  "Find the antiderivative of 3x^2 first.",
                  "It's x^3 (since 3 * x^3/3 = x^3).",
                  "Compute 2^3 - 0^3 = 8 - 0."
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

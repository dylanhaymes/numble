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
                ],
                "whyWrong": {
                  "2": "Looks like one fish got skipped — point to each one as you count: 1, 2, 3. There are 3.",
                  "4": "That's one too many — count slowly, touching each fish once: 1, 2, 3. There are 3.",
                  "5": "That counts more than are there — there are only 3 fish: 1, 2, 3."
                }
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
                ],
                "whyWrong": {
                  "3": "A couple crabs got skipped — touch each one once: 1, 2, 3, 4, 5. There are 5.",
                  "4": "One crab got missed — count them all: 1, 2, 3, 4, 5. There are 5.",
                  "6": "That's one too many — count carefully: 1, 2, 3, 4, 5. There are 5."
                }
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
                ],
                "whyWrong": {
                  "2": "Some octopuses got skipped — point to each: 1, 2, 3, 4. There are 4.",
                  "3": "One octopus got missed — count them all: 1, 2, 3, 4. There are 4.",
                  "5": "That's one too many — count each one once: 1, 2, 3, 4. There are 4."
                }
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
                ],
                "whyWrong": {
                  "6": "One shell got skipped — touch each shell once: 1, 2, 3, 4, 5, 6, 7. There are 7.",
                  "8": "That's one too many — count slowly: 1, 2, 3, 4, 5, 6, 7. There are 7.",
                  "9": "That counts more than are there — there are only 7 shells: 1 through 7."
                }
              }
            ],
            "teach": {
              "concept": "To count, point to each critter one at a time and say the next number out loud: 1, 2, 3. The last number you say is how many there are!",
              "example": {
                "prompt": "Count the seahorses: 🐴🐴🐴🐴. How many?",
                "steps": [
                  "Point to the first one and say 1, then the next and say 2.",
                  "Keep going: point and say 3, then point and say 4.",
                  "The last number you said was 4, so that's how many."
                ],
                "answer": "4"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "That's just one bubble — but each of the 3 fish needs its own, so 1, 2, 3 means 3 bubbles.",
                  "2": "One fish is left without a bubble — give every fish one: 1, 2, 3 bubbles.",
                  "4": "That's one bubble too many — there are only 3 fish, so 3 bubbles."
                }
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
                ],
                "whyWrong": {
                  "No, too many seats": "Count both: 5 seats and 5 seals. Since the numbers match, every seal gets exactly one seat — they match.",
                  "No, too many seals": "Count both: 5 seals and 5 seats. The numbers are the same, so each seal gets one seat — they match.",
                  "There are no seats": "There are 5 seats — count them: 1, 2, 3, 4, 5. They match the 5 seals one-to-one."
                }
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
                ],
                "whyWrong": {
                  "5": "That skips a dot — touch each dot once: 1, 2, 3, 4, 5, 6. There are 6.",
                  "7": "That counts one dot twice — touch each only once: 1, 2, 3, 4, 5, 6. There are 6.",
                  "8": "That's two too many — count each dot once: 1 through 6. There are 6."
                }
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
            ],
            "teach": {
              "concept": "Every object gets exactly ONE number when you count — touch it once, say one number, then move on. That way you never count the same thing twice or skip one.",
              "example": {
                "prompt": "Each fish needs one bubble. Fish: 🐠🐠🐠🐠🐠. How many bubbles?",
                "steps": [
                  "Give the first fish one bubble and count 1.",
                  "Give each next fish one bubble, counting 2, 3, 4.",
                  "Give the last fish one bubble: 5. One bubble per fish, so 5 bubbles."
                ],
                "answer": "5"
              }
            }
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
                ],
                "whyWrong": {
                  "8": "8 comes before 9, not after — count up: 8, 9, then 10 comes next.",
                  "11": "That skips a number — right after 9 comes 10, then 11.",
                  "19": "That jumps way ahead — the very next number after 9 is just 10."
                }
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
                ],
                "whyWrong": {
                  "14": "14 is two spots before 16 — the number right before 16 is 15.",
                  "17": "17 comes right after 16, not before — just before 16 is 15.",
                  "60": "That's a much bigger number — count near 16: 14, 15, 16. Just before 16 is 15."
                }
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
                ],
                "whyWrong": {
                  "1, 2, 4, 3": "The 4 and 3 are swapped — counting up, 3 comes before 4: 1, 2, 3, 4.",
                  "2, 1, 3, 4": "This starts with 2 then 1 — counting up should begin 1, 2, 3, 4.",
                  "4, 3, 2, 1": "That's counting backwards (down) — counting up goes 1, 2, 3, 4."
                }
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
                ],
                "whyWrong": {
                  "9": "That's one less, not one more — ten and one more is 11.",
                  "10": "That's just the ten you started with — adding 1 more makes 11.",
                  "20": "That's too many — ten plus one more is 11, not 20."
                }
              }
            ],
            "teach": {
              "concept": "After ten, numbers keep going: 11, 12, 13... all the way to 20. To find the next number, just say the count out loud and stop on the one that comes after.",
              "example": {
                "prompt": "Keep counting: 15, 16, 17, ___. What comes next?",
                "steps": [
                  "Start at 15 and count forward out loud: 15, 16, 17.",
                  "The next number after 17 is one more, which is 18."
                ],
                "answer": "18"
              }
            }
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
                ],
                "whyWrong": {
                  "Group B": "Group B has only 1 fish — Group A has 3, and 3 is more than 1, so Group A has more.",
                  "They are equal": "Count both: A has 3 and B has 1. Different numbers, so they're not equal — A has more.",
                  "Neither": "One group really does have more — A has 3 and B has 1, so Group A has more."
                }
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
                ],
                "whyWrong": {
                  "2": "2 is the smaller number — 5 is bigger, so 5 is more.",
                  "They are the same": "5 and 2 are different numbers, not the same — 5 is more than 2.",
                  "Neither": "One is bigger — 5 is more than 2."
                }
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
                ],
                "whyWrong": {
                  "The crabs": "There are only 2 crabs but 4 snails — 4 is more than 2, so the snails have more.",
                  "They are equal": "Count both: 2 crabs and 4 snails. Different numbers, so the snails have more.",
                  "Neither": "One group has more — 4 snails beats 2 crabs."
                }
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
                ],
                "whyWrong": {
                  "1": "1 is actually the smallest — the largest in the group is 8.",
                  "3": "3 is small here — look for the biggest: 8 is the largest.",
                  "6": "6 is big but not the biggest — 8 is larger than 6."
                }
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
            ],
            "teach": {
              "concept": "To find which group has MORE, count each group, then pick the bigger number. More means a larger amount.",
              "example": {
                "prompt": "Group A: 🦀🦀🦀🦀🦀🦀. Group B: 🦀🦀. Which group has more?",
                "steps": [
                  "Count Group A: 1, 2, 3, 4, 5, 6 — that's 6.",
                  "Count Group B: 1, 2 — that's 2.",
                  "6 is bigger than 2, so Group A has more."
                ],
                "answer": "Group A"
              }
            }
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
                ],
                "whyWrong": {
                  "7": "7 is the bigger number — fewer means the smaller one, which is 3.",
                  "They are equal": "3 and 7 are different numbers, not equal — 3 is fewer.",
                  "Neither": "One is fewer — 3 is smaller than 7, so 3 is fewer."
                }
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
                ],
                "whyWrong": {
                  "Group A": "Group A has 5, which is more, not fewer — Group B has only 2, so B has fewer.",
                  "They are equal": "Count both: A has 5 and B has 2. Different numbers, so B has fewer.",
                  "Neither": "One group has fewer — B has 2 and A has 5, so B has fewer."
                }
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
                ],
                "whyWrong": {
                  "4": "4 is small but not the smallest — 2 is even smaller.",
                  "6": "6 is in the middle — the smallest number in the group is 2.",
                  "9": "9 is actually the biggest number here — the smallest is 2."
                }
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
                ],
                "whyWrong": {
                  "Sandy": "Sandy has 8, which is more, not fewer — Reef has 5, so Reef has fewer.",
                  "They have the same": "8 and 5 are different, not the same — Reef's 5 is fewer.",
                  "Nobody": "Someone has fewer — Reef's 5 is less than Sandy's 8, so Reef has fewer."
                }
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
            ],
            "teach": {
              "concept": "'Fewer' means less — the smaller amount. Count both groups, then pick the smaller number.",
              "example": {
                "prompt": "Which is fewer: 7 starfish or 3 starfish?",
                "steps": [
                  "Compare the two numbers, 7 and 3.",
                  "3 is the smaller number, so 3 is fewer."
                ],
                "answer": "3"
              }
            }
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
                ],
                "whyWrong": {
                  "No, A has more": "Count both: A has 3 and B has 3. Same number, so they ARE equal, not more.",
                  "No, B has more": "Count both: B has 3 and A has 3. The numbers match, so they're equal.",
                  "There are no fish": "There are fish — 3 in each group — and since 3 equals 3, they're equal."
                }
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
                ],
                "whyWrong": {
                  "4 and 6": "4 and 6 are different numbers, so they're not equal — equal means a matching pair like 7 and 7.",
                  "2 and 3": "2 and 3 are different, so not equal — look for the same number twice, like 7 and 7.",
                  "9 and 1": "9 and 1 are very different, so not equal — the matching pair is 7 and 7."
                }
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
                ],
                "whyWrong": {
                  "Yes, equal": "Count both: 4 crabs but only 3 rocks. Different numbers, so they're not equal — there are more crabs.",
                  "No, more rocks": "There are actually more crabs — 4 crabs but only 3 rocks.",
                  "There are no rocks": "There are 3 rocks — count them. But 4 crabs is more than 3 rocks, so more crabs."
                }
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
                ],
                "whyWrong": {
                  "More": "'More' means a bigger amount, not the same — the word for 'the same amount' is equal.",
                  "Fewer": "'Fewer' means a smaller amount, not the same — 'the same amount' is equal.",
                  "Bigger": "'Bigger' means more, not the same — the word for 'the same amount' is equal."
                }
              }
            ],
            "teach": {
              "concept": "When two groups have the SAME number, they are equal. Count both — if the numbers match, they're equal.",
              "example": {
                "prompt": "Group A: 🐚🐚🐚🐚. Group B: 🐚🐚🐚🐚. Are they equal?",
                "steps": [
                  "Count Group A: 1, 2, 3, 4 — that's 4.",
                  "Count Group B: 1, 2, 3, 4 — that's 4.",
                  "Both are 4, and 4 equals 4, so yes they are equal."
                ],
                "answer": "Yes, equal"
              }
            }
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
                ],
                "whyWrong": {
                  "Square": "A square has 4 straight sides and corners — the round, cornerless shape is a circle.",
                  "Triangle": "A triangle has 3 straight sides and pointy corners — the round, cornerless shape is a circle.",
                  "Rectangle": "A rectangle has 4 straight sides and corners — the round, cornerless shape is a circle."
                }
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
                ],
                "whyWrong": {
                  "2": "Two sides can't close into a shape — trace a triangle and you'll count 3 sides.",
                  "4": "4 sides makes a square or rectangle — a triangle has 3 sides.",
                  "5": "That's too many — a triangle has just 3 sides and 3 corners."
                }
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
                ],
                "whyWrong": {
                  "Circle": "A circle is round with no sides — the 4-sided shape that's long like a door is a rectangle.",
                  "Triangle": "A triangle has only 3 sides — the 4-sided shape that's long like a door is a rectangle.",
                  "Square": "A square has 4 equal sides, so it's not longer one way — the long door-shape is a rectangle."
                }
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
                ],
                "whyWrong": {
                  "Square": "A square has flat sides and corners, so it wouldn't roll — wheels are round circles.",
                  "Triangle": "A triangle has pointy corners and would tip, not roll — wheels are round circles.",
                  "Rectangle": "A rectangle has flat sides and corners, so it can't roll smoothly — wheels are round circles."
                }
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
                ],
                "whyWrong": {
                  "Circle": "A circle has 0 straight sides — the square has the most with 4 sides.",
                  "Triangle": "A triangle has 3 sides — the square has more, with 4 sides.",
                  "They all match": "They don't match: a circle has 0, a triangle has 3, and a square has 4 — the square has the most."
                }
              }
            ],
            "teach": {
              "concept": "Shapes have names by their sides and corners: a circle is round with no corners, a triangle has 3 sides, a square has 4 equal sides, and a rectangle has 4 sides but is longer than it is tall.",
              "example": {
                "prompt": "How many sides does a square have?",
                "steps": [
                  "Look at the square and trace around its edges.",
                  "Count each straight side: 1, 2, 3, 4.",
                  "A square has 4 sides, all the same length."
                ],
                "answer": "4"
              }
            }
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
                ],
                "whyWrong": {
                  "🔴": "The last shown was red, and the pattern alternates red, blue — so after red comes blue, not another red.",
                  "🟢": "Green isn't part of this pattern — it only uses red and blue, and blue comes next.",
                  "🟡": "Yellow isn't part of this pattern — it only uses red and blue, and blue comes next."
                }
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
                ],
                "whyWrong": {
                  "🐠": "The last shown was a fish, and the pattern alternates fish, shell — so a shell comes next, not another fish.",
                  "🦀": "The crab isn't in this pattern — it only uses fish and shell, and a shell comes next.",
                  "🐙": "The octopus isn't in this pattern — it only uses fish and shell, and a shell comes next."
                }
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
                ],
                "whyWrong": {
                  "🌙": "The last shown was a moon, and the pattern alternates star, moon — so a star comes next, not another moon.",
                  "☀️": "The sun isn't in this pattern — it only uses star and moon, and a star comes next.",
                  "☁️": "The cloud isn't in this pattern — it only uses star and moon, and a star comes next."
                }
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
                ],
                "whyWrong": {
                  "🦀": "The pattern is crab, octopus repeating — after a crab comes an octopus, so the gap is the octopus.",
                  "🐠": "The fish isn't in this pattern — it only uses crab and octopus, and the gap is the octopus.",
                  "🐚": "The shell isn't in this pattern — it only uses crab and octopus, and the gap is the octopus."
                }
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
                ],
                "whyWrong": {
                  "🔺": "The repeating part is triangle, triangle, circle — two triangles already showed, so a circle comes next.",
                  "🟢": "Green isn't in this pattern — it uses triangles and a circle, and a circle comes next.",
                  "⬜": "The white square isn't in this pattern — it uses triangles and a circle, and a circle comes next."
                }
              }
            ],
            "teach": {
              "concept": "A pattern is a part that repeats over and over. Find the repeating chunk, then say it again to know what comes next.",
              "example": {
                "prompt": "What comes next? 🟡🟢🟡🟢🟡___",
                "steps": [
                  "Find the repeating part: yellow, green, yellow, green.",
                  "The pattern repeats yellow then green. The last shown was yellow.",
                  "After yellow comes green, so green is next."
                ],
                "answer": "🟢"
              }
            }
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
                ],
                "whyWrong": {
                  "0": "0 comes before 1, not in the middle — between 2 and 4 is 3.",
                  "2": "2 is already there before the blank — count up: 1, 2, then 3 fills the gap.",
                  "6": "6 is too big for this spot — between 2 and 4 comes 3."
                }
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
                ],
                "whyWrong": {
                  "3, 1, 2": "This starts with the biggest — smallest to biggest should begin with 1: 1, 2, 3.",
                  "2, 3, 1": "This puts 1 last, but 1 is smallest — smallest to biggest is 1, 2, 3.",
                  "3, 2, 1": "That's biggest to smallest — smallest to biggest goes the other way: 1, 2, 3."
                }
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
                ],
                "whyWrong": {
                  "5": "5 isn't the smallest — compare 5, 2, 8, and 2 is the smallest, so it comes first.",
                  "8": "8 is actually the biggest, so it comes last — the smallest, 2, comes first.",
                  "They tie": "They're all different numbers, so no tie — 2 is the smallest and comes first."
                }
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
                ],
                "whyWrong": {
                  "1": "That skips a number — counting down from 3 the next is 2, then 1.",
                  "4": "4 already came before 3 — counting down, after 3 comes 2.",
                  "6": "Counting backwards goes down, not up — after 3 comes 2, not 6."
                }
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
            ],
            "teach": {
              "concept": "Numbers line up in order, smallest to biggest, like 1, 2, 3. To find a missing number, count up and see which one fits the empty spot.",
              "example": {
                "prompt": "Which number is missing? 6, 7, ___, 9",
                "steps": [
                  "Count up starting at 6: 6, 7...",
                  "The next number after 7 is 8, and 8 comes right before 9.",
                  "So the missing number is 8."
                ],
                "answer": "8"
              }
            }
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
            "intro": "Hi friend, I'm Pip! Let's start by adding little piles of coconuts together. Counting on is our first island trick!",
            "problems": [
              {
                "id": "addition-atoll-u1-l1-p1",
                "type": "mc",
                "prompt": "🥥🥥🥥 + 🥥🥥 = ? How many coconuts in all?",
                "choices": [
                  "4",
                  "5",
                  "6",
                  "3"
                ],
                "answer": "5",
                "explain": "Three coconuts and two more makes five coconuts. Counting on from 3: 4, 5!",
                "hints": [
                  "We have a pile of 3 shells and a pile of 2 shells. How many is that together?",
                  "Start at the bigger pile and count up. Say '3' then count the extra shells one at a time.",
                  "Begin at 3, then count: 4... now one more shell to go!"
                ],
                "whyWrong": {
                  "3": "That's just the first pile. Don't forget to add the 2 more coconuts: 3 + 2 = 5.",
                  "4": "So close! You counted on just one from 3 instead of two. Add both extra coconuts: 3, then 4, 5.",
                  "6": "That's one too many. Count on exactly 2 from 3: 4, 5 lands on 5, not 6."
                }
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
                ],
                "whyWrong": {
                  "6": "That's where you started! You still need to count on 2 more: 7, 8.",
                  "7": "That's only one hop past 6. Count on 2: seven, then eight makes 8.",
                  "9": "One hop too far. From 6, count on just 2: 7, 8 lands on 8."
                }
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
                "explain": "7 and 3 make a perfect 10! That's a special island pair.",
                "hints": [
                  "What number do you reach when you count 3 past 7?",
                  "Counting on from 7, take exactly three steps.",
                  "From 7: 8, 9... and one more lands you on a round number."
                ],
                "whyWrong": {
                  "8": "That's only one hop. Count all 3: 8, 9, 10 to reach 10.",
                  "9": "Just one short. Count on 3 from 7: 8, 9, 10 lands on 10.",
                  "11": "One too many. From 7, count on exactly 3: 8, 9, 10 is the answer."
                }
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
            ],
            "teach": {
              "concept": "Adding is just counting on! Hold the bigger number in your head, then count up by the other number. Start big, hop the rest.",
              "example": {
                "prompt": "6 + 3 = ?",
                "steps": [
                  "Start at the bigger number, 6, and hold it in your head.",
                  "Count up 3 hops: 7, 8, 9.",
                  "You landed on 9, so that's your answer."
                ],
                "answer": "9"
              }
            }
          },
          {
            "id": "addition-atoll-u1-l2",
            "title": "Starfish Take-Aways",
            "icon": "⭐",
            "intro": "Sometimes coconuts roll away! Subtracting means taking some away and counting what's left. Let's try it together.",
            "problems": [
              {
                "id": "addition-atoll-u1-l2-p1",
                "type": "mc",
                "prompt": "⭐⭐⭐⭐⭐ take away ⭐⭐ = ? How many parrots are left?",
                "choices": [
                  "2",
                  "3",
                  "4",
                  "7"
                ],
                "answer": "3",
                "explain": "Five parrots, two fly away, and three stay behind. 5 - 2 = 3!",
                "hints": [
                  "We started with 5 stars and 2 floated off. Count the ones that stayed.",
                  "Take away the 2 and count what's left on the sand.",
                  "Cross off 2 of the 5 stars, then count the rest."
                ],
                "whyWrong": {
                  "2": "You took away one too many. 5 parrots, 2 fly off, count what stays: 3 remain.",
                  "4": "You only took away one. Two parrots fly off, so count back twice: 4, 3.",
                  "7": "Looks like you added instead of taking away. 'Take away' means count back: 5 - 2 = 3."
                }
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
                ],
                "whyWrong": {
                  "3": "You counted back one too many. From 10, hop back 6: lands on 4, not 3.",
                  "5": "One short on the take-away. Count back 6 from 10: 9, 8, 7, 6, 5, 4.",
                  "6": "That's the number you took away, not what's left. 10 - 6 = 4."
                }
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
                ],
                "whyWrong": {
                  "5": "That's the number you took away, not what remains. 12 - 5 = 7.",
                  "6": "Counted back one too far. From 12, hop back 5: 11, 10, 9, 8, 7.",
                  "8": "One short. Take away exactly 5 from 12: that lands on 7."
                }
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
            ],
            "teach": {
              "concept": "Subtracting means some roll away, and you count what's left. Start at the big number and count BACKWARD by how many you take away.",
              "example": {
                "prompt": "7 - 3 = ?",
                "steps": [
                  "Start at 7, the number you have.",
                  "Count back 3 hops: 6, 5, 4.",
                  "You landed on 4, so 4 are left."
                ],
                "answer": "4"
              }
            }
          },
          {
            "id": "addition-atoll-u1-l3",
            "title": "Two-Way Shell Trade",
            "icon": "🔁",
            "intro": "Here's a cool secret: adding and subtracting are like a drumbeat that swings both ways. Let's see how they connect!",
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
                ],
                "whyWrong": {
                  "5": "That's the number you took away, not what's left. 12 - 5 leaves the other part, 7.",
                  "6": "That subtracts a different part. Since 7 + 5 = 12, taking 5 off leaves the 7.",
                  "8": "Close, but the family is 7, 5, 12. Take the 5 back off the 12 to land on 7."
                }
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
                ],
                "whyWrong": {
                  "5 + 8 = 12": "Almost! 5 and 8 join to make 13, not 12. Count on: 8, 9... up to 13.",
                  "13 + 5 = 8": "The whole, 13, can't be a part. The two small parts 5 and 8 add to the biggest number.",
                  "8 - 13 = 5": "You can't take 13 away from 8. The two parts ADD up to the whole: 5 + 8 = 13."
                }
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
            ],
            "teach": {
              "concept": "Adding and subtracting are drum-buddies that undo each other! If you know 3 + 4 = 7, then 7 - 4 = 3. Addition can flip order, but subtraction can't.",
              "example": {
                "prompt": "If 6 + 5 = 11, what is 11 - 5?",
                "steps": [
                  "Remember the add fact: 6 + 5 = 11, so 6, 5, and 11 are a family.",
                  "Subtraction undoes addition, so take the 5 back off the 11.",
                  "That leaves the other part, 6."
                ],
                "answer": "6"
              }
            }
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
                ],
                "whyWrong": {
                  "3 + 8": "That makes 11, one too many. The pair that hits exactly 10 is 3 + 7.",
                  "4 + 5": "That only makes 9, one short of 10. Try 3 + 7 to reach a full ten.",
                  "2 + 7": "That makes 9, just short. The ten-buddy of 3 is 7, so 3 + 7 = 10."
                }
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
                ],
                "whyWrong": {
                  "0": "Adding 0 keeps it at 9. 9 needs exactly 1 more to reach 10.",
                  "2": "That overshoots to 11. 9 only needs 1 more to make a full 10.",
                  "10": "That makes 19, way past 10. Just 1 more buddy turns 9 into 10."
                }
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
            ],
            "teach": {
              "concept": "Every 10 hides secret partner pairs that add up to it. Find a number's ten-buddy by asking 'how many more to reach 10?' Memorize these and adding gets easy!",
              "example": {
                "prompt": "6 + ___ = 10",
                "steps": [
                  "Start at 6 and count up to 10: 7, 8, 9, 10.",
                  "That was 4 hops to get there.",
                  "So 6's ten-buddy is 4."
                ],
                "answer": "4"
              }
            }
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
                ],
                "whyWrong": {
                  "12": "That dropped too much. 10 plus the leftover 4 is 14, not 12.",
                  "13": "One short. After making 10, add the WHOLE leftover 4: 10 + 4 = 14.",
                  "15": "One too many. You took 1 from the 5 to make 10, so only 4 is left: 10 + 4 = 14."
                }
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
                ],
                "whyWrong": {
                  "14": "That's too low. 10 plus the leftover 6 gives 16, not 14.",
                  "15": "One short. 9 + 1 = 10, then add the leftover 6: 10 + 6 = 16.",
                  "17": "One too many. After making 10, only 6 is left from the 7: 10 + 6 = 16."
                }
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
                ],
                "whyWrong": {
                  "13": "That's too low. 10 plus the leftover 5 makes 15, not 13.",
                  "14": "One short. 8 + 2 = 10, then add the leftover 5: 10 + 5 = 15.",
                  "16": "One too many. After making 10, only 5 is left from the 7: 10 + 5 = 15."
                }
              }
            ],
            "teach": {
              "concept": "When a sum is tricky, build a 10 first, then add the rest. Take just enough from the second number to fill the first up to 10, then add what's left over.",
              "example": {
                "prompt": "9 + 4 = ?",
                "steps": [
                  "9 needs 1 more to make 10, so borrow 1 from the 4: 9 + 1 = 10.",
                  "That leaves 3 from the 4.",
                  "Add the leftover: 10 + 3 = 13."
                ],
                "answer": "13"
              }
            }
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
                "prompt": "Mia found 6 coconuts, then found 7 more. How many coconuts does she have now?",
                "answer": "13",
                "accept": [
                  "13",
                  "thirteen"
                ],
                "explain": "She kept finding MORE, so we add: 6 + 7 = 13 coconuts!",
                "hints": [
                  "She found shells and then found more. Does that grow or shrink her pile?",
                  "Finding more means we add the two numbers together.",
                  "Add 6 + 7 using make-ten if it helps."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p2",
                "type": "input",
                "prompt": "There were 12 parrots on the island. 5 flew off into the trees. How many parrots are left?",
                "answer": "7",
                "accept": [
                  "7",
                  "seven"
                ],
                "explain": "Some parrots left, so we subtract: 12 - 5 = 7 parrots remain!",
                "hints": [
                  "Crabs went away. Does the beach have more or fewer crabs now?",
                  "When some leave, we take away, or subtract.",
                  "Count back 5 from 12."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p3",
                "type": "mc",
                "prompt": "Leo stacked 8 crates. A gust of wind knocked down 3. How many still stand?",
                "choices": [
                  "4",
                  "5",
                  "6",
                  "11"
                ],
                "answer": "5",
                "explain": "Three got knocked down, so we subtract: 8 - 3 = 5 crates left!",
                "hints": [
                  "The waves destroyed some castles. Did the number go up or down?",
                  "Knocking down means take away.",
                  "Count back 3 from 8."
                ],
                "whyWrong": {
                  "4": "You took one too many away. 8 crates minus 3 knocked down leaves 5.",
                  "6": "That's one short on the take-away. 8 - 3 = 5 crates still standing.",
                  "11": "Looks like you added instead. The wind KNOCKED DOWN 3, so subtract: 8 - 3 = 5."
                }
              },
              {
                "id": "addition-atoll-u2-l3-p4",
                "type": "input",
                "prompt": "A backpack holds 9 mangoes. You add 6 more. How many mangoes in the backpack?",
                "answer": "15",
                "accept": [
                  "15",
                  "fifteen"
                ],
                "explain": "Adding more means we add: 9 + 6 = 15 mangoes!",
                "hints": [
                  "You put MORE starfish in. Does the bucket get fuller or emptier?",
                  "Adding more means we add the numbers.",
                  "Use make-ten: 9 + 1 = 10, then add the rest."
                ]
              },
              {
                "id": "addition-atoll-u2-l3-p5",
                "type": "mc",
                "prompt": "There are 14 parrots on the boat. 6 fly away. How many parrots stay?",
                "choices": [
                  "7",
                  "8",
                  "9",
                  "20"
                ],
                "answer": "8",
                "explain": "Parrots flew away, so we subtract: 14 - 6 = 8 parrots remain!",
                "hints": [
                  "Birds left the dock. More or fewer now?",
                  "Flying away means take away.",
                  "Count back 6 from 14, or think: 6 + what = 14?"
                ],
                "whyWrong": {
                  "7": "One too many flew off. 14 parrots minus 6 leaves 8 staying.",
                  "9": "One short. Take away all 6 that flew: 14 - 6 = 8 stay.",
                  "20": "Looks like you added. Parrots FLEW AWAY, so subtract: 14 - 6 = 8."
                }
              },
              {
                "id": "addition-atoll-u2-l3-p6",
                "type": "input",
                "prompt": "Sam had 7 treasure coins. He gave 4 to Pip and 2 to a friend. How many coins does Sam have left?",
                "answer": "1",
                "accept": [
                  "1",
                  "one"
                ],
                "explain": "He gave away 4 and 2, that's 6 total gone. 7 - 6 = 1 coin left!",
                "hints": [
                  "Sam gave shells to TWO people. First add up everything he gave away.",
                  "4 given plus 2 given is 6 shells gone. Then subtract from 7.",
                  "7 - 6 = ?"
                ]
              }
            ],
            "teach": {
              "concept": "Story problems hide the math in words. Read carefully: words like 'more', 'found', or 'add' mean add; words like 'left', 'away', or 'gave' mean subtract.",
              "example": {
                "prompt": "Tia had 8 bananas, then found 5 more. How many now?",
                "steps": [
                  "Spot the numbers: 8 bananas and 5 more.",
                  "'Found more' means we ADD.",
                  "8 + 5 = 13 bananas."
                ],
                "answer": "13"
              }
            }
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
                ],
                "whyWrong": {
                  "4": "That's the ones digit. The tens digit comes first: the 3 in 34 means 3 tens.",
                  "30": "That's the value of the tens, but we count the bundles: 3 tens.",
                  "34": "That's the whole number. The question asks just the tens: 34 has 3 tens."
                }
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
                ],
                "whyWrong": {
                  "6": "That's just 6 ones, no tens. 6 TENS with 0 ones makes 60.",
                  "16": "That's 1 ten and 6 ones. You want 6 tens and 0 ones, which is 60.",
                  "66": "That's 6 tens AND 6 ones. We need 0 ones, so it's just 60."
                }
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
            ],
            "teach": {
              "concept": "Big numbers are bundles of ten plus loose ones. In a two-digit number, the FIRST digit counts the tens and the SECOND digit counts the ones. So 42 is 4 tens and 2 ones.",
              "example": {
                "prompt": "What number is made of 5 tens and 3 ones?",
                "steps": [
                  "5 tens means 50.",
                  "Add the 3 loose ones: 50 + 3.",
                  "That gives 53."
                ],
                "answer": "53"
              }
            }
          },
          {
            "id": "addition-atoll-u3-l2",
            "title": "Skip Across the Reef",
            "icon": "🐠",
            "intro": "Skip counting lets us hop over numbers in groups, like a parrot hopping branch to branch! Let's count by 2s, 5s, and 10s.",
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
                ],
                "whyWrong": {
                  "16": "That added just 1, not 5. Counting by 5s, 15 + 5 = 20.",
                  "18": "That added 3, not 5. Each hop adds 5: 15 + 5 = 20.",
                  "25": "That's one hop too far. After 15 comes 20, then 25."
                }
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
                ],
                "whyWrong": {
                  "11": "That only added 1. Counting by 5s, 10 + 5 = 15.",
                  "12": "That's a by-2s number. Here we hop by 5s, so between 10 and 20 is 15.",
                  "13": "That added 3, not 5. The 5s hop from 10 lands on 15."
                }
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
                "prompt": "Pip has 4 backpacks with 5 coconuts each. Skip count by 5s to find the total.",
                "choices": [
                  "15",
                  "20",
                  "25",
                  "9"
                ],
                "answer": "20",
                "explain": "5, 10, 15, 20! Four hops of 5 gives 20 coconuts.",
                "hints": [
                  "Count by 5 once for each bag, and there are 4 bags.",
                  "Say: 5, 10, 15... one more bag.",
                  "After the fourth hop of 5 you land on the answer."
                ],
                "whyWrong": {
                  "9": "Looks like you added 4 + 5. Each backpack has 5 coconuts, so skip count: 5, 10, 15, 20.",
                  "15": "That's only 3 backpacks counted. There are 4 backpacks of 5: 5, 10, 15, 20.",
                  "25": "That's 5 backpacks. Pip has only 4: 5, 10, 15, 20 makes 20."
                }
              }
            ],
            "teach": {
              "concept": "Skip counting hops in equal groups instead of by ones. By 2s you add 2 each hop, by 5s you add 5, by 10s you add 10. It's a fast way to count things in bundles!",
              "example": {
                "prompt": "Skip count by 5s: 5, 10, 15, ___",
                "steps": [
                  "Each hop adds 5.",
                  "Start from the last number, 15, and add 5.",
                  "15 + 5 = 20."
                ],
                "answer": "20"
              }
            }
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
                ],
                "whyWrong": {
                  "4": "4 splits into two equal 2s, so it's even. The odd one ends in an odd digit, like 7.",
                  "6": "6 splits into two equal 3s, so it's even. Odd numbers end in 1, 3, 5, 7, or 9.",
                  "10": "10 ends in 0, so it's even. Look for one ending in 1, 3, 5, 7, or 9."
                }
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
                ],
                "whyWrong": {
                  "36": "Just short on the ones. Tens 20 + 10 = 30, ones 3 + 4 = 7, so 37.",
                  "38": "One too many. Add the ones carefully: 3 + 4 = 7, giving 30 + 7 = 37.",
                  "47": "You added the tens wrong: 20 + 10 = 30, not 40. So 30 + 7 = 37."
                }
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
            ],
            "teach": {
              "concept": "Even numbers split into two equal groups and end in 0, 2, 4, 6, or 8; odd numbers don't and end in 1, 3, 5, 7, or 9. For big sums, add the tens, then add the ones.",
              "example": {
                "prompt": "32 + 15 = ?",
                "steps": [
                  "Add the tens: 30 + 10 = 40.",
                  "Add the ones: 2 + 5 = 7.",
                  "Put them together: 40 + 7 = 47."
                ],
                "answer": "47"
              }
            }
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
            "intro": "Hi, I'm Pip! Multiplication is just a speedy way to add equal groups. Let's count some temple treasures together!",
            "problems": [
              {
                "id": "times-table-temple-u1-l1-p1",
                "type": "mc",
                "prompt": "💎💎  💎💎  💎💎  How many gems? (3 groups of 2)",
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
                ],
                "whyWrong": {
                  "5": "Looks like you added 3 + 2 instead of making groups. 3 x 2 means 3 groups of 2: 2 + 2 + 2 = 6.",
                  "8": "That's one group too many. There are exactly 3 groups of 2: 2 + 2 + 2 = 6, not 4 groups.",
                  "9": "That would be 3 groups of 3. Here each group has only 2: 2 + 2 + 2 = 6."
                }
              },
              {
                "id": "times-table-temple-u1-l1-p2",
                "type": "mc",
                "prompt": "🔥🔥🔥  🔥🔥🔥  How many torches? (2 groups of 3)",
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
                ],
                "whyWrong": {
                  "4": "Looks like you added 2 + 3 instead of making groups. 2 groups of 3 means 3 + 3 = 6.",
                  "5": "Close, but count again: 2 groups of 3 is 3 + 3 = 6, not 5.",
                  "7": "That's one too many. Two groups of 3 give 3 + 3 = 6."
                }
              },
              {
                "id": "times-table-temple-u1-l1-p3",
                "type": "input",
                "prompt": "4 groups of 2 gems. How many gems in all? 💎",
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
                ],
                "whyWrong": {
                  "3 + 4": "That's adding the two numbers, not making groups. 3 x 4 means three groups of 4: 4 + 4 + 4.",
                  "3 + 3": "This is only adding 3s, but 3 x 4 means three groups of 4, so you add 4 three times: 4 + 4 + 4.",
                  "4 + 4": "That's only two groups of 4. The 3 in 3 x 4 tells you to use three groups: 4 + 4 + 4."
                }
              },
              {
                "id": "times-table-temple-u1-l1-p5",
                "type": "input",
                "prompt": "5 groups of 2 gold coins. How many coins? 🪙",
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
            ],
            "teach": {
              "concept": "Multiplication is just a speedy way to add equal groups. When you see 3 x 2, it means 3 groups of 2 added up. Say it as 'groups of' and you'll always know what to do!",
              "example": {
                "prompt": "How many gems are in 3 groups of 4? 💎",
                "steps": [
                  "Read it as 3 groups of 4, so write 4 + 4 + 4.",
                  "Add the groups: 4 + 4 = 8, then 8 + 4 = 12.",
                  "That matches 3 x 4 = 12."
                ],
                "answer": "12"
              }
            }
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
                ],
                "whyWrong": {
                  "16": "That's hopping by 1, not by 5. After 15, add a full hop of 5: 15 + 5 = 20.",
                  "18": "That's adding 3, not 5. Each hop here is 5, so 15 + 5 = 20.",
                  "25": "You hopped twice past 15. Just one more hop of 5 lands you on 20."
                }
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
                ],
                "whyWrong": {
                  "9": "That's counting by 1, not by 2. After 8, add a full hop of 2: 8 + 2 = 10.",
                  "11": "That's an odd number, but counting by 2s stays even. 8 + 2 = 10.",
                  "12": "You hopped twice past 8. One hop of 2 lands you on 10, not 12."
                }
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
                ],
                "whyWrong": {
                  "2": "That's how many hops to reach 10, not 15. Count 5, 10, 15, that's 3 hops.",
                  "4": "That's one hop too many. 5, 10, 15 is exactly 3 hops of 5.",
                  "5": "5 is the size of each hop, not the number of hops. It takes 3 hops to reach 15."
                }
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
            ],
            "teach": {
              "concept": "Skip-counting is like hopping up stairs, where every hop is the same size. Hop by 2s, 5s, or 10s and you're building your times tables fast!",
              "example": {
                "prompt": "Skip-count by 5s: 5, 10, 15, 20, __. What comes next?",
                "steps": [
                  "Each hop adds 5, so I add 5 to the last number.",
                  "20 + 5 = 25.",
                  "That landing spot is 5 x 5 = 25."
                ],
                "answer": "25"
              }
            }
          },
          {
            "id": "times-table-temple-u1-l3",
            "title": "Building Arrays",
            "icon": "🟦",
            "intro": "An array is a neat grid of floor tiles in rows and columns. Count the rows, count each row's tiles, and multiply!",
            "problems": [
              {
                "id": "times-table-temple-u1-l3-p1",
                "type": "mc",
                "prompt": "A floor has 3 rows with 4 tiles in each row. How many tiles? (3 x 4)",
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
                ],
                "whyWrong": {
                  "7": "Looks like you added 3 + 4 instead of multiplying the array. 3 rows of 4 is 4 + 4 + 4 = 12.",
                  "10": "Close, but count each row fully: 3 rows of 4 is 4 + 4 + 4 = 12, not 10.",
                  "16": "That would be a 4 x 4 array. Here it's 3 rows of 4: 4 + 4 + 4 = 12."
                }
              },
              {
                "id": "times-table-temple-u1-l3-p2",
                "type": "input",
                "prompt": "A treasure tray has 2 rows of 6 gold coins. How many coins? 🪙",
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
                "prompt": "Which multiplication matches a floor of 5 rows and 2 columns of tiles?",
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
                ],
                "whyWrong": {
                  "5 + 2": "Tile floors multiply, not add. 5 rows and 2 columns means 5 x 2.",
                  "5 x 5": "The second number is the columns, which is 2, not 5. It's 5 x 2.",
                  "2 + 2": "That only counts two rows by adding. A floor of 5 rows and 2 columns is 5 x 2."
                }
              },
              {
                "id": "times-table-temple-u1-l3-p4",
                "type": "input",
                "prompt": "A carved stone slab has 4 rows of 3 tiles. How many tiles? 🧱",
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
                ],
                "whyWrong": {
                  "9": "That's adding 4 + 5 instead of multiplying. A 4 x 5 array is 5 + 5 + 5 + 5 = 20.",
                  "16": "That would be a 4 x 4 array. Here each row has 5: 5 + 5 + 5 + 5 = 20.",
                  "25": "That would be a 5 x 5 array. This one has 4 rows of 5: 5 + 5 + 5 + 5 = 20."
                }
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
            ],
            "teach": {
              "concept": "An array is a neat grid with rows and columns. Count the rows, count how many are in each row, and multiply: rows x how-many-in-each = total.",
              "example": {
                "prompt": "An array has 2 rows with 5 dots in each row. How many dots? (2 x 5)",
                "steps": [
                  "There are 2 rows, each with 5 dots, so write 5 + 5.",
                  "Add them: 5 + 5 = 10.",
                  "That matches 2 x 5 = 10."
                ],
                "answer": "10"
              }
            }
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
                ],
                "whyWrong": {
                  "18": "Looks like you added 8 + 10 instead of multiplying. 8 x 10 means add a 0 to 8: 80.",
                  "88": "You stuck the 8 next to 10 instead of multiplying. To do x10, add a 0 to 8: 80.",
                  "800": "That's adding two zeros, which is x100. Multiplying by 10 adds just one 0: 8 x 10 = 80."
                }
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
                ],
                "whyWrong": {
                  "9": "Looks like you added 4 + 5 instead of multiplying. Skip-count by 5 four times: 5, 10, 15, 20.",
                  "16": "That would be 4 x 4. Here it's 4 x 5: 5, 10, 15, 20 = 20.",
                  "25": "That's one hop of 5 too many. Four hops give 5, 10, 15, 20 = 20."
                }
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
            ],
            "teach": {
              "concept": "The 2s, 5s, and 10s are the friendliest facts. For 2s just double the number, for 5s skip-count by 5, and for 10s just stick a 0 on the end!",
              "example": {
                "prompt": "What is 6 x 10?",
                "steps": [
                  "Multiplying by 10 means add a 0 to the other number.",
                  "6 with a 0 added becomes 60.",
                  "So 6 x 10 = 60."
                ],
                "answer": "60"
              }
            }
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
                ],
                "whyWrong": {
                  "24": "That's 6 x 4, one group of 4 short. 7 x 4 is 24 + 4 = 28.",
                  "27": "That's not a 4s fact at all. 7 x 4 is double-double of 7: 14, then 28.",
                  "32": "That's 8 x 4, one group of 4 too many. 7 x 4 = 28."
                }
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
                ],
                "whyWrong": {
                  "21": "That's 7 x 3, one group of 3 short. 8 x 3 is 21 + 3 = 24.",
                  "27": "That's 9 x 3, one group of 3 too many. 8 x 3 = 24.",
                  "32": "That's 8 x 4, not 8 x 3. Adding 3 eight times gives 24."
                }
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
            ],
            "teach": {
              "concept": "Time to level up with the 3s, 4s, and 6s. If you forget one, just add another group, or use a trick like doubling twice for the 4s.",
              "example": {
                "prompt": "What is 6 x 4?",
                "steps": [
                  "Double 6 once: 6 x 2 = 12.",
                  "Double it again: 12 x 2 = 24.",
                  "So 6 x 4 = 24."
                ],
                "answer": "24"
              }
            }
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
                ],
                "whyWrong": {
                  "48": "That's 8 x 6, one group of 8 short. 8 x 7 is 48 + 8 = 56.",
                  "54": "That's 9 x 6, not 8 x 7. For 8 x 7, think (8 x 8) - 8 = 64 - 8 = 56.",
                  "63": "That's 9 x 7, one group of 7 too many. 8 x 7 = 56."
                }
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
                ],
                "whyWrong": {
                  "56": "That's 8 x 7, one group of 8 short. 8 x 8 is 56 + 8 = 64.",
                  "60": "Close, but 8 x 8 isn't a round number here. Picture an 8-by-8 board: that's 64.",
                  "72": "That's 8 x 9, one group of 8 too many. 8 x 8 = 64."
                }
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
            ],
            "teach": {
              "concept": "These are the boss facts of the temple! For tricky ones near a friendly fact, lean on it: 9 x 6 is just 10 x 6 minus one 6. Smart tricks make 7s, 8s, and 12s easy.",
              "example": {
                "prompt": "What is 9 x 7?",
                "steps": [
                  "Start with the easy 10 times: 10 x 7 = 70.",
                  "Take away one group of 7: 70 - 7 = 63.",
                  "So 9 x 7 = 63."
                ],
                "answer": "63"
              }
            }
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
                "prompt": "12 gold coins shared equally among 3 explorers. How many each? 🪙",
                "answer": "4",
                "accept": [
                  "4",
                  "four"
                ],
                "explain": "12 / 3 = 4. Each explorer gets 4 because 3 x 4 = 12!",
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
                ],
                "whyWrong": {
                  "3": "Check by multiplying: 5 x 3 = 15, not 20. You need 5 x 4 = 20, so 20 / 5 = 4.",
                  "5": "That's the divisor, not the answer. 5 x 4 = 20, so 20 / 5 = 4.",
                  "15": "Looks like you subtracted 20 - 5. Division shares into groups: 20 / 5 = 4 because 5 x 4 = 20."
                }
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
                ],
                "whyWrong": {
                  "3": "Check by multiplying: 3 x 3 = 9, not 15. You need 3 x 5 = 15, so 15 / 3 = 5.",
                  "6": "Close, but 3 x 6 = 18, too big. 3 x 5 = 15, so 15 / 3 = 5.",
                  "12": "Looks like you subtracted 15 - 3. Division shares into groups: 15 / 3 = 5 because 3 x 5 = 15."
                }
              },
              {
                "id": "times-table-temple-u3-l1-p5",
                "type": "input",
                "prompt": "24 gems split into 4 equal chests. How many per chest?",
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
            ],
            "teach": {
              "concept": "Division is sharing into equal groups, the opposite of multiplying. To find 12 / 3, ask 'what times 3 makes 12?' That answer is your share.",
              "example": {
                "prompt": "15 cookies shared equally among 5 friends. How many each? 🍪",
                "steps": [
                  "Ask: what number times 5 makes 15?",
                  "5 x 3 = 15, so each friend gets 3.",
                  "So 15 / 5 = 3."
                ],
                "answer": "3"
              }
            }
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
                ],
                "whyWrong": {
                  "5": "That's a bit short. Since 6 x 7 = 42, dividing 42 / 7 brings back 6, not 5.",
                  "7": "7 is the number you divided by, not the answer. 6 x 7 = 42, so 42 / 7 = 6.",
                  "8": "That's a bit too high. The fact family says 6 x 7 = 42, so 42 / 7 = 6."
                }
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
                ],
                "whyWrong": {
                  "4 x 6 = 24": "This one only uses 4, 6, and 24, so it IS in the family. The odd one out brings in a new number.",
                  "6 x 4 = 24": "This one only uses 4, 6, and 24, so it IS in the family. The odd one out brings in a new number.",
                  "24 / 6 = 4": "This one only uses 4, 6, and 24, so it IS in the family. The odd one out brings in a new number."
                }
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
                ],
                "whyWrong": {
                  "4": "4 is the number you divided by, not the answer. Since 9 x 4 = 36, then 36 / 4 = 9.",
                  "8": "That's close to a different fact. The family says 9 x 4 = 36, so 36 / 4 = 9.",
                  "12": "That mixes in a new number. Using 9 x 4 = 36, dividing 36 / 4 gives back 9."
                }
              }
            ],
            "teach": {
              "concept": "Multiplication and division are family! The same three numbers make four facts, and the order can flip: 3 x 4 equals 4 x 3. So if you know one, you know them all.",
              "example": {
                "prompt": "If 7 x 8 = 56, what is 56 / 8?",
                "steps": [
                  "These belong to the same fact family with 7, 8, and 56.",
                  "Since 7 x 8 = 56, dividing 56 / 8 undoes it.",
                  "That brings back the other factor, 7."
                ],
                "answer": "7"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "That shares only 10 gems, not 100. 100 / 10 = 10, so each chest gets 10.",
                  "100": "That's all the gems in one chest, not shared. Split among 10 chests: 100 / 10 = 10 each.",
                  "1000": "Looks like you multiplied 100 x 10. To share, divide: 100 / 10 = 10 per chest."
                }
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
                ],
                "whyWrong": {
                  "13": "Looks like you added 8 + 5 instead of multiplying the array. 8 rows of 5 is 8 x 5 = 40.",
                  "35": "That's 7 x 5, one row short. 8 rows of 5 is 8 x 5 = 40.",
                  "45": "That's 9 x 5, one row too many. 8 rows of 5 is 8 x 5 = 40."
                }
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
                ],
                "whyWrong": {
                  "23": "Looks like you added 3 + 20 instead of multiplying. 3 potions at 20 coins is 3 x 20 = 60.",
                  "40": "That's only 2 potions worth. 3 potions at 20 coins each is 3 x 20 = 60.",
                  "50": "That's between facts. Each potion costs 20, so 3 x 20 = 60 coins."
                }
              }
            ],
            "teach": {
              "concept": "The final challenge! Quests use multiplying for equal groups, dividing to share fairly, and multiplying by 10 or 100 (just add zeros). Read carefully and pick the right operation.",
              "example": {
                "prompt": "A temple has 5 shelves. Each shelf holds 8 scrolls. How many scrolls in all?",
                "steps": [
                  "Equal groups means multiply: 5 shelves x 8 scrolls.",
                  "5 x 8 = 40.",
                  "So there are 40 scrolls."
                ],
                "answer": "40"
              }
            }
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
                ],
                "whyWrong": {
                  "4/1": "You flipped it — the total pieces (4) goes on the bottom and the 1 slice you took goes on top: 1/4.",
                  "1/2": "1/2 would be 1 slice out of 2 equal slices, but the pizza has 4 slices, so 1 out of 4 is 1/4.",
                  "4/4": "4/4 means all 4 slices, but you only grabbed 1 slice, so it's 1/4."
                }
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
                ],
                "whyWrong": {
                  "2": "That's the difference 5 - 3, but the total pieces is simply the denominator: 5.",
                  "3": "3 is the top number (numerator) — that's how many pieces we're talking about, not how many the whole is split into. The bottom 5 tells the total pieces.",
                  "8": "Looks like you added 3 + 5, but the number of total pieces is just the bottom number by itself: 5."
                }
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
                ],
                "whyWrong": {
                  "A square split into 2 equal parts with both shaded": "Both parts shaded is the whole thing (2/2 = 1), not half. For 1/2 you shade just 1 of the 2 equal parts.",
                  "A square split into 4 equal parts with 1 shaded": "1 out of 4 equal parts is 1/4, not 1/2. Half needs the whole split into just 2 equal parts.",
                  "A square split into 3 equal parts with 1 shaded": "1 out of 3 equal parts is 1/3, not 1/2. For a half, split into 2 equal parts and shade one."
                }
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
            ],
            "teach": {
              "concept": "A fraction names equal pieces of a whole. The bottom number (denominator) says how many equal pieces the whole is split into; the top number (numerator) says how many of those pieces you're talking about. Top = how many you have, bottom = how many in all.",
              "example": {
                "prompt": "A waffle is cut into 4 equal pieces and you take 3 of them. What fraction did you take?",
                "steps": [
                  "Count the total equal pieces — that's the bottom number: 4.",
                  "Count how many pieces you took — that's the top number: 3.",
                  "Stack them as top over bottom: 3/4."
                ],
                "answer": "3/4"
              }
            }
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
                ],
                "whyWrong": {
                  "Right at 1": "That would be 4/4 (all 4 jumps). 2/4 is only 2 of the 4 jumps, so it lands halfway.",
                  "Just past 0": "That's closer to 1/4. 2 jumps out of 4 is more than that — it reaches the middle.",
                  "Past 1": "You only have 2 of the 4 jumps, so you can't pass 1. 2/4 stops right at the halfway mark."
                }
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
                ],
                "whyWrong": {
                  "1/4": "1/4 is just 1 of the 4 jumps, only part of the way. You reach the whole (1) when the top equals the bottom: 4/4.",
                  "3/4": "3/4 is 3 of the 4 jumps — close, but not all the way. The whole 1 is at 4/4.",
                  "1/2": "1/2 is only halfway to 1. You land exactly on 1 when top equals bottom, like 4/4."
                }
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
                ],
                "whyWrong": {
                  "2/8": "2 jumps is fewer than 6 jumps, so 2/8 is closer to 0, not farther. 6/8 is farther from 0.",
                  "They're the same": "6/8 and 2/8 aren't the same spot — 6 jumps lands much farther along than 2 jumps.",
                  "1/8": "1/8 is just 1 jump from 0 — the closest of all. 6/8 is the farthest here."
                }
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
            ],
            "teach": {
              "concept": "A number line works for fractions too! Chop the space between 0 and 1 into equal jumps that match the denominator, then count jumps for the numerator. The denominator tells you the jump size; the numerator tells you how many jumps from 0.",
              "example": {
                "prompt": "On a number line from 0 to 1 split into 4 equal parts, where does a point on the 3rd tick after 0 land?",
                "steps": [
                  "The line is split into 4 equal jumps, so each jump is 1/4 — that's the denominator.",
                  "Count 3 ticks (jumps) from 0 — that's the numerator: 3.",
                  "The point sits at 3 jumps out of 4, which is 3/4."
                ],
                "answer": "3/4"
              }
            }
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
                ],
                "whyWrong": {
                  "1/3": "1/3 isn't the same as 1/2 — thirds are a different size. To match 1/2, multiply top and bottom by 2 to get 2/4.",
                  "2/3": "2/3 is bigger than 1/2 (more than half). The twin of 1/2 here is 2/4, made by doubling top and bottom.",
                  "3/4": "3/4 is more than half. To stay equal to 1/2, double both parts of 1/2 to get 2/4."
                }
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
                ],
                "whyWrong": {
                  "6/12": "6/12 isn't 2/3 — that's actually 1/2. For 2/3 with bottom 12, multiply top and bottom by 4 to get 8/12.",
                  "4/12": "Looks like you only multiplied the top by 2, but the bottom went from 3 to 12 (times 4), so the top must be 2 times 4 = 8.",
                  "2/12": "You kept the top as 2 but only changed the bottom. Multiply the top by 4 too: 2 times 4 = 8, giving 8/12."
                }
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
                ],
                "whyWrong": {
                  "5/10": "5/10 divides by 5 to become 1/2, so it IS equivalent to 1/2 — that means it's not the odd one out.",
                  "4/8": "4/8 divides by 4 to become 1/2, so it IS equal to 1/2 — not the one we're looking for.",
                  "6/12": "6/12 divides by 6 to become 1/2, so it IS equal to 1/2 — not the odd one out."
                }
              }
            ],
            "teach": {
              "concept": "Equivalent fractions are twins — they look different but are worth the same amount. If you multiply (or divide) the top AND bottom by the same number, the value stays the same. Memory hook: whatever you do to the bottom, do to the top.",
              "example": {
                "prompt": "Write a fraction equivalent to 2/5 with a denominator of 15.",
                "steps": [
                  "See how the bottom changes: 5 times 3 = 15, so the multiplier is 3.",
                  "Do the same to the top: 2 times 3 = 6.",
                  "The equivalent fraction is 6/15."
                ],
                "answer": "6/15"
              }
            }
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
                ],
                "whyWrong": {
                  "3/8": "With same-size pieces (eighths), more pieces wins. 3 pieces is fewer than 5, so 3/8 is the smaller one.",
                  "They're equal": "3/8 and 5/8 aren't equal — they have the same bottom but different tops, so 5/8 has more pieces.",
                  "Can't tell": "We can tell! Same bottoms means just compare the tops: 5 is more than 3, so 5/8 is greater."
                }
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
                ],
                "whyWrong": {
                  "1/5": "When the tops match, a bigger bottom makes SMALLER pieces. Fifths are smaller than thirds, so 1/5 is less than 1/3.",
                  "They're equal": "They aren't equal — splitting into 3 parts gives bigger pieces than splitting into 5, so 1/3 is greater.",
                  "Can't tell": "We can tell! Same top, so fewer pieces (thirds) means bigger pieces: 1/3 wins."
                }
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
                ],
                "whyWrong": {
                  "<": "That points the wrong way. Same bottoms, and 4 pieces is more than 3, so 4/6 is greater: use >.",
                  "=": "They aren't equal — 4/6 has more pieces than 3/6, so the correct symbol is >.",
                  "none": "One symbol does work: since 4 beats 3 with the same bottom, 4/6 > 3/6."
                }
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
                ],
                "whyWrong": {
                  "2/3": "Make common bottoms: 2/3 = 8/12 and 3/4 = 9/12. Since 8 is less than 9, 2/3 is the smaller one.",
                  "They're equal": "They aren't equal — as twelfths, 2/3 = 8/12 and 3/4 = 9/12, so 3/4 is a bit bigger.",
                  "Can't tell": "We can tell with a common denominator: 2/3 = 8/12 and 3/4 = 9/12, so 3/4 is greater."
                }
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
            ],
            "teach": {
              "concept": "To compare fractions: if the bottoms match, more pieces wins. If the tops match, fewer pieces means BIGGER pieces, so the smaller bottom wins. When neither matches, make a common denominator (or compare to a benchmark like 1/2).",
              "example": {
                "prompt": "Which is greater: 3/4 or 5/8?",
                "steps": [
                  "The bottoms differ, so find a common denominator: 8 works for both.",
                  "Rewrite 3/4 with bottom 8: multiply top and bottom by 2 to get 6/8.",
                  "Now compare 6/8 and 5/8 — same bottoms, and 6 beats 5, so 3/4 is greater."
                ],
                "answer": "3/4"
              }
            }
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
                ],
                "whyWrong": {
                  "5/12": "You added the bottoms (6 + 6), but the pieces are already sixths — keep the bottom 6 and just add the tops: 5/6.",
                  "3/6": "That looks like 4 - 1 on top, but this is addition: 1 + 4 = 5, so the answer is 5/6.",
                  "5/0": "The bottom never becomes 0 — you keep the shared bottom (6) and only add the tops: 5/6."
                }
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
            ],
            "teach": {
              "concept": "When the bottoms already match, the pieces are the same size — so just add or subtract the tops and keep the bottom the same. Never add the bottoms! Memory hook: same-size slices, so only the count changes.",
              "example": {
                "prompt": "4/9 + 2/9 = ?",
                "steps": [
                  "Check the bottoms — both are 9, so they match.",
                  "Add only the tops: 4 + 2 = 6.",
                  "Keep the bottom the same: the answer is 6/9 (which simplifies to 2/3)."
                ],
                "answer": "6/9"
              }
            }
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
                ],
                "whyWrong": {
                  "1 1/2": "That's only 3/2 (1 times 2, plus 1). For 5/2, 5 divided by 2 is 2 remainder 1, so it's 2 1/2.",
                  "2 1/5": "The leftover goes over the original bottom (2), not 5. 5/2 = 2 1/2, not 2 1/5.",
                  "5 1/2": "The whole number comes from dividing, not the top itself. 5 divided by 2 is 2 (not 5), giving 2 1/2."
                }
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
                ],
                "whyWrong": {
                  "6/3": "6/3 equals 2 (2 times 3 = 6), which is 2 wholes — but 2 2/3 has an extra 2/3. You need 6 + 2 = 8, so 8/3.",
                  "4/3": "That's only 1 1/3. For 2 2/3, multiply 2 times 3 = 6, then add 2 to get 8/3.",
                  "2/3": "2/3 is less than one whole, but 2 2/3 is more than two wholes. Do 2 times 3 + 2 = 8, giving 8/3."
                }
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
                ],
                "whyWrong": {
                  "3 1/4": "3 1/4 is 3 and a quarter, but 7/2 = 3 1/2 (a half), which is more. So 7/2 is the larger one.",
                  "They're equal": "They aren't equal — 7/2 is 3 1/2, and 3 1/2 is bigger than 3 1/4.",
                  "Can't tell": "We can tell! Convert 7/2 to 3 1/2, then compare to 3 1/4 — 3 1/2 is greater."
                }
              }
            ],
            "teach": {
              "concept": "A mixed number (like 1 1/2) is a whole plus a fraction; an improper fraction (like 3/2) says the same thing with a top bigger than the bottom. To go improper-to-mixed, divide; to go mixed-to-improper, multiply the whole by the bottom and add the top.",
              "example": {
                "prompt": "Write the mixed number 2 1/3 as an improper fraction.",
                "steps": [
                  "Multiply the whole number by the bottom: 2 times 3 = 6.",
                  "Add the top: 6 + 1 = 7 — that's your new top.",
                  "Keep the same bottom: the improper fraction is 7/3."
                ],
                "answer": "7/3"
              }
            }
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
                ],
                "whyWrong": {
                  "3": "4 doesn't divide evenly into 3, so 3 can't be the common bottom. The smallest one that works for both is 12.",
                  "4": "3 doesn't divide evenly into 4, so 4 can't be the common bottom. The smallest one both share is 12.",
                  "7": "7 is 3 + 4, but a common denominator must be a number both 3 and 4 divide into. 3 and 4 don't divide 7 — but they both divide 12."
                }
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
                ],
                "whyWrong": {
                  "3/9": "Looks like you added tops and bottoms straight across. Instead rewrite 2/3 as 4/6, then 4/6 + 1/6 = 5/6.",
                  "3/6": "That's 2/3 - 1/6. For adding, 2/3 = 4/6, so 4/6 + 1/6 = 5/6.",
                  "5/9": "You added the bottoms (3 + 6 = 9), but you should match them first: 2/3 = 4/6, then 4/6 + 1/6 = 5/6."
                }
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
            ],
            "teach": {
              "concept": "When the bottoms are different, the pieces are different sizes — so make them match first with a common denominator. Rewrite each fraction as an equivalent one with that bottom, then add or subtract the tops as usual.",
              "example": {
                "prompt": "1/2 + 1/3 = ?",
                "steps": [
                  "Find a common denominator for 2 and 3: 6 works for both.",
                  "Rewrite each: 1/2 = 3/6 and 1/3 = 2/6.",
                  "Add the tops, keep the bottom: 3/6 + 2/6 = 5/6."
                ],
                "answer": "5/6"
              }
            }
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
                ],
                "whyWrong": {
                  "8/20": "You multiplied both the top AND the bottom by 4. Only multiply the top: 2 times 4 = 8, keep the bottom 5, giving 8/5.",
                  "6/5": "Looks like you added 2 + 4 on top. Instead multiply: 2 times 4 = 8, so the answer is 8/5.",
                  "2/20": "You multiplied only the bottom by 4 and left the top. It's the other way: multiply the top, keep the bottom: 8/5."
                }
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
                ],
                "whyWrong": {
                  "6/3 of a liter only": "6/3 is correct as a step, but it simplifies — 6 divided by 3 = 2, so 3 cups hold 2 whole liters.",
                  "5/3 liter": "That looks like 3 + 2 on top, but you multiply: 3 times 2 = 6, giving 6/3 = 2 liters.",
                  "2/9 liter": "Looks like you multiplied the bottom (3 times 3) instead of the top. Multiply the top: 3 times 2 = 6, keep the bottom: 6/3 = 2 liters."
                }
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
            ],
            "teach": {
              "concept": "Multiplying a fraction by a whole number is just repeated adding. 3 x 1/4 means 1/4 + 1/4 + 1/4. The shortcut: multiply the top by the whole number and keep the bottom the same.",
              "example": {
                "prompt": "3 x 2/5 = ?",
                "steps": [
                  "Multiply the top by the whole number: 2 times 3 = 6.",
                  "Keep the bottom the same: 5.",
                  "The answer is 6/5 (which is also 1 1/5)."
                ],
                "answer": "6/5"
              }
            }
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
                ],
                "whyWrong": {
                  "5/6": "As twenty-fourths, 5/6 = 20/24 and 7/8 = 21/24. Since 20 is less than 21, 5/6 is the smaller one.",
                  "They're equal": "They aren't equal — 5/6 = 20/24 and 7/8 = 21/24, so 7/8 is just a hair bigger.",
                  "Can't tell": "We can tell with a common denominator: 5/6 = 20/24 and 7/8 = 21/24, so 7/8 is greater."
                }
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
                ],
                "whyWrong": {
                  "Between 0 and 1": "That would be a fraction less than 8/8. But 11/8 is more than 8/8 (one whole), so it lands past 1, at 1 3/8.",
                  "Exactly at 1": "Exactly 1 is at 8/8. 11/8 has 3 more eighths than that, so it sits past 1 at 1 3/8.",
                  "Exactly at 2": "2 would be 16/8. 11/8 is less than 16/8, so it lands between 1 and 2, at 1 3/8."
                }
              }
            ],
            "teach": {
              "concept": "This is the grand mix — comparing, adding with unlike bottoms, switching between mixed and improper, and multiplying. Slow down and pick the right tool for each problem: match bottoms before adding, and multiply tops for whole-number multiplying.",
              "example": {
                "prompt": "3/4 + 1/6 = ?",
                "steps": [
                  "Find a common denominator for 4 and 6: 12 works for both.",
                  "Rewrite each: 3/4 = 9/12 and 1/6 = 2/12.",
                  "Add the tops, keep the bottom: 9/12 + 2/12 = 11/12."
                ],
                "answer": "11/12"
              }
            }
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
            "intro": "Hi, I'm Pip! That little dot is the decimal point, and it splits the whole numbers from the pieces. Let's get to know it at the market!",
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
                "explain": "The tenths place is the first spot right after the decimal point, and that's the 7. Nice ring-up!",
                "hints": [
                  "Look at the digit just to the right of the dot.",
                  "The places after the dot go: tenths, then hundredths.",
                  "Start at the decimal point and step right one place to land on the tenths."
                ],
                "whyWrong": {
                  "0": "There's no 0 in 4.7. The tenths place is the first digit after the dot, and that's the 7.",
                  "4": "The 4 is in the ones place, to the LEFT of the dot. The tenths place is the first spot to the RIGHT of the dot, which is 7.",
                  "47": "That's both digits mushed together. We want just one digit, the one in the tenths place: 7."
                }
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
                "explain": "Only 5.6 has a dot followed by a piece, so it's the one with a decimal part. Rung up right!",
                "hints": [
                  "A decimal part means there's a dot with digits after it.",
                  "Scan each number for a decimal point.",
                  "Three of these are plain whole numbers, one has a dot, find the dot."
                ],
                "whyWrong": {
                  "9": "9 is a single whole number with no dot. The one with a decimal part has a dot in it: 5.6.",
                  "12": "12 is a whole number with no dot, so it has no decimal part. Look for a number with a dot followed by pieces, like 5.6.",
                  "100": "100 is a whole number, no dot and no pieces. The number with a decimal part is 5.6."
                }
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
                "explain": "The hundredths place is the SECOND spot after the dot, so it's the 9. You're tallying now!",
                "hints": [
                  "Count the places after the dot: first is tenths, second is hundredths.",
                  "You want the second digit past the decimal point.",
                  "Skip past the tenths digit and land on the next one."
                ],
                "whyWrong": {
                  "0": "The 0 is the whole-number part before the dot. The hundredths place is the second digit after the dot: 9.",
                  "5": "The 5 is in the tenths place, the FIRST spot after the dot. Hundredths is the SECOND spot, which is the 9.",
                  "59": "That's both digits together. We want only the digit in the hundredths place, the second one after the dot: 9."
                }
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
            ],
            "teach": {
              "concept": "That little dot is the decimal point. Everything to the LEFT is whole; everything to the RIGHT is pieces of a whole. The first spot after the dot is tenths, the second is hundredths. Hook: left of the dot = lots, right of the dot = little.",
              "example": {
                "prompt": "Which digit is in the hundredths place in 7.36?",
                "steps": [
                  "Find the decimal point. Everything after it is the pieces part: 36.",
                  "The FIRST spot after the dot is tenths, so 3 is in tenths.",
                  "The SECOND spot after the dot is hundredths, so 6 is in hundredths."
                ],
                "answer": "6"
              }
            }
          },
          {
            "id": "decimal-delta-u1-l2",
            "title": "Place Value Power",
            "icon": "🏗️",
            "intro": "Every place has a value, Pip-promise! Tenths, hundredths, thousandths, each one ten times smaller. Let's weigh their worth on the market scale.",
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
                "explain": "The 6 sits in the tenths place, so its value is 6 tenths. That's 6/10 on the scale!",
                "hints": [
                  "The 6 is the first digit after the dot.",
                  "The first place after the dot names the value.",
                  "First place after the dot is tenths, so the 6 is worth 6 of those."
                ],
                "whyWrong": {
                  "6 ones": "The 6 is after the dot, so it's not a whole. It sits in the first place after the dot, the tenths, so its value is 6 tenths.",
                  "6 hundredths": "Hundredths is the SECOND place after the dot. The 6 is in the FIRST place, so it's 6 tenths, not hundredths.",
                  "6 wholes": "Wholes live to the LEFT of the dot. The 6 is to the right in the tenths place, so its value is 6 tenths."
                }
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
                ],
                "whyWrong": {
                  "ones": "Ones is to the LEFT of the dot, and it's bigger than tenths, not smaller. The place ten times smaller than tenths is hundredths.",
                  "tens": "Tens is a big place to the left of the dot. We want the place ten times SMALLER than tenths, which is hundredths.",
                  "thousands": "Thousands is huge and to the left of the dot. The place just smaller than tenths is hundredths."
                }
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
                "explain": "Thousandths is the THIRD place after the dot, and that's the 8. Deep in the ledger!",
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
                ],
                "whyWrong": {
                  "4 hundredths": "Hundredths is the SECOND place after the dot. The 4 is the FIRST digit after the dot, so it's 4 tenths.",
                  "4 ones": "Ones is to the LEFT of the dot. The 4 is to the right in the tenths place, so its value is 4 tenths.",
                  "4 tens": "Tens is far to the left of the dot. The 4 is right after the dot in the tenths place, so it's 4 tenths."
                }
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
            ],
            "teach": {
              "concept": "Each place to the right of the dot is ten times smaller: tenths, then hundredths, then thousandths. A digit's VALUE is the digit times its place, so the 6 in 0.06 is worth 6 hundredths, not 6 tenths. Hook: same digit, different place, different worth.",
              "example": {
                "prompt": "What is the value of the 4 in 0.045?",
                "steps": [
                  "Name the places after the dot: 0 is tenths, 4 is hundredths, 5 is thousandths.",
                  "The 4 sits in the hundredths place.",
                  "So its value is 4 hundredths, which is 4/100."
                ],
                "answer": "4 hundredths (4/100)"
              }
            }
          },
          {
            "id": "decimal-delta-u1-l3",
            "title": "Reading & Writing Decimals",
            "icon": "✍️",
            "intro": "Time to say decimals out loud and write them on the receipt, Pip-style. We read the dot as 'and' and use place names. Let's go!",
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
                "explain": "The 3 is in the tenths place, so 0.3 is 'three tenths.' Perfectly read off the receipt!",
                "hints": [
                  "The last digit's place name is the unit you say.",
                  "The 3 is in the tenths place.",
                  "Say the digit, then its place: three... tenths."
                ],
                "whyWrong": {
                  "three": "That's just the whole number 3, but 0.3 has the 3 after the dot. The 3 is in the tenths place, so it's 'three tenths.'",
                  "three hundredths": "Hundredths is the second place after the dot. In 0.3 the 3 is in the FIRST place, so it's 'three tenths.'",
                  "thirty": "0.3 is smaller than one, not thirty. The 3 is in the tenths place, so it reads 'three tenths.'"
                }
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
                "explain": "Hundredths means two places after the dot, so fifty-six hundredths is 0.56. Neatly written on the tag!",
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
                "explain": "The dot is read as 'and,' so 4.2 is 'four and two tenths.' You called it right!",
                "hints": [
                  "The dot is read as the word 'and'.",
                  "Say the whole part, then 'and', then the decimal part.",
                  "Four ... and ... two of which place? The 2 is in tenths."
                ],
                "whyWrong": {
                  "four two": "We don't just say the digits. The dot is read as 'and' and the 2 is in tenths, so it's 'four and two tenths.'",
                  "forty-two": "4.2 is a bit more than four, not forty-two. Read the dot as 'and': 'four and two tenths.'",
                  "four and two": "Close! You read the dot as 'and,' but you skipped the place name. The 2 is in tenths, so it's 'four and two tenths.'"
                }
              },
              {
                "id": "decimal-delta-u1-l3-p4",
                "type": "input",
                "prompt": "Write 'seven and five tenths' as a decimal.",
                "answer": "7.5",
                "accept": [
                  "7.5"
                ],
                "explain": "Seven is the whole part and five tenths goes after the dot, giving 7.5. Written up on the receipt!",
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
                "explain": "Nine hundredths needs the 9 in the second place after the dot, so it's 0.09. Tiny but it still counts!",
                "hints": [
                  "Hundredths is the second place after the dot.",
                  "The 9 must land in that second spot.",
                  "Fill the tenths place with 0 first, then put 9 in hundredths."
                ],
                "whyWrong": {
                  "0.9": "That's nine TENTHS (9 in the first place). Nine HUNDREDTHS needs the 9 in the second place: 0.09.",
                  "0.90": "That reads as ninety hundredths, or nine tenths. Nine hundredths puts the 9 in the second place: 0.09.",
                  "9.00": "That's the whole number nine, not nine hundredths. Nine hundredths is much smaller: 0.09."
                }
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
            ],
            "teach": {
              "concept": "To read a decimal, say the whole part, read the dot as the word 'and,' then say the pieces with their place name. So 0.56 is 'fifty-six hundredths' because the last digit lands in the hundredths place. Hook: the LAST digit names the whole decimal part.",
              "example": {
                "prompt": "How do you read 6.07?",
                "steps": [
                  "Read the whole part: six.",
                  "Read the dot as 'and.'",
                  "The pieces are 07, and the last digit is in hundredths, so say 'seven hundredths.'"
                ],
                "answer": "six and seven hundredths"
              }
            }
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
            "intro": "Which crate is heavier? To compare decimals we line up the dots and check place by place. Let's put them on the scale, Pip-style!",
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
                "explain": "7 tenths is more than 5 tenths, so 0.7 > 0.5. The heavier crate wins!",
                "hints": [
                  "Compare the tenths digits first.",
                  "Is 7 tenths more or less than 5 tenths?",
                  "The bigger number is on the left, so the open side of the symbol faces it."
                ],
                "whyWrong": {
                  "<": "'Less than' points the wrong way here. 7 tenths is more than 5 tenths, so 0.7 is GREATER: 0.7 > 0.5.",
                  "=": "These aren't equal. 7 tenths and 5 tenths are different, and 0.7 is the bigger one: 0.7 > 0.5.",
                  "+": "That's not a comparing symbol. To compare, use >, <, or =, and here 0.7 > 0.5."
                }
              },
              {
                "id": "decimal-delta-u2-l1-p2",
                "type": "truefalse",
                "prompt": "0.30 is equal to 0.3.",
                "answer": "true",
                "explain": "Adding a zero at the end doesn't change the value, so 0.30 = 0.3. Same weight on the scale!",
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
                ],
                "whyWrong": {
                  ">": "It looks like you thought more digits means bigger, but compare tenths first: 2 tenths is less than 3 tenths, so 0.25 < 0.3.",
                  "=": "These aren't equal. 0.25 is 2 tenths and 0.3 is 3 tenths, so 0.25 is smaller: 0.25 < 0.3.",
                  "x": "That's a multiply sign, not a comparing symbol. Use <, >, or =, and here 0.25 < 0.3."
                }
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
                "explain": "Comparing tenths, 0.8 has 8 tenths which beats them all. Heaviest crate!",
                "hints": [
                  "Compare the tenths digit of each number first.",
                  "Which one has the most tenths?",
                  "One has 8 tenths while the others have 7, 6, and 7, so which wins?"
                ],
                "whyWrong": {
                  "0.79": "More digits doesn't mean bigger. Compare tenths: 0.79 has 7 tenths, but 0.8 has 8 tenths, so 0.8 wins.",
                  "0.6": "0.6 has only 6 tenths. The largest here has the most tenths, and 0.8 has 8 tenths.",
                  "0.75": "0.75 has 7 tenths. Compare tenths to find the biggest: 0.8 has 8 tenths, so 0.8 is largest."
                }
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
            ],
            "teach": {
              "concept": "To compare two decimals, line up the dots and check place by place from the LEFT: wholes first, then tenths, then hundredths. The first place where they differ decides the winner. Hook: a longer decimal isn't automatically bigger, so 0.5 beats 0.45.",
              "example": {
                "prompt": "Which is greater, 0.6 or 0.58?",
                "steps": [
                  "Line up the dots and compare wholes: both are 0, a tie.",
                  "Compare tenths: 6 tenths vs 5 tenths, and 6 is bigger.",
                  "Since tenths already differ, 0.6 wins. We never need the hundredths."
                ],
                "answer": "0.6 > 0.58"
              }
            }
          },
          {
            "id": "decimal-delta-u2-l2",
            "title": "Line Them Up",
            "icon": "📊",
            "intro": "Let's line decimals up in order from small to big, like crates on a market shelf! Compare place by place and they'll fall in line. Ready, Pip-pal?",
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
                "explain": "Comparing tenths, 1 < 4 < 7, so the order is 0.1, 0.4, 0.7. Shelved perfectly!",
                "hints": [
                  "These all have just tenths, so compare the tenths digits.",
                  "Find the smallest tenths digit to go first.",
                  "Order the digits 1, 4, 7 from small to big and match the decimals."
                ],
                "whyWrong": {
                  "0.7, 0.4, 0.1": "That's largest to smallest. The question asks smallest first, so flip it: 0.1, 0.4, 0.7.",
                  "0.4, 0.1, 0.7": "The order got jumbled. Compare tenths: 1 < 4 < 7, so smallest to largest is 0.1, 0.4, 0.7.",
                  "0.1, 0.7, 0.4": "You started right with 0.1 but then swapped the last two. Since 4 < 7, it's 0.1, 0.4, 0.7."
                }
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
                ],
                "whyWrong": {
                  "0.2, 0.5, 0.9": "That's smallest to largest. The question wants largest first, so reverse it: 0.9, 0.5, 0.2.",
                  "0.5, 0.9, 0.2": "The order is mixed up. Largest to smallest means biggest tenths first: 0.9, 0.5, 0.2.",
                  "0.9, 0.2, 0.5": "You started biggest with 0.9, but then swapped. After 9 comes 5, then 2: 0.9, 0.5, 0.2."
                }
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
                "explain": "Here 0.3 and 0.30 are equal (both 3 tenths) and both are smaller than 0.33. Sneaky tie on the scale!",
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
                ],
                "whyWrong": {
                  "1.5, 1.2, 0.9": "That's largest to smallest. The question asks smallest first, so flip it: 0.9, 1.2, 1.5.",
                  "0.9, 1.5, 1.2": "You correctly put 0.9 first, but then swapped the last two. Since 1.2 < 1.5, it's 0.9, 1.2, 1.5.",
                  "1.2, 0.9, 1.5": "Compare the wholes first: 0.9 is less than 1, so it goes first, giving 0.9, 1.2, 1.5."
                }
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
                "explain": "0.5 is right in the middle of 0.4 and 0.6, so it fits between them. Perfect spot on the shelf!",
                "hints": [
                  "You need a number bigger than 0.4 but smaller than 0.6.",
                  "What's right in the middle of 4 tenths and 6 tenths?",
                  "Count up one tenth from 0.4 to find the answer."
                ],
                "whyWrong": {
                  "0.3": "0.3 is smaller than 0.4, so it sits BEFORE the range, not between. The middle value is 0.5.",
                  "0.7": "0.7 is bigger than 0.6, so it lands AFTER the range. The one between 0.4 and 0.6 is 0.5.",
                  "0.9": "0.9 is far past 0.6, so it's well outside the range. The value between 0.4 and 0.6 is 0.5."
                }
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
            ],
            "teach": {
              "concept": "To put decimals in order, compare them place by place just like before, then line them up smallest to largest. Adding a zero on the end (0.3 = 0.30) doesn't change a number's spot. Hook: order one place at a time and they fall into a row like ducks.",
              "example": {
                "prompt": "Order from smallest to largest: 0.5, 0.2, 0.35",
                "steps": [
                  "Compare tenths: 0.2 has 2 tenths (smallest), 0.35 has 3 tenths, 0.5 has 5 tenths.",
                  "No ties in the tenths, so that ranking is enough.",
                  "Write them from smallest to largest: 0.2, 0.35, 0.5."
                ],
                "answer": "0.2, 0.35, 0.5"
              }
            }
          },
          {
            "id": "decimal-delta-u2-l3",
            "title": "Rounding the Rapids",
            "icon": "🎯",
            "intro": "Rounding helps us estimate prices fast! Find the rounding place, then peek at the digit to its right. 5 or more rounds up, less stays put. Let's ring it up at the stall!",
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
                ],
                "whyWrong": {
                  "3": "The tenths digit is 6, which is 5 or more, so 3 rounds UP, not down. The answer is 4.",
                  "6": "That's the tenths digit, not the rounded number. Rounding 3.6 to the nearest whole gives 4.",
                  "3.5": "Rounding to the nearest WHOLE number means no decimal piece. Since 6 rounds the 3 up, the answer is 4."
                }
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
                ],
                "whyWrong": {
                  "2": "That's the tenths digit, not the rounded number. Rounding 7.2 to the nearest whole gives 7.",
                  "8": "The tenths digit is 2, which is less than 5, so 7 stays put instead of rounding up. The answer is 7.",
                  "7.5": "Rounding to the nearest WHOLE number means no decimal piece. Since 2 keeps the 7, the answer is 7."
                }
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
                ],
                "whyWrong": {
                  "5.9": "The hundredths digit is 3, which is less than 5, so the tenths stays at 8, not up to 9. The answer is 5.8.",
                  "6.0": "That would be rounding to the nearest whole. To the nearest TENTH, 3 keeps the 8, giving 5.8.",
                  "5.0": "That rounded too far. To the nearest tenth, the 8 stays since the next digit 3 is small: 5.8."
                }
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
            ],
            "teach": {
              "concept": "To round, find your rounding place, then peek ONLY at the digit just to its right: 5 or more rounds up, 4 or less stays put. Then drop the digits after the rounding place. Hook: 5 and up gives a bump up, 4 and down stays around.",
              "example": {
                "prompt": "Round 4.62 to the nearest tenth.",
                "steps": [
                  "The tenths place is 6, our rounding spot.",
                  "Peek one spot right at the hundredths digit, 2.",
                  "2 is less than 5, so the tenths stays 6 and we drop the rest: 4.6."
                ],
                "answer": "4.6"
              }
            }
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
            "intro": "When we add or subtract decimals, the secret is lining up the dots! Keep the place values stacked like coins in a till and you can't go wrong. Let's tally it up, Pip-pal!",
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
                "explain": "5 tenths plus 3 tenths is 8 tenths, which is 0.8. Easy tally!",
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
                ],
                "whyWrong": {
                  "3.2": "It looks like the carry got missed. 5 tenths + 7 tenths = 12 tenths, which carries 1 whole, so it's 4.2, not 3.2.",
                  "4.12": "The tenths can't be 12 in the answer; 12 tenths is 1 whole and 2 tenths. After carrying, it's 4.2.",
                  "3.12": "Two slips here: write 12 tenths as a carry, not '12,' and add the carried 1 to the wholes. The answer is 4.2."
                }
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
            ],
            "teach": {
              "concept": "To add or subtract decimals, line up the decimal points so the places stack, then add or subtract each column. If a column makes 10 or more, carry to the next place just like whole numbers. Hook: dots stacked = places stacked.",
              "example": {
                "prompt": "What is 1.6 + 0.7?",
                "steps": [
                  "Stack the dots and add tenths: 6 tenths + 7 tenths = 13 tenths.",
                  "13 tenths is 1 whole and 3 tenths, so write 3 and carry 1.",
                  "Add the wholes: 1 + 0 + 1 carried = 2, giving 2.3."
                ],
                "answer": "2.3"
              }
            }
          },
          {
            "id": "decimal-delta-u3-l2",
            "title": "Multiply & Divide Decimals",
            "icon": "✖️",
            "intro": "Multiplying and dividing decimals is just like whole numbers, then we place the dot. Count those decimal places! Let's restock the crates, Pip-style.",
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
                "explain": "2 tenths taken 3 times is 6 tenths, which is 0.6. Restocking made easy!",
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
                ],
                "whyWrong": {
                  "2.5": "The dot landed too far right. 5 x 5 = 25, but with two decimal places the answer is 0.25, smaller than 1.",
                  "0.10": "That undercounts the multiply. 5 x 5 = 25, and with two decimal places the answer is 0.25, not 0.10.",
                  "1.0": "Multiplying two numbers less than 1 gives something even smaller, not bigger. 0.5 x 0.5 = 0.25."
                }
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
                "explain": "8 tenths split into 2 equal crates is 4 tenths each, which is 0.4. Divided fairly!",
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
                ],
                "whyWrong": {
                  "4.5": "That looks like 1.5 + 3 instead of times. Multiplying, 1.5 four times is 6.0.",
                  "5.4": "The digits got flipped. 15 x 4 = 60, and with one decimal place that's 6.0, not 5.4.",
                  "6.5": "Close, but add carefully: 1.5 + 1.5 + 1.5 + 1.5 = 6.0 exactly, not 6.5."
                }
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
                "explain": "Think 24 tenths divided by 4 is 6 tenths, which is 0.6. Smooth split!",
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
            ],
            "teach": {
              "concept": "Multiply or divide the digits like normal whole numbers, then place the dot. For multiplying, count the total decimal places in both factors and give the answer that many. Hook: 0.5 x 0.5 uses two decimal places, so 25 becomes 0.25.",
              "example": {
                "prompt": "What is 0.3 x 0.4?",
                "steps": [
                  "Ignore the dots and multiply: 3 x 4 = 12.",
                  "Count decimal places: one in 0.3 and one in 0.4 makes two total.",
                  "Place the dot so there are two decimal places: 12 becomes 0.12."
                ],
                "answer": "0.12"
              }
            }
          },
          {
            "id": "decimal-delta-u3-l3",
            "title": "Fractions, Decimals & Money",
            "icon": "💰",
            "intro": "Decimals and fractions are two ways to say the same price, and money is decimals in action! Let's convert and count coins at the stall, Pip-pal!",
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
                "explain": "1 divided by 2 is 0.5, which is five tenths or half. Half a loaf!",
                "hints": [
                  "A fraction means top divided by bottom.",
                  "Divide 1 by 2.",
                  "Half of one whole is the same as 5 tenths."
                ],
                "whyWrong": {
                  "0.2": "That looks like reading the bottom number. 1/2 means 1 divided by 2, which is 0.5.",
                  "0.12": "That mashed the 1 and 2 together. 1/2 means 1 divided by 2, which equals 0.5.",
                  "1.2": "That just placed the digits around a dot. 1/2 means 1 divided by 2, which is 0.5."
                }
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
                ],
                "whyWrong": {
                  "0.14": "That mashed the 1 and 4 together. 1/4 means 1 divided by 4, which equals 0.25.",
                  "0.4": "That looks like the digit 4 after the dot. But 1 divided by 4 is 0.25, like a quarter dollar.",
                  "0.5": "That's 1/2, not 1/4. 1 divided by 4 is 0.25, half as much as 0.5."
                }
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
                ],
                "whyWrong": {
                  "$1.35": "That isn't an even split. 4.50 divided by 3 is 1.50, so each friend pays $1.50.",
                  "$2.25": "That's the bill split between 2, not 3. Divided by 3, 4.50 / 3 = $1.50 each.",
                  "$0.45": "The dot slipped. 4.50 divided by 3 is 1.50, not 0.45, so each pays $1.50."
                }
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
            ],
            "teach": {
              "concept": "A fraction and a decimal can name the same amount: divide the top by the bottom to get the decimal, so 1/4 = 0.25. Money is just decimals in dollars and cents. Hook: 1/2 = 0.50, 1/4 = 0.25, like the coins in your pocket.",
              "example": {
                "prompt": "Write 3/4 as a decimal.",
                "steps": [
                  "A fraction means top divided by bottom, so compute 3 divided by 4.",
                  "3 divided by 4 equals 0.75.",
                  "So 3/4 = 0.75, the same as 75 cents."
                ],
                "answer": "0.75"
              }
            }
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
            "intro": "Hi, I'm Pip! A ratio is just a way to compare two amounts. Let's start counting and comparing gear on the trail together!",
            "problems": [
              {
                "id": "ratio-ridge-u1-l1-p1",
                "type": "mc",
                "prompt": "There are 3 🍎 and 5 🍊 in a climber's pack. What is the ratio of apples to oranges?",
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
                ],
                "whyWrong": {
                  "5 to 3": "That's oranges to apples -- but the question asked apples to oranges, so apples (3) come first: 3 to 5.",
                  "3 to 8": "It looks like you used the total (3 + 5 = 8) for the second number, but a ratio compares the two groups, not a group to the total: 3 to 5.",
                  "8 to 3": "That mixes up the total (8) with one group -- a ratio of apples to oranges just compares the two groups: 3 to 5."
                }
              },
              {
                "id": "ratio-ridge-u1-l1-p2",
                "type": "input",
                "prompt": "A trail crew has 4 sled dogs 🐶 and 2 camp cats 🐱. Write the ratio of cats to dogs as a:b (like 2:4).",
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
                ],
                "whyWrong": {
                  "6:10": "You used 6 for the red marbles, but the question asked about blue: there are 4 blue out of 10 total, so 4:10.",
                  "4:6": "That's blue to red. The question asked blue to TOTAL, and the total is 6 + 4 = 10, so 4:10.",
                  "10:4": "That's total to blue -- the order is flipped. Blue comes first: 4:10."
                }
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
                ],
                "whyWrong": {
                  "12:8": "That's boys to girls -- but the question asked girls to boys, so girls (8) come first: 8:12.",
                  "8:20": "It looks like you used the total (12 + 8 = 20) for the second number, but a ratio compares the two groups: 8:12.",
                  "20:8": "That uses the total (20) instead of comparing the two groups, and the order is flipped too: 8:12."
                }
              }
            ],
            "teach": {
              "concept": "A ratio compares two amounts. The trick is to write the numbers in the SAME order the question names them. \"Flags to tents\" means flags first, tents second.",
              "example": {
                "prompt": "There are 2 flags and 7 tents at the campsite. What is the ratio of flags to tents?",
                "steps": [
                  "The question says \"flags to tents,\" so flags come first: 2.",
                  "Tents come second: 7.",
                  "Put them in that order to get the ratio."
                ],
                "answer": "2 to 7"
              }
            }
          },
          {
            "id": "ratio-ridge-u1-l2",
            "title": "Equivalent Ratios",
            "icon": "⚖️",
            "intro": "Just like fractions, ratios can be equal even when the numbers look different. Let's find ratio twins along the switchbacks!",
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
                ],
                "whyWrong": {
                  "2:1": "You multiplied correctly but flipped the order -- 1:2 doubles to 2:4, not 2:1.",
                  "1:3": "You only changed the second part. To keep ratios equal you must multiply BOTH parts by the same number: 1:2 x 2 = 2:4.",
                  "3:4": "These don't come from multiplying 1:2 by one number -- multiply both parts of 1:2 by 2 to get the twin, 2:4."
                }
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
                ],
                "whyWrong": {
                  "5:3": "You divided 10 by 2 but only divided 15 by 5 -- use the SAME factor on both. Dividing each by 5 gives 2:3.",
                  "10:15": "That's the original ratio, not simplified. Both parts share the factor 5, so divide each by 5 to get 2:3.",
                  "3:2": "You found the right numbers but flipped them -- 10:15 simplifies to 2:3, keeping 10's part first."
                }
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
                ],
                "whyWrong": {
                  "2:3": "6:9 actually DOES simplify to 2:3, so this one IS equivalent. The odd one out is 3:4.",
                  "12:18": "12:18 divides by 6 to give 2:3, which matches 6:9 -- so it IS equivalent. The odd one out is 3:4.",
                  "4:6": "4:6 divides by 2 to give 2:3, which matches 6:9 -- so it IS equivalent. The odd one out is 3:4."
                }
              }
            ],
            "teach": {
              "concept": "Two ratios are equivalent if you can multiply (or divide) BOTH parts by the same number to turn one into the other. Same comparison, different-looking numbers. To simplify, divide both parts by a shared factor.",
              "example": {
                "prompt": "Find a ratio equivalent to 2:5 and simplify 8:12.",
                "steps": [
                  "Equivalent: multiply both parts of 2:5 by 3, giving 6:15.",
                  "Simplify 8:12: both 8 and 12 share the factor 4.",
                  "Divide each part by 4: 8/4 = 2 and 12/4 = 3, giving 2:3."
                ],
                "answer": "2:5 = 6:15, and 8:12 = 2:3"
              }
            }
          },
          {
            "id": "ratio-ridge-u1-l3",
            "title": "Ratio Tables",
            "icon": "📋",
            "intro": "Ratio tables let us scale up step by step. Let's fill in the rungs of the rope ladder together!",
            "problems": [
              {
                "id": "ratio-ridge-u1-l3-p1",
                "type": "input",
                "prompt": "A table shows 2 trail passes cost $6. How much do 4 trail passes cost? (just the number)",
                "answer": "12",
                "accept": [
                  "12",
                  "$12",
                  "twelve"
                ],
                "explain": "Doubling the passes from 2 to 4 means doubling the cost from $6 to $12.",
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
                ],
                "whyWrong": {
                  "$3.00": "It looks like you only doubled the cost, but 9 apples is 3 times 3 apples, so multiply $1.50 by 3 to get $4.50.",
                  "$6.00": "That's 4 times $1.50, but 9 apples is 3 times 3 apples, not 4 times -- so it's 3 x $1.50 = $4.50.",
                  "$1.50": "That's the cost of just 3 apples. Nine apples is 3 times as many, so 3 x $1.50 = $4.50."
                }
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
                ],
                "whyWrong": {
                  "100 miles": "That's only 2 times 50, but 6 gallons is 3 times 2 gallons, so multiply 50 by 3 to get 150 miles.",
                  "300 miles": "That's 6 times 50, but the car uses 2 gallons per 50 miles -- 6 gallons is 3 times 2, so 3 x 50 = 150 miles.",
                  "50 miles": "That's the distance on just 2 gallons. With 6 gallons (3 times as much), it goes 3 x 50 = 150 miles."
                }
              },
              {
                "id": "ratio-ridge-u1-l3-p5",
                "type": "input",
                "prompt": "Carabiners come 5 for $2. How many dollars for 15 carabiners? (just the number)",
                "answer": "6",
                "accept": [
                  "6",
                  "$6",
                  "six"
                ],
                "explain": "15 carabiners is 3 times 5 carabiners, so the cost is 3 times $2, which is $6.",
                "hints": [
                  "How many groups of 5 pencils make 15?",
                  "Scale the price up by the same factor as the pencils.",
                  "15 divided by 5 is 3, so $2 times 3 is..."
                ]
              },
              {
                "id": "ratio-ridge-u1-l3-p6",
                "type": "mc",
                "prompt": "A table shows 6 hikers : 1 guide. How many guides are needed for 24 hikers?",
                "choices": [
                  "4",
                  "6",
                  "3",
                  "24"
                ],
                "answer": "4",
                "explain": "24 hikers is 4 times 6 hikers, so you need 4 times 1 guide, which is 4 guides.",
                "hints": [
                  "How many groups of 6 students are in 24?",
                  "Scale the teachers by the same factor as the students.",
                  "24 divided by 6 is 4, so teachers = 1 times 4."
                ],
                "whyWrong": {
                  "3": "Close, but 24 / 6 = 4, not 3 -- you need 4 guides for 24 hikers.",
                  "6": "It looks like you used the 6 from \"6 hikers,\" but you need to scale: 24 is 4 times 6, so 4 guides.",
                  "24": "That's the number of hikers, not guides. Each guide covers 6 hikers, so 24 / 6 = 4 guides."
                }
              }
            ],
            "teach": {
              "concept": "A ratio table scales a ratio up or down. Whatever you multiply one column by, multiply the other column by the SAME number to keep the comparison fair.",
              "example": {
                "prompt": "If 2 trail bars cost $3, how much do 8 trail bars cost?",
                "steps": [
                  "Compare the bars: 8 is 4 times 2 (8 / 2 = 4).",
                  "Multiply the cost by that same 4: 3 x 4 = 12."
                ],
                "answer": "$12"
              }
            }
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
                ],
                "whyWrong": {
                  "$2.00": "It looks like you divided 8 by 4, but price per orange is cost divided by oranges: $4 / 8 = $0.50.",
                  "$4.00": "That's the total cost for all 8 oranges. Per orange, divide: $4 / 8 = $0.50.",
                  "$8.00": "That's more than the total cost -- to get the price for ONE orange, divide cost by oranges: $4 / 8 = $0.50."
                }
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
                ],
                "whyWrong": {
                  "6 for $3": "6 for $3 is $0.50 each, but 10 for $4 is only $0.40 each -- the lower price per soda is the better buy, 10 for $4.",
                  "They cost the same per soda": "They're not the same: 6 for $3 is $0.50 each while 10 for $4 is $0.40 each, so 10 for $4 wins.",
                  "Cannot tell": "You can tell by finding the unit price: $3/6 = $0.50 each vs $4/10 = $0.40 each, so 10 for $4 is better."
                }
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
            ],
            "teach": {
              "concept": "A unit rate is the amount for exactly ONE of something. To find it, divide the top amount by the bottom amount. Unit rates make it easy to compare deals -- lowest price per item wins.",
              "example": {
                "prompt": "A car travels 150 miles in 3 hours. What is the unit rate in miles per hour?",
                "steps": [
                  "A unit rate is \"per one hour,\" so divide miles by hours.",
                  "150 / 3 = 50."
                ],
                "answer": "50 miles per hour"
              }
            }
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
                ],
                "whyWrong": {
                  "3/2 = c/9": "You flipped the second ratio -- keep pens over cost on BOTH sides: 3/2 = 9/c, not c/9.",
                  "2/3 = 9/c": "The left side is upside down. Match the right side (pens over cost): it should be 3/2 = 9/c.",
                  "9/3 = 2/c": "This mixes pens and cost in the wrong spots. Keep pens on top and cost on bottom: 3/2 = 9/c."
                }
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
                ],
                "whyWrong": {
                  "4/6 and 5/9": "4/6 = 2/3, but 5/9 doesn't simplify to 2/3 (5 x 6 = 30, not 4 x 9 = 36), so these don't form a proportion.",
                  "4/6 and 6/8": "6/8 simplifies to 3/4, not 2/3 -- so it doesn't match 4/6. The proportion is 4/6 and 6/9.",
                  "4/6 and 3/5": "3/5 isn't equal to 4/6's value of 2/3 (cross products 20 vs 18 differ), so these don't form a proportion."
                }
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
                ],
                "whyWrong": {
                  "Add 6 + 5": "Proportions aren't solved by adding -- cross-multiply along the diagonals: 6 x 5 = 2 times x.",
                  "Subtract 2 from 6": "Subtracting won't isolate x. The first step is to cross-multiply: 6 x 5 = 2 times x.",
                  "Divide 6 by 2": "Those aren't a matching pair to divide. Cross-multiply the diagonals first: 6 x 5 = 2 times x."
                }
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
            ],
            "teach": {
              "concept": "A proportion is just two equal ratios, like a/b = c/d. When you set one up from a word problem, keep the SAME units in the same spots on both sides. You can check a proportion by cross-multiplying: a*d should equal b*c.",
              "example": {
                "prompt": "If 4 pencils cost $3, set up a proportion for the cost (c) of 12 pencils.",
                "steps": [
                  "Put pencils on top and cost on the bottom for the known ratio: 4/3.",
                  "Match the same setup for the unknown: 12 pencils over c, which is 12/c.",
                  "Set the two equal so the units line up: 4/3 = 12/c."
                ],
                "answer": "4/3 = 12/c"
              }
            }
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
                ],
                "whyWrong": {
                  "2": "Check your division: 14y = 70 gives y = 70/14 = 5, not 2.",
                  "7": "That's just the numerator on the left, not the solution. Cross-multiply: 14y = 70, so y = 5.",
                  "20": "It looks like you scaled the wrong way. Cross-multiply: 14y = 70, so y = 5, not 20."
                }
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
                ],
                "whyWrong": {
                  "4": "Check the division: 12x = 36 gives x = 36/12 = 3, not 4.",
                  "6": "It looks like you halved 12 instead of solving. Cross-multiply: 12x = 36, so x = 3.",
                  "9": "That's the numerator on the left, not the answer. Cross-multiply: 12x = 36, so x = 3."
                }
              }
            ],
            "teach": {
              "concept": "To solve a proportion for a missing number, cross-multiply to make a simple equation, then divide to free the unknown. Cross-multiply, then divide -- that's the whole move.",
              "example": {
                "prompt": "Solve for x: x/6 = 10/15.",
                "steps": [
                  "Cross-multiply: 15 times x equals 6 times 10, so 15x = 60.",
                  "Divide both sides by 15: x = 60 / 15.",
                  "60 / 15 = 4."
                ],
                "answer": "x = 4"
              }
            }
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
                ],
                "whyWrong": {
                  "5.0": "You moved the decimal the wrong way -- percent means divide by 100, so 50% = 50/100 = 0.5.",
                  "0.05": "That's 5%, not 50%. Dividing 50 by 100 moves the decimal two places: 50% = 0.5.",
                  "50.0": "That's still 50, just with a decimal point. To make it a decimal value, divide by 100: 50% = 0.5."
                }
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
                ],
                "whyWrong": {
                  "7%": "You moved the decimal the wrong way -- to make a decimal a percent, multiply by 100: 0.7 x 100 = 70%.",
                  "0.7%": "That just added a % sign without converting. Multiply by 100 first: 0.7 x 100 = 70%.",
                  "700%": "You multiplied by 1000, not 100. The percent is 0.7 x 100 = 70%."
                }
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
                ],
                "whyWrong": {
                  "3/4": "3/4 = 0.75, which is less than 0.8 -- so 0.8 is still the largest.",
                  "70%": "70% = 0.70, which is smaller than 0.8 -- so 0.8 is the largest.",
                  "0.65": "0.65 is the smallest of the bunch. Comparing all as decimals, 0.8 is the largest."
                }
              }
            ],
            "teach": {
              "concept": "Percents, decimals, and fractions are three costumes for the same number. Percent means \"out of 100\": to go from percent to decimal divide by 100, and from decimal to percent multiply by 100.",
              "example": {
                "prompt": "Write 3/4 as a decimal and as a percent.",
                "steps": [
                  "Divide to get the decimal: 3 / 4 = 0.75.",
                  "Multiply the decimal by 100 to get the percent: 0.75 x 100 = 75."
                ],
                "answer": "0.75 = 75%"
              }
            }
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
                ],
                "whyWrong": {
                  "15": "Check your fraction: 25% is 1/4, and 40 / 4 = 10, not 15.",
                  "25": "That's just the percent number, not the amount. Take 1/4 of 40: 40 / 4 = 10.",
                  "100": "That's way more than the whole 40 -- a percent of a number can't be bigger than it. 25% of 40 = 40 / 4 = 10."
                }
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
                ],
                "whyWrong": {
                  "20": "That's 10% of 150, not 20%. Double it: 20% of 150 = 30.",
                  "75": "That's 50% of 150, not 20%. For 20%, do 0.2 x 150 = 30.",
                  "300": "You multiplied by 2 instead of 0.2 -- 20% is 0.2, so 0.2 x 150 = 30."
                }
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
                ],
                "whyWrong": {
                  "15": "That's just the percent number, not 15% of 200. Compute 0.15 x 200 = 30.",
                  "20": "That's only 10% of 200. For 15%, add another 5% (10), giving 20 + 10 = 30.",
                  "35": "Close, but recount: 10% is 20 and 5% is 10, so 15% = 20 + 10 = 30, not 35."
                }
              }
            ],
            "teach": {
              "concept": "To find a percent OF a number, turn the percent into a decimal (divide by 100) and multiply. A handy shortcut: 10% of a number is just that number with the decimal moved one place left.",
              "example": {
                "prompt": "What is 20% of 90?",
                "steps": [
                  "Turn 20% into a decimal: 20 / 100 = 0.2.",
                  "Multiply by the number: 0.2 x 90 = 18."
                ],
                "answer": "18"
              }
            }
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
                ],
                "whyWrong": {
                  "5%": "You used the dollar change ($5) as the percent -- but percent increase is change / original: 5 / 20 = 25%.",
                  "20%": "It looks like you divided by the new price or guessed -- divide the change by the ORIGINAL: 5 / 20 = 25%.",
                  "125%": "That's the new price as a percent of the old (25/20). The INCREASE is just the change over original: 5 / 20 = 25%."
                }
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
                ],
                "whyWrong": {
                  "10%": "You used the dollar drop ($10) as the percent -- but percent decrease is change / original: 10 / 40 = 25%.",
                  "30%": "It looks like you divided by the new price (30) instead of the original. Use the original: 10 / 40 = 25%.",
                  "75%": "75% is what's LEFT (30 is 75% of 40). The DECREASE is the drop over original: 10 / 40 = 25%."
                }
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
                ],
                "whyWrong": {
                  "$12": "That's the amount taken OFF (20% of $60), not the sale price. Subtract it: 60 - 12 = $48.",
                  "$40": "You took off too much -- 20% of $60 is $12, not $20. The sale price is 60 - 12 = $48.",
                  "$72": "You added the discount instead of subtracting -- it's 20% OFF, so 60 - 12 = $48."
                }
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
            ],
            "teach": {
              "concept": "Percent change tells you how much something grew or shrank compared to where it started. Find the change (new minus old), then divide by the ORIGINAL amount and turn that into a percent.",
              "example": {
                "prompt": "A price goes from $40 to $50. What is the percent increase?",
                "steps": [
                  "Find the change: 50 - 40 = 10.",
                  "Divide by the original price: 10 / 40 = 0.25.",
                  "Turn it into a percent: 0.25 x 100 = 25%."
                ],
                "answer": "25%"
              }
            }
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
            "intro": "Ready to explore? Below zero is a whole hidden world. Numbers can drop beneath ground level, and today we learn to read them. Let's dig in!",
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
                "explain": "Below zero means a negative number, so 3 below zero is written -3. The little dash tells us we dropped underground!",
                "hints": [
                  "The word 'below' is doing a lot of work here. What direction is that on the number line?",
                  "A number to the left of zero gets a minus sign in front of it.",
                  "Start with the 3, then add the sign that means 'below zero'..."
                ],
                "whyWrong": {
                  "0": "0 is exactly at the freezing line, but the temperature dropped 3 below it, so it's -3.",
                  "3": "That's 3 degrees ABOVE zero. 'Below zero' needs a minus sign, so it should be -3.",
                  "30": "Looks like an extra zero slipped in. It's just 3 below zero, written -3, not thirty."
                }
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
                ],
                "whyWrong": {
                  "-1": "-1 has a minus sign, so it IS negative. We're hunting for the one that is NOT negative.",
                  "-100": "-100 has a minus sign, so it's negative (and very far below zero). Look for the one with no minus.",
                  "-12": "-12 has a minus sign, so it's negative. The non-negative one is the number with no dash in front."
                }
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
                ],
                "whyWrong": {
                  "0": "0 sits right in the middle. Negatives like -9 are to its left, so -9 is farther left.",
                  "4": "4 is a positive number, sitting to the RIGHT of zero. The leftmost number is the deepest negative, -9.",
                  "-2": "-2 is below zero but not the deepest. -9 is much farther left, so -9 is the leftmost."
                }
              }
            ],
            "teach": {
              "concept": "A negative number is any number below zero, written with a little minus sign in front, like -3. Think of it as going underground: temperatures below zero, money you owe, or floors below ground level all get a minus sign.",
              "example": {
                "prompt": "A basement vault rests 4 meters below ground level. Write its height as an integer (ground level = 0).",
                "steps": [
                  "Notice 'below ground level' means below zero, so the number will be negative.",
                  "Take the size of the drop, which is 4 meters.",
                  "Put a minus sign in front to show it's below zero: -4."
                ],
                "answer": "-4"
              }
            }
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
                ],
                "whyWrong": {
                  ">": "That would say -3 is bigger than 2, but -3 is below zero and 2 is above it. Negatives are always less than positives, so use <.",
                  "=": "-3 and 2 are different spots on the number line, so they're not equal. -3 is to the left, making it smaller.",
                  "none": "One of the symbols does work: -3 is to the left of 2, so -3 < 2."
                }
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
                ],
                "whyWrong": {
                  "<": "This says -1 is smaller, but -1 is closer to zero than -8, so -1 is actually the bigger one. Use >.",
                  "=": "-1 and -8 are different spots on the line, so they're not equal. -1 is to the right, making it greater.",
                  "none": "One symbol fits: -1 sits to the right of -8, so -1 > -8."
                }
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
                ],
                "whyWrong": {
                  "0": "0 is bigger than every negative here. The smallest one is -6, which sits farthest left.",
                  "1": "1 is a positive number, above zero. The smallest is the deepest negative, -6.",
                  "-4": "-4 is below zero, but -6 is even deeper (farther left), so -6 is the smaller one."
                }
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
                ],
                "whyWrong": {
                  "Tuesday": "-1 is warmer than -5 because it's closer to zero. The colder day is the lower number, Monday at -5.",
                  "Same": "The two temperatures differ: -5 and -1 aren't equal. -5 is lower, so Monday was colder.",
                  "Can't tell": "We can tell! -5 is lower than -1, so Monday was the colder day."
                }
              }
            ],
            "teach": {
              "concept": "On the number line, left is smaller and right is bigger. With negatives this can feel backwards: the closer a number is to zero, the bigger it is, so -1 is actually greater than -10. Just picture the line and read left-to-right.",
              "example": {
                "prompt": "Which symbol makes this true:  -6 __ -2 ?",
                "steps": [
                  "Picture both on the number line: -6 is far left, -2 is closer to zero.",
                  "-2 sits to the RIGHT of -6, so -2 is the bigger one.",
                  "That means -6 is smaller, so the symbol is < : -6 < -2."
                ],
                "answer": "<"
              }
            }
          },
          {
            "id": "integer-islands-u1-l3",
            "title": "Absolute Value Lagoon",
            "icon": "📏",
            "intro": "Absolute value asks: how far from zero are you, no matter the direction? It's all about distance, so the answer is never negative. Let's climb in!",
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
                ],
                "whyWrong": {
                  "3": "|3| = 3, but |-7| = 7. Since 7 is bigger, -7 has the greater absolute value (it's farther from zero).",
                  "Equal": "They're not equal: |-7| = 7 and |3| = 3. -7 is farther from zero, so its absolute value is greater.",
                  "Neither": "One does win: |-7| = 7 beats |3| = 3, so -7 has the greater absolute value."
                }
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
                ],
                "whyWrong": {
                  "5 and 0": "|0| = 0, not 5, so 0 doesn't fit. You need both numbers exactly 5 from zero: -5 and 5.",
                  "5 and 10": "|10| = 10, not 5, so 10 is too far. The pair both 5 steps from zero is -5 and 5.",
                  "-5 and -10": "|-10| = 10, not 5, so -10 is too far away. The matching pair is -5 and 5, mirror images across zero."
                }
              },
              {
                "id": "integer-islands-u1-l3-p6",
                "type": "input",
                "prompt": "A submarine is at -12 meters. How far is it from sea level (0)? Give a positive number.",
                "answer": "12",
                "accept": [
                  "12",
                  "12 meters",
                  "12m",
                  "twelve"
                ],
                "explain": "Distance from zero is the absolute value: |-12| = 12 meters. It's 12 meters from the surface, no minus needed!",
                "hints": [
                  "Distance doesn't care about direction. How far is -12 from 0?",
                  "This is just |-12| in disguise.",
                  "-12 is twelve meters below the surface, so the distance is..."
                ]
              }
            ],
            "teach": {
              "concept": "Absolute value asks one thing: how far is this number from zero? Distance is never negative, so the answer is always zero or positive. The two bars |  | just erase the minus sign.",
              "example": {
                "prompt": "What is |-8| ?",
                "steps": [
                  "Find how many steps -8 is from zero: 8 steps.",
                  "Distance is always positive, so the bars drop the minus sign.",
                  "So |-8| = 8."
                ],
                "answer": "8"
              }
            }
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
            "intro": "Time to combine integers! Adding a negative is like heading left; subtracting is like turning around. Let's chart the moves.",
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
                ],
                "whyWrong": {
                  "2": "That drops the minus sign. Starting at -5 and going 3 more steps left gives -8, not 2.",
                  "8": "That's the positive version. Going down 3 from -5 means deeper below zero, so it's -8.",
                  "-2": "Looks like you subtracted toward zero, but -5 - 3 moves 3 steps farther LEFT, landing on -8."
                }
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
            ],
            "teach": {
              "concept": "Picture a number line: adding moves you right, subtracting moves you left. Two handy tricks: adding a negative is the same as subtracting (8 + (-3) = 8 - 3), and subtracting a negative flips to adding (-6 - (-9) = -6 + 9).",
              "example": {
                "prompt": "What is  -2 + (-5) ?",
                "steps": [
                  "Adding a negative means moving left, so start at -2 and go 5 more steps left.",
                  "Both numbers pull left, so they stack: 2 + 5 = 7 worth of leftward steps.",
                  "You land deeper below zero at -7."
                ],
                "answer": "-7"
              }
            }
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
                ],
                "whyWrong": {
                  "100": "That looks like multiplying 20 by 5. The problem is division: -20 / -5 = 4.",
                  "-4": "The numbers are right (20 / 5 = 4) but the sign is off. Same signs make a positive, so -20 / -5 = 4.",
                  "-100": "Looks like you multiplied instead of divided, and kept it negative. Dividing -20 by -5 gives +4."
                }
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
            ],
            "teach": {
              "concept": "For multiplying and dividing, just watch the signs: SAME signs make a positive, DIFFERENT signs make a negative. Do the regular number math, then stamp on the right sign.",
              "example": {
                "prompt": "What is  -6 * 2 ?",
                "steps": [
                  "Multiply the numbers as usual: 6 * 2 = 12.",
                  "Check the signs: one negative and one positive are different signs.",
                  "Different signs make a negative, so the answer is -12."
                ],
                "answer": "-12"
              }
            }
          },
          {
            "id": "integer-islands-u2-l3",
            "title": "Mixed Integer Voyage",
            "icon": "🧭",
            "intro": "Now we mix every operation together! Read carefully, watch the signs, and take it one step at a time. You've got this, explorer!",
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
                ],
                "whyWrong": {
                  "3": "Looks like the leading minus on -8 got dropped: 8 - 3 - 2 = 3. But it's -8 to start, so -8 + 3 - 2 = -7.",
                  "-3": "Careful with the double negative: -8 - (-3) is -8 + 3 = -5, then -5 + (-2) = -7, not -3.",
                  "-13": "Looks like -8 - 3 - 2. But subtracting -3 ADDS 3, so it's -8 + 3 - 2 = -7."
                }
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
            ],
            "teach": {
              "concept": "When operations mix, slow down: do multiply and divide before add and subtract, and turn double negatives into a plus (subtracting -3 means adding 3). Then just step through one operation at a time.",
              "example": {
                "prompt": "What is  -2 * 3 + 4 ?",
                "steps": [
                  "Multiply first: -2 * 3 = -6 (different signs make a negative).",
                  "Now add: -6 + 4.",
                  "Moving 4 steps right from -6 lands you at -2."
                ],
                "answer": "-2"
              }
            }
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
            "intro": "The coordinate plane is a trail map! Points are written (x, y): x is how far right or left, y is how far up or down. Let's map the canyon!",
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
                ],
                "whyWrong": {
                  "0": "There's no zero here. The first number in (4, 3) is the x-coordinate, which is 4.",
                  "3": "3 is the y-coordinate, the second number. The x-coordinate comes first in (x, y), so it's 4.",
                  "7": "Looks like you added 4 + 3. Coordinates aren't added; x is simply the first number, 4."
                }
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
                ],
                "whyWrong": {
                  "Right 2": "Right is for POSITIVE x. Here x = -2, and negative means move LEFT 2.",
                  "Up 2": "Up and down are the y job. The x-coordinate -2 controls left/right, so first move left 2.",
                  "Down 2": "Down is also a y move. The x = -2 means go left 2 first, then handle the y."
                }
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
                ],
                "whyWrong": {
                  "Quadrant I": "Quadrant I (top-right) has BOTH x and y positive. Both-negative points live in Quadrant III.",
                  "Quadrant II": "Quadrant II (top-left) has x negative but y positive. When BOTH are negative, it's Quadrant III.",
                  "Quadrant IV": "Quadrant IV (bottom-right) has x positive and y negative. Both-negative points belong to Quadrant III."
                }
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
                ],
                "whyWrong": {
                  "1": "On the x-axis, y is 0, not 1 — the point sits right on the line with no up/down movement.",
                  "6": "6 is the x-coordinate. On the x-axis the y-coordinate is always 0, since you haven't moved up or down.",
                  "-6": "That's just the negative of the x-value. Any point on the x-axis has y = 0."
                }
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
            ],
            "teach": {
              "concept": "The coordinate plane is a trail map. Every point is written (x, y): x first tells you left/right (negative = left), y second tells you up/down (negative = down). The center where the axes cross is (0, 0), the origin.",
              "example": {
                "prompt": "Start at the origin. Move left 2, then up 4. Write the point as (x, y).",
                "steps": [
                  "Left 2 makes the x-coordinate negative: x = -2.",
                  "Up 4 makes the y-coordinate positive: y = 4.",
                  "Write x first, then y: (-2, 4)."
                ],
                "answer": "(-2, 4)"
              }
            }
          },
          {
            "id": "integer-islands-u3-l2",
            "title": "Order of Operations (PEMDAS)",
            "icon": "🔢",
            "intro": "PEMDAS is the guide's rulebook: Parentheses, Exponents, Multiply/Divide, Add/Subtract. Follow the order and every answer falls into place!",
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
                ],
                "whyWrong": {
                  "8": "Looks like 10 - 2 = 8 with the rest dropped. Do the parentheses and multiply first: 2 * 3 = 6, then 10 - 6 = 4.",
                  "24": "Looks like you did 10 - 2 = 8 first, then 8 * 3. But multiply before subtracting: 2 * 3 = 6, then 10 - 6 = 4.",
                  "-6": "Looks like you dropped the 10 and just did -2 * 3 = -6. The 10 is still there: 10 - 6 = 4."
                }
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
            ],
            "teach": {
              "concept": "PEMDAS is the order of operations: Parentheses, Exponents, Multiply/Divide, then Add/Subtract. Always handle higher-priority steps first, no matter what order they appear in the problem.",
              "example": {
                "prompt": "What is  4 + 2 * (6 - 1) ?",
                "steps": [
                  "Parentheses first: 6 - 1 = 5.",
                  "Then multiply: 2 * 5 = 10.",
                  "Then add: 4 + 10 = 14."
                ],
                "answer": "14"
              }
            }
          },
          {
            "id": "integer-islands-u3-l3",
            "title": "The Captain's Final Challenge",
            "icon": "🏆",
            "intro": "Everything you've learned, all in one expedition! Negatives, absolute value, the grid, and PEMDAS. Show me your skills, Explorer!",
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
                ],
                "whyWrong": {
                  "8": "That's just 2^3. You still need to subtract 4 * 2 = 8, giving 8 - 8 = 0.",
                  "12": "Looks like 2^3 = 8 plus 4, forgetting to multiply 4 by 2 and treating the minus as a plus. It's 8 - (4 * 2) = 8 - 8 = 0.",
                  "-8": "Looks like the 2^3 got dropped, leaving 0 - 4 * 2 = -8. Keep it: 2^3 = 8, then 8 - 8 = 0."
                }
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
                ],
                "whyWrong": {
                  "26": "Looks like -10 turned into +10. Keep it negative: -10 + 16 = 6, not 26.",
                  "-26": "Looks like (-2)^2 was treated as -4. Squaring makes it positive 4, so 4 * 4 = 16, then -10 + 16 = 6.",
                  "-6": "Looks like you found (-2)^2 = 4 but forgot to multiply by 4, just doing -10 + 4 = -6. It's 4 * 4 = 16, then -10 + 16 = 6."
                }
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
            ],
            "teach": {
              "concept": "This is the grand finale: combine negatives, absolute value, the grid, and PEMDAS all in one. Work parentheses and exponents first, watch your signs, and take it one careful step at a time.",
              "example": {
                "prompt": "What is  -2 * (3 - 7) + |-5| ?",
                "steps": [
                  "Parentheses first: 3 - 7 = -4.",
                  "Multiply: -2 * -4 = 8 (same signs make a positive).",
                  "Absolute value: |-5| = 5, then add: 8 + 5 = 13."
                ],
                "answer": "13"
              }
            }
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
                ],
                "whyWrong": {
                  "5": "5 is a constant, not the variable — the variable is the letter standing in for an unknown, which is x.",
                  "10": "10 isn't even in this expression — look for the letter, which is x.",
                  "+": "The + is an operation sign, not a variable. The mystery letter is x."
                }
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
                ],
                "whyWrong": {
                  "y": "y is a variable — it can stand for different numbers. A constant never changes, like 7.",
                  "n": "n is a variable that can take on different values. A constant stays fixed, like 7.",
                  "a": "a is a variable, so it can change. The one that's locked in is the number 7."
                }
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
                ],
                "whyWrong": {
                  "1": "1 would be the coefficient of a lone x, but here the number multiplying x is clearly written: 3.",
                  "x": "x is the variable being multiplied, not the coefficient. The coefficient is the number in front: 3.",
                  "3x": "3x is the whole term. The coefficient is just the number part of it: 3."
                }
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
                ],
                "whyWrong": {
                  "1": "It looks like one chunk, but terms are split by + or - signs — 4x and 7 are separate, so there are 2 terms.",
                  "3": "There are only two pieces here. Count the parts separated by + or -: 4x and 7 make 2 terms.",
                  "4": "That's the coefficient, not the term count. Terms are separated by + or -, giving 2: 4x and 7."
                }
              }
            ],
            "teach": {
              "concept": "A variable is a letter (like x or n) standing in for a number we don't know yet. A constant is a fixed number that never changes, and a coefficient is the number multiplying a variable. Think: letters can shape-shift, numbers stay put.",
              "example": {
                "prompt": "In the term 6y, name the coefficient and the variable.",
                "steps": [
                  "Find the letter standing in for a number — that's the variable: y.",
                  "Find the number multiplying that letter — that's the coefficient: 6.",
                  "So 6y means 'six of the variable y'."
                ],
                "answer": "coefficient 6, variable y"
              }
            }
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
                ],
                "whyWrong": {
                  "5": "Recheck the multiply: 2 times 3 = 6, not 4, then 6 + 1 = 7.",
                  "6": "You found 2 times 3 = 6 but forgot the + 1. Add it on: 6 + 1 = 7.",
                  "9": "Looks like you added before multiplying. Multiply first: 2 times 3 = 6, then add 1 to get 7."
                }
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
                ],
                "whyWrong": {
                  "6": "You may have just added 4 + 1 + 1. Work inside the parentheses first: 1 + 2 = 3, then 4 times 3 = 12.",
                  "8": "Looks like you distributed wrong or did 4 times 1 plus 2 times 2. Do the parentheses first: 1 + 2 = 3, then 4 times 3 = 12.",
                  "9": "Try the parentheses first: 1 + 2 = 3, then multiply by 4 to get 12, not add."
                }
              }
            ],
            "teach": {
              "concept": "To evaluate an expression, just swap the variable for the number you're given, then do the math. Plug in, then simplify — replace, then calculate.",
              "example": {
                "prompt": "Evaluate 2x + 4 when x = 5.",
                "steps": [
                  "Replace x with 5: 2(5) + 4.",
                  "Multiply first: 2 times 5 = 10, giving 10 + 4.",
                  "Add: 10 + 4 = 14."
                ],
                "answer": "14"
              }
            }
          },
          {
            "id": "algebra-archipelago-u1-l3",
            "title": "Gather Your Like Terms",
            "icon": "🧺",
            "intro": "At this outpost we sort our treasure! Terms that share the same letter are 'like terms' and can be combined into the same chest — but x's and y's stay in separate chests.",
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
                ],
                "whyWrong": {
                  "5y and 2x": "These have different variables (y and x), so they can't combine. Like terms need the same letter — 5y and 2y match.",
                  "5 and 2x": "5 is a plain number and 2x has a variable, so they're not alike. Look for matching letters: 5y and 2y.",
                  "5x and 2": "5x has an x but 2 is just a number, so they differ. Like terms share the same variable, like 5y and 2y."
                }
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
                ],
                "whyWrong": {
                  "10x": "You combined the 2 into the x-terms, but 2 has no x. Only the x's combine: 3x + 5x = 8x, leaving 8x + 2.",
                  "8x": "You combined the x's correctly to 8x but dropped the 2 — it stays, giving 8x + 2.",
                  "5x + 2": "Looks like you only added one x-term. Combine both x's: 3x + 5x = 8x, so it's 8x + 2."
                }
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
                ],
                "whyWrong": {
                  "5y + 8": "It looks like you added the y's instead of subtracting: 4y - y = 3y, not 5y. The numbers give 8, so it's 3y + 8.",
                  "3y + 2": "The y's are right (3y), but recheck the numbers: 3 + 5 = 8, so it's 3y + 8.",
                  "7y": "You combined everything into y's, but the 3 and 5 are plain numbers. Keep them separate: 3y + 8."
                }
              }
            ],
            "teach": {
              "concept": "Like terms share the exact same variable, so you can add or subtract their coefficients. Plain numbers combine with plain numbers, x's with x's — keep each variable in its own pile.",
              "example": {
                "prompt": "Simplify: 5x + 4 + 2x",
                "steps": [
                  "Group the like terms: the x-terms are 5x and 2x.",
                  "Add their coefficients: 5x + 2x = 7x.",
                  "The 4 has no x to join, so it stays as is: 7x + 4."
                ],
                "answer": "7x + 4"
              }
            }
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
                ],
                "whyWrong": {
                  "2x + 3": "You multiplied 2 by x but forgot to also multiply the 3. Distribute to every term: 2 times 3 = 6, so 2x + 6.",
                  "x + 6": "You multiplied the 3 by 2 but left x alone. The 2 hits both terms: 2 times x = 2x, giving 2x + 6.",
                  "2x + 5": "Looks like you added 2 + 3 instead of multiplying. Distribute: 2 times 3 = 6, so 2x + 6."
                }
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
                ],
                "whyWrong": {
                  "5a - 2": "You multiplied 5 by a but skipped the 2. Distribute to both terms: 5 times 2 = 10, so 5a - 10.",
                  "5a - 7": "Looks like you added 5 + 2 instead of multiplying. Distribute: 5 times 2 = 10, giving 5a - 10.",
                  "a - 10": "You multiplied the 2 by 5 but left a without its 5. The 5 hits both: 5 times a = 5a, so 5a - 10."
                }
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
                ],
                "whyWrong": {
                  "4x + 2y": "You multiplied 4 by x but forgot to multiply the 2y. Distribute to both: 4 times 2y = 8y, so 4x + 8y.",
                  "4x + 8": "Almost — 4 times 2y keeps the y, giving 8y, not 8. So it's 4x + 8y.",
                  "8xy": "You can't merge unlike terms into one. Distribute separately: 4 times x = 4x and 4 times 2y = 8y, so 4x + 8y."
                }
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
                ],
                "whyWrong": {
                  "-x + 4": "The minus must flip BOTH signs inside. The +4 becomes -4, giving -x - 4.",
                  "x - 4": "The minus also flips the x to -x, not positive x. Flipping both signs gives -x - 4.",
                  "-x + 4y": "There's no y here, and the +4 should become -4. Flip both signs of (x + 4) to get -x - 4."
                }
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
                ],
                "whyWrong": {
                  "5x + 1": "The x's are right (5x), but recheck the constant: 2(x+1) gives +2, not +1, so it's 5x + 2.",
                  "6x + 2": "Looks like you counted an extra x. Distribute first: 2(x+1) = 2x + 2, then 2x + 3x = 5x, giving 5x + 2.",
                  "2x + 5": "You added the 3 to the constant instead of to the x's. The 3x joins the 2x: 2x + 3x = 5x, leaving 5x + 2."
                }
              }
            ],
            "teach": {
              "concept": "The distributive property says the number outside the parentheses multiplies EVERY term inside — nobody gets left out. A minus sign out front acts like multiplying by -1, flipping each inside sign.",
              "example": {
                "prompt": "Distribute: 3(x + 5)",
                "steps": [
                  "Multiply the outside number by the first term: 3 times x = 3x.",
                  "Multiply the outside number by the second term: 3 times 5 = 15.",
                  "Write both results with the same sign between them: 3x + 15."
                ],
                "answer": "3x + 15"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "Looks like you divided 9 by 9 to get 1, but you undo +9 by subtracting: 9 - 9 = 0.",
                  "9": "It looks like you added 9 instead of subtracting. To undo +9, subtract 9: 9 - 9 = 0.",
                  "18": "You added 9 to 9, but the goal is to undo +9 by subtracting: 9 - 9 = 0."
                }
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
            ],
            "teach": {
              "concept": "An equation is a balance scale — whatever you do to one side, do to the other. To free the variable, undo what's done to it with the opposite operation (add undoes subtract, divide undoes multiply).",
              "example": {
                "prompt": "Solve for x: x - 4 = 9",
                "steps": [
                  "The variable has 4 subtracted from it, so do the opposite to both sides: add 4.",
                  "Left side: x - 4 + 4 = x. Right side: 9 + 4 = 13.",
                  "So x = 13."
                ],
                "answer": "13"
              }
            }
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
            ],
            "teach": {
              "concept": "Two-step equations need two opposite moves. Undo the adding or subtracting first, then undo the multiplying or dividing — like climbing down a ladder in order.",
              "example": {
                "prompt": "Solve for x: 3x + 5 = 20",
                "steps": [
                  "Undo the +5 first: subtract 5 from both sides to get 3x = 15.",
                  "Undo the times-3: divide both sides by 3 to get x = 5.",
                  "So x = 5."
                ],
                "answer": "5"
              }
            }
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
                ],
                "whyWrong": {
                  "n + 3": "'Times' means multiply, not add. Three times n is written 3n.",
                  "n - 3": "'Times' signals multiply, not subtract. Three times n is 3n.",
                  "n/3": "'Times' means multiply, not divide. Three times n is 3n."
                }
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
                ],
                "whyWrong": {
                  "5 - x": "'5 less than x' means start at x and take away 5, so x - 5. Flipping it to 5 - x reverses the meaning.",
                  "x + 5": "'Less than' means subtract, not add. '5 less than x' is x - 5.",
                  "5x": "'Less than' is subtraction, not multiplication. '5 less than x' is x - 5."
                }
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
                ],
                "whyWrong": {
                  "x + 2 = 14": "'Doubled' means times 2, not plus 2. Doubling x gives 2x, so 2x = 14.",
                  "x/2 = 14": "'Doubled' means multiply by 2, not divide. Doubling x is 2x, giving 2x = 14.",
                  "x - 2 = 14": "'Doubled' means times 2, not minus 2. Doubling x gives 2x = 14."
                }
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
                ],
                "whyWrong": {
                  "2n + 4": "Without parentheses, the 2 only hits n. The whole sum gets doubled, so you need 2(n + 4).",
                  "n + 4 * 2": "Here the 2 only multiplies the 4, not the whole sum. Group the sum first: 2(n + 4).",
                  "2n + 8 only": "That's the expanded form, but the translation should keep the sum grouped: 2(n + 4)."
                }
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
            ],
            "teach": {
              "concept": "Word problems are secret messages: 'plus/more than' means add, 'times/product' means multiply, and 'less than' flips the order (5 less than x is x - 5). 'Equals' becomes the = sign.",
              "example": {
                "prompt": "Translate into an equation: 'a number x tripled equals 21.'",
                "steps": [
                  "'Tripled' means times 3, so the number x becomes 3x.",
                  "'Equals 21' becomes = 21.",
                  "Put it together: 3x = 21."
                ],
                "answer": "3x = 21"
              }
            }
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
                ],
                "whyWrong": {
                  "<": "The < symbol opens toward the smaller value, so it means 'less than'. 'Greater than' is >.",
                  "=": "The = sign means 'equals', not 'greater than'. 'Greater than' is >.",
                  "+": "The + is an addition sign, not a comparison. 'Greater than' is >."
                }
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
                ],
                "whyWrong": {
                  "x > 7": "Looks like you added 2 instead of subtracting. To undo +2, subtract 2 from both sides: x > 3.",
                  "x < 3": "The inequality sign shouldn't flip here — you only flip when dividing by a negative. Subtracting 2 keeps it: x > 3.",
                  "x > 5": "You left the 5 unchanged. Subtract 2 from both sides: 5 - 2 = 3, so x > 3."
                }
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
                ],
                "whyWrong": {
                  "x < 9": "Looks like you subtracted 3 instead of dividing. Since 3 multiplies x, divide both sides by 3: x < 4.",
                  "x < 36": "You multiplied by 3 instead of dividing. To undo times-3, divide: 12 / 3 = 4, so x < 4.",
                  "x > 4": "The sign only flips when dividing by a negative. Dividing by positive 3 keeps it: x < 4."
                }
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
                ],
                "whyWrong": {
                  "x > 4": "Looks like you skipped adding 1 first. Add 1 to both sides: 2x > 10, then divide by 2: x > 5.",
                  "x > 10": "You added 1 to get 2x > 10 but forgot to divide by 2. Divide both sides: x > 5.",
                  "x < 5": "The sign shouldn't flip — you only flip when dividing by a negative. The answer is x > 5."
                }
              }
            ],
            "teach": {
              "concept": "Inequalities use >, <, or similar instead of =, and you solve them almost exactly like equations. One twist: the > symbol opens toward the bigger value (greater than), and < opens toward the smaller.",
              "example": {
                "prompt": "Solve the inequality: x + 4 > 9",
                "steps": [
                  "Subtract 4 from both sides, just like an equation: x > 9 - 4.",
                  "Simplify the right side: 9 - 4 = 5.",
                  "Keep the same > sign: x > 5."
                ],
                "answer": "x > 5"
              }
            }
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
                ],
                "whyWrong": {
                  "b": "b is the y-intercept (where the line crosses), not the slope. The slope is m.",
                  "y": "y is the output value of the line, not the slope. The slope is m.",
                  "x": "x is the input variable, not the slope. The slope is the m in front of it."
                }
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
                ],
                "whyWrong": {
                  "the slope": "The slope is m, the number in front of x. b is the y-intercept, where the line crosses the y-axis.",
                  "the x-value": "b isn't the x-value; it's the y-intercept — the y-value where the line crosses (when x = 0).",
                  "the steepness": "Steepness is the slope (m). b is the y-intercept, where the line crosses the y-axis."
                }
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
                ],
                "whyWrong": {
                  "1": "The slope isn't a default 1 here — it's the coefficient of x, which is 3.",
                  "2": "2 is the y-intercept (the b value), not the slope. The slope is the number in front of x: 3.",
                  "5": "Looks like you added 3 + 2. The slope is just the number in front of x: 3."
                }
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
                ],
                "whyWrong": {
                  "y = 3x + 2": "You swapped slope and intercept. Slope (m) = 2 goes in front of x, and intercept (b) = 3 at the end: y = 2x + 3.",
                  "y = 2x - 3": "The y-intercept is +3 (it crosses at 3, above the axis), not -3. So y = 2x + 3.",
                  "y = 3x - 2": "Both values are placed wrong. Slope 2 goes with x and intercept +3 at the end: y = 2x + 3."
                }
              }
            ],
            "teach": {
              "concept": "Every straight line follows the recipe y = mx + b, where m is the slope (the number in front of x, telling steepness) and b is the y-intercept (where the line crosses the y-axis). Spot m and b, and you know the line.",
              "example": {
                "prompt": "For the line y = 5x + 2, find the slope and y-intercept, then find y when x = 1.",
                "steps": [
                  "The number in front of x is the slope: m = 5. The lone number is the y-intercept: b = 2.",
                  "Plug in x = 1: y = 5(1) + 2.",
                  "Simplify: 5 + 2 = 7, so y = 7."
                ],
                "answer": "slope 5, y-intercept 2, y = 7"
              }
            }
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
                ],
                "whyWrong": {
                  "Acute angle": "Acute is for angles smaller than 90 degrees, but exactly 90 is the perfect square corner: a right angle.",
                  "Obtuse angle": "Obtuse is for angles bigger than 90 (up to 180). Exactly 90 degrees is a right angle.",
                  "Straight angle": "A straight angle is 180 degrees, a flat line. 90 degrees is a right angle, the square corner."
                }
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
                ],
                "whyWrong": {
                  "Right": "A right angle is exactly 90 degrees. Since 45 is less than 90, this angle is acute.",
                  "Obtuse": "Obtuse means between 90 and 180. 45 is well under 90, so it's acute (small and sharp).",
                  "Straight": "A straight angle is 180 degrees. 45 degrees is far smaller, so it's acute."
                }
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
                ],
                "whyWrong": {
                  "Acute": "Acute angles are under 90 degrees. 120 is bigger than 90, so it's obtuse instead.",
                  "Right": "A right angle is exactly 90 degrees. 120 is more than 90, which makes it obtuse.",
                  "Straight": "A straight angle is exactly 180 degrees. 120 is between 90 and 180, so it's obtuse."
                }
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
                ],
                "whyWrong": {
                  "90 degrees": "90 degrees is exactly a right angle, not acute. Acute means smaller than 90, like 30 degrees.",
                  "150 degrees": "150 is between 90 and 180, so it's obtuse, not acute. Acute angles are under 90.",
                  "180 degrees": "180 degrees is a straight angle (a flat line). Acute angles are the small ones under 90."
                }
              }
            ],
            "teach": {
              "concept": "Angles are named by how wide they open. Acute is less than 90 degrees (small and sharp), right is exactly 90 (a square corner), obtuse is between 90 and 180 (wide open), and straight is exactly 180 (a flat line). Tip: 'a-cute' little angle is the tiny one.",
              "example": {
                "prompt": "What type of angle measures 135 degrees?",
                "steps": [
                  "Compare 135 to 90: since 135 is bigger than 90, it is not acute or right.",
                  "Compare 135 to 180: since 135 is less than 180, it is not straight.",
                  "Between 90 and 180 means the angle is obtuse."
                ],
                "answer": "Obtuse"
              }
            }
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
                ],
                "whyWrong": {
                  "0 degrees": "Looks like you subtracted 90 from itself the wrong way. The supplement is 180 - 90 = 90.",
                  "45 degrees": "45 would be half of 90, but supplement means add to 180: 180 - 90 = 90 degrees.",
                  "180 degrees": "180 is the total for supplementary angles, not the partner. Subtract: 180 - 90 = 90."
                }
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
                ],
                "whyWrong": {
                  "35 degrees": "Close, but check the subtraction: 180 - 135 = 45, not 35.",
                  "55 degrees": "Supplementary angles add to 180, so 180 - 135 = 45, not 55.",
                  "65 degrees": "That would be the complement if it were 90 minus something. Here use 180 - 135 = 45."
                }
              }
            ],
            "teach": {
              "concept": "Complementary angles are partners that add to 90 degrees; supplementary angles are partners that add to 180. To find a missing partner, subtract from the total. Memory hook: Complementary makes a Corner (90), Supplementary makes a Straight line (180).",
              "example": {
                "prompt": "Two angles are complementary. One is 35 degrees. What is the other?",
                "steps": [
                  "Complementary angles add to 90 degrees.",
                  "Subtract the known angle: 90 - 35 = 55."
                ],
                "answer": "55 degrees"
              }
            }
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
                ],
                "whyWrong": {
                  "Always supplementary": "Corresponding angles match exactly (equal). Same-side interior angles are the ones that are supplementary.",
                  "Always 90 degrees": "They're only 90 if the lines happen to be perpendicular. In general corresponding angles are simply equal to each other.",
                  "Never related": "They are very much related on parallel lines: corresponding angles are always equal."
                }
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
                ],
                "whyWrong": {
                  "90 degrees": "Same-side interior angles aren't always right angles. They are supplementary, adding to 180 degrees.",
                  "360 degrees": "360 is a full turn. Co-interior angles only add up to a straight line, 180 degrees.",
                  "They are equal": "Corresponding and alternate angles are equal; co-interior (same-side) angles instead add to 180."
                }
              }
            ],
            "teach": {
              "concept": "When two lines cross, the angles directly across from each other (vertical angles) are equal, and angles side-by-side on a straight line add to 180. When a transversal cuts parallel lines, corresponding angles are equal and same-side interior angles add to 180.",
              "example": {
                "prompt": "Two lines cross, making one angle of 50 degrees. What is its vertical (opposite) angle, and the angle right next to it on the line?",
                "steps": [
                  "Vertical angles are equal, so the opposite angle is also 50 degrees.",
                  "Angles next to each other on a straight line are supplementary: 180 - 50 = 130 degrees."
                ],
                "answer": "Vertical angle = 50 degrees; neighbor = 130 degrees"
              }
            }
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
                ],
                "whyWrong": {
                  "2 units": "That comes from dividing the wrong way or by the wrong number. Width = area / length = 24 / 8 = 3.",
                  "4 units": "24 / 8 = 3, not 4. It may help to remember 8 x 3 = 24.",
                  "6 units": "6 would give 8 x 6 = 48, too big. The width is 24 / 8 = 3 units."
                }
              },
              {
                "id": "geometry-gorge-u2-l1-p6",
                "type": "input",
                "prompt": "A rectangular ledge on the cliff is 10 m by 4 m. How many square meters of gravel cover it?",
                "answer": "40",
                "accept": [
                  "40",
                  "40 square meters",
                  "40 m^2",
                  "40 sq m",
                  "40 square metres"
                ],
                "explain": "Great! Area = 10 x 4 = 40 square meters of gravel.",
                "hints": [
                  "Soil covers the inside, so you need area.",
                  "Multiply the two dimensions.",
                  "Compute 10 x 4."
                ]
              }
            ],
            "teach": {
              "concept": "For a rectangle, area is the space inside (length x width) and perimeter is the distance around (add all four sides, or 2 x (length + width)). A square is just a rectangle with all sides equal. Area uses square units; perimeter uses plain units.",
              "example": {
                "prompt": "A rectangle is 7 units long and 4 units wide. Find its area and perimeter.",
                "steps": [
                  "Area = length x width = 7 x 4 = 28 square units.",
                  "Perimeter = 2 x (length + width) = 2 x (7 + 4) = 2 x 11 = 22 units."
                ],
                "answer": "Area = 28 square units; Perimeter = 22 units"
              }
            }
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
                ],
                "whyWrong": {
                  "3": "Remember the 1/2: 20 = 1/2 x 8 x h means 20 = 4 x h, so h = 5, not 3.",
                  "4": "Looks like you used area = base x height without the 1/2. With the half, 20 = 4 x h gives h = 5.",
                  "6": "Check the arithmetic: 1/2 x 8 = 4, and 20 / 4 = 5, so the height is 5."
                }
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
            ],
            "teach": {
              "concept": "A triangle is exactly half of a rectangle with the same base and height, so its area is one-half times base times height. In a right triangle, the two legs that form the right angle ARE the base and height.",
              "example": {
                "prompt": "A triangle has base 8 and height 5. What is its area?",
                "steps": [
                  "Multiply base by height: 8 x 5 = 40.",
                  "Take half of that: 1/2 x 40 = 20."
                ],
                "answer": "20 square units"
              }
            }
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
                ],
                "whyWrong": {
                  "pi x r^2": "That's the formula for area, not the distance around. Circumference is 2 x pi x r.",
                  "1/2 x b x h": "That's the area of a triangle. A circle's distance around is 2 x pi x r.",
                  "l x w": "That's the area of a rectangle. For a circle's circumference use 2 x pi x r."
                }
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
            ],
            "teach": {
              "concept": "Every circle has pi (about 3.14) hiding inside it. The diameter is twice the radius. Circumference (the distance around) is 2 x pi x r, and area is pi x r^2. Remember: area squares the radius, so it grows much faster than circumference.",
              "example": {
                "prompt": "A circle has radius 4. Find its circumference and area. Use pi = 3.14.",
                "steps": [
                  "Circumference = 2 x pi x r = 2 x 3.14 x 4 = 25.12.",
                  "Area = pi x r^2 = 3.14 x 4^2 = 3.14 x 16 = 50.24."
                ],
                "answer": "Circumference = 25.12; Area = 50.24 square units"
              }
            }
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
                ],
                "whyWrong": {
                  "The shortest side": "The shortest side is one of the legs. The hypotenuse is the longest side, opposite the right angle.",
                  "Any of the legs": "The legs form the right angle; the hypotenuse is the special longest side across from it.",
                  "The side touching the right angle": "The two sides touching the right angle are the legs. The hypotenuse is the one opposite the right angle."
                }
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
            ],
            "teach": {
              "concept": "In a right triangle, a^2 + b^2 = c^2, where c is the hypotenuse (the longest side, opposite the right angle). To find the hypotenuse, square the two legs, add, then take the square root. To find a missing leg, subtract instead: c^2 - a^2 = b^2.",
              "example": {
                "prompt": "A right triangle has legs 9 and 12. What is the hypotenuse?",
                "steps": [
                  "Square each leg: 9^2 = 81 and 12^2 = 144.",
                  "Add them: 81 + 144 = 225.",
                  "Take the square root: sqrt(225) = 15."
                ],
                "answer": "15"
              }
            }
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
                ],
                "whyWrong": {
                  "4": "A flat square has 4 sides, but a 3D box has 6 faces: top, bottom, and four sides.",
                  "8": "8 is the number of corners (vertices) on a box, not its faces. A box has 6 faces.",
                  "12": "12 is the number of edges on a box, not faces. A rectangular box has 6 faces."
                }
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
                ],
                "whyWrong": {
                  "24": "24 is the box's volume (2 x 3 x 4), not its surface area. Surface area is 2(6+8+12) = 52.",
                  "26": "26 is the sum of the three different faces (6 + 8 + 12). Don't forget each comes in a pair: double it to 52.",
                  "36": "That doesn't match the faces here. Use 2(2x3 + 2x4 + 3x4) = 2(6+8+12) = 52."
                }
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
            ],
            "teach": {
              "concept": "Surface area is the total of every face on a solid's outside skin. A cube has 6 identical square faces, so multiply one face by 6. A rectangular box also has 6 faces in 3 matching pairs: 2(lw + lh + wh).",
              "example": {
                "prompt": "A rectangular box is 2 by 3 by 5. What is its total surface area?",
                "steps": [
                  "Find the area of each different face: 2x3 = 6, 2x5 = 10, 3x5 = 15.",
                  "Add the three: 6 + 10 + 15 = 31.",
                  "Double it because faces come in matching pairs: 2 x 31 = 62."
                ],
                "answer": "62 square units"
              }
            }
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
                ],
                "whyWrong": {
                  "Linear units (like cm)": "Linear units measure length (one dimension). Volume fills 3D space, so it uses cubic units.",
                  "Square units (like cm^2)": "Square units measure area (flat, two dimensions). Volume is three dimensions, so it's cubic units.",
                  "Degrees": "Degrees measure angles, not space. Volume is measured in cubic units like cm^3."
                }
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
                ],
                "whyWrong": {
                  "2": "Check the division: 60 / 15 = 4, not 2. The base area is 5 x 3 = 15.",
                  "3": "Multiply the base first: 5 x 3 = 15, then 60 / 15 = 4, so the height is 4.",
                  "6": "6 would give 15 x 6 = 90, too big. Since 5 x 3 = 15, height = 60 / 15 = 4."
                }
              }
            ],
            "teach": {
              "concept": "Volume measures how much space fills a solid, counted in cubic units. For a box it's length x width x height; for a cylinder it's pi x r^2 x h. To find a missing dimension, divide the volume by the dimensions you know.",
              "example": {
                "prompt": "A cylinder has radius 3 and height 4. What is its volume? Use pi = 3.14.",
                "steps": [
                  "Square the radius: 3^2 = 9.",
                  "Multiply by pi: 3.14 x 9 = 28.26.",
                  "Multiply by the height: 28.26 x 4 = 113.04."
                ],
                "answer": "113.04 cubic units"
              }
            }
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
                ],
                "whyWrong": {
                  "x^12": "Looks like you multiplied the exponents (3 x 4) — but multiplying like bases means ADDING them: 3 + 4 = 7.",
                  "x^1": "Looks like you subtracted the exponents (4 - 3) — that rule is for division. When multiplying, ADD: 3 + 4 = 7.",
                  "x^34": "You stuck the exponents side by side. Instead, ADD them: 3 + 4 = 7, giving x^7."
                }
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
                ],
                "whyWrong": {
                  "a^7": "Looks like you added the exponents (2 + 5) — but a power raised to a power MULTIPLIES them: 2 * 5 = 10.",
                  "a^25": "Looks like you stuck 2 and 5 side by side — just multiply the two exponents: 2 * 5 = 10.",
                  "a^3": "Looks like you subtracted (5 - 2) — power-to-a-power MULTIPLIES the exponents: 2 * 5 = 10."
                }
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
                ],
                "whyWrong": {
                  "x^3": "A negative exponent doesn't just disappear — it means take the reciprocal: x^-3 = 1/x^3.",
                  "-x^3": "A negative exponent makes a reciprocal, not a negative number — x^-3 = 1/x^3, the term stays positive.",
                  "3/x": "The -3 is an exponent, not a coefficient you move out front — x^-3 means 1/x^3."
                }
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
            ],
            "teach": {
              "concept": "Exponents are shorthand for repeated multiplication, and a few rules make them quick. The big ones: when you MULTIPLY like bases, ADD the exponents; when you DIVIDE, SUBTRACT them; a power raised to a power MULTIPLIES; anything (nonzero) to the 0 is 1; and a negative exponent means flip to a reciprocal. Memory hook: 'multiply means add, power means multiply.'",
              "example": {
                "prompt": "Simplify: (b^3)^4 * b^2",
                "steps": [
                  "A power raised to a power multiplies the exponents: (b^3)^4 = b^(3*4) = b^12.",
                  "Now multiply like bases by adding exponents: b^12 * b^2 = b^(12+2) = b^14."
                ],
                "answer": "b^14"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "1 is the exponent on the -2x term, but degree is the HIGHEST exponent: 3.",
                  "4": "4 is just the leading coefficient — the degree is the highest EXPONENT on the variable, which is 3.",
                  "9": "9 is the constant term, not the degree — degree is the highest exponent, which is 3."
                }
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
                ],
                "whyWrong": {
                  "2x^2 and 5x": "These have different powers (x^2 vs x^1). Like terms need the SAME variable AND the same power.",
                  "3x and 4": "One has an x and the other is a plain number — like terms must share the same variable raised to the same power.",
                  "x^2 and x^3": "Same variable, but different powers (2 vs 3). Like terms need matching exponents too."
                }
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
                ],
                "whyWrong": {
                  "2x^2 - x": "Looks like you didn't flip the +x when subtracting: -2x + x = -x. Distribute the minus to BOTH terms: -2x - x = -3x.",
                  "8x^2 - 3x": "Looks like you ADDED the x^2 terms (5 + 3) — but it's subtraction: 5x^2 - 3x^2 = 2x^2.",
                  "2x^2 + 3x": "The sign on the x-term is off — distributing the minus gives -2x - x = -3x, not +3x."
                }
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
            ],
            "teach": {
              "concept": "A polynomial is just a sum of terms like 3x^2, -5x, and 7. Its degree is the highest exponent on the variable. You can only add or subtract 'like terms' — terms with the same variable raised to the same power — by combining their coefficients. Hook: same variable, same power = like.",
              "example": {
                "prompt": "Add: (3x^2 + 2x - 1) + (x^2 - 5x + 4)",
                "steps": [
                  "Combine the x^2 terms: 3x^2 + x^2 = 4x^2.",
                  "Combine the x terms: 2x + (-5x) = -3x.",
                  "Combine the constants: -1 + 4 = 3."
                ],
                "answer": "4x^2 - 3x + 3"
              }
            }
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
                ],
                "whyWrong": {
                  "3x^2 + 4": "You distributed 3x to the first term but dropped it on the second — 3x*4 = 12x, not 4.",
                  "3x + 12x": "3x times x is 3x^2, not 3x — the variables multiply too: x * x = x^2.",
                  "x^2 + 12x": "The coefficient 3 got dropped from the first term: 3x * x = 3x^2, not x^2."
                }
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
                ],
                "whyWrong": {
                  "x^2 + 6x + 5": "Looks like you swapped the middle and the last — Outer+Inner give 3x+2x = 5x (the middle) and 2*3 = 6 (the constant).",
                  "x^2 + 6": "You forgot the Outer and Inner terms — those give the 5x in the middle: 3x + 2x = 5x.",
                  "x^2 + 5x + 5": "The Last term is 2*3 = 6, not 5 — multiply the two constants together."
                }
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
                ],
                "whyWrong": {
                  "x^2 + 16": "(x+4)^2 isn't x^2 + 4^2 — you must FOIL (x+4)(x+4), which adds a middle term: x^2 + 8x + 16.",
                  "x^2 + 4x + 16": "The middle term comes from BOTH 4x's: 4x + 4x = 8x, not 4x.",
                  "x^2 + 8x + 8": "The last term is 4*4 = 16, not 8 — square the 4."
                }
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
                ],
                "whyWrong": {
                  "2x^2 + 4x + 3": "The middle term is wrong — add Outer (6x) and Inner (x): 6x + x = 7x, not 4x.",
                  "2x^2 + 7x + 4": "The Last term is 1*3 = 3, not 4 — multiply the two constants.",
                  "2x^2 + 3x + 3": "The middle term is short — you need Outer + Inner = 6x + x = 7x, not 3x."
                }
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
            ],
            "teach": {
              "concept": "To multiply polynomials, every term in one meets every term in the other. For two binomials, use FOIL: First, Outer, Inner, Last. Then combine the Outer and Inner terms — they're usually like terms. Hook: FOIL is just careful distributing.",
              "example": {
                "prompt": "Use FOIL: (x + 3)(x + 5)",
                "steps": [
                  "First: x * x = x^2.",
                  "Outer + Inner: x*5 + 3*x = 5x + 3x = 8x.",
                  "Last: 3 * 5 = 15."
                ],
                "answer": "x^2 + 8x + 15"
              }
            }
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
                ],
                "whyWrong": {
                  "3": "You found the number part but missed the shared x — both 6x and 9x also contain an x, so the GCF is 3x.",
                  "x": "You found the shared x but missed the number — both share a factor of 3 too, so the GCF is 3x.",
                  "18x": "18x is a common MULTIPLE, not a factor — the GREATEST common FACTOR (the biggest that divides both) is 3x."
                }
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
                ],
                "whyWrong": {
                  "2(x + 8)": "Check by distributing: 2*x + 2*8 = 2x + 16, not 2x + 8. You need 2(x + 4).",
                  "x(2 + 8)": "You can't factor out an x — neither term has an x. The shared factor is the number 2.",
                  "2x(1 + 4)": "There's no x to pull out, and this multiplies to 2x + 8x. The GCF is just 2, giving 2(x + 4)."
                }
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
                ],
                "whyWrong": {
                  "4(3x^2 - 2x)": "You pulled out 4 but left the x inside — the GCF includes an x too: 4x(3x - 2).",
                  "2x(6x - 4)": "This isn't fully factored — 6x - 4 still shares a 2. The greatest common factor is 4x: 4x(3x - 2).",
                  "4x(3x - 8)": "Check the second term: 8x divided by 4x is 2, not 8 — it should be 4x(3x - 2)."
                }
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
            ],
            "teach": {
              "concept": "Factoring is multiplying in reverse. The first tool to grab is the GCF — the biggest chunk every term shares (both the number AND any common variables). Pull it out front, and what's left goes in parentheses. Check by distributing back. Hook: GCF first, always.",
              "example": {
                "prompt": "Factor out the GCF: 6x^2 + 9x",
                "steps": [
                  "Find the largest number dividing 6 and 9: that's 3. Both terms also share an x, so the GCF is 3x.",
                  "Divide each term by 3x: 6x^2/3x = 2x and 9x/3x = 3.",
                  "Write the GCF out front with the leftovers inside: 3x(2x + 3)."
                ],
                "answer": "3x(2x + 3)"
              }
            }
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
                ],
                "whyWrong": {
                  "(x + 1)(x + 6)": "1 and 6 multiply to 6 but add to 7, not 5 — you need two numbers that add to 5: that's 2 and 3.",
                  "(x + 2)(x + 4)": "2 and 4 add to 6, not 5, and multiply to 8, not 6 — try 2 and 3 instead.",
                  "(x - 2)(x - 3)": "-2 and -3 multiply to +6 but add to -5, not +5 — both should be positive: (x + 2)(x + 3)."
                }
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
                ],
                "whyWrong": {
                  "(x + 2)(x + 6)": "2 and 6 multiply to 12 but add to 8, not 7 — you need a pair adding to 7: that's 3 and 4.",
                  "(x + 1)(x + 12)": "1 and 12 multiply to 12 but add to 13, not 7 — try 3 and 4.",
                  "(x + 3)(x + 5)": "3 and 5 add to 8 and multiply to 15, not 12 — you need 3 and 4 for a product of 12."
                }
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
                ],
                "whyWrong": {
                  "(x + 2)(x + 5)": "These multiply to +10 but add to +7, not -7 — since the middle is negative, both numbers must be negative: (x - 2)(x - 5).",
                  "(x - 1)(x - 10)": "-1 and -10 multiply to 10 but add to -11, not -7 — you need -2 and -5.",
                  "(x - 2)(x + 5)": "Opposite signs give a product of -10, but here c is +10 — both numbers must be negative: (x - 2)(x - 5)."
                }
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
                ],
                "whyWrong": {
                  "(x - 5)(x + 3)": "This gives a product of -15 but a middle term of -2x, not +2x — swap the signs to (x + 5)(x - 3).",
                  "(x + 5)(x + 3)": "Both positive multiplies to +15, but you need -15 — one number must be negative: (x + 5)(x - 3).",
                  "(x + 15)(x - 1)": "15 and -1 multiply to -15 but add to +14, not +2 — you need +5 and -3."
                }
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
            ],
            "teach": {
              "concept": "For a trinomial x^2 + bx + c, find two numbers that MULTIPLY to c and ADD to b. Those two numbers become the binomial pair. Watch the signs: if c is positive both numbers share b's sign; if c is negative the numbers have opposite signs. Hook: multiply to c, add to b.",
              "example": {
                "prompt": "Factor: x^2 + 8x + 15",
                "steps": [
                  "I need two numbers that multiply to 15 and add to 8.",
                  "Try 3 and 5: 3 * 5 = 15 and 3 + 5 = 8. That works!",
                  "Place them in the binomials: (x + 3)(x + 5)."
                ],
                "answer": "(x + 3)(x + 5)"
              }
            }
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
                ],
                "whyWrong": {
                  "(x - 3)(x - 3)": "That multiplies to x^2 - 6x + 9, not x^2 - 9 — difference of squares uses one plus and one minus: (x + 3)(x - 3).",
                  "(x + 9)(x - 1)": "These multiply to x^2 + 8x - 9, not x^2 - 9 — recognize 9 = 3^2 and use (x + 3)(x - 3).",
                  "(x + 3)(x + 3)": "Both plus gives x^2 + 6x + 9 — for x^2 - 9 you need the plus-minus pair: (x + 3)(x - 3)."
                }
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
                ],
                "whyWrong": {
                  "(x - 5)(x - 5)": "That makes x^2 - 10x + 25, not x^2 - 25 — difference of squares needs one plus and one minus: (x + 5)(x - 5).",
                  "(x + 25)(x - 1)": "These multiply to x^2 + 24x - 25, not x^2 - 25 — recognize 25 = 5^2 and use (x + 5)(x - 5).",
                  "(x + 5)(x + 5)": "Both plus gives x^2 + 10x + 25 — you need the plus-minus twins: (x + 5)(x - 5)."
                }
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
                ],
                "whyWrong": {
                  "(4x + 1)(x - 1)": "This multiplies to 4x^2 - 3x - 1, not 4x^2 - 1 — the middle doesn't cancel. Use both squares: (2x)^2 - 1^2 = (2x + 1)(2x - 1).",
                  "(2x - 1)(2x - 1)": "That makes 4x^2 - 4x + 1, not 4x^2 - 1 — difference of squares needs one plus and one minus.",
                  "(2x + 1)(2x + 1)": "Both plus gives 4x^2 + 4x + 1 — for 4x^2 - 1 use the plus-minus pair: (2x + 1)(2x - 1)."
                }
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
                ],
                "whyWrong": {
                  "(2x + 6)(x - 3)": "This isn't fully factored — pull the GCF of 2 out first: 2x^2 - 18 = 2(x^2 - 9) = 2(x + 3)(x - 3).",
                  "2(x - 3)(x - 3)": "(x - 3)(x - 3) makes x^2 - 6x + 9, not x^2 - 9 — after factoring out 2 you need (x + 3)(x - 3).",
                  "(x + 3)(2x - 6)": "This still has a 2 hidden inside (2x - 6 = 2(x - 3)) — factor the GCF out front first: 2(x + 3)(x - 3)."
                }
              }
            ],
            "teach": {
              "concept": "Difference of squares is a special pattern: a^2 - b^2 always factors into (a + b)(a - b). Spot two perfect squares with a MINUS sign between them. A SUM like a^2 + b^2 does NOT factor this way. Hook: same squares, plus-and-minus twins.",
              "example": {
                "prompt": "Factor: 9x^2 - 16",
                "steps": [
                  "Check both parts are perfect squares: 9x^2 = (3x)^2 and 16 = 4^2, with a minus between them.",
                  "Apply a^2 - b^2 = (a + b)(a - b) with a = 3x and b = 4."
                ],
                "answer": "(3x + 4)(3x - 4)"
              }
            }
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
                ],
                "whyWrong": {
                  "x = -2 or x = 3": "You flipped the signs — set each factor to 0: x - 2 = 0 gives x = +2, and x + 3 = 0 gives x = -3.",
                  "x = 2 or x = 3": "The second factor is x + 3, so x + 3 = 0 gives x = -3, not +3.",
                  "x = -2 or x = -3": "The first factor is x - 2, so x - 2 = 0 gives x = +2, not -2."
                }
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
                ],
                "whyWrong": {
                  "x = -2 or x = -3": "It factors to (x - 2)(x - 3), so each factor at 0 gives x = +2 and x = +3 — the roots flip the sign inside.",
                  "x = 1 or x = 6": "1 and 6 multiply to 6 but add to 7, not 5 — the right factors are (x - 2)(x - 3), giving x = 2 or 3.",
                  "x = 5 or x = 6": "Those don't come from the factors — factoring gives (x - 2)(x - 3) = 0, so x = 2 or x = 3."
                }
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
                ],
                "whyWrong": {
                  "x = -2 or x = 4": "You flipped the signs — it factors to (x - 2)(x + 4), so x = +2 and x = -4.",
                  "x = 2 or x = 4": "The factor x + 4 gives x = -4, not +4 — set x + 4 = 0.",
                  "x = -2 or x = -4": "The factor x - 2 gives x = +2 — set x - 2 = 0, not -2."
                }
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
                ],
                "whyWrong": {
                  "x = -1/2 or x = 3": "You flipped both signs — (2x - 1) = 0 gives x = +1/2, and (x + 3) = 0 gives x = -3.",
                  "x = 1 or x = -3": "From 2x - 1 = 0 you get x = 1/2, not 1 — divide the 1 by the 2.",
                  "x = 2 or x = -3": "The factor 2x - 1 = 0 solves to x = 1/2, not 2 — solve 2x = 1."
                }
              }
            ],
            "teach": {
              "concept": "To solve a quadratic, get one side equal to 0, factor it, then use the Zero Product Property: if A*B = 0, then A = 0 OR B = 0. Set each factor equal to zero and solve — each one hands you a root. Hook: equals zero, factor, split.",
              "example": {
                "prompt": "Solve: x^2 + x - 6 = 0",
                "steps": [
                  "Factor the trinomial: find numbers multiplying to -6 and adding to 1 — that's +3 and -2, so (x + 3)(x - 2) = 0.",
                  "Set each factor to 0: x + 3 = 0 gives x = -3.",
                  "The other factor: x - 2 = 0 gives x = 2."
                ],
                "answer": "x = -3 or x = 2"
              }
            }
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
                ],
                "whyWrong": {
                  "4": "Looks like you computed only b^2 (2^2 = 4) and forgot the -4ac part: 4 - 4(1)(-8) = 4 + 32 = 36.",
                  "-30": "Watch the signs: -4ac = -4(1)(-8) = +32, not a subtraction — so it's 4 + 32 = 36, not a negative.",
                  "-28": "You subtracted 32 instead of adding — since c is -8, -4ac becomes +32: 4 + 32 = 36."
                }
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
                ],
                "whyWrong": {
                  "Two different real solutions": "Two distinct roots happen when the discriminant is POSITIVE — when it's exactly 0, the ± vanishes and you get one repeated root.",
                  "No real solutions": "No real roots happen when the discriminant is NEGATIVE — a discriminant of exactly 0 still gives one real (repeated) root.",
                  "Infinitely many": "A quadratic can have at most two roots — a zero discriminant gives exactly one repeated root, never infinitely many."
                }
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
                ],
                "whyWrong": {
                  "One": "One root needs a discriminant of exactly 0 — here it's 1 - 4 = -3, which is negative, so there are NO real solutions.",
                  "Two": "Two roots need a positive discriminant — here b^2 - 4ac = 1 - 4 = -3 is negative, so none are real.",
                  "Three": "A quadratic can't have three roots — and with discriminant -3 (negative) it has no real solutions at all."
                }
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
                ],
                "whyWrong": {
                  "x = 2 ± sqrt(2)": "The -b part is +2, but you must divide everything by 2a = 2: (2 ± 2sqrt(2))/2 = 1 ± sqrt(2).",
                  "x = -1 ± sqrt(2)": "Since b = -2, -b = +2, so the result starts with +1, not -1: x = 1 ± sqrt(2).",
                  "x = 1 ± sqrt(8)": "You forgot to simplify and divide — sqrt(8) = 2sqrt(2), and (2 ± 2sqrt(2))/2 = 1 ± sqrt(2)."
                }
              }
            ],
            "teach": {
              "concept": "When factoring won't work, the quadratic formula x = (-b ± sqrt(b^2 - 4ac)) / (2a) always solves ax^2 + bx + c = 0. The discriminant b^2 - 4ac is the part under the root: positive means two real roots, zero means one repeated root, negative means no real roots. Hook: the discriminant counts your answers.",
              "example": {
                "prompt": "Find the discriminant of 2x^2 + 3x - 2 = 0 and say how many real roots it has.",
                "steps": [
                  "Identify a = 2, b = 3, c = -2.",
                  "Compute b^2 - 4ac = 3^2 - 4(2)(-2) = 9 + 16 = 25.",
                  "Since 25 is positive, there are two different real solutions."
                ],
                "answer": "Discriminant = 25; two real solutions"
              }
            }
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
                ],
                "whyWrong": {
                  "2sqrt(5)": "That squares back to 4*5 = 20, not 50 — pull out the perfect square 25: sqrt(50) = sqrt(25*2) = 5sqrt(2).",
                  "25sqrt(2)": "You took 25 out instead of its square root — sqrt(25) = 5, so sqrt(50) = 5sqrt(2).",
                  "10sqrt(5)": "That squares to 100*5 = 500, far too big — the right split is 25*2, giving 5sqrt(2)."
                }
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
                ],
                "whyWrong": {
                  "3sqrt(4)": "This isn't simplified — sqrt(4) = 2 is still a perfect square, so 3sqrt(4) = 6 and 6^2 = 36, not 48. Pull 16 out of 48: 4sqrt(3).",
                  "2sqrt(12)": "Not fully simplified — sqrt(12) still has a perfect square (4). Use the biggest one: 48 = 16*3, giving 4sqrt(3).",
                  "16sqrt(3)": "You took 16 out instead of its square root — sqrt(16) = 4, so sqrt(48) = 4sqrt(3)."
                }
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
                ],
                "whyWrong": {
                  "5": "Looks like you did 3*2 - 1 — but g(3) means 3^2 - 1 = 9 - 1 = 8 (square the 3, don't double it).",
                  "6": "Looks like you did 3*2 = 6 — but x^2 means 3*3 = 9, so g(3) = 9 - 1 = 8.",
                  "9": "You squared the 3 but forgot to subtract 1 — g(3) = 3^2 - 1 = 9 - 1 = 8."
                }
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
            ],
            "teach": {
              "concept": "To simplify a radical, pull out the largest perfect-square factor: sqrt(a*b) = sqrt(a)*sqrt(b). And function notation f(x) just means 'plug a value in for x' — replace every x with the number, then compute. Hook: radicals — find a perfect square; functions — substitute and simplify.",
              "example": {
                "prompt": "Simplify sqrt(75), and if f(x) = x^2 + 1 find f(2).",
                "steps": [
                  "Find the largest perfect-square factor of 75: 75 = 25 * 3, and sqrt(25) = 5, so sqrt(75) = 5sqrt(3).",
                  "For f(2), substitute 2 for x: 2^2 + 1 = 4 + 1 = 5."
                ],
                "answer": "sqrt(75) = 5sqrt(3); f(2) = 5"
              }
            }
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
                ],
                "whyWrong": {
                  "opposite": "The opposite side is a leg across from a chosen angle, not the side across from the right angle. The longest side, opposite the 90 degree angle, is the hypotenuse.",
                  "adjacent": "The adjacent side is a leg that touches a chosen angle. The longest side, across from the right angle, is the hypotenuse.",
                  "altitude": "An altitude is a height drawn inside a triangle, not a named side. The longest side, opposite the right angle, is the hypotenuse."
                }
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
                ],
                "whyWrong": {
                  "opposite side": "The opposite side is across from angle A and doesn't touch it. The side that touches A (and isn't the hypotenuse) is the adjacent side.",
                  "hypotenuse": "The hypotenuse is the longest side, across from the right angle. The leg touching A is the adjacent side.",
                  "median": "A median connects a vertex to the midpoint of the opposite side, not a named right triangle side. The leg touching A is the adjacent side."
                }
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
                ],
                "whyWrong": {
                  "adjacent side": "The adjacent side touches angle A. The one across from A, not touching it, is the opposite side.",
                  "hypotenuse": "The hypotenuse is the longest side, across from the right angle, not from angle A. The side across from A is the opposite side.",
                  "base": "'Base' isn't one of the three named right triangle sides. The side facing angle A from across is the opposite side."
                }
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
            ],
            "teach": {
              "concept": "Every right triangle has three named sides. The hypotenuse is the longest side, always across from the 90 degree angle. The other two are legs: the one across from your chosen angle is the opposite, and the one touching it (that isn't the hypotenuse) is the adjacent. Tip: 'opposite' and 'adjacent' depend on which angle you're looking at, so pick your angle first.",
              "example": {
                "prompt": "In a right triangle, look at angle A. Name the three sides relative to A.",
                "steps": [
                  "Find the longest side, across from the 90 degree angle. That is the hypotenuse.",
                  "Find the leg directly across from angle A (not touching it). That is the opposite side.",
                  "The remaining leg touches angle A and isn't the hypotenuse. That is the adjacent side."
                ],
                "answer": "hypotenuse (longest), opposite (across from A), adjacent (touching A)"
              }
            }
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
                ],
                "whyWrong": {
                  "adjacent": "That's the CAH ratio. SOH tells us Sine = Opposite / Hypotenuse, so the top is opposite.",
                  "hypotenuse": "The hypotenuse is already the bottom of this ratio. SOH says Sine = Opposite / Hypotenuse, so the top is opposite.",
                  "tangent": "Tangent is a different ratio entirely, not a side. SOH says Sine = Opposite / Hypotenuse."
                }
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
                ],
                "whyWrong": {
                  "opposite": "Opposite goes with sine and tangent. CAH says Cosine = Adjacent / Hypotenuse, so the bottom is hypotenuse.",
                  "adjacent": "Adjacent is already the top of this ratio. CAH says Cosine = Adjacent / Hypotenuse, so the bottom is hypotenuse.",
                  "leg": "'Leg' is a general name for a short side, not the specific bottom here. CAH says Cosine = Adjacent / Hypotenuse."
                }
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
                ],
                "whyWrong": {
                  "hypotenuse": "Tangent is the one ratio that skips the hypotenuse. TOA says Tangent = Opposite / Adjacent, so the bottom is adjacent.",
                  "opposite": "Opposite is already the top of this ratio. TOA says Tangent = Opposite / Adjacent, so the bottom is adjacent.",
                  "sine": "Sine is a different ratio, not a side. TOA says Tangent = Opposite / Adjacent."
                }
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
            ],
            "teach": {
              "concept": "SOH-CAH-TOA is your memory key for the three trig ratios. SOH: Sine = Opposite / Hypotenuse. CAH: Cosine = Adjacent / Hypotenuse. TOA: Tangent = Opposite / Adjacent. Just match the letters in order and you'll never mix them up.",
              "example": {
                "prompt": "For angle A, opposite = 6, adjacent = 8, hypotenuse = 10. Find sin(A), cos(A), and tan(A).",
                "steps": [
                  "SOH: sin(A) = opposite / hypotenuse = 6/10 = 0.6",
                  "CAH: cos(A) = adjacent / hypotenuse = 8/10 = 0.8",
                  "TOA: tan(A) = opposite / adjacent = 6/8 = 0.75"
                ],
                "answer": "sin(A) = 0.6, cos(A) = 0.8, tan(A) = 0.75"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "That's just one leg, not the hypotenuse. Use 1^2 + 1^2 = 2, so c = sqrt(2).",
                  "2": "Looks like you added the legs (1 + 1) instead of using the theorem. Do 1^2 + 1^2 = 2, then take the square root: c = sqrt(2).",
                  "sqrt(3)": "sqrt(3) comes from a 30-60-90 triangle. Here both legs are 1, so 1^2 + 1^2 = 2 and c = sqrt(2)."
                }
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
            ],
            "teach": {
              "concept": "The Pythagorean theorem locks in right triangle sides: a^2 + b^2 = c^2, where c is always the hypotenuse. To find a missing leg, subtract; to find the hypotenuse, add, then take the square root. Watch for famous triples like 3-4-5 and 5-12-13.",
              "example": {
                "prompt": "A right triangle has legs 9 and 12. Find the hypotenuse c.",
                "steps": [
                  "Square the legs: 9^2 = 81 and 12^2 = 144",
                  "Add them: 81 + 144 = 225 (this is c^2)",
                  "Take the square root: c = sqrt(225) = 15"
                ],
                "answer": "15"
              }
            }
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
                ],
                "whyWrong": {
                  "pi": "pi radians is only half a circle (180 degrees). A full circle is twice that: 2pi radians.",
                  "pi/2": "pi/2 radians is a quarter circle (90 degrees). A full circle is 2pi radians.",
                  "4pi": "4pi radians would be two full circles. One full circle is 2pi radians."
                }
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
                ],
                "whyWrong": {
                  "2pi": "2pi radians is a whole circle (360 degrees). Half a circle, 180 degrees, is pi radians.",
                  "pi/2": "pi/2 radians is a quarter circle (90 degrees). 180 degrees is a half circle, which is pi radians.",
                  "pi/3": "pi/3 radians is 60 degrees. 180 degrees equals pi radians."
                }
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
                ],
                "whyWrong": {
                  "pi": "pi radians is a half circle (180 degrees). 90 degrees is a quarter circle, which is pi/2 radians.",
                  "pi/4": "pi/4 radians is 45 degrees. 90 degrees is twice that: pi/2 radians.",
                  "2pi": "2pi radians is a full circle (360 degrees). 90 degrees is a quarter of that: pi/2 radians."
                }
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
            ],
            "teach": {
              "concept": "Angles can be measured in degrees or radians. A full circle is 360 degrees, which equals 2pi radians, so 180 degrees = pi radians. To go degrees to radians multiply by pi/180; to go radians to degrees multiply by 180/pi.",
              "example": {
                "prompt": "Convert 90 degrees to radians.",
                "steps": [
                  "Use the rule: multiply degrees by pi/180.",
                  "Set it up: 90 * pi/180 = 90pi/180",
                  "Simplify the fraction 90/180 = 1/2, giving pi/2"
                ],
                "answer": "pi/2"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "sine reaches 1 only at 90 degrees. At 30 degrees, sin = 1/2.",
                  "sqrt(2)/2": "That's sin(45 degrees). For the smaller angle 30 degrees, sine is the smallest special value: 1/2.",
                  "sqrt(3)/2": "That's sin(60 degrees). At the smaller angle 30 degrees, sine is 1/2."
                }
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
                ],
                "whyWrong": {
                  "0": "cosine reaches 0 only at 90 degrees. At 60 degrees, cos = 1/2.",
                  "sqrt(3)/2": "That's cos(30 degrees). For the bigger angle 60 degrees, cosine shrinks to 1/2.",
                  "sqrt(2)/2": "That's cos(45 degrees). At 60 degrees, cosine is 1/2."
                }
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
                ],
                "whyWrong": {
                  "1": "sine hits 1 only at 90 degrees. At 45 degrees, sin = sqrt(2)/2.",
                  "1/2": "1/2 is sin(30 degrees). At 45 degrees sine is bigger: sqrt(2)/2 (about 0.707).",
                  "sqrt(3)/2": "sqrt(3)/2 is sin(60 degrees). At 45 degrees, sine equals cosine: sqrt(2)/2."
                }
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
                ],
                "whyWrong": {
                  "0": "tan is 0 at 0 degrees, where sine is 0. At 45 degrees sine and cosine are equal, so tan = 1.",
                  "sqrt(3)": "sqrt(3) is tan(60 degrees). At 45 degrees, equal sine and cosine give tan = 1.",
                  "1/2": "That mixes up the values. tan(45) = sin(45)/cos(45) = (sqrt(2)/2)/(sqrt(2)/2) = 1."
                }
              }
            ],
            "teach": {
              "concept": "A handful of special angles appear constantly on the unit circle. Cosine is the x-coordinate and sine is the y-coordinate of the point. The key sine values for 30, 45, 60 are 1/2, sqrt(2)/2, sqrt(3)/2, and cosine runs the same list backward. Memory hook: as the angle grows, sine grows and cosine shrinks.",
              "example": {
                "prompt": "Find sin(60 degrees) and cos(30 degrees).",
                "steps": [
                  "For 60 degrees, take the largest special sine value: sin(60) = sqrt(3)/2",
                  "For 30 degrees, cosine is the x-coordinate and equals the largest value: cos(30) = sqrt(3)/2",
                  "Notice they match because 30 and 60 are complementary: sin of one equals cos of the other"
                ],
                "answer": "sin(60) = sqrt(3)/2 and cos(30) = sqrt(3)/2"
              }
            }
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
                ],
                "whyWrong": {
                  "sin(x) + cos(x) = 1": "This version is missing the squares. The real identity squares each term: sin^2(x) + cos^2(x) = 1.",
                  "sin^2(x) - cos^2(x) = 1": "The identity adds the squares, not subtracts them: sin^2(x) + cos^2(x) = 1.",
                  "sin(x) * cos(x) = 1": "The identity adds squared terms, it doesn't multiply: sin^2(x) + cos^2(x) = 1."
                }
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
            ],
            "teach": {
              "concept": "The Pythagorean identity says sin^2(x) + cos^2(x) = 1 for every single angle. It comes from a^2 + b^2 = c^2 on the unit circle, where c = 1. If you know one of sine or cosine, you can find the other: just subtract its square from 1 and take the square root.",
              "example": {
                "prompt": "If sin(x) = 4/5 and cos(x) is positive, find cos(x).",
                "steps": [
                  "Start from the identity: cos^2(x) = 1 - sin^2(x)",
                  "Substitute: 1 - (4/5)^2 = 1 - 16/25 = 9/25",
                  "Take the positive square root: cos(x) = sqrt(9/25) = 3/5"
                ],
                "answer": "3/5"
              }
            }
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
                ],
                "whyWrong": {
                  "2": "That's 2^1. The negative exponent flips it to a reciprocal: 2^(-1) = 1/2.",
                  "-2": "A negative exponent doesn't make the answer negative; it makes a reciprocal. 2^(-1) = 1/2.",
                  "-1/2": "The reciprocal part is right, but the sign isn't. 2^(-1) = 1/2, a positive number."
                }
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
                ],
                "whyWrong": {
                  "becomes negative": "An exponential like 3^x is always positive. As x goes very negative it shrinks toward 0 but stays above it.",
                  "stays at 1": "3^x equals 1 only at x = 0. As x gets more negative, 3^x keeps shrinking toward 0.",
                  "grows large": "3^x grows large when x increases, not decreases. As x goes negative it approaches 0."
                }
              }
            ],
            "teach": {
              "concept": "An exponential like b^x means multiply the base b by itself x times. Two rules unlock most problems: any nonzero number to the 0 power is 1, and a negative exponent means take the reciprocal (b^(-1) = 1/b). Exponentials grow faster and faster as x increases.",
              "example": {
                "prompt": "Evaluate 2^4 and 2^(-2).",
                "steps": [
                  "2^4 means 2 * 2 * 2 * 2 = 16",
                  "A negative exponent flips to a reciprocal: 2^(-2) = 1/2^2",
                  "Compute the bottom: 2^2 = 4, so 2^(-2) = 1/4"
                ],
                "answer": "2^4 = 16 and 2^(-2) = 1/4"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "That would be log base 5 of 5. Since 5^0 = 1, log base 5 of 1 = 0.",
                  "5": "5 is the base, not the answer. Because 5^0 = 1, log base 5 of 1 = 0.",
                  "undefined": "log of 1 is perfectly defined: any base to the 0 power is 1, so the answer is 0."
                }
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
                ],
                "whyWrong": {
                  "0.18": "Looks like you subtracted instead of adding. The product rule adds: log(6) = 0.30 + 0.48 = 0.78.",
                  "1.44": "That's log(2) * log(3), but the rule turns a product into a sum: 0.30 + 0.48 = 0.78.",
                  "0.30": "That's just log(2). log(6) = log(2) + log(3) = 0.30 + 0.48 = 0.78."
                }
              }
            ],
            "teach": {
              "concept": "A logarithm asks 'what power do I raise the base to?' So log base b of x is the exponent that turns b into x. Logs and exponentials undo each other. Handy facts: log base b of 1 is always 0, and the product rule log(a*b) = log(a) + log(b) turns multiplying into adding.",
              "example": {
                "prompt": "Find log base 2 of 16.",
                "steps": [
                  "Ask: what power of 2 gives 16?",
                  "Test powers: 2^4 = 16, so the exponent is 4",
                  "Therefore log base 2 of 16 = 4"
                ],
                "answer": "4"
              }
            }
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
                ],
                "whyWrong": {
                  "down 3": "Adding 3 raises outputs, it doesn't lower them. f(x) + 3 shifts the graph up 3.",
                  "right 3": "Left/right shifts come from changes inside the function. A +3 outside shifts up 3.",
                  "left 3": "Left/right shifts come from changes inside the parentheses. A +3 outside shifts up 3."
                }
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
                ],
                "whyWrong": {
                  "left 2": "Inside changes act oppositely to their sign. x - 2 shifts the graph right 2, not left.",
                  "up 2": "Up/down shifts come from changes outside the function. x - 2 is inside, so it shifts right 2.",
                  "down 2": "Up/down shifts come from changes outside the function. x - 2 is inside, so it shifts right 2."
                }
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
                ],
                "whyWrong": {
                  "flipped over the y-axis": "A y-axis flip comes from f(-x), changing the input. The negative outside, -f(x), flips over the x-axis.",
                  "shifted up": "A negative sign reflects, it doesn't shift. -f(x) flips the graph over the x-axis.",
                  "stretched": "Stretching comes from multiplying by a number bigger than 1. The negative in -f(x) reflects over the x-axis."
                }
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
                ],
                "whyWrong": {
                  "shifted up 2": "Adding 2 outside would shift up, but here we multiply by 2. 2*f(x) stretches the graph vertically by 2.",
                  "compressed by 2": "Multiplying by 2 makes heights bigger, not smaller. 2*f(x) stretches vertically by 2.",
                  "flipped": "There's no negative sign, so nothing flips. Multiplying by 2 stretches the graph vertically by 2."
                }
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
            ],
            "teach": {
              "concept": "Transformations slide, flip, and stretch a graph. Outside changes act normally: f(x) + k moves up, and a negative outside flips over the x-axis, while multiplying outside stretches vertically. Inside changes act oppositely: f(x - h) moves right (not left), and f(-x) flips over the y-axis.",
              "example": {
                "prompt": "Describe how y = -f(x) + 2 changes the graph of f, then find the new value at a point where f = 5.",
                "steps": [
                  "The negative outside flips the graph over the x-axis: f(x) becomes -f(x)",
                  "The + 2 outside shifts the whole graph up 2",
                  "At a point where f = 5: -(5) + 2 = -3"
                ],
                "answer": "Flip over the x-axis, then shift up 2; the value becomes -3"
              }
            }
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
                ],
                "whyWrong": {
                  "0": "Looks like you used the 2x term and got 0 — but at x = 0 the 2x vanishes and the +7 stays: 2(0) + 7 = 7.",
                  "2": "The 2 is the coefficient of x, not the answer. Plug in x = 0: 2(0) + 7 = 7.",
                  "9": "Looks like you added 2 + 7 = 9 — but the 2 multiplies x, and 2(0) = 0, so you're left with just 7."
                }
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
                ],
                "whyWrong": {
                  "1": "Looks like you got 3 - 1 - 1 or forgot a term — substitute fully: 3(1)^2 - 1 = 3 - 1 = 2.",
                  "3": "That's just the 3x^2 part (3 at x=1) without subtracting the 1. Finish it: 3 - 1 = 2.",
                  "4": "Looks like you added instead of subtracting: 3 + 1 = 4. The problem has a minus, so 3 - 1 = 2."
                }
              }
            ],
            "teach": {
              "concept": "A limit asks where a function is HEADED as x sneaks up on a number. When the function is smooth (no holes or jumps) right there, you just plug the number in. Easy peek over the edge!",
              "example": {
                "prompt": "Evaluate the limit as x approaches 3 of (2x + 1).",
                "steps": [
                  "2x + 1 is a smooth line with no holes, so we can substitute directly.",
                  "Plug in x = 3: 2(3) + 1 = 6 + 1.",
                  "Add to get 7."
                ],
                "answer": "7"
              }
            }
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
                ],
                "whyWrong": {
                  "0": "Plugging straight in gives 0/0, but that's a hole to factor through, not the answer. After cancelling you get x - 1 = -2.",
                  "2": "That's x + 1 at x = -1 done with a sign flip, or +1 instead of -1. The cancelled form is x - 1, so -1 - 1 = -2.",
                  "-1": "Looks like you just plugged x = -1 into the bottom or top alone. Factor and cancel first: (x-1)(x+1)/(x+1) = x - 1, then -1 - 1 = -2."
                }
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
                ],
                "whyWrong": {
                  "4": "That's just plugging x = 4 into the leftover x without the +4. After cancelling you get x + 4, so 4 + 4 = 8.",
                  "6": "Looks like you used x + 2 instead of x + 4. The top factors as (x-4)(x+4), so cancelling leaves x + 4: 4 + 4 = 8.",
                  "16": "That's the constant 16 from x^2 - 16, not the limit. Factor and cancel to get x + 4, then 4 + 4 = 8."
                }
              }
            ],
            "teach": {
              "concept": "Sometimes plugging in gives 0/0 — that's a tiny hole, not a dead end. Factor the top and bottom, cancel the matching piece, then plug in to the simpler function. The hole tells you where to dig, not to stop.",
              "example": {
                "prompt": "Evaluate the limit as x approaches 5 of (x^2 - 25)/(x - 5).",
                "steps": [
                  "Plugging in 5 gives 0/0, so factor the top: x^2 - 25 = (x - 5)(x + 5).",
                  "Cancel the (x - 5) on top and bottom, leaving just x + 5.",
                  "Plug in x = 5: 5 + 5 = 10."
                ],
                "answer": "10"
              }
            }
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
                ],
                "whyWrong": {
                  "1": "A fraction with a fixed top over a growing bottom doesn't settle at 1 — as x^2 explodes, 5/x^2 shrinks toward 0.",
                  "5": "The 5 is just the top; it doesn't survive being divided by an ever-growing x^2. The whole thing goes to 0.",
                  "infinity": "The bottom x^2 grows, not the fraction — dividing 5 by a huge number makes it tiny, so the limit is 0, not infinity."
                }
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
                ],
                "whyWrong": {
                  "0": "The bottom doesn't outgrow the top here — both are x^2, a tie. With equal degrees, take the ratio of leading coefficients: 3/1 = 3.",
                  "1": "Equal degrees don't give 1 — they give the ratio of the leading coefficients, which is 3/1 = 3, not 1/1.",
                  "infinity": "The top isn't a higher degree than the bottom; both are x^2. A tie gives the coefficient ratio 3/1 = 3."
                }
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
                ],
                "whyWrong": {
                  "7": "The 7 is just the top; divided by an ever-growing 2x^2 + 3 it shrinks to 0, not stays at 7.",
                  "7/2": "That ratio would apply only if top and bottom had the same degree. Here the bottom (x^2) outgrows the constant top, so the limit is 0.",
                  "infinity": "The bottom grows to infinity while the top is stuck at 7, so the fraction collapses to 0, not blows up."
                }
              }
            ],
            "teach": {
              "concept": "Way out where x grows forever, the highest powers run the show. Same top and bottom degree? The limit is the ratio of the leading coefficients. Bigger power on the bottom? It collapses to 0. Bigger on top? It races off to infinity.",
              "example": {
                "prompt": "Evaluate the limit as x approaches infinity of (6x^2 + 4)/(2x^2 + 1).",
                "steps": [
                  "Find the highest power on top and bottom: both are x^2, so they tie.",
                  "Since the degrees match, take the ratio of the leading coefficients: 6/2.",
                  "Simplify 6/2 to 3."
                ],
                "answer": "3"
              }
            }
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
                ],
                "whyWrong": {
                  "The area under the curve": "That's what an integral gives, not a derivative. The derivative measures the slope — steepness — at a point.",
                  "The y-intercept": "The y-intercept is just where the curve crosses the y-axis. The derivative is about steepness, the slope at a point.",
                  "The maximum value": "The maximum is a high point of the curve, not its steepness. The derivative gives the slope at a point."
                }
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
                ],
                "whyWrong": {
                  "going downhill": "Downhill is a NEGATIVE slope. A positive derivative means the curve is rising — going uphill.",
                  "flat": "Flat means a slope of 0. A positive slope is more than 0, so the curve is climbing uphill.",
                  "undefined": "A positive number is a perfectly defined slope. Positive slope just means the curve is heading uphill."
                }
              }
            ],
            "teach": {
              "concept": "A derivative measures the slope — how steep the trail is at one exact spot. A straight line y = mx has constant slope m everywhere, and a flat (constant) line has slope 0. Positive slope means climbing uphill; negative means heading down.",
              "example": {
                "prompt": "What is the derivative of f(x) = 4x?",
                "steps": [
                  "The graph of y = 4x is a straight line, so its slope is the same at every point.",
                  "Read the slope straight off: the number multiplying x is 4.",
                  "So f'(x) = 4 everywhere."
                ],
                "answer": "4"
              }
            }
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
                ],
                "whyWrong": {
                  "5x^6": "You raised the exponent instead of lowering it. The power rule DROPS the exponent by one: x^5 gives 5x^4.",
                  "x^4": "You lowered the exponent but forgot to bring the 5 down front. The power rule gives 5*x^4 = 5x^4.",
                  "4x^5": "You dropped the wrong number — bring the exponent 5 down and lower it: 5x^4, not 4x^5."
                }
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
                ],
                "whyWrong": {
                  "6x^3": "You lowered the exponent but forgot to multiply the exponent into the coefficient: 6 * 4x^3 = 24x^3.",
                  "10x^3": "Looks like you added 6 + 4 = 10. The power rule multiplies them: 6 * 4 = 24, giving 24x^3.",
                  "24x^4": "You multiplied the coefficients correctly but didn't lower the exponent: x^4 becomes x^3, so 24x^3."
                }
              }
            ],
            "teach": {
              "concept": "The power rule is your fastest tool: for x^n, bring the exponent down front and drop it by one, giving n*x^(n-1). A coefficient out front just rides along and multiplies the result.",
              "example": {
                "prompt": "Using the power rule, find the derivative of 3x^4.",
                "steps": [
                  "Apply the power rule to x^4: bring down the 4 and lower the exponent to get 4x^3.",
                  "Multiply by the coefficient out front: 3 * 4x^3.",
                  "Combine the numbers: 3 * 4 = 12, so the derivative is 12x^3."
                ],
                "answer": "12x^3"
              }
            }
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
                ],
                "whyWrong": {
                  "6x + 7": "The +7 is a constant, so its derivative is 0, not 7. And -4x gives -4: f'(x) = 6x - 4.",
                  "3x - 4": "3x^2 differentiates to 6x (bring the 2 down: 3*2 = 6), not 3x. So f'(x) = 6x - 4.",
                  "6x - 4 + 7": "The +7 should vanish, not stick around — a constant's derivative is 0. So just f'(x) = 6x - 4."
                }
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
                ],
                "whyWrong": {
                  "2": "That's f(1) using f(x) = x^2 + 2x... or a partial step. First find f'(x) = 2x + 2, then f'(1) = 2(1) + 2 = 4.",
                  "3": "Looks like you computed 2x + 2 but used x = 0.5, or slipped a step. With x = 1: 2(1) + 2 = 4.",
                  "5": "Close, but recheck: f'(x) = 2x + 2, and 2(1) + 2 = 4, not 5."
                }
              }
            ],
            "teach": {
              "concept": "A polynomial is just a sum of power terms, so differentiate each piece separately and add the results. Any plain constant term washes away to 0, since a constant has no slope.",
              "example": {
                "prompt": "Find the derivative of f(x) = 2x^3 + 4x - 9.",
                "steps": [
                  "Differentiate 2x^3 with the power rule: 2 * 3x^2 = 6x^2.",
                  "Differentiate 4x: a line of slope 4, so it gives 4.",
                  "The constant -9 has slope 0 and drops out. Add the pieces: 6x^2 + 4."
                ],
                "answer": "6x^2 + 4"
              }
            }
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
                ],
                "whyWrong": {
                  "f(3)": "f(3) is the function's VALUE (height) at x = 3, not its slope. The tangent's slope is the derivative f'(3).",
                  "f''(3)": "f''(3) is the second derivative (how the slope is changing). The tangent line's slope is the FIRST derivative, f'(3).",
                  "f(3)/3": "That mixes the height with x and isn't a slope. The tangent's slope is exactly the derivative f'(3)."
                }
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
                ],
                "whyWrong": {
                  "3(x^2 + 1)^2": "That's only the outside derivative — the chain rule says multiply by the inside's derivative too: 3(x^2+1)^2 * 2x.",
                  "2x": "That's just the inside's derivative by itself. The chain rule multiplies it by the outside derivative: 3(x^2+1)^2 * 2x.",
                  "6x^2": "Looks like you multiplied 3 * 2x or skipped the chain structure. Keep the outside intact: 3(x^2+1)^2 * 2x."
                }
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
                ],
                "whyWrong": {
                  "f'(x)g'(x)": "You can't just multiply the two derivatives — that's a common trap. The product rule is f'(x)g(x) + f(x)g'(x).",
                  "f'(x) + g'(x)": "That's the rule for a SUM, not a product. For a product use f'(x)g(x) + f(x)g'(x).",
                  "f(x)g'(x) - f'(x)g(x)": "That has a minus sign and looks like a garbled quotient rule. The product rule ADDS: f'(x)g(x) + f(x)g'(x)."
                }
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
            ],
            "teach": {
              "concept": "A few power tools: the tangent line's slope at a point IS the derivative there, f'(a). The product rule is f'g + fg' (derivative of first times second, plus first times derivative of second). The chain rule is outside-derivative times inside-derivative.",
              "example": {
                "prompt": "Using the chain rule, find the derivative of (x^3 + 2)^2.",
                "steps": [
                  "Differentiate the outside (something)^2, keeping the inside the same: 2(x^3 + 2).",
                  "Multiply by the derivative of the inside (x^3 + 2), which is 3x^2.",
                  "Combine: 2(x^3 + 2) * 3x^2."
                ],
                "answer": "2(x^3 + 2) * 3x^2"
              }
            }
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
                ],
                "whyWrong": {
                  "x^2": "You raised the exponent right but forgot to divide by the new power AND add C. The integral of x is x^2/2 + C.",
                  "2x + C": "That's the DERIVATIVE direction (you multiplied), not the integral. Integrating x adds to the exponent: x^2/2 + C.",
                  "1 + C": "That's the derivative of x, not its integral. Integration raises the power: x becomes x^2/2 + C."
                }
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
                ],
                "whyWrong": {
                  "2x + C": "That's the derivative of x^2, not its integral. Integrating goes the other way: x^2 becomes x^3/3 + C.",
                  "x^3 + C": "You raised the exponent to 3 but forgot to divide by the new power 3. The integral is x^3/3 + C.",
                  "3x^2 + C": "That's the derivative of x^3. To integrate x^2, add to the exponent and divide: x^3/3 + C."
                }
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
                ],
                "whyWrong": {
                  "5 + C": "A constant doesn't just stay put when integrated — you pick up an x. The integral of 5 is 5x + C.",
                  "0 + C": "That's like differentiating the constant. Integrating 5 gives 5x + C, not 0.",
                  "x/5 + C": "You divided by 5 instead of multiplying x by it. The integral of the constant 5 is 5x + C."
                }
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
                ],
                "whyWrong": {
                  "6x^2 + C": "You forgot to divide by the new power. Integrating x gives x^2/2, so 6 * x^2/2 = 3x^2 + C, not 6x^2.",
                  "6 + C": "That's like differentiating 6x down to 6. Integrating 6x raises the power: 3x^2 + C.",
                  "3x + C": "You divided the coefficient but didn't raise x's exponent. Integrating 6x gives 3x^2 + C."
                }
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
                ],
                "whyWrong": {
                  "2x^2 + 3x + C": "The 2x integrates to x^2 (2 * x^2/2 = x^2), not 2x^2 — you skipped dividing by 2. Answer: x^2 + 3x + C.",
                  "x^2 + 3 + C": "The constant 3 integrates to 3x, not stay as 3. So it's x^2 + 3x + C.",
                  "2 + C": "That looks like a derivative of part of it. Integrate each term: 2x gives x^2, 3 gives 3x, so x^2 + 3x + C."
                }
              }
            ],
            "teach": {
              "concept": "Integration runs the derivative backward. For x^n, add one to the exponent and divide by the new power, giving x^(n+1)/(n+1). A constant k integrates to kx. Always add + C, since any constant vanishes when you differentiate.",
              "example": {
                "prompt": "Find the integral of 4x with respect to x.",
                "steps": [
                  "Integrate x by raising its exponent to 2 and dividing by 2: x^2/2.",
                  "Multiply by the coefficient 4: 4 * x^2/2 = 2x^2.",
                  "Add the constant of integration: 2x^2 + C."
                ],
                "answer": "2x^2 + C"
              }
            }
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
                ],
                "whyWrong": {
                  "the slope at b": "Slope is what a derivative gives. A definite integral accumulates AREA between the curve and the x-axis from a to b.",
                  "the value of f at a": "That's just one height of the function. A definite integral gives the total area under the curve over [a, b].",
                  "the maximum of f": "The maximum is a peak height, not an accumulation. A definite integral measures the area from a to b."
                }
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
                ],
                "whyWrong": {
                  "3": "Looks like you used antiderivative x^2 instead of x^3/3, or stopped early. Correct: x^3/3 at 3 is 27/3 = 9.",
                  "6": "Close, but the antiderivative of x^2 is x^3/3, and 3^3/3 = 27/3 = 9, not 6.",
                  "27": "That's 3^3 — you forgot to divide by 3. The antiderivative is x^3/3, so 27/3 = 9."
                }
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
            ],
            "teach": {
              "concept": "A definite integral measures the exact area between a curve and the x-axis over [a, b]. Use the Fundamental Theorem: find the antiderivative, plug in the top limit, then subtract the antiderivative at the bottom limit.",
              "example": {
                "prompt": "Evaluate the definite integral from 0 to 2 of (x) dx.",
                "steps": [
                  "Find the antiderivative of x: x^2/2.",
                  "Plug in the top limit: 2^2/2 = 4/2 = 2.",
                  "Subtract the bottom limit: 0^2/2 = 0, so 2 - 0 = 2."
                ],
                "answer": "2"
              }
            }
          }
        ]
      }
    ]
  }
];

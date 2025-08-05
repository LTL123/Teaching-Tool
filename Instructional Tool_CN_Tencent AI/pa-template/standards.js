const rubrics = {
    "1.1: Demonstrates respect and empathy for diverse cultural perspectives.": {
        "Grade 1-3": {
            "Beginning": "Understand little about how other people from different places do things. Might say things that are not nice about them.",
            "Developing": "Knows that people from different places are different but doesn't always understand why. Tries to be nice sometimes.",
            "Proficient": "Understands that people from different places have different ideas. Does not judge different ideas.",
            "Mastery": "Understands how people from different cultures see the world and tries to see things from their point of view."
        },
        "Grade 4-5": {
            "Beginning": "Knows that there are different cultures and tries to be respectful, and understands how others feel with guidance.",
            "Developing": "Respects that people from different cultures have different ideas and feelings. Tries to understand why they think the way they do.",
            "Proficient": "Fully understands and cares about how people from different cultures see the world by showing empathy.",
            "Mastery": "Deeply understands and respects the viewpoints of people from different cultures. Always includes their ideas and helps others learn about them."
        },
        "Grade 6-8": {
            "Beginning": "Shows little understanding of different cultures and might rely on stereotypes about them.",
            "Developing": "Recognizes that different cultures have different ways of doing things and be respectful and show empathy with guidance.",
            "Proficient": "Respects and tries to understand different cultural viewpoints and can talk about the differences in a thoughtful way.",
            "Mastery": "Fully understands and values different cultural perspectives and actively includes them in their interactions and projects, helping to promote understanding among others."
        },

        "Grade 9-12": {
            "Beginning": "Shows limited understanding or respect for different cultural perspectives; may rely on stereotypes or generalizations.",
            "Developing": "Recognizes cultural differences and demonstrates basic respect, though empathy (understanding and sharing the feelings of others) is not consistently evident.",
            "Proficient": "Demonstrates consistent respect and empathy for diverse cultural perspectives, actively seeking to understand different viewpoints.",
            "Mastery": "Exhibits deep understanding and appreciation of diverse cultural perspectives, consistently demonstrating empathy and actively promoting cultural understanding."
        }
    },
    "1.2: Applies knowledge of cultural traditions and global trends to address challenges.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Has some knowledge about tradition culture and global trends/issues.",
            "Mastery": "Can come up some ideas relating to contemporary problems using understandings about local and global situation."
        },
        "Grade 4-5": {
            "Beginning": "Has limited knowledge about different cultural traditions or what's going on globally.",
            "Developing": "Knows some things about different cultures and the world but needs some guidance on how to use this to solve problems.",
            "Proficient": "Can demonstrate their knowledge of different cultures and global events when think about how to solve problems.",
            "Mastery": "Uses their strong knowledge of different cultures or global trends to really understand problems and come up with creative solutions, even for big challenges."
        },
        "Grade 6-8": {
            "Beginning": "Has limited knowledge of different cultural traditions or current events around the world and struggles to use this information to solve problems.",
            "Developing": "Knows some cultural traditions or global trends but might not always see how they connect to different problems.",
            "Proficient": "Can use their understanding of cultural traditions and global trends to think about problems in ways that make sense.",
            "Mastery": "Uses a deep understanding of cultural traditions and global trends to generate creative and effective solutions for problems."
        },
        "Grade 9-12": {
            "Beginning": "Identifies cultural traditions (customs, beliefs of different groups) or global trends (major patterns or changes happening worldwide) relevant to tasks or problems with guidance.",
            "Developing": "Identifies some relevant cultural traditions or global trends but applies them inconsistently or in a basic way to address challenges.",
            "Proficient": "Effectively applies knowledge of cultural traditions and global trends to analyze and address challenges in familiar contexts.",
            "Mastery": "Synthesizes knowledge of diverse cultural traditions and global trends to create innovative and insightful solutions for complex, global challenges."
        }
    },
    "1.3: Effectively communicates across languages and cultural contexts.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Can sometimes talk to people from different places or who speak different languages, but it can be hard.",
            "Mastery": "Can talk clearly and in a way that is respectful to people who speak different languages or come from different places."
        },
        "Grade 4-5": {
            "Beginning": "Finds it hard to communicate clearly with people who have different languages or come from different cultures.",
            "Developing": "Can usually communicate okay with people from different cultures or who speak different languages about familiar things.",
            "Proficient": "Can communicate clearly and respectfully with people from different cultures and who speak different languages in many situations.",
            "Mastery": "Is excellent at communicating effectively with application of communication, language skills and understandings to cultures."
        },
        "Grade 6-8": {
            "Beginning": "Assistance is needed when communicate with people from different cultures or who speak different languages, or in verbal/written format.",
            "Developing": "Can communicate in familiar cultural, language situations or way of expression, but might not equally effective in the other situation.",
            "Proficient": "Communicates clearly and in a way that shows they understand and respect different cultures and languages consistently.",
            "Mastery": "Is highly skilled at communicating with diverse groups of people from different cultural and language backgrounds effectively to make audience engaged."
        },
        "Grade 9-12": {
            "Beginning": "Can communicates with some clarity in either one language or single cultural context.",
            "Developing": "Communicates effectively in familiar cultural and linguistic contexts but may need assistance with appropriateness in unfamiliar ones.",
            "Proficient": "Demonstrates clarity and appropriateness according to context in their communication across multilingual and multicultural settings.",
            "Mastery": "Adapts communication style (verbal, nonverbal, written) seamlessly to effectively engage diverse audiences across different languages and cultural contexts, ensuring understanding and building rapport."
        }
    },
    "1.4: Collaborates with others to build understanding and solve problems across cultural divides.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Works well with others who are different from them. Tries to understand their ideas and solve problems together.",
            "Mastery": "Is excellent at working with people from all different backgrounds. Helps everyone understand each other and solve problems together peacefully."
        },
        "Grade 4-5": {
            "Beginning": "Can work well with people with similarities or known each other well.",
            "Developing": "Participates in group work with people from different backgrounds and tries to understanding their ideas or solving problems.",
            "Proficient": "Works well with people from different cultures and tries to understand their ideas to solve problems together.",
            "Mastery": "Is very good at working with people from all different cultures. Helps everyone understand each other's ideas and tries to lead a team to make everyone work towards same goals."
        },
        "Grade 6-8": {
            "Beginning": "Starts to work with people from different cultures and understands their viewpoints with assistance.",
            "Developing": "Works with others from different cultures but tries to understanding their perspectives or finding common ground to solve problems.",
            "Proficient": "Works effectively with people from different cultural backgrounds, can lead the team and work out solutions to problems together.",
            "Mastery": "Is skilled at leading group work with people from diverse cultural backgrounds, helping everyone understand each other and working together to solve problems with empathy and respect."
        },
        "Grade 9-12": {
            "Beginning": "Begins to engage in collaborative efforts with individuals from different cultural backgrounds.",
            "Developing": "Participates in collaborative efforts with individuals from diverse cultural backgrounds begin to address cultural misunderstandings or build strong understanding.",
            "Proficient": "Collaborates effectively with individuals from diverse cultural settings, fostering understanding and working together to solve problems across cultural divides.",
            "Mastery": "Leads collaborative efforts to bridge cultural divides, proactively fostering understanding, resolving misunderstandings with empathy and cultural sensitivity, and guiding diverse teams towards shared solutions."
        }
    },
    "2.1: Breaks down problems into smaller components and identifies solutions.": {
    "Grade 1-3": {
        "Beginning": "Needs some help to understand what the problem is really about. Their ideas for fixing it might not make sense or be complete.",
        "Developing": "Can sometimes see parts of a problem. Their ideas might fix some of it but not all.",
        "Proficient": "Can break down a problem into smaller parts. Has some good ideas for how to solve it.",
        "Mastery": "Can really understand all the parts of a problem, even tricky ones. Comes up with thorough and reasonable ways to fix it."
    },
    "Grade 4-5": {
        "Beginning": "Needs help to see all the parts of a problem. Their ideas to solve it might only fix some of it.",
        "Developing": "Can break down some problems but might miss some important parts. Their solutions might not solve everything.",
        "Proficient": "Can break down problems into smaller pieces and come up with clear and logical ways to solve them.",
        "Mastery": "Can understand even complicated problems by breaking them down. Comes up with solutions that make sense."
    },
    "Grade 6-8": {
        "Beginning": "breaks down a problem into smaller pieces with guidance. Their ideas for solutions might be unclear or not fully address the problem.",
        "Developing": "Can sometimes break down a problem with guidance. Their proposed solutions might only address some parts of the problem.",
        "Proficient": "Can break down problems into smaller, more manageable parts. Proposes solutions that are clear, make sense, and address the problem.",
        "Mastery": "Can analyze problems thoroughly by breaking them down into smaller parts and understanding how they connect. Proposes creative and well-supported solutions."
    },
    "Grade 9-12": {
        "Beginning": "Struggles to identify key components of a problem; proposed solutions are vague, incomplete, or don't address the core issue.",
        "Developing": "Breaks down problems inconsistently, addressing some but not all aspects; proposed solutions may lack a clear connection to the problem's components.",
        "Proficient": "Breaks down problems systematically by identifying key components and their relationships; proposes clear, logical, and well-organized solutions.",
        "Mastery": "Analyzes problems comprehensively by dissecting them into fundamental components and understanding underlying complexities; proposes innovative, well-supported, and thoroughly reasoned solutions."
    }
},
    "2.2: Demonstrates originality and flexibility in generating ideas.": {
    "Grade 1-3": {
        "Beginning": "Doesn't have many ideas and has trouble thinking of different ways to do things.",
        "Developing": "Can think of a few different ideas but might get stuck if their first idea doesn't work.",
        "Proficient": "Can come up with lots of different and new ideas. Can change their ideas if they need to.",
        "Mastery": "Comes up with independent ideas all the time. Is great at thinking in different ways to solve problems."
    },
    "Grade 4-5": {
        "Beginning": "Doesn't come up with many new ideas and finds it hard to change their thinking.",
        "Developing": "Can come up with some different ideas but might have trouble changing their ideas when things change.",
        "Proficient": "Can come up with many creative ideas and can change their thinking or try new things if their first ideas don't work.",
        "Mastery": "Is full of unique and interesting ideas and can easily change their thinking to find the best solution to a problem on their own."
    },
    "Grade 6-8": {
        "Beginning": "Has few original ideas and struggles to think in different ways when needed.",
        "Developing": "Can come up with more than one idea with guidance but might struggle to change their approach if their initial ideas don't work.",
        "Proficient": "Regularly comes up with creative ideas and can change their approach or ideas based on what they learn or if things change.",
        "Mastery": "Always comes up with highly original ideas and can easily think in different ways to solve even complex problems."
    },
    "Grade 9-12": {
        "Beginning": "Generates few original ideas and demonstrates limited flexibility in their thinking or approach to tasks.",
        "Developing": "Generates multiple ideas but may struggle to adapt their thinking or innovate when faced with new information or changing conditions.",
        "Proficient": "Consistently generates creative and original ideas, demonstrating flexibility in their thinking and adapting their approaches based on feedback or new information.",
        "Mastery": "Produces highly original and inventive ideas, demonstrating exceptional flexibility and innovation in their thinking and problem-solving approaches, even in complex situations."
    }
},
    "2.3: Evaluates evidence critically to make reasoned decisions.": {
    "Grade 1-3": {
        "Beginning": "Might make assertion without really thinking about it.",
        "Developing": "Their reasons for opinion might not be very strong.",
        "Proficient": "Can sometimes look at information and see if it makes sense. Makes arguments based on good reasons.",
        "Mastery": "Is very good at looking at information and deciding if it's really true and important. Always makes arguments based on careful thinking and good reasons."
    },
    "Grade 4-5": {
        "Beginning": "Finds it hard to look at information and decide if it's good information. Their choices might not be based on facts.",
        "Developing": "Can sometimes tell if information is helpful but might not always think carefully about it. Their reasons for choices might not be very clear.",
        "Proficient": "Looks at information closely and decides if it's good evidence independently. Uses this information to make choices that make sense.",
        "Mastery": "Is excellent at looking at information and figuring out if it's strong evidence considering quality of source and relevance. Uses this to make thoughtful and logical decisions."
    },
    "Grade 6-8": {
        "Beginning": "Starts to look at information carefully to decide if it's true or important. Their decisions might not be based on good reasons.",
        "Developing": "Can look at information and understand the importance of evaluating information, but might not always be very thorough in their thinking.",
        "Proficient": "Carefully looks at information and decides if it's good evidence to support their ideas. Makes decisions based on clear and logical reasons.",
        "Mastery": "Shows exceptional ability to look at information, evaluate how strong it is from multiple aspects, and use it to make well-reasoned and logical decisions."
    },
    "Grade 9-12": {
        "Beginning": "Evaluates evidence with guidance; decisions may be based on incomplete, unreliable, or irrelevant information without logical reasoning.",
        "Developing": "Evaluates evidence inconsistently, accepting information at face value or relying on limited sources; reasoning may lack depth or thoroughness.",
        "Proficient": "Evaluates evidence systematically by considering its source, relevance, and validity; uses this evaluation to make reasoned, logical, and well-supported decisions.",
        "Mastery": "Demonstrates exceptional critical thinking by thoroughly analyzing and synthesizing complex evidence from various sources to make insightful, well-justified, and nuanced decisions."
    }
},
    "2.4: Applies knowledge creatively to innovate and adapt to new situations.": {
    "Grade 1-3": {
        "Beginning": "(intentionally left blank)",
        "Developing": "(intentionally left blank)",
        "Proficient": "Can fully understand what they know. Starts to apply knowledge to answer other questions.",
        "Mastery": "Is excellent at using what they know to come up with ideas to answer questions."
    },
    "Grade 4-5": {
        "Beginning": "Tries to get deeper understandings to what have been learned.",
        "Developing": "Can understand what they have learned, but assistance is needed when trying to apply knowledge to other contexts.",
        "Proficient": "Can use what they've learned to solve new problems and try different ways of doing things.",
        "Mastery": "Is very good at using their knowledge to create new ideas as solutions in many different situations."
    },
    "Grade 6-8": {
        "Beginning": "Start to explore how to use what they know in new situations or come up with new ways of doing things.",
        "Developing": "Can use what they know in situations they've seen before, and needs guidance to transfer to new contexts.",
        "Proficient": "Can use what they've learned to solve new problems and try different ways of doing things.",
        "Mastery": "Is very good at using their knowledge to create new ideas as solutions in many different situations."
    },
    "Grade 9-12": {
        "Beginning": "Demonstrates limited ability to apply existing knowledge to new situations or generate innovative solutions.",
        "Developing": "Applies existing knowledge to new situations with some success but may struggle with significant adaptations or truly innovative approaches.",
        "Proficient": "Effectively applies existing knowledge to new and unfamiliar situations, demonstrating creativity and adaptability in problem-solving.",
        "Mastery": "Consistently and innovatively applies knowledge to diverse and complex situations, generating novel solutions and demonstrating exceptional adaptability."
    }
},
    "3.1: Inspires and motivates others through inclusive and ethical leadership.": {
            "Grade 1-3": {
        "Beginning": "Start to learn how to encourage others and what inclusivity is when learning how to lead.",
        "Developing": "Sometimes gets others to join in. Usually tries to include everyone and be fair when leading.",
        "Proficient": "Gets others interested in working together and makes sure everyone feels included and is treated fairly when they are helping to lead.",
        "Mastery": "Inspires others to work together and makes everyone feel important and included. Always acts fairly."
    },
    "Grade 4-5": {
        "Beginning": "Start to learn how to encourage others and what inclusivity is when learning how to lead.",
        "Developing": "Sometimes gets others to join in. Usually tries to include everyone and be fair when leading.",
        "Proficient": "Gets others interested in working together and makes sure everyone feels included and is treated fairly when they are helping to lead.",
        "Mastery": "Inspires others to work together and makes everyone feel important and included. Always acts fairly."
    },
    "Grade 6-8": {
        "Beginning": "Can sometimes encourage others to work together. Usually tries to be fair and include everyone when helping lead.",
        "Developing": "Can get others excited to participate. Shows some understanding of being fair and including others when leading.",
        "Proficient": "Effectively encourages their peers to work together. Consistently tries to be fair and include everyone when taking a leadership role.",
        "Mastery": "Is great at inspiring others and making them want to work together. Always makes sure everyone feels included and is treated fairly, and encourages others to lead in a positive way."
    },
    "Grade 9-12": {
        "Beginning": "Start to understand inclusivity and ethical consideration in leadership with limited practices.",
        "Developing": "Engages peers when asked to do so; demonstrates preliminary inclusivity and ethical awareness in leadership situations.",
        "Proficient": "Motivates peers effectively, consistently modeling inclusive (ensuring everyone is involved and valued) and ethical (acting with integrity and fairness) leadership.",
        "Mastery": "Inspires peers and broader groups with transformative, inclusive, and ethical leadership practices, fostering a positive and collaborative environment where everyone feels valued and motivated."
    }
},
    "3.2: Builds and sustains positive relationships within teams.": {
        "Grade 1-3": {
            "Beginning": "Has trouble making friends in a group. Might not want to work with others or might argue a lot.",
            "Developing": "Plays with others in a group but sometimes has trouble sharing or working things out.",
            "Proficient": "Is good at making friends in a group and works well with others.",
            "Mastery": "Is great at making everyone in a group feel like they belong and helps the team work together really well."
        },
        "Grade 4-5": {
            "Beginning": "Finds it hard to get along with others in a group. Might avoid working with others or cause disagreements.",
            "Developing": "Participates in group activities but sometimes needs helps getting along with others or solving problems.",
            "Proficient": "Works well with others in a group consistently and helps everyone to get along.",
            "Mastery": "Helps everyone in a group feel connected and work together smoothly. Is very good at staying positive."
        },
        "Grade 6-8": {
            "Beginning": "Needs some helps to work with people from different cultures and understands their viewpoints with assistance.",
            "Developing": "Works with others from different cultures but tries to understanding their perspectives or finding common ground to solve problems.",
            "Proficient": "Works effectively with people from different cultural backgrounds, can lead the team and work out solutions to problems together.",
            "Mastery": "Is skilled at leading group work with people from diverse cultural backgrounds, helping everyone understand each other and working together to solve problems with empathy and respect."
        },
        "Grade 9-12": {
            "Beginning": "Struggles to build relationships within teams; may avoid collaboration or contribute to conflicts within the group.",
            "Developing": "Participates in team activities but struggles to sustain positive relationships or effectively resolve conflicts that arise.",
            "Proficient": "Actively builds positive relationships with team members, contributing to effective teamwork and demonstrating skills in conflict resolution.",
            "Mastery": "Strengthens team dynamics through proactive relationship-building, fostering a positive and supportive environment, and effectively employing conflict mediation strategies to ensure team cohesion."
        }
    },
    "3.3: Mediates conflicts constructively and promotes collaboration.": {
        "Grade 1-3": {
            "Beginning": "Avoids facing arguments or conflicts. Might make things worse.",
            "Developing": "Tries to help when others argue with basic skills.",
            "Proficient": "Helps others solve arguments in a good way so everyone can work together again.",
            "Mastery": "Is good at helping people solve even big arguments so everyone feels heard and can work together happily."
        },
        "Grade 4-5": {
            "Beginning": "Is not very confident to help when there are disagreements. Might take sides or make things more tense.",
            "Developing": "Attempts to help when there are disagreements but might not always be successful or fair.",
            "Proficient": "Helps people who are disagreeing to talk and find a way to work together peacefully.",
            "Mastery": "Is excellent at helping people who are fighting to understand each other and find solutions so everyone can work together well."
        },
        "Grade 6-8": {
            "Beginning": "Intervenes conflicts by stopping it from escalating.",
            "Developing": "Tries to help solve small-scale disagreements with some skills.",
            "Proficient": "Is good at helping people who are in a conflict find a solution so they can work together positively.",
            "Mastery": "Is highly skilled at resolving conflicts, helping people understand each other's viewpoints and finding solutions that allow for positive collaboration and strong group dynamics."
        },
        "Grade 9-12": {
            "Beginning": "Starts to mediate conflicts between others; may exacerbate tensions within a group rather than helping to resolve them.",
            "Developing": "Attempts to mediate conflicts between others but with limited success or consistency in finding positive solutions.",
            "Proficient": "Mediates conflicts effectively by listening to all sides, identifying common ground, and guiding individuals towards positive collaboration and resolution.",
            "Mastery": "Skillfully resolves conflicts by employing advanced mediation techniques, fostering a culture of collaboration, mutual respect, and trust within groups, leading to stronger team cohesion and productivity."
        }
    },
    "3.4: Takes initiative in group settings and contributes to collective problem-solving.": {
        "Grade 1-3": {
            "Beginning": "Usually waits for others to tell them what to do in a group. Helps little with solving problems.",
            "Developing": "Sometimes has ideas in a group but choose to keep them instead of sharing. Helps a little with solving problems when asked.",
            "Proficient": "Often has ideas in a group and shares them. Helps solve problems by offering suggestions and helping out.",
            "Mastery": "Always has great ideas in a group and helps the team solve even hard problems. They often lead the way and get others involved."
        },
        "Grade 4-5": {
            "Beginning": "Usually lets others take the lead in a group. Doesn't often share ideas for solving problems.",
            "Developing": "Sometimes offers ideas in a group and helps solve problems when someone asks them to.",
            "Proficient": "Regularly shares their ideas in a group and helps the group solve problems by offering solutions and taking action.",
            "Mastery": "Is always coming up with ideas in a group and helps the team solve even difficult problems. Often takes charge and gets everyone working together towards a solution."
        },
        "Grade 6-8": {
            "Beginning": "Rarely offers ideas or steps up to help when the group needs to solve a problem.",
            "Developing": "Occasionally suggests ideas or takes the lead in a group. Their help with problem-solving might not always be consistent.",
            "Proficient": "Often takes the lead in group activities and actively helps the group find solutions to problems by sharing ideas and participating.",
            "Mastery": "Consistently steps up to lead in group situations and is a driving force in helping the group find creative and effective solutions to problems."
        },
        "Grade 9-12": {
            "Beginning": "Rarely takes initiative in group settings or contributes meaningfully to the process of collective problem-solving.",
            "Developing": "Occasionally takes initiative in group tasks; contributions to problem-solving are sometimes helpful but may lack consistency or depth.",
            "Proficient": "Regularly takes initiative in group settings, contributing effectively to collective problem-solving through active participation, idea generation, and willingness to lead when appropriate.",
            "Mastery": "Consistently leads by example in group settings, proactively taking initiative and driving group efforts toward successful and innovative solutions to complex problems."
        }
    },
    "4.1: Demonstrates a growth mindset by embracing setbacks as learning opportunities.": {
        "Grade 1-3": {
            "Beginning": "Gets very upset when things don't go their way and thinks they can't do it.",
            "Developing": "Feels sad or frustrated when they make a mistake but can sometimes try again.",
            "Proficient": "Would not easily give up, but with basic reflection for improvements happen.",
            "Mastery": "Understands that mistakes help them learn and tries to figure out what to do differently next time."
        },
        "Grade 4-5": {
            "Beginning": "Gets discouraged when things are hard and sees mistakes as bad things.",
            "Developing": "Knows that mistakes can help them learn, and start to develop reflective skills to try to work out different practices next time.",
            "Proficient": "Tries to learn from mistakes and uses what they learned to help them do better in the future.",
            "Mastery": "Always demonstrates resilience by not giving up, and has clear strategies/ideas to do better in future."
        },
        "Grade 6-8": {
            "Beginning": "Finds it hard to deal with mistakes and usually sees challenges as things they can't overcome.",
            "Developing": "Can sometimes see mistakes as a chance to learn but might still get upset or give up easily.",
            "Proficient": "Thinks through about their mistakes and uses what they learned to improve in the future.",
            "Mastery": "Always looks at mistakes as a way to grow and learn with demonstration of excellent reflection skills."
        },
        "Grade 9-12": {
            "Beginning": "Struggles to cope with setbacks; views challenges as barriers rather than opportunities for learning and growth.",
            "Developing": "Acknowledges setbacks and reflects on the experience with some guidance to keep going.",
            "Proficient": "Reflects on setbacks constructively, identifying what they can learn and applying those lessons to future tasks and challenges to move on.",
            "Mastery": "Fully embraces setbacks as opportunities for growth and learning, inspiring others with their resilient attitude and determination to improve."
        }
    },
    "4.2: Maintains focus and balance in the face of stress or uncertainty.": {
        "Grade 1-3": {
            "Beginning": "Gets easily upset or distracted.",
            "Developing": "Can sometimes calm down or focus when things are hard, but it's not always easy.",
            "Proficient": "Knows how to calm down and focus when facing difficulties.",
            "Mastery": "Can always be focused with a peaceful mind even when things are tricky or they are not sure what will happen."
        },
        "Grade 4-5": {
            "Beginning": "Gets worried or can't focus when things get stressful or confusing.",
            "Developing": "Tries some ways to deal with stress or confusion but might still get overwhelmed sometimes.",
            "Proficient": "Uses good ways to stay calm and focused when things are stressful or when they don't know what to expect.",
            "Mastery": "Stays very calm and focused even when things are stressful or when there are many unknowns. They can help others feel better too."
        },
        "Grade 6-8": {
            "Beginning": "Starts to stay calm and focused when things get stressful or uncertain.",
            "Developing": "Knows some ways to handle stress and can stay focused or balanced when things are really tough with help.",
            "Proficient": "Uses effective ways to stay focused and keep their emotions stable when facing stressful or uncertain situations and can tries to help others.",
            "Mastery": "Shows great ability to stay focused and emotionally balanced even when things are complex or stressful. They can often help others to feel better."
        },
        "Grade 9-12": {
            "Beginning": "Start to be aware of maintaining focus or manage feelings of stress or uncertainty in challenging situations.",
            "Developing": "Demonstrates some basic coping strategies (e.g., taking a break, talking to someone) and tries to sustain balance during extended periods of stress or uncertainty.",
            "Proficient": "Applies effective coping strategies (e.g., mindfulness, problem-solving) to maintain focus and emotional balance in stressful or uncertain situations.",
            "Mastery": "Models exceptional focus and emotional balance, remaining composed and effective even under high levels of stress or significant uncertainty, and often supports others in doing the same."
        }
    },
    "4.3: Advocates for personal and community well-being.": {
        "Grade 1-3": {
            "Beginning": "Tries to identify what they need to make them happy.",
            "Developing": "Knows that it's important to be healthy and happy.",
            "Proficient": "Knows what makes them feel good and tries to help others feel good too.",
            "Mastery": "Always looks out for their own well-being and finds ways to help everyone in their community be healthy and happy."
        },
        "Grade 4-5": {
            "Beginning": "Understands that it's important to be healthy and happy.",
            "Developing": "Can stay balanced. Sometimes thinks about whether others are staying okay.",
            "Proficient": "Speaks up for things that help themselves and their community stay healthy and happy.",
            "Mastery": "Is a strong voice for things that make themselves and their community healthy and happy, and inspires others to do the same."
        },
        "Grade 6-8": {
            "Beginning": "Tries to think about or to speak up about what makes themselves or their community healthy and happy.",
            "Developing": "Is starting to think about what's good for themselves and their community but might not always take action.",
            "Proficient": "Regularly talks about and supports things that help themselves and their community be healthy, safe, and happy.",
            "Mastery": "Is a leader in promoting well-being for themselves and their community, inspiring others to prioritize their health and happiness."
        },
        "Grade 9-12": {
            "Beginning": "Tries to consider or advocate for personal and community well-being, primarily focusing on their own immediate needs.",
            "Developing": "Shows awareness of the importance of well-being for themselves and others.",
            "Proficient": "Consistently advocates for both personal and community well-being (e.g., healthy habits, safety, mental health) in meaningful and appropriate ways.",
            "Mastery": "Demonstrates exceptional advocacy for well-being, taking initiative to raise awareness, promote healthy practices, and inspire others to prioritize their physical, emotional, and social wellness."
        }
    },
    "4.4: Perseveres in the pursuit of meaningful goals.": {
        "Grade 1-3": {
            "Beginning": "Starts to learn how to set up goals.",
            "Developing": "Is able to determine simple goals and to build pathway in achieving the goal.",
            "Proficient": "Can Keep trying even when things are hard and doesn't give up until they reach their goal.",
            "Mastery": "Show exceptional persistence on pursuing important goals, even when things are really tough."
        },
        "Grade 4-5": {
            "Beginning": "Usually tries to finish goals they start but might need help when facing setbacks.",
            "Developing": "Can successfully achieve goals they set up, and start to think about how to establish a more meaningful goal.",
            "Proficient": "Keeps working towards their meaningful goals even when overcoming barriers are required on the way.",
            "Mastery": "Shows great determination in reaching challenging goals, even when facing big challenges."
        },
        "Grade 6-8": {
            "Beginning": "Begins to learn how to set up a goal that is more meaningful or for a longer period of time.",
            "Developing": "Can usually work effectively and manage to reach regular goals, and try to deal with challenging ones.",
            "Proficient": "Sticks with their personal goals and keeps working hard even when things are difficult or take a long time to achieve.",
            "Mastery": "Shows exceptional determination and keeps working towards important goals no matter what."
        },
        "Grade 9-12": {
            "Beginning": "Tries to build abilities, skills, strategies of pursuing long-term or challenging goals.",
            "Developing": "Can maintain focus on goals for a certain period of time and try to cope with bumps on the way with help.",
            "Proficient": "Perseveres consistently, overcoming challenges and adapting strategies as needed to achieve meaningful goals they have set for themselves.",
            "Mastery": "Demonstrates exceptional perseverance, showing unwavering commitment to meaningful goals and inspiring others through their determination, focus, and ability to overcome obstacles."
        }
    },
    "5.1: Engages in service projects that address community needs.": {
        "Grade 1-3": {
            "Beginning": "(an intentional blank)",
            "Developing": "(an intentional blank)",
            "Proficient": "Helps with service projects and does their part to help the community.",
            "Mastery": "Takes part in service project proactively."
        },
        "Grade 4-5": {
            "Beginning": "Has heard about helping the community but hasn't been very involved in projects.",
            "Developing": "Participates in service projects when asked to do so.",
            "Proficient": "Actively takes part in service projects and helps in a way that makes a difference in the community.",
            "Mastery": "Comes up with own service projects and encourage others to participate."
        },
        "Grade 6-8": {
            "Beginning": "Shows little understanding of or involvement in service projects.",
            "Developing": "Joins in service projects and helps out voluntarily to try to make a difference in community.",
            "Proficient": "Takes an active role in service projects and helps to meet the needs of the community in a meaningful way.",
            "Mastery": "Takes charge of planning and leading service projects with consideration of authentic important community needs."
        },
        "Grade 9-12": {
            "Beginning": "Shows some involvement, but the understanding of community needs is limited in service projects.",
            "Developing": "Participates in service projects, and can demonstrate initiative in identifying or planning with some guidance.",
            "Proficient": "Actively engages in service projects, contributing meaningfully to addressing identified community needs.",
            "Mastery": "Takes initiative to design and lead impactful service projects addressing significant community needs."
        }
    },
    "5.2: Reflects on the ethical implications of actions and decisions.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Is starting to think about what is fair and unfair.",
            "Mastery": "Usually thinks about whether their actions are fair and right before they do something."
        },
        "Grade 4-5": {
            "Beginning": "Sometimes thinks about whether something is fair or not, but not always.",
            "Developing": "Usually thinks about whether their actions are fair and right before they do something.",
            "Proficient": "Usually thinks about what is right and wrong and tries to make good choices.",
            "Mastery": "Always thinks very carefully about whether their actions are fair and right and why."
        },
        "Grade 6-8": {
            "Beginning": "Rarely stops to think about whether their choices are the right thing to do.",
            "Developing": "Usually makes honest and fair decisions with some guidance.",
            "Proficient": "Consistently makes ethical decisions independently. Thinks about accountability in decision and actions.",
            "Mastery": "Always acts with ethics and encouraging others to do the same. Takes accountability for decisions and actions."
        },
        "Grade 9-12": {
            "Beginning": "Rarely considers the ethical implications (right vs. wrong, fairness) of their actions or decisions.",
            "Developing": "Demonstrates awareness of ethical considerations (e.g., fairness, honesty) but may not consistently apply them to their actions and decisions.",
            "Proficient": "Consistently evaluates and applies ethical considerations (e.g., principles of justice, responsibility) in their decision-making processes.",
            "Mastery": "Models exceptional ethical reasoning, thoughtfully considering the broader implications and potential consequences of their actions and decisions on themselves and others."
        }
    },
    "5.3: Promotes sustainability and equity in personal and collaborative endeavors.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Tries to save resources and make sure everyone is treated fairly when working with others.",
            "Mastery": "Always looks for ways to save resources and make sure everyone is treated equally in everything they do and when working with others."
        },
        "Grade 4-5": {
            "Beginning": "Start to know about saving things and being fair, but doesn't do it much.",
            "Developing": "Understands it's important to take care of the Earth and be fair to everyone, but doesn't always act on it.",
            "Proficient": "Works to save resources and make sure everyone has a chance to participate fairly in projects.",
            "Mastery": "Always finds ways to help the environment and make sure everyone has a fair chance in all they do and in group projects."
        },
        "Grade 6-8": {
            "Beginning": "Shows limited understanding of the importance of taking care of the environment or making sure things are fair for everyone.",
            "Developing": "Understands that it's important to protect the environment and treat everyone fairly.",
            "Proficient": "Actively tries to use resources wisely and make sure everyone is treated fairly in their own work and when working with others.",
            "Mastery": "Takes the lead in finding ways to be more sustainable and make sure everyone is respected in their own actions and in group projects, encouraging others to do the same."
        },
        "Grade 9-12": {
            "Beginning": "Demonstrates limited awareness or action to promote sustainability (e.g., conserving resources) or equity (fairness for all).",
            "Developing": "Acknowledges the importance of sustainability and equity in projects but acts inconsistently in personal and group settings.",
            "Proficient": "Actively promotes sustainability (e.g., reducing waste, conserving energy) and equity (e.g., ensuring equal opportunities) in personal and group projects.",
            "Mastery": "Leads by example, designing and implementing initiatives that significantly advance sustainability and equity within their school, community, or beyond."
        }
    },
    "5.4: Demonstrates honesty, fairness, and accountability in decision-making.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Always tries to tell the truth and be fair in their choices on their own.",
            "Mastery": "Always tells the truth, is fair to everyone, and encourage others to do the same."
        },
        "Grade 4-5": {
            "Beginning": "Sometimes makes honest choices and tries to be fair, but might not always.",
            "Developing": "Usually tries to be honest and fair when making choices.",
            "Proficient": "Always tries to be honest and fair when making decisions. Considers impacts on others.",
            "Mastery": "Always makes honest and fair choices and considers others' perspectives."
        },
        "Grade 6-8": {
            "Beginning": "Has trouble always being honest and fair. Might try to blame others when things go wrong.",
            "Developing": "Usually makes honest and fair decisions with some guidance.",
            "Proficient": "Consistently makes ethical decisions independently. Thinks about accountability in decision and actions.",
            "Mastery": "Always acts with ethics and encouraging others to do the same. Takes accountability for decisions and actions."
        },
        "Grade 9-12": {
            "Beginning": "Struggles to make honest or fair decisions; avoids taking responsibility or accountability for their actions.",
            "Developing": "Makes honest decisions inconsistently; takes accountability for actions primarily when prompted or when consequences are evident.",
            "Proficient": "Consistently demonstrates honesty, fairness, and accountability in their decisions and actions, understanding the importance of these values.",
            "Mastery": "Exemplifies honesty and fairness in all decisions, proactively taking accountability for their actions and inspiring others through their example to uphold these ethical principles."
        }
    },
    "6.1: Writes, speaks, and presents ideas with clarity and purpose.": {
        "Grade 1-3": {
            "Beginning": "Shares ideas, but they may be hard to understand. Struggles to stay on topic.",
            "Developing": "Shares ideas clearly about familiar things but might get mixed up when talking about new things.",
            "Proficient": "Shares ideas clearly and stays on topic when talking or writing. People can understand what they mean.",
            "Mastery": "Shares even tricky ideas very clearly in more than on way. They know how to keep people interested and understand their point."
        },
        "Grade 4-5": {
            "Beginning": "Shares ideas, but the meaning might not be clear. It can be hard to follow.",
            "Developing": "Shares ideas clearly about things they know in either speaking or writing.",
            "Proficient": "Shares ideas clearly and usually make efforts to consider audience.",
            "Mastery": "Shares difficult ideas in various ways. They can organize their ideas well to make others understand."
        },
        "Grade 6-8": {
            "Beginning": "Shares ideas, but they may lack clear organization or a main point.",
            "Developing": "Shares ideas clearly with improvement in being an organized way or have a clear purpose.",
            "Proficient": "Clearly shares ideas in writing, speaking, and presentations, with a clear purpose and logical organization across different situations.",
            "Mastery": "Articulates even complex ideas clearly and purposefully in writing, speaking, and presentations, adapting how they share to keep different audiences engaged."
        },
        "Grade 9-12": {
            "Beginning": "Starts to develop structure and clarity in communication.",
            "Developing": "Communicates ideas clearly in familiar contexts but may lack a strong sense of purpose or logical flow in more complex settings.",
            "Proficient": "Consistently communicates ideas with clarity, coherence, and a defined purpose across various audiences and contexts.",
            "Mastery": "Articulates complex ideas with precision, adapting tone, style, and structure to effectively engage and inform diverse audiences for specific purposes."
        }
    },
    "6.2: Uses creative forms of expression to convey ideas effectively.": {
        "Grade 1-3": {
            "Beginning": "Tries to be creative but it might not help get their idea across.",
            "Developing": "Uses some creative ways to share ideas, like drawing or acting, but it might not always be easy to understand.",
            "Proficient": "Uses fun and creative ways to share ideas so that others can understand them better.",
            "Mastery": "Always finds new and exciting ways to share even hard ideas so everyone really understands."
        },
        "Grade 4-5": {
            "Beginning": "Tries some creative ways to share ideas, but it might not always be clear.",
            "Developing": "Uses some creative ways to share ideas, like stories or pictures, but sometimes it's hard to see the point.",
            "Proficient": "Uses creative ways like stories, songs, or art to help people understand their ideas.",
            "Mastery": "Finds many interesting and unique ways to share even harder ideas so that everyone can understand them well."
        },
        "Grade 6-8": {
            "Beginning": "Shows some creativity when sharing ideas, but it might not always make sense or help others understand.",
            "Developing": "Uses creative ways to share ideas, like using different words or making visuals, but sometimes it's not very clear.",
            "Proficient": "Uses creative ways like storytelling, visuals, or technology to make their ideas interesting and easier to understand.",
            "Mastery": "Consistently uses new and interesting creative methods to share even complex ideas in a way that really grabs people's attention and helps them understand."
        },
        "Grade 9-12": {
            "Beginning": "Demonstrates limited creativity or effectiveness when expressing ideas.",
            "Developing": "Uses some creative forms of expression but may struggle with clarity, purpose, or impact.",
            "Proficient": "Effectively integrates creative expression (e.g., visual aids, multimedia, performance) into communication to enhance understanding and engagement.",
            "Mastery": "Consistently employs innovative and impactful creative methods to communicate complex ideas effectively, leaving a lasting impression on the audience."
        }
    },
    "6.3: Actively listens and responds thoughtfully in conversations.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Can pay attention when others talk and understand most of ideas.",
            "Mastery": "Always listens very carefully and gives thoughtful reactions to help everyone understand each other."
        },
        "Grade 4-5": {
            "Beginning": "Sometimes can listen carefully when others talk with guidance.",
            "Developing": "Usually listens and understands when others talk about things in more complicated situation.",
            "Proficient": "Listens carefully when others talk and can understand brief ideas and makes attempts to build mutual understandings.",
            "Mastery": "Always listens very carefully to what others say and gives thoughtful responses that help everyone understand each other better."
        },
        "Grade 6-8": {
            "Beginning": "Has trouble paying attention when others are talking. Their responses might not be related or helpful.",
            "Developing": "Pays attention when others are talking about things in more complex conversations and can understand main ideas.",
            "Proficient": "Pays close attention when others are talking and can fully grasp ideas before responding appropriately to push conversation going in complex conversations.",
            "Mastery": "Shows exceptional listening skills by really paying attention to what others say and responding in a way that helps everyone understand each other and keeps the conversation going in all situations. Can also reads between lines to identify unsaid intensions."
        },
        "Grade 9-12": {
            "Beginning": "Begin to learn how to listen actively; might interrupt when others are talking.",
            "Developing": "Can listen actively and start to build capacity to fully engage and respond thoughtfully in more complex or nuanced conversations.",
            "Proficient": "Consistently listens actively and responds thoughtfully to others in various contexts, demonstrating understanding and respect for different perspectives.",
            "Mastery": "Demonstrates exceptional listening and response skills, fostering mutual understanding, building rapport, and contributing meaningfully to all conversations."
        }
    },
    "6.4: Adapts communication styles to suit different audiences and contexts.": {
        "Grade 1-3": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "(intentionally left blank)",
            "Mastery": "(intentionally left blank)"
        },
        "Grade 4-5": {
            "Beginning": "(intentionally left blank)",
            "Developing": "(intentionally left blank)",
            "Proficient": "Knows how to talk differently to different people (like a friend versus a grown-up).",
            "Mastery": "Always knows the best way to talk and act with different people in different situations to help everyone understand and connect."
        },
        "Grade 6-8": {
            "Beginning": "Starts to be aware of that it is necessary to adjust communication style according to context.",
            "Developing": "Understands why it is necessary to adjust communication style when needed. Tries to learn with guidance.",
            "Proficient": "Changes how they communicate (like their words and tone) depending on who they are talking to and the situation so that they can be understood.",
            "Mastery": "Seamlessly changes how they communicate in diverse situations and with people with different backgrounds so that they can connect with everyone and make sure their message is clear and engaging."
        },
        "Grade 9-12": {
            "Beginning": "Is skillful in a specific communication style and tends to stick with it regardless of audience and context.",
            "Developing": "Demonstrates awareness and efforts in pair communication styles with context to try to convey messages effectively.",
            "Proficient": "Adapts communication style appropriately (e.g., language, tone, format) to effectively engage different audiences in various contexts.",
            "Mastery": "Seamlessly adapts communication styles (verbal, nonverbal, written, digital) to effectively engage, inform, and inspire diverse audiences across a wide range of contexts."
        }
    }
}

const standardsData = {
    'K': {
        'English': [
            'Reading: Print Concepts • Identify front/back of book and directionality of text.',
            'Reading: Print Concepts • Recognize that words are separated by spaces.',
            'Reading: Phonological Awareness • Recognize and produce rhyming words.',
            'Reading: Phonological Awareness • Blend and segment syllables in spoken words.',
            'Reading: Phonics • Name all upper- and lowercase letters.',
            'Reading: Phonics • Associate letters with primary sounds.',
            'Reading: Fluency • Read simple texts with purpose and understanding.',
            'Reading: Comprehension • Answer questions about key details in stories.',
            'Reading: Comprehension • Identify characters and settings in familiar texts.',
            'Writing: Text Types • Use drawings and letters to express opinions.',
            'Writing: Text Types • Label familiar objects in informational writing.',
            'Writing: Text Types • Narrate simple sequenced events with prompting.',
            'Writing: Production • Add details to strengthen writing with guidance.',
            'Language: Conventions • Print many upper/lowercase letters.',
            'Language: Conventions • Form regular plural nouns orally.',
            'Language: Vocabulary • Sort objects into basic categories.',
            'Language: Vocabulary • Use new words acquired through conversations.',
            'Listening & Speaking: Comprehension • Follow one-step oral directions.',
            'Listening & Speaking: Comprehension • Ask/answer questions about texts read aloud.',
            'Listening & Speaking: Presentation • Describe familiar people with prompting.'
        ]
    },
    '1': {
        'PE': [
            'Net/Wall Games • Demonstrate underhand and overhand throws toward a wall or target with control.',
            'Net/Wall Games • Move to open space to return an object during a rally-based activity.',
            'Net/Wall Games • Strike a balloon or ball using their hand or a paddle in a controlled manner.',
            'Net/Wall Games • Follow established rules and routines when participating in partner games.',
            'Net/Wall Games • Work respectfully and cooperatively with a partner to maintain a rally.',
            'Target Games • Use accurate underhand throws to hit a stationary target from a set distance.',
            'Target Games • Adjust their force and direction to improve throwing accuracy.',
            'Target Games • Demonstrate balance and stable posture when aiming at a target.',
            'Target Games • Wait their turn and show patience while participating in group games.',
            'Target Games • Offer kind and helpful feedback to peers during activities.',
            'Striking/Fielding Games • Strike a stationary object using a bat or paddle with increasing control.',
            'Striking/Fielding Games • Run to a designated area after striking an object.',
            'Striking/Fielding Games • Field a ball using both hands or appropriate soft equipment.',
            'Striking/Fielding Games • Take turns and follow game rules with fairness and honesty.',
            'Striking/Fielding Games • Communicate clearly with teammates during games.',
            'Invasion/Territory Games • Travel with control while carrying or dribbling an object.',
            'Invasion/Territory Games • Work together with teammates to move toward a scoring area.',
            'Invasion/Territory Games • Use space effectively during gameplay.',
            'Invasion/Territory Games • Tag others safely and respect boundaries.',
            'Invasion/Territory Games • Follow team rules and display good sportsmanship.',
            'Aquatics • Demonstrate comfort and confidence in shallow water environments.',
            'Aquatics • Follow basic water safety rules and listen to instructions near water.',
            'Aquatics • Practice floating on their front and back with or without support.',
            'Aquatics • Demonstrate basic kicking and gliding skills using a flotation aid.',
            'Aquatics • Move safely in and out of the water using proper techniques.',
            'Adventure Challenges • Solve simple physical challenges with a partner or small group.',
            'Adventure Challenges • Use clear communication and listening skills during team tasks.',
            'Adventure Challenges • Move safely through a shared physical space with awareness.',
            'Adventure Challenges • Reflect on what strategies helped them succeed in challenges.',
            'Adventure Challenges • Show respect for different ideas and team contributions.',
            'Daily Habits and Physical Activity • Participate in daily physical activity for at least 60 minutes.',
            'Daily Habits and Physical Activity • Describe how their body feels before and after movement.',
            'Daily Habits and Physical Activity • Identify ways to stay active at school and home.',
            'Daily Habits and Physical Activity • Demonstrate proper posture and effort during routines.',
            'Daily Habits and Physical Activity • Understand why regular movement is important for health.',
            'Creative Movement • Express ideas and emotions using movement and body shapes.',
            'Creative Movement • Explore different qualities of movement such as speed and direction.',
            'Creative Movement • Move through space using levels (high/medium/low) and pathways.',
            'Creative Movement • Work with others to create and perform simple movement patterns.',
            'Creative Movement • Reflect on how movement can tell a story or show feelings.'
        ],
        'Music': [
            'A wonderful world of sounds • Understand and explore the production and characteristics of sound.',
            'A wonderful world of sounds • The relationship between sound generation and vibration',
            'A wonderful world of sounds • The timbre characteristics of the sound',
            'A wonderful world of sounds • The loudness characteristics of the sound',
            'A wonderful world of sounds • The characteristics of the pitch of the sound',
            'Steady beat is like our heartbeat • Experience music at different speeds through game practice and maintaining a steady beat.',
            'Steady beat is like our heartbeat • Dance games can accurately judge the changes in the speed of music.',
            'Steady beat is like our heartbeat • The metronome game trains students\' ability to maintain a steady beat on their own',
            'Steady beat is like our heartbeat • In percussion games, students can express the changes in musical tempo by themselves.',
            'Steady beat is like our heartbeat • Work in groups and accompany the piece "Song of Spring" with percussion instruments.'
        ],
        'Math': [
            'Count objects up to 10 using one-to-one correspondence',
            'Read and write numerals 0-10 in digits and words (English/Chinese)',
            'Compare two numbers (1-10) using >, <, = symbols',
            'Solve simple word problems using objects or drawings (within 10)',
            'Decompose numbers up to 10 into pairs (e.g., 5=2+3)',
            'Find missing addends in number bonds (e.g., 3+_=7)',
            'Demonstrate addition as putting together (within 10)',
            'Demonstrate subtraction as taking apart (within 10)',
            'Solve addition/subtraction word problems within 10 using objects/drawings',
            'Generate all addition/subtraction facts for a given number (fact families)',
            'Add three whole numbers whose sum is ≤20 (e.g., 3+7+5)',
            'Order three objects by length (longest/shortest)',
            'Express length by using non-standard units (e.g., paper clips)',
            'Tell time to nearest hour using analog/digital clocks',
            'Identify coins (penny, nickel, dime) and their values',
            'Recognize and name squares, circles, triangles, rectangles',
            'Partition circles/rectangles into 2 or 4 equal shares (halves/quarters)'
        ],
        'English': [
            'Reading: Print Concepts • Demonstrate understanding of basic print features and word boundaries.',
            'Reading: Phonological Awareness • Identify and manipulate phonemes in spoken words.',
            'Reading: Phonics • Decode common one-syllable words using letter-sound relationships.',
            'Reading: Fluency • Read grade-level texts orally with accuracy and understanding.',
            'Reading: Comprehension • Answer who/what/where questions about key details.',
            'Reading: Comprehension • Retell familiar stories including key events.',
            'Writing: Text Types • Write opinion pieces stating preferences with reasons.',
            'Writing: Text Types • Compose informative texts naming topics with facts.',
            'Writing: Text Types • Narrate sequenced events using temporal words (first, next).',
            'Writing: Production • Focus writing on single topic with adult guidance.',
            'Writing: Research • Participate in shared research using provided sources.',
            'Language: Conventions • Print all upper- and lowercase letters legibly.',
            'Language: Conventions • Use common nouns/verbs and basic punctuation.',
            'Language: Vocabulary • Sort words into categories and define vocabulary through context.',
            'Listening & Speaking: Comprehension • Follow two-step directions and ask clarifying questions.',
            'Listening & Speaking: Comprehension • Describe people/events orally with relevant details.',
            'Listening & Speaking: Presentation • Speak in complete sentences during discussions.'
        ]
    },
    '2': {
        'PE': [
            'Net/Wall Games • Throw and strike a ball with control toward a target.',
            'Net/Wall Games • Move to space and return an object during a rally.',
            'Net/Wall Games • Maintain a rally with a partner using hand or paddle.',
            'Net/Wall Games • Follow game rules and stay safe with equipment.',
            'Net/Wall Games • Work respectfully with a partner.',
            'Target Games • Aim and throw objects to hit a target.',
            'Target Games • Adjust force and direction to improve accuracy.',
            'Target Games • Show balance and focus while aiming.',
            'Target Games • Take turns and wait patiently.',
            'Target Games • Give positive feedback to peers.',
            'Striking/Fielding Games • Strike a ball off a tee or cone.',
            'Striking/Fielding Games • Run to a target zone after hitting.',
            'Striking/Fielding Games • Field a rolling ball using two hands.',
            'Striking/Fielding Games • Take turns and play by the rules.',
            'Striking/Fielding Games • Talk and listen to teammates.',
            'Invasion/Territory Games • Travel with control and keep possession.',
            'Invasion/Territory Games • Pass to teammates in open space.',
            'Invasion/Territory Games • Use space wisely in a game setting.',
            'Invasion/Territory Games • Defend safely and fairly.',
            'Invasion/Territory Games • Play with teamwork and honesty.',
            'Adventure Challenges • Solve physical tasks with a group.',
            'Adventure Challenges • Use communication to complete challenges.',
            'Adventure Challenges • Move carefully with awareness of space.',
            'Adventure Challenges • Show respect for team roles.',
            'Adventure Challenges • Reflect on what helped your team.',
            'Daily Habits and Physical Activity • Be active for 60 minutes every day.',
            'Daily Habits and Physical Activity • Describe how movement affects the body.',
            'Daily Habits and Physical Activity • List ways to stay active daily.',
            'Daily Habits and Physical Activity • Show effort and good posture during activity.',
            'Daily Habits and Physical Activity • Explain why moving is good for health.',
            'Creative Movement • Use movement to show ideas or emotions.',
            'Creative Movement • Change speed, direction, and shape while moving.',
            'Creative Movement • Use space and pathways in movement.',
            'Creative Movement • Create short routines with others.',
            'Creative Movement • Talk about what movements mean.'
        ],
        'Math': [
            'Read/write numbers to 1000 using base-ten numerals, number names',
            'Count within 1000 by 5s, 10s, 100s starting from any number',
            'Compare three-digit numbers using >, <, = symbols',
            'Fluently add/subtract within 100 using place value strategies',
            'Add up to four two-digit numbers (e.g., 23+45+12)',
            'Solve measurement word problems using +/- within 100',
            'Measure object lengths twice using different units (inches/cm)',
            'Tell time to nearest 5 minutes using analog/digital clocks',
            'Solve word problems involving dollar bills/coins ($, ¢)',
            'Draw picture/bar graphs to represent data (up to 4 categories)',
            'Recognize triangles, quadrilaterals, pentagons, hexagons, cubes',
            'Partition rectangles into rows/columns of same-size squares',
            'Partition circles/rectangles into 2/3/4 equal shares with fraction notation'
        ],
        'English': [
            'Reading: Phonics • Decode multisyllabic words using phonics patterns.',
            'Reading: Fluency • Read grade-level texts orally with accuracy and expression.',
            'Reading: Comprehension • Describe connections between events in stories.',
            'Reading: Comprehension • Identify main topic of multi-paragraph texts.',
            'Writing: Text Types • Develop opinion pieces with reasons and closure.',
            'Writing: Text Types • Group related facts in informative writing.',
            'Writing: Text Types • Include sensory details in narrative writing.',
            'Writing: Production • Use digital tools to produce/publish writing.',
            'Language: Conventions • Form irregular plural nouns and past-tense verbs.',
            'Language: Conventions • Use adjectives and adverbs in simple sentences.',
            'Language: Vocabulary • Determine shades of meaning in related words.',
            'Listening & Speaking: Comprehension • Recount key ideas from read-alouds.',
            'Listening & Speaking: Presentation • Tell stories with descriptive details and clear sequence.'
        ]
    },
    '3': {
        'English': [
            'Reading: Key Ideas • Refer to explicit text evidence in literary texts.',
            'Reading: Key Ideas • Determine main ideas and supporting details.',
            'Reading: Craft & Structure • Determine meaning of academic vocabulary.',
            'Reading: Craft & Structure • Distinguish personal point of view from characters.',
            'Reading: Integration • Interpret information from charts and graphs.',
            'Reading: Range • Read prose and poetry at grade level independently.',
            'Writing: Text Types • Write opinion pieces with introductory/concluding statements.',
            'Writing: Text Types • Organize informative writing with headings.',
            'Writing: Text Types • Use dialogue in narrative writing.',
            'Writing: Production • Plan and revise writing with guidance.',
            'Writing: Research • Conduct short research projects using multiple sources.',
            'Language: Conventions • Use relative pronouns and modal auxiliaries.',
            'Language: Vocabulary • Use context clues to determine word meaning.',
            'Listening & Speaking: Comprehension • Paraphrase text read aloud.',
            'Listening & Speaking: Presentation • Report on topics with audio recordings.'
        ],
        'Math': [
            'Round whole numbers to nearest 10/100 using place value',
            'Fluently add/subtract within 1000 using algorithms',
            'Multiply/divide within 100 using strategies (7×8=56)',
            'Solve two-step word problems using the four operations',
            'Identify arithmetic patterns (e.g., odd/even, multiples)',
            'Understand fractions as parts of a whole (1/b, a/b)',
            'Compare fractions with same numerator/denominator',
            'Tell/write time to nearest minute and measure time intervals',
            'Solve mass/volume word problems using +/- (g/kg, ml/l)',
            'Draw scaled picture/bar graphs (scale counts by 2s, 5s, 10s)',
            'Measure area by counting unit squares (cm²/in²)',
            'Find area of rectangles using multiplication (length × width)',
            'Recognize/perimeter as attribute of plane figures',
            'Categorize shapes by properties (sides, angles)'
        ],
        'PE': [
            'Net/Wall Games • Serve and rally using proper form.',
            'Net/Wall Games • Move into position to receive or intercept.',
            'Net/Wall Games • Track and strike objects with accuracy.',
            'Net/Wall Games • Apply simple strategies during gameplay.',
            'Net/Wall Games • Show cooperation and fairness in games.',
            'Target Games • Aim and hit targets with consistent control.',
            'Target Games • Modify techniques to improve precision.',
            'Target Games • Demonstrate spatial awareness and focus.',
            'Target Games • Encourage others and show patience.',
            'Target Games • Reflect on personal improvement.',
            'Striking/Fielding Games • Strike a moving object with control.',
            'Striking/Fielding Games • Move quickly and safely between bases.',
            'Striking/Fielding Games • Catch and throw to field effectively.',
            'Striking/Fielding Games • Use game rules to solve problems.',
            'Striking/Fielding Games • Contribute to team success.',
            'Invasion/Territory Games • Keep possession through passing and movement.',
            'Invasion/Territory Games • Defend with control and sportsmanship.',
            'Invasion/Territory Games • Create scoring opportunities as a team.',
            'Invasion/Territory Games • Adjust to opponents and space.',
            'Invasion/Territory Games • Communicate clearly on the field.',
            'Adventure Challenges • Collaborate to solve timed challenges.',
            'Adventure Challenges • Practice active listening in group settings.',
            'Adventure Challenges • Show responsibility in shared physical space.',
            'Adventure Challenges • Reflect on personal and team contributions.',
            'Adventure Challenges • Adjust strategies when needed.',
            'Daily Habits and Physical Activity • Meet daily physical activity goals.',
            'Daily Habits and Physical Activity • Monitor heart rate and energy levels.',
            'Daily Habits and Physical Activity • Set a personal fitness challenge.',
            'Daily Habits and Physical Activity • Recognize links between movement and mood.',
            'Daily Habits and Physical Activity • Track progress over time.',
            'Creative Movement • Create routines that show expression and structure.',
            'Creative Movement • Move with rhythm and timing.',
            'Creative Movement • Explore spatial patterns and levels.',
            'Creative Movement • Work with a group to choreograph.',
            'Creative Movement • Explain the meaning behind your movement.'
        ]
    },
    '4': {
        'English': [
            'Reading: Key Ideas • Refer to explicit text evidence in informational texts.',
            'Reading: Key Ideas • Summarize main ideas with supporting evidence.',
            'Reading: Craft & Structure • Compare points of view across texts.',
            'Reading: Integration • Explain author\'s use of evidence and reasoning.',
            'Writing: Text Types • Support opinions with organized reasons and evidence.',
            'Writing: Text Types • Develop informative texts using domain-specific vocabulary.',
            'Writing: Text Types • Use transitional phrases in narrative writing.',
            'Writing: Production • Produce clear writing appropriate to task.',
            'Writing: Research • Gather information from digital sources.',
            'Language: Conventions • Form and use progressive verb tenses.',
            'Language: Vocabulary • Demonstrate understanding of figurative language.',
            'Listening & Speaking: Comprehension • Identify evidence supporting claims.',
            'Listening & Speaking: Presentation • Enhance presentations with multimedia.'
        ],
        'Math': [
            'Read/write multi-digit numbers using base-ten numerals, expanded form',
            'Round multi-digit numbers to any place value',
            'Fluently add/subtract multi-digit numbers using standard algorithm',
            'Multiply 4-digit by 1-digit or 2-digit by 2-digit numbers',
            'Find whole-number quotients with remainders (up to 4-digit dividends)',
            'Compare two fractions with different numerators/denominators',
            'Add/subtract fractions with like denominators',
            'Multiply fraction by whole number (e.g., 3 × ¼ = ¾)',
            'Express fractions with denominator 10 as equivalent to 100',
            'Compare decimals to hundredths using >, <, =',
            'Solve measurement conversion problems (km→m, hr→min)',
            'Apply area/perimeter formulas to rectangles in real-world problems',
            'Classify angles as acute/right/obtuse',
            'Identify/classify triangles by angles (acute, right, obtuse)',
            'Recognize lines of symmetry in 2D figures'
        ],
        'PE': [
            'Net/Wall Games • Demonstrate forehand and backhand striking techniques.',
            'Net/Wall Games • Sustain longer rallies using footwork and positioning.',
            'Net/Wall Games • Apply tactical movement to create space.',
            'Net/Wall Games • Respect rules and boundaries in court-based games.',
            'Net/Wall Games • Provide constructive feedback to a partner.',
            'Target Games • Adjust body alignment and follow-through to improve accuracy.',
            'Target Games • Use force and angle strategically to reach complex targets.',
            'Target Games • Evaluate performance and make changes.',
            'Target Games • Show integrity during scoring activities.',
            'Target Games • Support peers through encouragement.',
            'Striking/Fielding Games • Execute consistent striking of moving objects using a bat or racket.',
            'Striking/Fielding Games • Field using appropriate body positioning and anticipation.',
            'Striking/Fielding Games • Track and throw with accuracy to designated areas.',
            'Striking/Fielding Games • Make team decisions in real time.',
            'Striking/Fielding Games • Take responsibility for team roles.',
            'Invasion/Territory Games • Maintain possession through coordinated passing and movement.',
            'Invasion/Territory Games • Demonstrate controlled defense and intercepting techniques.',
            'Invasion/Territory Games • Create plays to support scoring opportunities.',
            'Invasion/Territory Games • Adjust tactics based on opponents\' strategies.',
            'Invasion/Territory Games • Show resilience when under pressure.',
            'Aquatics • Swim short distances using coordinated strokes.',
            'Aquatics • Breathe rhythmically while performing swim sequences.',
            'Aquatics • Demonstrate safe entries, exits, and floating techniques.',
            'Aquatics • Identify peer safety responsibilities in aquatic environments.',
            'Aquatics • Set and reflect on personal swim goals.',
            'Adventure Challenges • Work as a team to solve layered physical challenges.',
            'Adventure Challenges • Communicate and lead within a group.',
            'Adventure Challenges • Evaluate team effectiveness after tasks.',
            'Adventure Challenges • Demonstrate initiative and trust in others.',
            'Adventure Challenges • Adapt strategies when facing new problems.',
            'Daily Habits and Physical Activity • Plan and complete personal fitness routines.',
            'Daily Habits and Physical Activity • Monitor stamina and physical effort during activity.',
            'Daily Habits and Physical Activity • Reflect on choices that support a healthy lifestyle.',
            'Daily Habits and Physical Activity • Maintain commitment to regular movement.',
            'Daily Habits and Physical Activity • Set goals to improve personal health.',
            'Creative Movement • Develop movement phrases that tell a story.',
            'Creative Movement • Connect movement to emotion, rhythm, and theme.',
            'Creative Movement • Explore group choreography and transitions.',
            'Creative Movement • Provide meaningful feedback to others.',
            'Creative Movement • Describe how creative movement expresses ideas.'
        ]
    },
    '5': {
        'English': [
            'Reading: Craft & Structure • Analyze how chapters/scenes fit into overall text structure.',
            'Reading: Integration • Analyze multiple accounts of the same event.',
            'Reading: Integration • Draw information from multiple print/digital sources.',
            'Writing: Text Types • Link opinion points using transitional words and phrases.',
            'Writing: Text Types • Develop topics with facts, definitions and quotations.',
            'Writing: Text Types • Use pacing techniques in narrative writing.',
            'Writing: Production • Strengthen writing through planning and revision.',
            'Language: Conventions • Recognize variations from standard English.',
            'Language: Vocabulary • Interpret idioms and proverbs in context.',
            'Listening & Speaking: Comprehension • Summarize information presented in diverse media.',
            'Listening & Speaking: Presentation • Adapt speech to formal/informal contexts.'
        ],
        'Math': [
            'Read/write decimals to thousandths using base-ten numerals',
            'Compare decimals to thousandths using >, <, =',
            'Round decimals to any place (nearest tenth/hundredth)',
            'Fluently multiply multi-digit whole numbers (standard algorithm)',
            'Divide 4-digit dividends by 2-digit divisors (with remainders)',
            'Add/subtract fractions with unlike denominators',
            'Multiply fractions (including mixed numbers)',
            'Divide unit fractions by whole numbers and vice versa',
            'Convert measurement units within metric/customary systems',
            'Make line plots displaying fractional measurement data',
            'Calculate volume of rectangular prisms (V = l × w × h)',
            'Graph points in first quadrant of coordinate plane',
            'Classify 2D figures in hierarchy based on properties'
        ],
        'PE': [
            'Net/Wall Games • Serve and receive with control and intent.',
            'Net/Wall Games • Use footwork to cover space efficiently.',
            'Net/Wall Games • Apply offensive and defensive positioning.',
            'Net/Wall Games • Adapt strategies based on game flow.',
            'Net/Wall Games • Demonstrate leadership during cooperative play.',
            'Target Games • Adjust form and release to improve precision.',
            'Target Games • Use visual and spatial judgment when aiming.',
            'Target Games • Reflect on consistency and adjust approach.',
            'Target Games • Respect scoring rules and fair play.',
            'Target Games • Encourage others through positive feedback.',
            'Striking/Fielding Games • Use timing and control to strike live pitches.',
            'Striking/Fielding Games • Anticipate ball trajectory while fielding.',
            'Striking/Fielding Games • Make tactical decisions under pressure.',
            'Striking/Fielding Games • Demonstrate teamwork in rotations.',
            'Striking/Fielding Games • Lead others through encouragement and clarity.',
            'Invasion/Territory Games • Use lead passing and spatial awareness to create plays.',
            'Invasion/Territory Games • Apply positional understanding to defend.',
            'Invasion/Territory Games • Communicate proactively during gameplay.',
            'Invasion/Territory Games • Support transitions between offense and defense.',
            'Invasion/Territory Games • Reflect on team effectiveness.',
            'Aquatics • Swim using coordinated front and back strokes.',
            'Aquatics • Use rhythmic breathing and body control.',
            'Aquatics • Demonstrate water safety in dynamic environments.',
            'Aquatics • Take personal responsibility for safety and effort.',
            'Aquatics • Set realistic aquatic performance goals.',
            'Adventure Challenges • Solve layered problems using trial and error.',
            'Adventure Challenges • Show flexibility in group planning.',
            'Adventure Challenges • Take initiative in shared leadership roles.',
            'Adventure Challenges • Reflect on individual and team performance.',
            'Adventure Challenges • Use respectful feedback to improve group results.',
            'Daily Habits and Physical Activity • Create and monitor a balanced weekly activity plan.',
            'Daily Habits and Physical Activity • Set SMART fitness goals based on need.',
            'Daily Habits and Physical Activity • Track energy and hydration levels.',
            'Daily Habits and Physical Activity • Reflect on how lifestyle impacts wellness.',
            'Daily Habits and Physical Activity • Share strategies to maintain physical routines.',
            'Creative Movement • Compose a group routine using form and flow.',
            'Creative Movement • Explore contrast and repetition in choreography.',
            'Creative Movement • Interpret themes through expressive motion.',
            'Creative Movement • Collaborate through movement decisions.',
            'Creative Movement • Articulate how movement conveys meaning.'
        ]
    },
    '6': {
        'English': [
            'Reading: Key Ideas • Cite textual evidence supporting analysis.',
            'Reading: Craft & Structure • Analyze how word choice affects meaning and tone.',
            'Reading: Craft & Structure • Determine author\'s point of view/purpose.',
            'Reading: Integration • Trace and evaluate specific arguments in texts.',
            'Writing: Text Types • Write arguments with clear claims and relevant evidence.',
            'Writing: Text Types • Develop informative texts using precise language.',
            'Writing: Text Types • Create narratives with effective sequencing.',
            'Writing: Production • Produce coherent writing with consistent organization.',
            'Writing: Research • Gather credible information from multiple sources.',
            'Language: Conventions • Ensure proper pronoun case and agreement.',
            'Language: Vocabulary • Determine meaning of words using Greek/Latin roots.',
            'Listening & Speaking: Comprehension • Analyze speaker\'s argument and reasoning.',
            'Listening & Speaking: Presentation • Present claims with pertinent evidence.'
        ],
        'Math': [
            'Divide fractions by fractions using visual models/equations',
            'Fluently compute multi-digit decimals using all operations',
            'Find greatest common factor and least common multiple',
            'Understand positive/negative numbers on number lines',
            'Write/solve one-step equations with whole-number coefficients',
            'Find area of triangles/special quadrilaterals by composing rectangles',
            'Calculate surface area of 3D figures using nets',
            'Calculate volume of right rectangular prisms with fractional edges',
            'Display numerical data in dot plots/box plots/histograms',
            'Summarize data distributions by center (mean/median) and spread',
            'Understand ratio concepts and use ratio language appropriately',
            'Solve unit rate problems (e.g., miles per hour)',
            'Convert measurement units using ratio reasoning'
        ],
        'PE': [
            'Net/Wall Games: Execute offensive and defensive strategies in live gameplay.',
            'Net/Wall Games: Vary serves and returns based on opponent positioning.',
            'Net/Wall Games: Adjust footwork for efficiency and power.',
            'Net/Wall Games: Collaborate with a partner or team under pressure.',
            'Net/Wall Games: Analyze game performance to suggest improvements.',
            'Target Games: Select appropriate techniques based on distance and environment.',
            'Target Games: Reflect on consistency using data and peer review.',
            'Target Games: Balance risk and accuracy in game situations.',
            'Target Games: Encourage and support teammates through competition.',
            'Target Games: Demonstrate sportsmanship in all roles.',
            'Striking/Fielding Games: Anticipate plays and make quick tactical decisions.',
            'Striking/Fielding Games: Transition between roles (hitter, runner, fielder) effectively.',
            'Striking/Fielding Games: Apply team strategies in base coverage and running.',
            'Striking/Fielding Games: Reflect on individual and group decision-making.',
            'Striking/Fielding Games: Lead team communication during gameplay.',
            'Invasion/Territory Games: Maintain offensive flow using space and passing sequences.',
            'Invasion/Territory Games: Apply defensive pressure without fouling.',
            'Invasion/Territory Games: Use communication to coordinate attacks and defense.',
            'Invasion/Territory Games: Evaluate game outcomes and suggest team improvements.',
            'Invasion/Territory Games: Support equitable participation across teammates.',
            'Aquatics: Combine strokes and breathing patterns for sustained swimming.',
            'Aquatics: Perform entries and exits safely in deep-water settings.',
            'Aquatics: Demonstrate responsibility for self and others in water.',
            'Aquatics: Apply self-monitoring strategies for endurance.',
            'Aquatics: Reflect on personal aquatic strengths and areas for growth.',
            'Adventure Challenges: Lead group decision-making through planning and feedback.',
            'Adventure Challenges: Collaborate to solve complex team-based physical tasks.',
            'Adventure Challenges: Show perseverance during setbacks and redirection.',
            'Adventure Challenges: Reflect on personal contributions and communication.',
            'Adventure Challenges: Offer and receive feedback to improve team performance.',
            'Daily Habits and Physical Activity: Plan, track, and adjust physical activity routines.',
            'Daily Habits and Physical Activity: Understand the impact of nutrition, hydration, and rest.',
            'Daily Habits and Physical Activity: Set challenging but achievable fitness goals.',
            'Daily Habits and Physical Activity: Take initiative in maintaining physical wellness.',
            'Daily Habits and Physical Activity: Support classmates in healthy decision-making.',
            'Creative Movement: Create multi-part routines with expressive intention.',
            'Creative Movement: Interpret movement themes through emotion and timing.',
            'Creative Movement: Choreograph using sequence, contrast, and rhythm.',
            'Creative Movement: Perform collaboratively with confidence and focus.',
            'Creative Movement: Reflect on the process of creative development.'
        ]
    },
    '7': {
        'English': [
            'Reading: Key Ideas • Provide objective summaries of texts.',
            'Reading: Craft & Structure • Analyze how structure contributes to meaning.',
            'Reading: Integration • Compare/contrast texts in different media formats.',
            'Writing: Text Types • Support claims with logical reasoning and evidence.',
            'Writing: Text Types • Use domain-specific vocabulary in informative writing.',
            'Writing: Text Types • Use narrative techniques in personal writing.',
            'Writing: Research • Assess source credibility and accuracy.',
            'Language: Conventions • Recognize and correct inappropriate shifts in pronoun number.',
            'Language: Vocabulary • Distinguish between denotative and connotative meanings.',
            'Listening & Speaking: Comprehension • Evaluate speaker\'s evidence and reasoning.',
            'Listening & Speaking: Presentation • Use multimedia to enhance presentations.'
        ],
        'Math': [
            'Compute unit rates with ratios of fractions (complex fractions)',
            'Recognize proportional relationships in tables/graphs/equations',
            'Solve multi-step ratio/percent problems (tax, tips, discounts)',
            'Add/subtract rational numbers (including negative numbers)',
            'Apply properties of operations to linear expressions',
            'Solve equations of form px+q=r and p(x+q)=r',
            'Calculate area/circumference of circles in real-world problems',
            'Solve angle problems using supplementary/complementary/vertical angles',
            'Draw geometric constructions (copies of segments/angles)',
            'Describe 2D cross-sections of 3D figures',
            'Compare data distributions using measures of center/variability',
            'Calculate probability of simple/compound events'
        ],
        'PE': [
            'Net/Wall Games: Adapt tactics based on opponent strengths.',
            'Net/Wall Games: Apply offensive and defensive court strategies.',
            'Net/Wall Games: Analyze and adjust serve and return placement.',
            'Net/Wall Games: Demonstrate leadership and support in doubles play.',
            'Net/Wall Games: Use feedback to refine performance.',
            'Target Games: Analyze distance, wind, and trajectory for accuracy.',
            'Target Games: Use goal-setting to improve precision and form.',
            'Target Games: Maintain composure in competitive conditions.',
            'Target Games: Demonstrate fairness and self-regulation.',
            'Target Games: Provide technical feedback to peers.',
            'Striking/Fielding Games: Execute advanced strikes (placement, timing, spin).',
            'Striking/Fielding Games: Coordinate team strategies for base coverage.',
            'Striking/Fielding Games: Communicate clearly in high-speed game scenarios.',
            'Striking/Fielding Games: Lead peers through role assignment and feedback.',
            'Striking/Fielding Games: Reflect on decisions made in dynamic play.',
            'Invasion/Territory Games: Build structured plays with offensive/defensive balance.',
            'Invasion/Territory Games: Transition rapidly between roles and zones.',
            'Invasion/Territory Games: Apply advanced spacing and marking concepts.',
            'Invasion/Territory Games: Demonstrate integrity in high-pressure situations.',
            'Invasion/Territory Games: Evaluate team performance and suggest improvements.',
            'Aquatics: Swim multiple lengths using efficient technique.',
            'Aquatics: Tread and float independently for extended time.',
            'Aquatics: Practice safe rescue and response techniques.',
            'Aquatics: Manage pace and breathing in endurance tasks.',
            'Aquatics: Reflect on aquatic fitness and progress.',
            'Adventure Challenges: Take initiative in group problem-solving roles.',
            'Adventure Challenges: Navigate physical and communication barriers as a team.',
            'Adventure Challenges: Use reflection to improve future teamwork.',
            'Adventure Challenges: Show empathy and adaptability in conflict.',
            'Adventure Challenges: Evaluate personal and team growth.',
            'Daily Habits and Physical Activity: Design a personal fitness program based on goals.',
            'Daily Habits and Physical Activity: Track heart rate, recovery, and endurance progress.',
            'Daily Habits and Physical Activity: Balance training, rest, and nutrition.',
            'Daily Habits and Physical Activity: Reflect on motivation, routine, and self-discipline.',
            'Daily Habits and Physical Activity: Promote healthy routines with others.',
            'Creative Movement: Create full-length choreographed routines with theme and structure.',
            'Creative Movement: Use dynamics (tempo, force) to express emotion.',
            'Creative Movement: Critique performances using technical and creative criteria.',
            'Creative Movement: Collaborate to develop narrative through movement.',
            'Creative Movement: Present work with confidence and purpose.'
        ]
    },
    '8':{
        'Math': [
            'Apply exponent rules to simplify expressions (e.g., x³·x²=x⁵)',
            'Solve linear equations with rational number coefficients',
            'Interpret y=mx+b as linear function (slope/intercept)',
            'Analyze/solve systems of two linear equations',
            'Understand functions as input-output relationships',
            'Apply Pythagorean Theorem to determine unknown side lengths',
            'Solve real-world volume problems for cones/cylinders/spheres',
            'Perform translations/rotations/reflections on 2D figures',
            'Understand congruence through rigid motions',
            'Construct/scatter plots for bivariate measurement data',
            'Interpret linear models (positive/negative/no association)'
        ]
    }
};

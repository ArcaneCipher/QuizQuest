import random
import string

# Function to generate random alphanumeric string of length 8
def generate_attempt_url():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=8))

# Simulated data for quizzes, questions, answers, and users
quizzes = [
    {'id': 1, 'title': 'Science Trivia', 'question_ids': [1, 2, 3, 4, 5]},
    {'id': 2, 'title': 'History Buffs', 'question_ids': [6, 7, 8, 9, 10]},
    {'id': 3, 'title': 'Movie Mania', 'question_ids': [11, 12, 13, 14, 15]},
    {'id': 4, 'title': 'World Capitals', 'question_ids': [16, 17, 18, 19, 20]},
    {'id': 5, 'title': 'Famous Books', 'question_ids': [21, 22, 23, 24, 25]},
    {'id': 6, 'title': 'Pop Culture Quiz', 'question_ids': [26, 27, 28, 29, 30]},
    {'id': 7, 'title': 'Math Puzzles', 'question_ids': [31, 32, 33, 34, 35]},
    {'id': 8, 'title': 'Space Exploration', 'question_ids': [36, 37, 38, 39, 40]},
    {'id': 9, 'title': 'Music Legends', 'question_ids': [41, 42, 43, 44, 45]},
    {'id': 10, 'title': 'Sports Quiz', 'question_ids': [46, 47, 48, 49, 50]},
    {'id': 11, 'title': 'Geography Genius', 'question_ids': [51, 52, 53, 54, 55]},
    {'id': 12, 'title': 'Tech Titans', 'question_ids': [56, 57, 58, 59, 60]},
    {'id': 13, 'title': 'Art History', 'question_ids': [61, 62, 63, 64, 65]},
    {'id': 14, 'title': 'Superhero Showdown', 'question_ids': [66, 67, 68, 69, 70]},
    {'id': 15, 'title': 'Programming Basics', 'question_ids': [71, 72, 73, 74, 75]},
    {'id': 16, 'title': 'Classic Movies', 'question_ids': [76, 77, 78, 79, 80]},
    {'id': 17, 'title': 'Gaming Gurus', 'question_ids': [81, 82, 83, 84, 85]},
    {'id': 18, 'title': 'Animal Kingdom', 'question_ids': [86, 87, 88, 89, 90]},
    {'id': 19, 'title': 'Cryptic Riddles', 'question_ids': [91, 92, 93, 94, 95]},
    {'id': 20, 'title': 'Space Trivia', 'question_ids': [96, 97, 98, 99, 100]}
]

questions_answers = {
    # Format: question_id: [(answer_id, is_correct)]
    1: [(1, True), (2, False), (3, False), (4, False)],
    2: [(5, True), (6, False), (7, False), (8, False)],
    3: [(9, True), (10, False), (11, False), (12, False)],
    4: [(13, True), (14, False), (15, False), (16, False)],
    5: [(17, True), (18, False), (19, False), (20, False)],
    6: [(21, True), (22, False), (23, False), (24, False)],
    7: [(25, True), (26, False), (27, False), (28, False)],
    8: [(29, True), (30, False), (31, False), (32, False)],
    9: [(33, True), (34, False), (35, False), (36, False)],
    10: [(37, True), (38, False), (39, False), (40, False)],
    11: [(41, True), (42, False), (43, False), (44, False)],
    12: [(45, True), (46, False), (47, False), (48, False)],
    13: [(49, True), (50, False), (51, False), (52, False)],
    14: [(53, True), (54, False), (55, False), (56, False)],
    15: [(57, True), (58, False), (59, False), (60, False)],
    16: [(61, True), (62, False), (63, False), (64, False)],
    17: [(65, True), (66, False), (67, False), (68, False)],
    18: [(69, True), (70, False), (71, False), (72, False)],
    19: [(73, True), (74, False), (75, False), (76, False)],
    20: [(77, True), (78, False), (79, False), (80, False)],
    21: [(81, True), (82, False), (83, False), (84, False)],
    22: [(85, True), (86, False), (87, False), (88, False)],
    23: [(89, True), (90, False), (91, False), (92, False)],
    24: [(93, True), (94, False), (95, False), (96, False)],
    25: [(97, True), (98, False), (99, False), (100, False)],
    26: [(101, True), (102, False), (103, False), (104, False)],
    27: [(105, True), (106, False), (107, False), (108, False)],
    28: [(109, True), (110, False), (111, False), (112, False)],
    29: [(113, True), (114, False), (115, False), (116, False)],
    30: [(117, True), (118, False), (119, False), (120, False)],
    31: [(121, True), (122, False), (123, False), (124, False)],
    32: [(125, True), (126, False), (127, False), (128, False)],
    33: [(129, True), (130, False), (131, False), (132, False)],
    34: [(133, True), (134, False), (135, False), (136, False)],
    35: [(137, True), (138, False), (139, False), (140, False)],
    36: [(141, True), (142, False), (143, False), (144, False)],
    37: [(145, True), (146, False), (147, False), (148, False)],
    38: [(149, True), (150, False), (151, False), (152, False)],
    39: [(153, True), (154, False), (155, False), (156, False)],
    40: [(157, True), (158, False), (159, False), (160, False)],
    41: [(161, True), (162, False), (163, False), (164, False)],
    42: [(165, True), (166, False), (167, False), (168, False)],
    43: [(169, True), (170, False), (171, False), (172, False)],
    44: [(173, True), (174, False), (175, False), (176, False)],
    45: [(177, True), (178, False), (179, False), (180, False)],
    46: [(181, True), (182, False), (183, False), (184, False)],
    47: [(185, True), (186, False), (187, False), (188, False)],
    48: [(189, True), (190, False), (191, False), (192, False)],
    49: [(193, True), (194, False), (195, False), (196, False)],
    50: [(197, True), (198, False), (199, False), (200, False)],
    51: [(201, True), (202, False), (203, False), (204, False)],
    52: [(205, True), (206, False), (207, False), (208, False)],
    53: [(209, True), (210, False), (211, False), (212, False)],
    54: [(213, True), (214, False), (215, False), (216, False)],
    55: [(217, True), (218, False), (219, False), (220, False)],
    56: [(221, True), (222, False), (223, False), (224, False)],
    57: [(225, True), (226, False), (227, False), (228, False)],
    58: [(229, True), (230, False), (231, False), (232, False)],
    59: [(233, True), (234, False), (235, False), (236, False)],
    60: [(237, True), (238, False), (239, False), (240, False)],
    61: [(241, True), (242, False), (243, False), (244, False)],
    62: [(245, True), (246, False), (247, False), (248, False)],
    63: [(249, True), (250, False), (251, False), (252, False)],
    64: [(253, True), (254, False), (255, False), (256, False)],
    65: [(257, True), (258, False), (259, False), (260, False)],
    66: [(261, True), (262, False), (263, False), (264, False)],
    67: [(265, True), (266, False), (267, False), (268, False)],
    68: [(269, True), (270, False), (271, False), (272, False)],
    69: [(273, True), (274, False), (275, False), (276, False)],
    70: [(277, True), (278, False), (279, False), (280, False)],
    71: [(281, True), (282, False), (283, False), (284, False)],
    72: [(285, True), (286, False), (287, False), (288, False)],
    73: [(289, True), (290, False), (291, False), (292, False)],
    74: [(293, True), (294, False), (295, False), (296, False)],
    75: [(297, True), (298, False), (299, False), (300, False)],
    76: [(301, True), (302, False), (303, False), (304, False)],
    77: [(305, True), (306, False), (307, False), (308, False)],
    78: [(309, True), (310, False), (311, False), (312, False)],
    79: [(313, True), (314, False), (315, False), (316, False)],
    80: [(317, True), (318, False), (319, False), (320, False)],
    81: [(321, True), (322, False), (323, False), (324, False)],
    82: [(325, True), (326, False), (327, False), (328, False)],
    83: [(329, True), (330, False), (331, False), (332, False)],
    84: [(333, True), (334, False), (335, False), (336, False)],
    85: [(337, True), (338, False), (339, False), (340, False)],
    86: [(341, True), (342, False), (343, False), (344, False)],
    87: [(345, True), (346, False), (347, False), (348, False)],
    88: [(349, True), (350, False), (351, False), (352, False)],
    89: [(353, True), (354, False), (355, False), (356, False)],
    90: [(357, True), (358, False), (359, False), (360, False)],
    91: [(361, True), (362, False), (363, False), (364, False)],
    92: [(365, True), (366, False), (367, False), (368, False)],
    93: [(369, True), (370, False), (371, False), (372, False)],
    94: [(373, True), (374, False), (375, False), (376, False)],
    95: [(377, True), (378, False), (379, False), (380, False)],
    96: [(381, True), (382, False), (383, False), (384, False)],
    97: [(385, True), (386, False), (387, False), (388, False)],
    98: [(389, True), (390, False), (391, False), (392, False)],
    99: [(393, True), (394, False), (395, False), (396, False)],
    100: [(397, True), (398, False), (399, False), (400, False)]
}

users = [
    {'id': 1, 'name': 'Alice Johnson'},
    {'id': 2, 'name': 'Bob Smith'},
    {'id': 3, 'name': 'Charlie Brown'},
    {'id': 4, 'name': 'Diana Prince'},
    {'id': 5, 'name': 'Edward Elric'},
    {'id': 6, 'name': 'Fiona Apple'},
    {'id': 7, 'name': 'George Martin'},
    {'id': 8, 'name': 'Hannah Baker'},
    {'id': 9, 'name': 'Ian Fleming'},
    {'id': 10, 'name': 'Jessica Pearson'},
    {'id': 11, 'name': 'Kevin Hart'},
    {'id': 12, 'name': 'Laura Palmer'},
    {'id': 13, 'name': 'Michael Scott'},
    {'id': 14, 'name': 'Nancy Drew'},
    {'id': 15, 'name': 'Oliver Twist'},
    {'id': 16, 'name': 'Peter Parker'},
    {'id': 17, 'name': 'Quincy Adams'},
    {'id': 18, 'name': 'Rachel Green'},
    {'id': 19, 'name': 'Steven Universe'},
    {'id': 20, 'name': 'Tina Belcher'},
    {'id': 21, 'name': 'Uma Thurman'},
    {'id': 22, 'name': 'Victor Hugo'},
    {'id': 23, 'name': 'Wanda Maximoff'},
    {'id': 24, 'name': 'Xander Harris'},
    {'id': 25, 'name': 'Yara Greyjoy'}
]

# Function to simulate a single quiz attempt
def simulate_quiz_attempt(user_id, quiz, result_id, answer_id_start):
    attempt_url = generate_attempt_url()
    question_ids = quiz['question_ids']

    user_answers = []
    score = 0
    answer_id = answer_id_start

    for question_id in question_ids:
        possible_answers = questions_answers[question_id]
        selected_answer = random.choice(possible_answers)
        user_answers.append({
            'id': answer_id,
            'result_id': result_id,
            'question_id': question_id,
            'selected_answer_id': selected_answer[0],
            'is_correct': selected_answer[1]
        })
        answer_id += 1
        if selected_answer[1]:
            score += 1

    result = {
        'id': result_id,
        'user_id': user_id,
        'quiz_id': quiz['id'],
        'score': score,
        'question_total': len(question_ids),
        'attempt_url': attempt_url
    }

    return result, user_answers

# Main script to simulate multiple quiz attempts
def main():
    num_attempts = 100  # Number of attempts to simulate

    results = []
    all_user_answers = []

    result_id = 1
    answer_id_start = 1

    for _ in range(num_attempts):
        user = random.choice(users)
        quiz = random.choice(quizzes)
        
        result, user_answers = simulate_quiz_attempt(user['id'], quiz, result_id, answer_id_start)
        results.append(result)
        all_user_answers.extend(user_answers)

        result_id += 1
        answer_id_start += len(user_answers)

    # Print results
    print("-- Results Table Inserts")
    print("INSERT INTO results (user_id, quiz_id, score, question_total, attempt_url) VALUES")
    print(",\n".join([
        f"({result['user_id']}, {result['quiz_id']}, {result['score']}, {result['question_total']}, '{result['attempt_url']}')"
        for result in results
    ]) + ";")

    print("\n-- User Answers Table Inserts")
    print("INSERT INTO user_answers (result_id, question_id, selected_answer_id, is_correct) VALUES")
    print(",\n".join([
        f"({answer['result_id']}, {answer['question_id']}, {answer['selected_answer_id']}, {str(answer['is_correct']).lower()})"
        for answer in all_user_answers
    ]) + ";")

if __name__ == "__main__":
    main()

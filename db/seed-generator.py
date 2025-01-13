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
    1: [(1, True), (2, False), (3, False), (4, False), (5, False)],
    2: [(6, True), (7, False), (8, False), (9, False), (10, False)],
    4: [(11, True), (12, False), (13, False), (14, False), (15, False)],
    3: [(16, True), (17, False), (18, False), (19, False), (20, False)],
    5: [(21, True), (22, False), (23, False), (24, False), (25, False)],
    6: [(26, True), (27, False), (28, False), (29, False), (20, False)],
    7: [(31, True), (32, False), (33, False), (34, False), (35, False)],
    8: [(36, True), (37, False), (38, False), (39, False), (40, False)],
    9:  [(41, True), (42, False), (43, False), (44, False), (45, False)],
    10: [(46, True), (47, False), (48, False), (49, False), (50, False)],
    11: [(51, True), (52, False), (53, False), (54, False), (55, False)],
    12: [(56, True), (57, False), (58, False), (59, False), (60, False)],
    13: [(61, True), (62, False), (63, False), (64, False), (65, False)],
    14: [(66, True), (67, False), (68, False), (69, False), (70, False)],
    15: [(71, True), (72, False), (73, False), (74, False), (75, False)],
    16: [(76, True), (77, False), (78, False), (79, False), (80, False)],
    17: [(81, True), (82, False), (83, False), (84, False), (85, False)],
    18: [(86, True), (87, False), (88, False), (89, False), (90, False)],
    19: [(91, True), (92, False), (93, False), (94, False), (95, False)],
    20: [(96, True), (97, False), (98, False), (99, False), (100, False)],
    21: [(101, True), (102, False), (103, False), (104, False), (105, False)],
    22: [(106, True), (107, False), (108, False), (109, False), (110, False)],
    23: [(111, True), (112, False), (113, False), (114, False), (115, False)],
    24: [(116, True), (117, False), (118, False), (119, False), (120, False)],
    25: [(121, True), (122, False), (123, False), (124, False), (125, False)],
    26: [(126, True), (127, False), (128, False), (129, False), (130, False)],
    27: [(131, True), (132, False), (133, False), (134, False), (135, False)],
    28: [(136, True), (137, False), (138, False), (139, False), (140, False)],
    29: [(141, True), (142, False), (143, False), (144, False), (145, False)],
    30: [(146, True), (147, False), (148, False), (149, False), (150, False)],
    31: [(151, True), (152, False), (153, False), (154, False), (155, False)],
    32: [(156, True), (157, False), (158, False), (159, False), (160, False)],
    33: [(161, True), (162, False), (163, False), (164, False), (165, False)],
    34: [(166, True), (167, False), (168, False), (169, False), (170, False)],
    35: [(171, True), (172, False), (173, False), (174, False), (175, False)],
    36: [(176, True), (177, False), (178, False), (179, False), (180, False)],
    37: [(181, True), (182, False), (183, False), (184, False), (185, False)],
    38: [(186, True), (187, False), (188, False), (189, False), (190, False)],
    39: [(191, True), (192, False), (193, False), (194, False), (195, False)],
    40: [(196, True), (197, False), (198, False), (199, False), (200, False)],
    41: [(201, True), (202, False), (203, False), (204, False), (205, False)],
    42: [(206, True), (207, False), (208, False), (209, False), (210, False)],
    43: [(211, True), (212, False), (213, False), (214, False), (215, False)],
    44: [(216, True), (217, False), (218, False), (219, False), (220, False)],
    45: [(221, True), (222, False), (223, False), (224, False), (225, False)],
    46: [(226, True), (227, False), (228, False), (229, False), (230, False)],
    47: [(231, True), (232, False), (233, False), (234, False), (235, False)],
    48: [(236, True), (237, False), (238, False), (239, False), (240, False)],
    49: [(241, True), (242, False), (243, False), (244, False), (245, False)],
    50: [(246, True), (247, False), (248, False), (249, False), (250, False)],
    51: [(251, True), (252, False), (253, False), (254, False), (255, False)],
    52: [(256, True), (257, False), (258, False), (259, False), (260, False)],
    53: [(261, True), (262, False), (263, False), (264, False), (265, False)],
    54: [(266, True), (267, False), (268, False), (269, False), (270, False)],
    55: [(271, True), (272, False), (273, False), (274, False), (275, False)],
    56: [(276, True), (277, False), (278, False), (279, False), (280, False)],
    57: [(281, True), (282, False), (283, False), (284, False), (285, False)],
    58: [(286, True), (287, False), (288, False), (289, False), (290, False)],
    59: [(291, True), (292, False), (293, False), (294, False), (295, False)],
    60: [(296, True), (297, False), (298, False), (299, False), (300, False)],
    61: [(301, True), (302, False), (303, False), (304, False), (305, False)],
    62: [(306, True), (307, False), (308, False), (309, False), (310, False)],
    63: [(311, True), (312, False), (313, False), (314, False), (315, False)],
    64: [(316, True), (317, False), (318, False), (319, False), (320, False)],
    65: [(321, True), (322, False), (323, False), (324, False), (325, False)],
    66: [(326, True), (327, False), (328, False), (329, False), (330, False)],
    67: [(331, True), (332, False), (333, False), (334, False), (335, False)],
    68: [(336, True), (337, False), (338, False), (339, False), (340, False)],
    69: [(341, True), (342, False), (343, False), (344, False), (345, False)],
    70: [(346, True), (347, False), (348, False), (349, False), (350, False)],
    71: [(351, True), (352, False), (353, False), (354, False), (355, False)],
    72: [(356, True), (357, False), (358, False), (359, False), (360, False)],
    73: [(361, True), (362, False), (363, False), (364, False), (365, False)],
    74: [(366, True), (367, False), (368, False), (369, False), (370, False)],
    75: [(371, True), (372, False), (373, False), (374, False), (375, False)],
    76: [(376, True), (377, False), (378, False), (379, False), (380, False)],
    77: [(381, True), (382, False), (383, False), (384, False), (385, False)],
    78: [(386, True), (387, False), (388, False), (389, False), (390, False)],
    79: [(391, True), (392, False), (393, False), (394, False), (395, False)],
    80: [(396, True), (397, False), (398, False), (399, False), (400, False)],
    81: [(401, True), (402, False), (403, False), (404, False), (405, False)],
    82: [(406, True), (407, False), (408, False), (409, False), (410, False)],
    83: [(411, True), (412, False), (413, False), (414, False), (415, False)],
    84: [(416, True), (417, False), (418, False), (419, False), (420, False)],
    85: [(421, True), (422, False), (423, False), (424, False), (425, False)],
    86: [(426, True), (427, False), (428, False), (429, False), (430, False)],
    87: [(431, True), (432, False), (433, False), (434, False), (435, False)],
    88: [(436, True), (437, False), (438, False), (439, False), (440, False)],
    89: [(441, True), (442, False), (443, False), (444, False), (445, False)],
    90: [(446, True), (447, False), (448, False), (449, False), (450, False)],
    91: [(451, True), (452, False), (453, False), (454, False), (455, False)],
    92: [(456, True), (457, False), (458, False), (459, False), (460, False)],
    93: [(461, True), (462, False), (463, False), (464, False), (465, False)],
    94: [(466, True), (467, False), (468, False), (469, False), (470, False)],
    95: [(471, True), (472, False), (473, False), (474, False), (475, False)],
    96: [(476, True), (477, False), (478, False), (479, False), (480, False)],
    97: [(481, True), (482, False), (483, False), (484, False), (485, False)],
    98: [(486, True), (487, False), (488, False), (489, False), (490, False)],
    99: [(491, True), (492, False), (493, False), (494, False), (495, False)],
    100:[(496, True), (497, False), (498, False), (499, False), (500, False)],
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

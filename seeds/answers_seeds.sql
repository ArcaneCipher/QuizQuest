-- Science Trivia
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 1: What is the chemical symbol for water?
(1, 'H2O', true),
(1, 'CO2', false),
(1, 'O2', false),
(1, 'N2', false),
(1, 'H2', false),

-- Question 2: What planet is known as the Red Planet?
(2, 'Mars', true),
(2, 'Venus', false),
(2, 'Jupiter', false),
(2, 'Saturn', false),
(2, 'Mercury', false),

-- Question 3: What gas do plants primarily use during photosynthesis?
(3, 'Carbon dioxide', true),
(3, 'Oxygen', false),
(3, 'Nitrogen', false),
(3, 'Methane', false),
(3, 'Hydrogen', false),

-- Question 4: What is the speed of light in vacuum (approximately)?
(4, '299,792 kilometers per second', true),
(4, '150,000 kilometers per second', false),
(4, '1,000 kilometers per second', false),
(4, '500 kilometers per second', false),
(4, '3,000 kilometers per second', false),

-- Question 5: What is the hardest natural substance on Earth?
(5, 'Diamond', true),
(5, 'Gold', false),
(5, 'Steel', false),
(5, 'Quartz', false),
(5, 'Graphite', false);

-- History Buffs
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 6: Who was the first President of the United States?
(6, 'George Washington', true),
(6, 'Abraham Lincoln', false),
(6, 'Thomas Jefferson', false),
(6, 'John Adams', false),
(6, 'Benjamin Franklin', false),

-- Question 7: What year did World War II end?
(7, '1945', true),
(7, '1940', false),
(7, '1950', false),
(7, '1939', false),
(7, '1948', false),

-- Question 8: Who was known as the “Iron Lady”?
(8, 'Margaret Thatcher', true),
(8, 'Queen Elizabeth II', false),
(8, 'Angela Merkel', false),
(8, 'Indira Gandhi', false),
(8, 'Hillary Clinton', false),

-- Question 9: Which empire built the Colosseum in Rome?
(9, 'The Roman Empire', true),
(9, 'The Greek Empire', false),
(9, 'The Ottoman Empire', false),
(9, 'The Persian Empire', false),
(9, 'The Byzantine Empire', false),

-- Question 10: What was the name of the ship that sank in 1912?
(10, 'Titanic', true),
(10, 'Lusitania', false),
(10, 'Queen Mary', false),
(10, 'Olympic', false),
(10, 'Britannic', false);

-- Movie Mania
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 11: Which movie won the first-ever Academy Award for Best Picture?
(11, 'Wings', true),
(11, 'Gone with the Wind', false),
(11, 'Casablanca', false),
(11, 'The Jazz Singer', false),
(11, 'Citizen Kane', false),

-- Question 12: Who played the Joker in The Dark Knight?
(12, 'Heath Ledger', true),
(12, 'Joaquin Phoenix', false),
(12, 'Jack Nicholson', false),
(12, 'Jared Leto', false),
(12, 'Mark Hamill', false),

-- Question 13: What is the highest-grossing movie of all time?
(13, 'Avatar', true),
(13, 'Avengers: Endgame', false),
(13, 'Titanic', false),
(13, 'Star Wars: The Force Awakens', false),
(13, 'Jurassic World', false),

-- Question 14: What is the name of the hobbit played by Elijah Wood in The Lord of the Rings?
(14, 'Frodo Baggins', true),
(14, 'Samwise Gamgee', false),
(14, 'Bilbo Baggins', false),
(14, 'Meriadoc Brandybuck', false),
(14, 'Peregrin Took', false),

-- Question 15: Which actress played Katniss Everdeen in The Hunger Games?
(15, 'Jennifer Lawrence', true),
(15, 'Emma Stone', false),
(15, 'Kristen Stewart', false),
(15, 'Scarlett Johansson', false),
(15, 'Natalie Portman', false);

-- World Capitals
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 16: What is the capital of France?
(16, 'Paris', true),
(16, 'Rome', false),
(16, 'Berlin', false),
(16, 'Madrid', false),
(16, 'Lisbon', false),

-- Question 17: What is the capital of Japan?
(17, 'Tokyo', true),
(17, 'Beijing', false),
(17, 'Seoul', false),
(17, 'Bangkok', false),
(17, 'Shanghai', false),

-- Question 18: What is the capital of Australia?
(18, 'Canberra', true),
(18, 'Sydney', false),
(18, 'Melbourne', false),
(18, 'Perth', false),
(18, 'Brisbane', false),

-- Question 19: What is the capital of Canada?
(19, 'Ottawa', true),
(19, 'Toronto', false),
(19, 'Vancouver', false),
(19, 'Montreal', false),
(19, 'Calgary', false),

-- Question 20: What is the capital of Brazil?
(20, 'Brasília', true),
(20, 'Rio de Janeiro', false),
(20, 'São Paulo', false),
(20, 'Salvador', false),
(20, 'Fortaleza', false);

-- Famous Books
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 21: Who wrote “Pride and Prejudice”?
(21, 'Jane Austen', true),
(21, 'Charlotte Brontë', false),
(21, 'Emily Brontë', false),
(21, 'Mary Shelley', false),
(21, 'Louisa May Alcott', false),

-- Question 22: Which book series features Harry Potter?
(22, 'Harry Potter', true),
(22, 'Percy Jackson', false),
(22, 'The Hunger Games', false),
(22, 'Twilight', false),
(22, 'The Chronicles of Narnia', false),

-- Question 23: Who wrote “The Great Gatsby”?
(23, 'F. Scott Fitzgerald', true),
(23, 'Ernest Hemingway', false),
(23, 'John Steinbeck', false),
(23, 'William Faulkner', false),
(23, 'T.S. Eliot', false),

-- Question 24: What is the name of the whale in “Moby-Dick”?
(24, 'Moby Dick', true),
(24, 'Jaws', false),
(24, 'Shamu', false),
(24, 'Willy', false),
(24, 'Free Willy', false),

-- Question 25: Which dystopian novel features the phrase “Big Brother is watching you”?
(25, '1984', true),
(25, 'Brave New World', false),
(25, 'Fahrenheit 451', false),
(25, 'The Handmaid’s Tale', false),
(25, 'Animal Farm', false);

-- Pop Culture Quiz
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 26: What social media platform is known for the blue bird?
(26, 'Twitter', true),
(26, 'Facebook', false),
(26, 'Instagram', false),
(26, 'LinkedIn', false),
(26, 'Snapchat', false),

-- Question 27: Who sang “Shape of You”?
(27, 'Ed Sheeran', true),
(27, 'Justin Bieber', false),
(27, 'Adele', false),
(27, 'Shawn Mendes', false),
(27, 'Taylor Swift', false),

-- Question 28: What is the name of the fictional wizarding school in Harry Potter?
(28, 'Hogwarts', true),
(28, 'Durmstrang', false),
(28, 'Beauxbatons', false),
(28, 'Ilvermorny', false),
(28, 'Xavier’s School for Gifted Youngsters', false),

-- Question 29: Who is the creator of the Marvel Cinematic Universe?
(29, 'Kevin Feige', true),
(29, 'Stan Lee', false),
(29, 'Jon Favreau', false),
(29, 'Joss Whedon', false),
(29, 'James Gunn', false),

-- Question 30: Which reality TV show features the Kardashian family?
(30, 'Keeping Up with the Kardashians', true),
(30, 'The Real Housewives', false),
(30, 'Big Brother', false),
(30, 'Survivor', false),
(30, 'Love Island', false);

-- Math Puzzles
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 31: What is the square root of 144?
(31, '12', true),
(31, '14', false),
(31, '10', false),
(31, '16', false),
(31, '18', false),

-- Question 32: Solve: 9 + 6 ÷ 3 = ?
(32, '11', true),
(32, '15', false),
(32, '9', false),
(32, '3', false),
(32, '12', false),

-- Question 33: What is the value of π (pi) to two decimal places?
(33, '3.14', true),
(33, '3.13', false),
(33, '3.15', false),
(33, '3.16', false),
(33, '3.12', false),

-- Question 34: What is 25% of 200?
(34, '50', true),
(34, '25', false),
(34, '75', false),
(34, '100', false),
(34, '150', false),

-- Question 35: What is the factorial of 5?
(35, '120', true),
(35, '60', false),
(35, '24', false),
(35, '150', false),
(35, '100', false);

-- Space Exploration
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 36: Who was the first human to travel into space?
(36, 'Yuri Gagarin', true),
(36, 'Neil Armstrong', false),
(36, 'Buzz Aldrin', false),
(36, 'Alan Shepard', false),
(36, 'John Glenn', false),

-- Question 37: What year did the Apollo 11 mission land on the moon?
(37, '1969', true),
(37, '1970', false),
(37, '1968', false),
(37, '1971', false),
(37, '1965', false),

-- Question 38: What is the name of the largest planet in our solar system?
(38, 'Jupiter', true),
(38, 'Saturn', false),
(38, 'Neptune', false),
(38, 'Uranus', false),
(38, 'Earth', false),

-- Question 39: What is the closest star to Earth?
(39, 'The Sun', true),
(39, 'Proxima Centauri', false),
(39, 'Alpha Centauri', false),
(39, 'Sirius', false),
(39, 'Betelgeuse', false),

-- Question 40: What is the name of NASA’s most famous space telescope?
(40, 'Hubble Space Telescope', true),
(40, 'James Webb Space Telescope', false),
(40, 'Kepler Space Telescope', false),
(40, 'Chandra X-ray Observatory', false),
(40, 'Spitzer Space Telescope', false);

-- Music Legends
INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 41: Who is known as the King of Pop?
(41, 'Michael Jackson', true),
(41, 'Elvis Presley', false),
(41, 'Prince', false),
(41, 'Freddie Mercury', false),
(41, 'Stevie Wonder', false),

-- Question 42: Who wrote the song “Imagine”?
(42, 'John Lennon', true),
(42, 'Paul McCartney', false),
(42, 'George Harrison', false),
(42, 'Bob Dylan', false),
(42, 'Elton John', false),

-- Question 43: Which band is famous for the song “Bohemian Rhapsody”?
(43, 'Queen', true),
(43, 'The Beatles', false),
(43, 'Led Zeppelin', false),
(43, 'The Rolling Stones', false),
(43, 'Pink Floyd', false),

-- Question 44: Who is the lead singer of U2?
(44, 'Bono', true),
(44, 'The Edge', false),
(44, 'Adam Clayton', false),
(44, 'Larry Mullen Jr.', false),
(44, 'Chris Martin', false),

-- Question 45: Which classical composer became deaf later in life?
(45, 'Ludwig van Beethoven', true),
(45, 'Wolfgang Amadeus Mozart', false),
(45, 'Johann Sebastian Bach', false),
(45, 'Franz Schubert', false),
(45, 'Joseph Haydn', false);

-- Sports Quiz
(INSERT INTO answers (question_id, text, is_correct) VALUES
-- Question 46: What sport is known as “the beautiful game”?
(46, 'Soccer', true),
(46, 'Basketball', false),
(46, 'Tennis', false),
(46, 'Cricket', false),
(46, 'Rugby', false),

-- Question 47: In which year did the Olympics originate?
(47, '776 BC', true),
(47, '1896', false),
(47, '490 BC', false),
(47, '1000 AD', false),
(47, '500 BC', false),

-- Question 48: What is the highest score possible in a single frame of bowling?
(48, '30', true),
(48, '20', false),
(48, '15', false),
(48, '25', false),
(48, '10', false),

-- Question 49: Which country has won the most FIFA World Cups?
(49, 'Brazil', true),
(49, 'Germany', false),
(49, 'Italy', false),
(49, 'Argentina', false),
(49, 'France', false),

-- Question 50: Who is considered the greatest basketball player of all time?
(50, 'Michael Jordan', true),
(50, 'LeBron James', false),
(50, 'Kobe Bryant', false),
(50, 'Magic Johnson', false),
(50, 'Larry Bird', false);

-- Geography Genius
INSERT INTO answers (question_id, text, is_correct) VALUES
(51, 'Africa', true),
(51, 'Asia', false),
(51, 'South America', false),
(51, 'Australia', false),
(51, 'North America', false),

(52, 'Mount Everest', true),
(52, 'K2', false),
(52, 'Kangchenjunga', false),
(52, 'Lhotse', false),
(52, 'Makalu', false),

(53, 'Pacific Ocean', true),
(53, 'Atlantic Ocean', false),
(53, 'Indian Ocean', false),
(53, 'Southern Ocean', false),
(53, 'Arctic Ocean', false),

(54, 'Vatican City', true),
(54, 'Monaco', false),
(54, 'San Marino', false),
(54, 'Liechtenstein', false),
(54, 'Malta', false),

(55, 'Nile River', true),
(55, 'Amazon River', false),
(55, 'Yangtze River', false),
(55, 'Mississippi River', false),
(55, 'Danube River', false);

-- Tech Titans
INSERT INTO answers (question_id, text, is_correct) VALUES
(56, 'Bill Gates', true),
(56, 'Steve Jobs', false),
(56, 'Mark Zuckerberg', false),
(56, 'Elon Musk', false),
(56, 'Larry Page', false),

(57, '2007', true),
(57, '2005', false),
(57, '2010', false),
(57, '2009', false),
(57, '2008', false),

(58, 'SpaceX', true),
(58, 'Blue Origin', false),
(58, 'NASA', false),
(58, 'Virgin Galactic', false),
(58, 'Rocket Lab', false),

(59, 'HyperText Transfer Protocol', true),
(59, 'HyperText Tracking Protocol', false),
(59, 'HyperText Transmission Protocol', false),
(59, 'Hyper Transfer Text Protocol', false),
(59, 'HyperText Tunneling Protocol', false),

(60, 'JavaScript', true),
(60, 'Python', false),
(60, 'Java', false),
(60, 'C++', false),
(60, 'Ruby', false);

-- Art History
INSERT INTO answers (question_id, text, is_correct) VALUES
(61, 'Leonardo da Vinci', true),
(61, 'Michelangelo', false),
(61, 'Raphael', false),
(61, 'Donatello', false),
(61, 'Caravaggio', false),

(62, 'Vincent van Gogh', true),
(62, 'Claude Monet', false),
(62, 'Pablo Picasso', false),
(62, 'Paul Cézanne', false),
(62, 'Henri Matisse', false),

(63, 'Cubism', true),
(63, 'Impressionism', false),
(63, 'Surrealism', false),
(63, 'Expressionism', false),
(63, 'Realism', false),

(64, 'Michelangelo', true),
(64, 'Bernini', false),
(64, 'Donatello', false),
(64, 'Rodin', false),
(64, 'Raphael', false),

(65, 'The Louvre', true),
(65, 'The British Museum', false),
(65, 'The Vatican Museums', false),
(65, 'The Uffizi Gallery', false),
(65, 'The Prado', false);

-- Superhero Showdown
INSERT INTO answers (question_id, text, is_correct) VALUES
(66, 'Clark Kent', true),
(66, 'Bruce Wayne', false),
(66, 'Peter Parker', false),
(66, 'Steve Rogers', false),
(66, 'Diana Prince', false),

(67, 'Batman', true),
(67, 'Superman', false),
(67, 'Spider-Man', false),
(67, 'Iron Man', false),
(67, 'Hulk', false),

(68, 'Thanos', true),
(68, 'Loki', false),
(68, 'Ultron', false),
(68, 'Hela', false),
(68, 'Red Skull', false),

(69, 'Captain America', true),
(69, 'Thor', false),
(69, 'Hawkeye', false),
(69, 'Black Widow', false),
(69, 'Iron Man', false),

(70, 'Themyscira', true),
(70, 'Atlantis', false),
(70, 'Asgard', false),
(70, 'Krypton', false),
(70, 'Gotham City', false);

-- Programming Basics
INSERT INTO answers (question_id, text, is_correct) VALUES
(71, 'HyperText Markup Language', true),
(71, 'HyperText Machine Language', false),
(71, 'Hyper Transfer Markup Language', false),
(71, 'HyperText Mapping Language', false),
(71, 'HighText Markup Language', false),

(72, 'Styling web pages', true),
(72, 'Structuring content', false),
(72, 'Programming logic', false),
(72, 'Database management', false),
(72, 'Server-side scripting', false),

(73, '"22"', true),
(73, '4', false),
(73, '"4"', false),
(73, 'Error', false),
(73, 'NaN', false),

(74, 'let', true),
(74, 'set', false),
(74, 'make', false),
(74, 'var', false),
(74, 'create', false),

(75, 'JavaScript', true),
(75, 'Python', false),
(75, 'C++', false),
(75, 'Java', false),
(75, 'Ruby', false);

-- Classic Movies
INSERT INTO answers (question_id, text, is_correct) VALUES
(76, 'Vivien Leigh', true),
(76, 'Katharine Hepburn', false),
(76, 'Ingrid Bergman', false),
(76, 'Bette Davis', false),
(76, 'Greta Garbo', false),

(77, 'Bruce', true),
(77, 'Jaws', false),
(77, 'Chomper', false),
(77, 'Great White', false),
(77, 'Sharky', false),

(78, 'kid', true),
(78, 'pal', false),
(78, 'friend', false),
(78, 'mate', false),
(78, 'love', false),

(79, '1941', true),
(79, '1939', false),
(79, '1945', false),
(79, '1950', false),
(79, '1935', false),

(80, 'Francis Ford Coppola', true),
(80, 'Martin Scorsese', false),
(80, 'Stanley Kubrick', false),
(80, 'Steven Spielberg', false),
(80, 'Brian De Palma', false);

-- Gaming Gurus
INSERT INTO answers (question_id, text, is_correct) VALUES
(81, 'Link', true),
(81, 'Zelda', false),
(81, 'Ganondorf', false),
(81, 'Epona', false),
(81, 'Sheik', false),

(82, 'Epic Games', true),
(82, 'Activision', false),
(82, 'Ubisoft', false),
(82, 'Rockstar Games', false),
(82, 'Nintendo', false),

(83, 'Minecraft', true),
(83, 'Grand Theft Auto V', false),
(83, 'Tetris', false),
(83, 'Call of Duty', false),
(83, 'Fortnite', false),

(84, 'Nintendo', true),
(84, 'Sony', false),
(84, 'Microsoft', false),
(84, 'Sega', false),
(84, 'Atari', false),

(85, 'Overworld', true),
(85, 'Nether', false),
(85, 'End', false),
(85, 'Blockland', false),
(85, 'Terraria', false);

-- Animal Kingdom
INSERT INTO answers (question_id, text, is_correct) VALUES
(86, 'Cheetah', true),
(86, 'Lion', false),
(86, 'Tiger', false),
(86, 'Gazelle', false),
(86, 'Horse', false),

(87, 'Blue whale', true),
(87, 'Elephant', false),
(87, 'Giraffe', false),
(87, 'Hippopotamus', false),
(87, 'Walrus', false),

(88, 'Peacock', true),
(88, 'Parrot', false),
(88, 'Flamingo', false),
(88, 'Penguin', false),
(88, 'Ostrich', false),

(89, 'Bamboo', true),
(89, 'Eucalyptus', false),
(89, 'Grass', false),
(89, 'Leaves', false),
(89, 'Fruit', false),

(90, 'Pride', true),
(90, 'Herd', false),
(90, 'Pack', false),
(90, 'Flock', false),
(90, 'Swarm', false);

-- Cryptic Riddles
INSERT INTO answers (question_id, text, is_correct) VALUES
(91, 'An egg', true),
(91, 'A secret', false),
(91, 'A nut', false),
(91, 'A code', false),
(91, 'A box', false),

(92, 'An echo', true),
(92, 'A shadow', false),
(92, 'A thought', false),
(92, 'A whisper', false),
(92, 'A memory', false),

(93, 'Footsteps', true),
(93, 'A shadow', false),
(93, 'A wave', false),
(93, 'A blink', false),
(93, 'A sigh', false),

(94, 'A piano', true),
(94, 'A computer', false),
(94, 'A typewriter', false),
(94, 'A map', false),
(94, 'A book', false),

(95, 'A stamp', true),
(95, 'A coin', false),
(95, 'A thought', false),
(95, 'A bird', false),
(95, 'A plane', false);

-- Space Trivia
INSERT INTO answers (question_id, text, is_correct) VALUES
(96, 'Mercury', true),
(96, 'Venus', false),
(96, 'Earth', false),
(96, 'Mars', false),
(96, 'Jupiter', false),

(97, 'Sputnik', true),
(97, 'Explorer 1', false),
(97, 'Vostok 1', false),
(97, 'Apollo 11', false),
(97, 'Challenger', false),

(98, '2', true),
(98, '1', false),
(98, '3', false),
(98, '4', false),
(98, '0', false),

(99, 'Milky Way', true),
(99, 'Andromeda', false),
(99, 'Triangulum', false),
(99, 'Magellanic Cloud', false),
(99, 'Whirlpool', false),

(100, 'Nova', true),
(100, 'Supernova', false),
(100, 'Pulsar', false),
(100, 'Quasar', false),
(100, 'Black Hole', false);

# How to use `RETURNING id`

The `RETURNING id` clause in an SQL `INSERT` statement is used to return the value of a specified column (often the primary key) of the newly inserted row. It is particularly useful when you need the generated ID of a row immediately after inserting it, without having to execute a separate query to fetch it.

## **Explanation of `RETURNING id`**

1. **Primary Use Case**:
    - If your database uses a `SERIAL` or `AUTO_INCREMENT` column for the primary key (like `id`), the `RETURNING id` clause retrieves the automatically generated value after the `INSERT`.
    - This is especially helpful when the generated ID is required for subsequent operations, such as inserting related data into another table.

2. **Query Flow**:
    - Without `RETURNING id`: You'd need to perform a separate query (e.g., `SELECT id FROM questions WHERE ...`) to retrieve the ID of the newly inserted row.
    - With `RETURNING id`: The ID is directly available in the same query, reducing overhead and complexity.

## **Why `RETURNING id` for Questions but Not Answers?**

#### Insert Questions for a Quiz

```sql
INSERT INTO questions (quiz_id, question) VALUES ($1, $2) RETURNING id;
```

- **Why `RETURNING id`?**
  - After inserting a question, you often need the `id` of the newly created question to insert its associated answers into the `answers` table.
  - The `id` acts as the foreign key (`question_id`) in the `answers` table, so you need it immediately after creating the question.

---

#### Insert Answers for a Question

```sql
INSERT INTO answers (question_id, answer, is_correct) VALUES ($1, $2, $3);
```

- **Why Not `RETURNING id`?**
  - Typically, when inserting answers, the `answers` table already has a clear linkage to the `questions` table via the `question_id` foreign key (`$1` in the query).
  - If you don't need the generated `id` for the newly inserted answer to perform further operations, there's no need to use `RETURNING id`.

---

## **When Should You Use `RETURNING id`?**

- Use `RETURNING id` when:

  - The `id` or other auto-generated value from the row is needed for subsequent operations.
  - You want to chain operations efficiently without performing additional queries.

- Omit `RETURNING id` when:

  - You don’t need the generated value for further processing.
  - The operation is self-contained and doesn’t require referencing the inserted row elsewhere immediately.

---

## Practical Example:

If you’re creating a quiz with questions and answers:

1. Insert a question and retrieve its `id`:

    ```sql
    INSERT INTO 
      questions (
        quiz_id, 
        question
      ) 
    VALUES 
      (1, 'What is the capital of France?') 
    RETURNING id;
    ```

    This returns `id = 10`.

2. Use the returned `id` to insert answers:

    ```sql
    INSERT INTO 
      answers (
        question_id, 
        answer, 
        is_correct
      ) 
    VALUES 
      (10, 'Paris', TRUE),
      (10, 'Berlin', FALSE),
      (10, 'Madrid', FALSE),
      (10, 'Rome', FALSE);
    ```

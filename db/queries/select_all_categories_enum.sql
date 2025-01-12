SELECT
  enumlabel AS category
FROM
  pg_enum
WHERE
  enumtypid = (
    SELECT
      oid
    FROM
      pg_type
    WHERE
      typname = 'category_enum'
  )
ORDER BY
  category;

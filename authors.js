// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAuthors() {
  // Query the database and return all books

  // Define the SQL query to fetch all authors from the 'authors' table
  const queryText = "SELECT * FROM authors";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getAuthorById(id) {
  // Query the database and return the book with a matching id or null

  // Define the SQL query to fetch the author with the specified id from the 'autors' table
  const queryText = "SELECT * FROM authors WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  // If a author with the specified id exists, it will be the first element in the rows array
  // If no author exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}

export async function createAuthor(first_name, last_name) {
  // Query the database to create an author and return the newly created author

  // Use the pool object to send the query to the database
  // passing the author collumns
  const result = await pool.query(
    "INSERT INTO authors (first_name, last_name) VALUES ($1, $2) RETURNING *",
    [first_name, last_name] // Values corresponding to $1, $2, $3, $4
  );
  console.log(result);
  // return result;
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}

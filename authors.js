// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";


export async function getAuthors() {
  // Query the database and return all authors
 const queryText = "SELECT * FROM authors"
 const result = await pool.query(queryText)
 console.log(queryText)
 return result
}

export async function getAuthorById(id) {
  const queryText = "SELECT * FROM authors WHERE id = $1"
  const result = await pool.query(queryText, [id])
  console.log(queryText)
  return result
}

export async function createAuthor(author) {
  const queryText = "INSERT INTO authors (first_name, last_name) VALUES ($1, $2)"
  const result = await pool.query()
  console.log(queryText)
  return result
  // Query the database to create an author and return the newly created author
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}

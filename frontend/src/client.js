import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '001mdg4o',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skOdvdAN7wipbNZ5ayNrfl1oSQ6lIQrb7BJygNYgC7gtrvHeJrUU2t6OBKd3L9p5WE7j6V3L28zQPgHaC6SIVmu85oM8iT7zQxV01MlAljutolUdgklunTfMWAw7ZjxDRUEeNM5kyUPD8xGQWDDrX8f3Qv9nnuhGN0ZJv6DCBD3xYLjya4rO'
})
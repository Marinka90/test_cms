import Home from '../pages/Home.svelte'
import Book from '../pages/Book.svelte'
import NotFound from '../pages/NotFound.svelte'

export const routes = {
  // Exact path
  '/': Home,

  // Wildcard parameter
  '/book': Book,

  // Catch-all
  // This is optional, but if present it must be the last
  '*': NotFound,
};
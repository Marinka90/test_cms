import Table from '../pages/Table.svelte'
import Form from '../pages/Form.svelte'
import NotFound from '../pages/NotFound.svelte'

export const routes = {
  // Exact path
  '/': Table,

  // Wildcard parameter
  '/form': Form,

  // Catch-all
  // This is optional, but if present it must be the last
  '*': NotFound,
};
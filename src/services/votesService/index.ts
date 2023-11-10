import { getVotes } from './get'
import { deleteVote } from './delete'
import { postVotes } from './post'
import { putVotes } from './put'


export const votesService = {
  getVotes,
  deleteVote,
  postVotes,
  putVotes
}

import { deleteCashBook } from "./delete";
import { getCashBook } from "./get";
import { postCashBook } from "./post";
import { putCashBook } from "./put";

export const cashBookService = {
  getCashBook,
  postCashBook,
  deleteCashBook,
  putCashBook,
};

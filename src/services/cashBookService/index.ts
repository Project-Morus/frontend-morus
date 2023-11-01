import { deleteCashBook } from "./delete";
import { getCashBook } from "./get";
import { postCashBook } from "./post";

export const cashBookService = {
  getCashBook,
  postCashBook,
  deleteCashBook,
};

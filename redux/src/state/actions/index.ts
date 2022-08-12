import { ActionType } from "../actions-type/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithDraw {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankRupt {
  type: ActionType.BANKRUPT;
}
type Action = DepositAction | WithDraw | BankRupt;

export default Action;

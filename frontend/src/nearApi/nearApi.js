import { format } from "date-fns";
import { utils } from "near-api-js";

export const sendMoney = async ({ wallet, amount, receivedId, contractId }) => {
  let deposit = utils.format.parseNearAmount(amount.toString());
  let response = await wallet.callMethod({
    contractId: contractId,
    method: "donate",
    args: { receivedId: receivedId, now: format(new Date(), "MM.dd.yyyy") },
    deposit,
  });

  return response;
};

export const getCount = async ({ wallet, receivedId, contractId }) => {
  let response = await wallet.viewMethod({
    contractId: contractId,
    method: "get_count",
    args: { receivedId: receivedId },
  });
  return response;
};

export const getReceives = async ({ wallet, receivedId, contractId }) => {
  let response = await wallet.viewMethod({
    contractId: contractId,
    method: "get_receives",
    args: { receivedId: receivedId },
  });
  return response;
};

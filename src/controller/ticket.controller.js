import c from "config";
import ticektsModel from "../model/ticekts.Model";
import UserModel from "../model/user.model";
import Response from "../utils/responseMsg";

const allTickets = async (req, res) => {
  try {
    const userId = req.user.id;
    const findedTickets = await ticektsModel.find({ userId: userId });
    if (!findedTickets) {
      return Response.error400(res, "tickets not found");
    }
    return Response.success(res, "success", findedTickets);
  } catch (error) {
    console.log("allTickets", error);
    return Response.error404(res, "an unexpected error");
  }
};

const ticketDetail = async (req, res) => {
  try {
    const ticketId = req.params.id;
    const findedTicket = await ticektsModel.findOne({ _id: ticketId });
    if (!findedTicket) {
      return Response.error400(res, "ticket not found");
    }
    return Response.success(res, "success", findedTicket);
  } catch (error) {
    console.log("ticketDetail", error);
    return Response.error404(res, "an unexpected error");
  }
};

export default {
  allTickets,
  ticketDetail,
};

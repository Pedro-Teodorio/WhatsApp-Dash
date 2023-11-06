const { Router } = require("express");
const message = require("./controller/messageController");

const router = Router();

router.get("/message/list", message.list);
router.post("/message/create", message.create)

module.exports = router;

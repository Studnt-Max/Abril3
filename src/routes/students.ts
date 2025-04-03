import express from "express";
import StudenthttpHandler from "../handlers/studentHandler";

const router = express.Router();

const studenthttpHandler = new StudenthttpHandler();

router.get("/", StudenthttpHandler.getStudent);

export default router;
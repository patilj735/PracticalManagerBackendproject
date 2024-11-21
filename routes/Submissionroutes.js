import express from "express";

import { createAdmin, createStudent, createTeacher } from "../controllers/UserController.js";
import { createSubject } from "../controllers/SubjectController.js";
import { createPractical } from "../controllers/PracticalController.js";
import { enrollStudent } from "../controllers/PracticalController.js";
import { getAllUsers } from "../controllers/UserController.js";
import { getAllAdmins } from "../controllers/UserController.js";
import { getAllTeachers } from "../controllers/UserController.js";
import { getAllStudents } from "../controllers/UserController.js";
import { getAllSubjects } from "../controllers/SubjectController.js";
import { getAllPracticals } from "../controllers/PracticalController.js";
import { isAdmin } from "../middleware/Middleware.js";
import { isTeacher } from "../middleware/Middleware.js";
import { isStudent } from "../middleware/Middleware.js";

const router= express.Router()

router.post("/admin/create",createAdmin)
router.post("/teacher/create",createTeacher)
router.post("/student/create",createStudent)
router.post("/subject/create",isAdmin,createSubject)
router.post("/practical/create",isTeacher,createPractical)
router.post("/enroll/create",enrollStudent)
router.get("/users/get",isAdmin,getAllUsers)
router.get("/admins/get",isAdmin,getAllAdmins)
router.get("/teachers/get",isAdmin,getAllTeachers)
router.get("/students/get",isAdmin,isTeacher,getAllStudents)
router.get("/subjects/get",getAllSubjects)
router.get("/practicals/get",getAllPracticals)

export default router;

import Practical from '../models/Practical.js';
import Subject from '../models/Subject.js';

export const createPractical = async (req, res) => {
  try {
    const { subjectId, title, description,email } = req.body;

    // Create a new Practical
    const practical = new Practical({
      subjectId,
      title,
      description,
      email,
    });

    const savedPractical = await practical.save();

    // Update the subject with the new practical (optional, if required in your logic)
    const updatedSubject = await Subject.findById(subjectId)
      .populate("email", "name")
      .exec();

    res.status(201).json({
      message: "Practical created successfully",
      practical: savedPractical,
      subject: updatedSubject,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating practical",
    });
  }
};

export const enrollStudent = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;

    // Add the student to the enrolledStudents array
    const updatedPractical = await Practical.findByIdAndUpdate(
      practicalId,
      { $push: { enrolledStudents: studentId } },
      { new: true }
    )
      .populate("enrolledStudents", "name email")
      .exec();

    res.json({
      message: "Student enrolled successfully",
      practical: updatedPractical,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while enrolling student",
    });
  }
};


export const getAllPracticals = async (req, res) => {
    try {
        // Fetch all practicals with enrolled students
        const practicals = await Practical.find()
            .populate('subjectId', 'name code') // Populate subject details
            .populate('createdBy', 'name email') // Populate creator (admin) details
            .populate('enrolledStudents', 'name email'); // Populate enrolled students' details

        res.status(200).json({
            success: true,
            practicals,
        });
    } catch (error) {
        console.error("Error fetching practicals:", error);
        res.status(500).json({
            success: false,
            error: "Cannot fetch practicals data",
        });
    }
};


import Subject from '../models/Subject.js';
import User from '../models/User.js';

export const createSubject = async (req, res) => {
  try {
    const { name, code, email } = req.body;

    // Create a new Subject
    const subject = new Subject({
      name,
      code,
      email,
    });

    const savedSubject = await subject.save();

    res.status(201).json({
      message: "Subject created successfully",
      subject: savedSubject,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating subject",
    });
  }
};


export const getAllSubjects = async (req, res) => {
  try {
      // Fetch all admin users
      const adminUsers = await User.find({ role: 'Admin' }, '_id'); // Get only the `_id` of admins
      const adminIds = adminUsers.map(user => user._id); // Extract the IDs
      
      // Fetch all subjects created by admin users
      const getSubjects = await Subject.find({ createdBy: { $in: adminIds } });
      
      res.json({
          success: true,
          subjects: getSubjects,
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          error: "Cannot fetch subjects data",
      });
      console.error(error);
  }
};

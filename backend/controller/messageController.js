import {Message} from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    try {
        const {name, email, subject, message} = req.body;
        if(!name || !email  || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
             });
        }
        await Message.create({ name, email, subject, message });
        res.status(200).json({
            success: true,
            message: "Message Sent successfully",
        });
    } catch (error) {

        if (error.name == "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " ";
            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " ";
            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + " ";
            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " ";
            }
            return res.status(400).json({
                sucess: false,
                message: errorMessage,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Unknown Error",
        });
    }
};

export const updateMessage = async (req, res) => {
    try {
      const { email, subject, message } = req.body;
  
      if (!email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "Email, subject, and message are required.",
        });
      }
  
      // Find the message by email and update the subject and message
      const updatedMessage = await Message.findOneAndUpdate(
        { email: email },
        { subject: subject, message: message },
        { new: true, runValidators: true }
      );
  
      if (!updatedMessage) {
        return res.status(404).json({
          success: false,
          message: "Message not found for the provided email.",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Message updated successfully",
        data: updatedMessage,
      });
    } catch (error) {
      console.error("Error updating message:", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

export const deleteMessage = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // Find and delete the document(s) with the specified email
    const deletedMessage = await Message.deleteMany({ email: email });

    if (deletedMessage.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No messages found for the provided email.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Messages deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


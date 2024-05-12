import Message from "../models/messageModel.js";
import User from "../models/userModel.js"; // Import the User model
import getResponse from "../utils/llmApi.js";

const createMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body; 

  const message = new Message({
    chatId,
    senderId,
    text,
  });

  try {
    // Check if the recipient is online
    // console.log(receiverId)
    // console.log(receiver.status)
    // const receiver = await User.findById(receiverId);
    // if (receiver.status === "busy") {
    //   // If the recipient is busy, generate a response using the AI
    //   const prompt = `give me a response in 5 to 10 word of this message for my chatting application ${text}`;
    //   const responseText = await getResponse(prompt);
    //   message.text = responseText;
    // }

    if(text == 'hello sir'){
      message.text = "Hello! How can I help you today, sir?";
    }
   

    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { createMessage, getMessages };

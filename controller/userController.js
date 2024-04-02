import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const gelAll = async (req, res) => {
  try {
    const getAllUserData = await User.find();
    if (!getAllUserData) {
      return res.status(400).json({ mg: "User data not found" });
    }
    res.status(200).json({ getAllUserData });
  } catch (error) {}
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(400).json({ msg: "User not found" });
    }
    res.status(200).json({ userExist });
  } catch (error) {}
  res.status(500).json({ error: error });
};

export const updateId = async (req, res) => {
  try {
    const id = req.params.id;
    const userExit = await User.findById(id);
    if (!userExit) {
      return res.status(401).json({ msg: "User not found" });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ updatedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const deleteUser = async(req, res) => {
     try {
        const id = req.params.id;
        const userDelete = await User.findById(id);   
        if (!userDelete) {
            return res.status(400).json({msg : "user not exits"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg : "user deleted successfully"});
     } catch (error) {
    res.status(500).json({ error: error });
        
     }
}
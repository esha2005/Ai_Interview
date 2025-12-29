exports.getInterviews = async (req, res) => {
  try {
    res.status(200).json({ message: 'Get all interviews placeholder' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

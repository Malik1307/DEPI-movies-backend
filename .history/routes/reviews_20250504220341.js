const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/:type", async (req, res) => {
  const { userId, movieId,content } = req.body;
  const {type}=req.params;
  const isMovie=type=='movie';
  // const {text}=content;
  try {
    const review = new Review({userId,movieId,content,isMovie});
    const saved = await review.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:type/:movieId", async (req, res) => {
  const { type,movieId } = req.params;
  const reviews = await Review.find({ movieId });
  res.json(reviews);
});
router.get("/myReviews",async(req,res)=>{

  const {userId}=req.body;

      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ error: "User not found" });
      

  
})

module.exports = router;

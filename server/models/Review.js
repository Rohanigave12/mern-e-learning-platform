/**
 * Review Model
 * ------------
 * This model stores user reviews and ratings for courses.
 *
 * Fields:
 * - user: reference to User
 * - course: reference to Course
 * - rating: number (1–5)
 * - comment: optional text review
 *
 * Related APIs:
 * - POST /api/reviews/:courseId
 * - GET /api/reviews/:courseId
 */
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);

export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  });

  const gradesModel = mongoose.model('grades', gradesSchema);

  return gradesModel;
};

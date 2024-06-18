const mongoose = require("mongoose"),
  SportsSchema = mongoose.Schema(
    {
      name: {
        // name 속성 요청
        type: String,
        required: true,
        trim: true,
      },
      email: {
        // email 속성 요청 lowercase 속성 추가
        type: String,
        required: true,
        lowercase: true,
        unique: true,
      },
      phoneNumber: {
        // phoneNumber 속성 요청 (zipCode 대신)
        type: String,
       
      },
      password: {
        type: String,
        required: true,
        trim: true,
      }, // 비밀번호 속성 추가
      
      profileImg: {
        type: String,
        
      },
      courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("Sports", SportsSchema);

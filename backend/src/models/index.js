const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registrationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

// Generate authentication token for the user
registrationSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign(
            { _id: this._id.toString() },
            process.env.JWT_SECRET
        );
        this.tokens.push({ token });
        await this.save();
        return token;
    } catch (error) {
        console.error("Error generating auth token:", error);
        throw error;  // Throw the original error
    }
};


// Hash the plain text password before saving
registrationSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        // this.password = await bcrypt.hash(this.password, 10);
        console.log('Hashed password:', this.password);
    }
    next();
});

const RegistrationUser = mongoose.model("RegistrationUser", registrationSchema, "registrationUsers");

const loginUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

loginUserSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign(
            { _id: this._id.toString() },
            process.env.JWT_SECRET
        );
        return token;
    } catch (error) {
        console.log("Error generating auth token:", error);
        throw new Error("Error generating auth token");
    }
};

// Static method to find a user by email and password
loginUserSchema.statics.findByCredentials = async function (email, password) {
    const user = await RegistrationUser.findOne({ email });
    if (!user) {
        throw new Error("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid credentials");
    }

    return user;
};

const LoginUser = mongoose.model("LoginUser", loginUserSchema, "loginUsers");

module.exports = { RegistrationUser, LoginUser };

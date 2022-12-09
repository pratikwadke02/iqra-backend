const db = require("../../models");
const Admin = db.admin;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = require("../../middleware/register.js");
const login = require("../../middleware/login.js");

const SALT = 10;

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const checkBody = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const { error } = register.registerValidate(checkBody);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (admin) {
      return res.status(400).send("admin already registered.");
    }
    const salt = await bcrypt.genSalt(SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await Admin.create({
      ...req.body,
      password: hashedPassword,
    });
    res.send({ data: req.body });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const checkBody = {
      email: req.body.email,
      password: req.body.password,
    };
    const { error } = login.loginValidate(checkBody);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const admin = await Admin.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!admin) {
      return res.status(400).send("Invalid email or password.");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid email or password.");
    }
    res.send({
      data: admin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.send(admins);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

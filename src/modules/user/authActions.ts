import type { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

// Clé secrète pour signer les JWT (à stocker dans un .env en prod)
const JWT_SECRET = process.env.JWT_SECRET || "maSuperCleSecrete";

const register : RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await userRepository.readByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "Email déjà utilisé" }); // Conflict
    }
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await userRepository.create({ email, password: hashedPassword });

    // Optionnel : on peut directement créer un JWT après l'inscription
    const token = jwt.sign(
      { id: userId, email, is_admin: false }, // is_admin par défaut false
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token,
      user: { id: userId, email, is_admin: false },
    });
  } catch (err) {
    next(err);
  }
};


const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.readByEmail(email);

    // Vérification sécurisée
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.sendStatus(401); // Unauthorized
    }

    // Création du token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, is_admin: user.is_admin },
      JWT_SECRET,
      { expiresIn: "1h" } // Token valide 1 heure
    );

    // Ne jamais renvoyer le mot de passe
    res.json({ token, user: { id: user.id, email: user.email, is_admin: user.is_admin } });
  } catch (err) {
    next(err);
  }
};

export default { login, register };
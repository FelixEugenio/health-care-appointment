import { ID, Query, Users } from "node-appwrite";
import { users } from "../appwrite.config";

// Definição do tipo de erro, se necessário
interface AppwriteError extends Error {
  code?: number;
}

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(ID.unique(), user.email, user.phone, undefined, user.name);
    return newUser; // Retorne o novo usuário, se necessário
  } catch (error) {
    const appwriteError = error as AppwriteError;

    if (appwriteError.code === 409) {
      // Se o erro for 409, liste os documentos
      const documents = await users.list([
        Query.equal('email', [user.email]),
      ]);

      return documents?.users[0];
    }

    // Trate outros tipos de erros ou lance o erro
    throw appwriteError;
  }
};

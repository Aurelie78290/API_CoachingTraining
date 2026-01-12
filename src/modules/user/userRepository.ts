import databaseClient  from "../../database/client";

import type { Result, Rows } from "../../database/client";

type User = {
  id: number;
  email: string;
  password: string;
  is_admin: boolean;
};

class UserRepository {

    // The C of CRUD - Create operation
  
    async create(user: Omit<User, "id" | "is_admin">) {
      const [result] = await databaseClient.query<Result>(
        "insert into users (email, password) values (?, ?)",
        [user.email, user.password],
      );

      return result.insertId;
    }

    // The Rs of CRUD - Read operations

    async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from users where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

  async readByEmail(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from users where email = ?",
      [email],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

   async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from users");

    // Return the array of users
    return rows as User[];
  }

   // The U of CRUD - Update operation
  
   async update(user: User) {
     const [result] = await databaseClient.query<Result>(
    "UPDATE users SET email = ?, password = ?, is_admin = ? WHERE id = ?",
    [user.email, user.password, user.is_admin, user.id]
     );

     return result.affectedRows > 0;
     };
   


   // The D of CRUD - Delete operation

   async delete(id: number) {
     const [result] = await databaseClient.query<Result>(
      "DELETE FROM users WHERE id = ?",
      [id],
    );

    return result.affectedRows > 0;
  };
};

export default new UserRepository();
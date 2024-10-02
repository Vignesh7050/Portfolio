import { NextApiRequest, NextApiResponse } from "next";
import sequelize from "@/lib-db/db";
import { Users } from "@/models/users";

// Initialize the database connection and sync models if not already done
// sequelize.sync();

export async function GET(request: Request) {
  try {
    const users: any = await Users.findAll();
    return new Response(users, {
      status: 200,
    });
  }
  catch(error) {
    return new Response('hello! there is an error!', {
        status: 200,
      });
  }
}

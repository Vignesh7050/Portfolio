import { Users } from "@/models/users";

export async function GET() {
  try {
    const users: any = await Users.findAll();
    return new Response(users, {
      status: 200,
    });
  } catch (error) {
    return new Response("hello! there is an error!", {
      status: 200,
    });
  }
}

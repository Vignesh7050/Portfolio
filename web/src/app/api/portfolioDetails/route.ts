import sequelize from "@/lib-db/db";

// Initialize the database connection and sync models if not already done
sequelize.sync();

export async function GET() {}

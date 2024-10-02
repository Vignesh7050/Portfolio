import sequelize from "@/lib-db/db";
import { PortfolioDetails } from "@/models/portfolioDetails";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize the database connection and sync models if not already done
sequelize.sync();

export async function GET() {}

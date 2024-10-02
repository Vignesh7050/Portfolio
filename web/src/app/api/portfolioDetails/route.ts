import sequelize from "@/lib-db/db";
import { PortfolioDetails } from "@/models/portfolioDetails";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize the database connection and sync models if not already done
sequelize.sync();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Create a new portfolio
    const { userId, title, description, url } = req.body;

    try {
      const portfolio = await PortfolioDetails.create({
        userId,
        title,
        description,
        url,
      });
      res.status(201).json(portfolio);
    } catch (error) {
      res.status(400).json({ error: "error" });
    }
  } else if (req.method === "GET") {
    // Get all portfolios
    try {
      const portfolios = await PortfolioDetails.findAll();
      res.status(200).json(portfolios);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolios" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

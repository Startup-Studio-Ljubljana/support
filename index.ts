import { writeFileSync } from "node:fs";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD8yK1d5EOW3jNsp42ZX9ZStHPYAbQ8UQk",
});

const terms = ["gradbeni", "kovine", "les", "žerjavi", "pohištvo", "orodje"];
const prefix = ["Letaki", "Katalogi", "Brošure", "Prenosi", "Download"];

const uniqueCompanies = new Set<string>();
const results: any = {};

async function main() {
  await Promise.all(
    terms.map(async (term) => {
      const searchTerms = prefix.map((prefix) => `${prefix} ${term}`);
      const companies = await findCompanies(searchTerms);

      const unique = companies.filter((company) => {
        const alreadyExists = uniqueCompanies.has(company.name);

        uniqueCompanies.add(company.name);

        return !alreadyExists;
      });

      results[term] = unique;

      // for (const company of companies) {
      //   const revenue = await findRevenue(company.name);
      //   const website = await findWebsite(company.website);
      //   const linkedinContacts = await findLinkedinContacts(company.name);
      // }
    }),
  );

  saveToFile(results);
}

async function findCompanies(
  searchTerms: string[],
): Promise<{ name: string; website: string }[]> {
  const searchResults = await Promise.all(
    searchTerms.map(async (searchTerm) => {
      console.log(`Finding companies for "${searchTerm}"`);
      const response = await askAi(`
    Find companies that match the following search term: 
    ${searchTerm}.

    # GUARDRAILS:
    - Always return response in JSON format, without any other text or comments.

    Return exact response in JSON format the companies in the following format:
    [
        {
            "name": "Company Name",
            "website": "Company Website",
        }
    ]
    `);

      if (!response) {
        console.error("No response from AI");
        return [];
      }

      const parsedResponse = parseJson(response) ?? [];

      console.log(
        `${searchTerm}: ${parsedResponse?.length || 0} companies found`,
      );
      return parsedResponse;
    }),
  );

  return searchResults.flat();
}

function findRevenue(companyName: string) {}

function findWebsite(website: string) {}

function findLinkedinContacts(companyName: string) {}

async function askAi(question: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-pro",
    contents: question,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  return response.text;
}

function parseJson(text: string) {
  try {
    const json = text.replace("```json", "").replace("```", "");
    return JSON.parse(json);
  } catch (error) {
    console.error("Error parsing JSON", error);
    console.error("Text", text);
    return null;
  }
}

function saveToFile(data: any) {
  writeFileSync("data.json", JSON.stringify(data, null, 2));
}

main();

import { ApiError } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
import { LoopsClient } from "loops";

const loops = new LoopsClient('e754c8154dd3e2a4ca9bab89ca8c43e2');

export async function POST(request: Request) {
	const res = await request.json();
	const email = res.email;

	if (!email) {
		throw new ApiError(400, "Email is required");
	}

	const resp = await loops.updateContact({
		email,
		properties: {
			userGroup: "support-waitlist",
			source: "landing-page-form",
		},
	});

	return NextResponse.json({ success: resp.success });
}

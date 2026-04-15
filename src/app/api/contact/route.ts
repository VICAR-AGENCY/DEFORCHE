import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.CONTACT_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { voornaam, achternaam, email, telefoon, bericht } = body;

    if (!voornaam || !achternaam || !email || !bericht) {
      return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Deforche Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Nieuw bericht van ${voornaam} ${achternaam}`,
      html: `
        <p><strong>Naam:</strong> ${voornaam} ${achternaam}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${telefoon || "—"}</p>
        <hr />
        <p><strong>Bericht:</strong></p>
        <p>${bericht.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Verzenden mislukt." }, { status: 500 });
  }
}

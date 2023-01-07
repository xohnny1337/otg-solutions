import type { APIRoute } from "astro";

export const post: APIRoute = async ({ params, request, redirect }) => {
  if (
    request.headers.get("Content-Type") ===
      "application/x-www-form-urlencoded" &&
    request.method === "POST"
  ) {
    const formdata = await request.formData();

    const name = formdata.get("name");
    const email = formdata.get("email");
    const message = formdata.get("msg");
    const phone = formdata.get("phone");

    try {
      await fetch(`${import.meta.env.URL}/.netlify/functions/emails/contact`, {
        headers: {
          "netlify-emails-secret": import.meta.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
          from: "noreply@otg-solutions.no",
          to: "post@otg-solutions.no",
          subject: name,
          parameters: {
            e: email,
            p: phone,
            m: message,
          },
        }),
      });
    } catch (error) {
      return new Response(null, {
        status: 500,
        statusText: "netlify email send failed",
      });
    }
  }

  return redirect("/takk", 307);
};

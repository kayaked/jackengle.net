import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "$env/static/private";
import { json } from "@sveltejs/kit";

export async function POST({ request, cookies }) {
    const { name, email, message } = await request.json();

    const ENDPOINT = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`;

    let body = {
        records: [
            {
                fields: {
                    name: name,
                    email: email,
                    message: message
                }
            }
        ]
    };
    const resp = await fetch(ENDPOINT,
        {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    );

    if(resp.ok == true) return json({status: 200, success: true});
    return json({status: 500, success: false});
}

// https://scottspence.com/posts/sveltekit-contact-form-example-with-airtable#create-api-endpoint reference
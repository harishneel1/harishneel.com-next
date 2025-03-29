// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { firstName, email } = await request.json();

        // Kit API endpoint for creating/updating subscribers
        const apiUrl = 'https://api.kit.com/v4/subscribers';
        // Your Kit API key (stored in .env.local)
        const apiKey = process.env.KIT_API_KEY;

        // Make the request to Kit API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Kit-Api-Key': `${apiKey}`
            },
            body: JSON.stringify({
                email_address: email,
                first_name: firstName,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Kit API error:', data);
            return NextResponse.json(
                { error: 'Failed to subscribe' },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

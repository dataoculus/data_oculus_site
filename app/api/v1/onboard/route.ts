import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, slug, status } = await request.json()

    // Validate required fields
    if (!name || !email || !slug) {
      return NextResponse.json(
        { error: 'Name, email, and slug are required' },
        { status: 400 }
      )
    }

    // Check if organization with slug already exists

    
    const response = await fetch('https://api.dataoculus.app/public/api/v1/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer TY3YzYiLCJ0eXAiOiJKV1QifQ`
        },
        body: JSON.stringify({
          name: name,
          email: email,
          id: slug,
          status: "inactive"
        })
      })
    if(!response.ok) {
      return NextResponse.json(
        { error: 'Failed to create organization' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Organization created successfully' },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating organization:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
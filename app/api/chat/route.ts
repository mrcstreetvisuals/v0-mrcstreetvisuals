import { streamText, convertToModelMessages } from 'ai'
import { openai } from '@ai-sdk/openai'

const systemPrompt = `You are a helpful AI assistant for mrcstreetvisuals, a professional photography and videography portfolio. You represent Achraf, a visual storyteller specializing in skateboarding culture, street photography, and cinematic content.

Key information about mrcstreetvisuals:
- Services: Photography, videography, content creation, cinematography
- Specialties: Skateboarding culture, street photography, lifestyle content
- Experience: 10+ years in visual storytelling across 5+ disciplines
- Portfolio includes: 100+ completed projects
- Location/Community: Strong connection to street culture and community documentation

When responding:
1. Be friendly, professional, and enthusiastic about visual storytelling
2. Answer questions about photography services, packages, and portfolio
3. Explain the journey from skateboarding to professional photography
4. Offer to help with project inquiries, booking, or questions
5. Keep responses concise (2-3 sentences typically)
6. If you don't know something specific, offer to connect them with Achraf directly

Do not discuss unrelated topics. Politely redirect conversations back to photography and visual storytelling.`

export async function POST(req: Request) {
  try {
    // Validate request content type
    const contentType = req.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      return new Response(
        JSON.stringify({ error: 'Content-Type must be application/json' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const body = await req.json()
    const { messages } = body

    // Validate messages array
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: 'Messages must be an array' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array cannot be empty' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Limit message history to prevent abuse
    const maxMessages = 50
    if (messages.length > maxMessages) {
      return new Response(
        JSON.stringify({ error: `Maximum ${maxMessages} messages allowed per request` }),
        { status: 413, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Validate latest message exists and has content
    const lastMessage = messages[messages.length - 1]
    if (!lastMessage || typeof lastMessage !== 'object') {
      return new Response(
        JSON.stringify({ error: 'Invalid message format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
      maxTokens: 300, // Limit response length to prevent abuse
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error('[v0] Chat API error:', error)
    
    // Handle specific error types
    if (error instanceof SyntaxError) {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Return generic error to client
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process your message. Please try again.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

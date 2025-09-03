export default async (req, context) => {
    console.log('Starting simple fetch test...')
  
    try {
      // Simple fetch to a reliable API to test 
      console.log('Making simple fetch request...')
      const response = await fetch('https://api.github.com/zen')
      console.log('Response status is:', response.status)
      console.log('Response headers are:', Object.fromEntries(response.headers.entries()))
      
      const text = await response.text()
      console.log('Response body (first 200 chars):', text.substring(0, 200))
      
      let data
      try {
        data = JSON.parse(text)
        console.log('Successfully parsed JSON')
      } catch (parseError) {
        console.log('Failed to parse as JSON:', parseError.message)
        data = { raw_response: text.substring(0, 500) }
      }
      
      console.log('Simple fetch completed')
      
      // Test various API patterns that might conflict with instrumentation
      console.log('Making POST request...')
      const response2 = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer test-token',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: 'data', timestamp: Date.now() })
      })
      const data2 = await response2.json()
      
      // Test another random API
      console.log('Making request to JSONPlaceholder API...')
      const response3 = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data3 = await response3.json()
      
      // Test a POST to JSONPlaceholder (similar to OpenAI pattern)
      console.log('Making POST to JSONPlaceholder...')
      const response4 = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data4 = await response4.json()
      
      console.log('All fetch tests succeeded!')
      
      return new Response(JSON.stringify({
        success: true,
        simple_get: data,
        httpbin_post: data2,
        jsonplaceholder_get: data3,
        jsonplaceholder_post: data4
      }, null, 2), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
      
    } catch (error) {
      console.error('Fetch test failed:', error)
      console.error('Error stack:', error.stack)
      
      return new Response(JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      }, null, 2), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }

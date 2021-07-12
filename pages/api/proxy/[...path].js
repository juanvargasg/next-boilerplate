import httpProxy from 'http-proxy'
import Cookies from 'cookies'
import url from 'url'

// Get the actual API_URL as an environment variable.
const API_URL = process.env.NEXT_PUBLIC_API_URL

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
  },
}

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const pathname = url.parse(req.url).pathname
    const isLogin = pathname.includes('/api/proxy/auth')

    const cookies = new Cookies(req, res)
    const authToken = cookies.get('auth-token')
    // const permisions = cookies.get('permisions')

    // Rewrite URL, strip out leading '/api'
    // '/api/proxy/*' becomes '${API_URL}/*'
    req.url = req.url.replace(/^\/api\/proxy/, '')
    
    // Don't forward cookies to API
    req.headers.cookie = ''
    
    // Set auth-token header from cookie
    if (authToken) {
      req.headers['Authorization'] = `Bearer ${authToken}`;
    }
    console.log('req.url: ', req.url);

    proxy
      .once('proxyRes', (proxyRes, req, res) => {
        let responseBody = '{}'
        proxyRes.on('data', (chunk) => {
          // console.log('chunk: ', chunk.toString());
          responseBody = chunk.toString()
        })

        proxyRes.on('end', () => {
          try {
            const {statusCode} = proxyRes;
            if (isLogin && statusCode < 400) {
              const {token} = JSON.parse(responseBody)
              const cookies = new Cookies(req, res)
              cookies.set('auth-token', token, {
                httpOnly: true,
                sameSite: 'lax', // CSRF protection
              })
            }

            res.status(statusCode).json(responseBody)
            resolve()
          } catch (err) {
            console.log('err: ', err);
            reject(err)
          }
        })
      })
      .once('error', reject)
      .web(req, res, {
        target: API_URL,
        logLevel: 'debug',
        changeOrigin: true,
        autoRewrite: false,
        selfHandleResponse: isLogin,
      })
  })
}

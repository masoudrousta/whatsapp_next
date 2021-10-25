// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
    case 'POST':
    case 'PUT':
    case 'DELETE':

    default:
      return
  }
  res.status(200).json({ name: 'John Doe' })
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return { props: { data } }
}

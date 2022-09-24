import fetchPages from '../lib/fetchPages'
import Link from 'next/link'

export default function Home({ pages }) {
  return (
    <>
      <h1>Index</h1>
      <ul>
        {pages.map((p) => (
          <li key={p.id}>
            <Link href={p.slug}>
              <a>{p.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps(ctx) {
  let pages = await fetchPages()
  return {
    props: { pages },
  }
}

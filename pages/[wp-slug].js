import fetchPage from '../lib/fetchPage'
import fetchPages from '../lib/fetchPages'

export default function ({ page }) {
  return (
    <div className="wp-content">
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  )
}

export async function getStaticPaths(ctx) {
  let pages = await fetchPages()
  return {
    paths: pages.map((p) => ({ params: { 'wp-slug': p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps(ctx) {
  let slug = ctx.params['wp-slug']
  let page = await fetchPage(slug)
  return { props: { page: page[0] } }
}

export default async function (slug) {
  let res = await fetch(
    `http://localhost/wordpress/index.php/wp-json/wp/v2/pages?slug=${slug}`,
  )
  return await res.json()
}

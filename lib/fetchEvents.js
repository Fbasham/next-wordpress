export default async function () {
  let res = await fetch(
    `http://localhost/wordpress/index.php/wp-json/tribe/events/v1/events/`,
  )
  return await res.json()
}

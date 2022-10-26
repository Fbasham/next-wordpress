export default async function (id) {
  let res = await fetch(
    `http://localhost/wordpress/index.php/wp-json/tribe/events/v1/events/${id}`,
  )
  console.log(await res.json())
}

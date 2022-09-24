export default async function () {
  let res = await fetch(
    "http://localhost/wordpress/index.php/wp-json/wp/v2/pages"
  );
  return await res.json();
}

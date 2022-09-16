import "./library/library";

$abr('button').on('click', function() {
  let a = $abr('.text').removeAttribute('title');

  console.log(a)
});
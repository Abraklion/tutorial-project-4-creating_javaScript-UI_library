import $abr from "./library/library";

$abr('#trigger').click(() => $abr('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-16'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'ml-16'],
        false,
        () => {
          alert('Hello World');
        }
      ]
    ]
  }
}));


$abr()
  .get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      console.log(data)
    })

  


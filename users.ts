type User = {
  name: string;
  image: string;
};

export default <{ [key: string]: User }>{
  'hello@ssiyad.com': {
    name: 'Sabu Siyad',
    image: 'https://avatars.githubusercontent.com/u/28098330',
  },
};

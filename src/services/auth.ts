//CHAMA API do tokking
interface Response{
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'junvrbhdgouffoouiuoshbhbvhovibdgd',
        user: {
          name: 'João',
          email: 'jovic.marks@gmail.com',
        },
      });
    }, 2000);
  });
}
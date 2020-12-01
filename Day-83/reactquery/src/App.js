import { useQuery } from 'react-query';
import axios from 'axios';

function App() {

  const {isLoading, error, data} = useQuery("users", () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data);
  });

  if (isLoading) return 'Loading...';
  if (error) return 'an error has occured' + error;

  return (
    <div className="App">
      {
        data && data.map(item => {
          return <h3 key={item.id}>{item.name}</h3>
        })
      }
    </div>
  );
}

export default App;

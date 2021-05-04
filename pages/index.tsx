import styles from '../styles/Home.module.css';
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
    query {
        profiles {
            id
            name
        }
    }
`

const Home = () => {
  const { data, loading, error } = useQuery(QUERY);
  return (
    <div className={styles.container}>
      {data?.profiles?.map(p => <p key={p.id}>{p.name}</p>)}
    </div>
  )
}

export default Home;

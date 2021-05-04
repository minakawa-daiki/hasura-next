import styles from '../styles/Home.module.css';
import { gql } from "@apollo/client";
import client from "../apollo-client";

const QUERY = gql`
    query {
        profiles {
            id
            name
        }
    }
`

const Ssr = ({profiles}) => {
  return (
    <div className={styles.container}>
      {profiles?.map(p => <p key={p.id}>{p.name}</p>)}
    </div>
  )
}

export async function getServerSideProps() {
    const { data } = await client.query({
        query: QUERY,
    });

  return {
    props: {
      profiles: data.profiles,
    },
  };
}

export default Ssr;

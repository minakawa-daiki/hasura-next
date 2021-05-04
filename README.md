# Hasura with Next.js sample

## Getting Started
1. access to [hasura](https://hasura.io/) and create account
1. create DB and create table
   ```sql
   profiles (
     id SERIAL PRIMARY KEY, -- serial -> auto-incrementing integer
     name TEXT
   )
   ```
1. insert data to DB
1. `echo 'NEXT_PUBLIC_HASURA_ADMIN_SECRET=<your secret>' > .env.local`
1. `echo 'NEXT_PUBLIC_HASURA_ENDPOINT=<your endpoint>' >> .env.local`
1. yarn
1. yarn dev
1. access to `localhost:3000` or `localhost:3000/ssr`

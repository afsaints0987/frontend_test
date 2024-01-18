import Image from "next/image";
import styles from "./page.module.css";
import { User } from "./types/user";
import Gallery from "./gallery";

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json();
}

export default async function Home() {
  // data from https://jsonplaceholder.typicode.com/users
  const users = await getUsers()

  return (
    <main className={styles.main}>
        <Gallery users={users} />
    </main>
  );
}
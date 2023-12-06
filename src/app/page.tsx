import Link from "next/link";
export default function Home() {
  // const task = useStore((state) => state.tasks);

  // useEffect(() => {
  //   // dispatch(fetchUserData());
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Root Page Please select App choice
      <Link href={"counterApp"}>Counter App</Link>
      <Link href={"dashboard"}>Dashboard</Link>
    </main>
  );
}

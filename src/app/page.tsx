import { appWithTranslation } from 'next-i18next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
function Home() {
  const { t } = useTranslation('common');
  // const task = useStore((state) => state.tasks);

  // useEffect(() => {
  //   // dispatch(fetchUserData());
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '28px',
        fontFamily: 'cursive',
      }}
    >
      Root Page Please select App choice
      <Link href={'counterApp'}>Counter App</Link>
      <Link href={'dashboard'}>Dashboard</Link>
      <Link href={'to-do-app'}>To-Do App</Link>
      <p>{t('hello')}</p>
    </div>
  );
}

export default appWithTranslation(Home);

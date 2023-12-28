import Link from 'next/link';
import { getGlobalState } from '../store/serverSideState';
import { GlobalKeys } from '../types/global.types';

export default function Home({ params }: any) {
  if (!params.lang) {
    const lang = getGlobalState(GlobalKeys.USERS_LANGUAGE);
    params.lang = lang ?? 'en';
  }
  return (
    <>
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
        <Link href={`${params.lang}/counterApp`}>Counter App</Link>
        <Link href={`${params.lang}/dashboard`}>Dashboard</Link>
        <Link href={`${params.lang}/to-do-app`}>To-Do App</Link>
      </div>
    </>
  );
}

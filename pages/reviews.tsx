import Link from 'next/link';
import Layout from '../components/Layout';

const ReviewsPage = () => (
  <Layout title='Dark Rush Photography'>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a>Reviews</a>
      </Link>
    </p>
  </Layout>
);

export default ReviewsPage;

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

//TODO will need for custom fonts
//const inter = Inter({ subsets: ['latin'] });

export default function MainPage() {
  return (
    <div>
      <Header />
      <div style={{ width: '100%', height: '2920px' }}>
        <main style={{ width: '100%', height: '2860px' }}>
          Here will main page...
        </main>
        <Footer />
      </div>
    </div>
  );
}

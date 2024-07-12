import Header from '../components/Header';
import Language from '../components/Language';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Link from 'next/link';
export default function Home() {
 
  return (
    <main className="flex flex-col min-h-screen p-4">
      <div className="flex-1 flex">
        <div className="flex-1">
          <Header />
          <Language />
          <div className="flex justify-center items-center mt-4">
            <h4 className="text-sm font-semibold tracking-tight text-center">
              Please read the following instructions carefully
            </h4>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Content />
          </div>
          <div className="flex justify-center mt-4">
       <Link href="/instructions/Dashboard">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              
            >
              Next
            </button>
            </Link>
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
